import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseDir = path.resolve('Educconect-react');
console.log('=== EDUCONNECT TEST & VERIFICATION SUITE ===\n');

let totalTests = 0;
let passedTests = 0;

function assert(condition, testName) {
  totalTests++;
  if (condition) {
    console.log(`[PASS] ${testName}`);
    passedTests++;
  } else {
    console.error(`[FAIL] ${testName}`);
  }
}

// 1. Check build files
const distPath = path.join(baseDir, 'dist');
assert(fs.existsSync(distPath), 'Dist directory exists after vite build');
assert(fs.existsSync(path.join(distPath, 'index.html')), 'Dist index.html generated');
const distAssets = fs.readdirSync(path.join(distPath, 'assets'));
assert(distAssets.length > 50, `Dist contains code-split assets (found ${distAssets.length} files)`);

// 2. Check 135 React section components
const sectionsDir = path.join(baseDir, 'src/pages/sections');
const sectionFiles = fs.readdirSync(sectionsDir).filter(f => f.startsWith('Section') && f.endsWith('.jsx'));
assert(sectionFiles.length === 135, `All 135 Section JSX components exist (found ${sectionFiles.length})`);

// 3. Check 135 scoped CSS files
const stylesDir = path.join(baseDir, 'src/styles/sections');
const cssFiles = fs.readdirSync(stylesDir).filter(f => f.startsWith('seccion_') && f.endsWith('.css'));
assert(cssFiles.length === 135, `All 135 scoped CSS files exist (found ${cssFiles.length})`);

// 4. Check App.jsx routes completeness
const appContent = fs.readFileSync(path.join(baseDir, 'src/App.jsx'), 'utf8');
let missingRoutes = 0;
for (let i = 1; i <= 135; i++) {
  const routeLegacy = `path="/${i}_seccion.html"`;
  const routeNum = `path="/seccion/${i}"`;
  if (!appContent.includes(routeLegacy) || !appContent.includes(routeNum)) {
    missingRoutes++;
  }
}
assert(missingRoutes === 0, 'All 135 sections have legacy (.html) and numeric routes in App.jsx');

// Check semantic routes in App.jsx
const semanticRoutes = [
  'path="/login"',
  'path="/registro"',
  'path="/recuperar"',
  'path="/estudiante"',
  'path="/estudiante/perfil"',
  'path="/estudiante/notificaciones"',
  'path="/estudiante/nueva-materia"',
  'path="/profesor"',
  'path="/profesor/perfil"',
  'path="/profesor/notificaciones"',
  'path="/profesor/agregar-materia"'
];
semanticRoutes.forEach(sr => {
  assert(appContent.includes(sr), `Semantic route registered: ${sr}`);
});

// 5. Check semantic pages export files
const semanticPageFiles = [
  'Login.jsx', 'Register.jsx', 'ForgotPassword.jsx',
  'StudentDashboard.jsx', 'StudentProfile.jsx', 'StudentNotifications.jsx', 'StudentNewSubject.jsx',
  'TeacherDashboard.jsx', 'TeacherProfile.jsx', 'TeacherNotifications.jsx', 'TeacherNewSubject.jsx',
  'NotFound.jsx'
];
semanticPageFiles.forEach(spf => {
  assert(fs.existsSync(path.join(baseDir, 'src/pages', spf)), `Semantic page file exists: ${spf}`);
});

// 6. Check reusable components
const componentFiles = ['Header.jsx', 'PhoneLayout.jsx', 'NavigationBar.jsx', 'SubjectCard.jsx', 'FormField.jsx'];
componentFiles.forEach(cf => {
  assert(fs.existsSync(path.join(baseDir, 'src/components', cf)), `Reusable component exists: ${cf}`);
});

// 7. Verify all internal links in all 135 components resolve to valid routes
let brokenLinks = [];
sectionFiles.forEach(sf => {
  const code = fs.readFileSync(path.join(sectionsDir, sf), 'utf8');
  const matches = Array.from(code.matchAll(/to=["']([^"']+)["']/g)).map(m => m[1]);
  matches.forEach(target => {
    if (target === '/' || target === '#') return;
    const cleanTarget = target.startsWith('/') ? target : `/${target}`;
    if (!appContent.includes(`path="${cleanTarget}"`)) {
      brokenLinks.push(`${sf} -> ${target}`);
    }
  });
});
assert(brokenLinks.length === 0, `All internal links resolve to valid routes (broken: ${brokenLinks.length})`);

// 8. Test storage functions and reload logic
// Mock storage in memory
const mockSessionStorage = {};
const mockLocalStorage = {};

global.sessionStorage = {
  getItem: (k) => mockSessionStorage[k] || null,
  setItem: (k, v) => { mockSessionStorage[k] = String(v); },
  removeItem: (k) => { delete mockSessionStorage[k]; }
};

global.localStorage = {
  getItem: (k) => mockLocalStorage[k] || null,
  setItem: (k, v) => { mockLocalStorage[k] = String(v); },
  removeItem: (k) => { delete mockLocalStorage[k]; }
};

global.performance = {
  getEntriesByType: () => [{ type: 'navigate' }]
};

const storageUrl = pathToFileURL(path.join(baseDir, 'src/utils/storage.js')).href;
const {
  STORAGE_KEYS,
  checkAndHandleReload,
  getStudentTemporarySubjects,
  addStudentTemporarySubject,
  getTeacherTemporarySubjects,
  addTeacherTemporarySubject,
  saveUserProfile,
  getUserProfile
} = await import(storageUrl);

// Test Student Subject addition
const res1 = addStudentTemporarySubject({ nombre: 'Robótica', profesor: 'Prof. Carlos', codigo: 'ROB-101' });
assert(res1.success === true, 'Student can create new temporary subject ROB-101');
const stSubs = getStudentTemporarySubjects();
assert(stSubs.length === 1 && stSubs[0].nombre === 'Robótica', 'Created subject is in student temporary list');

// Test Duplicate Code rejection
const resDup = addStudentTemporarySubject({ nombre: 'Otra', profesor: 'Otro', codigo: 'rob-101' });
assert(resDup.success === false, 'Duplicate student subject code is rejected');

// Test Separation: Teacher temporary subjects are isolated
const tcSubs = getTeacherTemporarySubjects();
assert(tcSubs.length === 0, 'Teacher list does NOT contain student temporary subject (Aislamiento)');

// Test Teacher Subject addition
const resTeacher = addTeacherTemporarySubject({ nombre: 'Filosofía', codigo: 'FIL-201', icono: '📚', descripcion: 'Etica' });
assert(resTeacher.success === true, 'Teacher can create new temporary subject FIL-201');
assert(getTeacherTemporarySubjects().length === 1, 'Teacher list contains FIL-201');
assert(getStudentTemporarySubjects().length === 1, 'Student list does NOT contain teacher subject (Aislamiento)');

// Test Reload Simulation
global.performance.getEntriesByType = () => [{ type: 'reload' }];
checkAndHandleReload();
assert(getStudentTemporarySubjects().length === 0, 'On page reload, student temporary subjects are cleared');
assert(getTeacherTemporarySubjects().length === 0, 'On page reload, teacher temporary subjects are cleared');

// Test LocalStorage persistence (e.g. profile is NOT cleared on reload)
saveUserProfile({ nombre: 'Juan Prueba', grado: '11°', codigo: '123', telefono: '3001234567', correo: 'juan@test.com' });
checkAndHandleReload();
const prof = getUserProfile();
assert(prof && prof.nombre === 'Juan Prueba', 'Persistent profile is PRESERVED on reload');

console.log(`\n=== RESULTS: ${passedTests}/${totalTests} TESTS PASSED ===\n`);
if (passedTests === totalTests) {
  console.log('ALL VERIFICATION CRITERIA MET WITH 100% SUCCESS!');
} else {
  process.exit(1);
}
