/**
 * Módulo de almacenamiento y datos temporales para EduConnect
 * Gestiona localStorage y sessionStorage con soporte para detección de recarga
 * y aislamiento estricto entre estudiante y profesor.
 */

export const STORAGE_KEYS = {
  STUDENT_TEMP_SUBJECTS: 'educonnect_materias_temporales',
  TEACHER_TEMP_SUBJECTS: 'educonnect_materias_profesor_temporales',
  USER: 'educonnectUsuario',
  SESSION: 'educonnectSesion',
  PROFILE: 'educonnect_perfil',
};

/**
 * Detecta si la página actual fue recargada (F5 / Refresh)
 * y en ese caso elimina las materias temporales de sessionStorage,
 * reproduciendo fielmente el comportamiento original.
 */
export function checkAndHandleReload() {
  try {
    const navEntries = performance.getEntriesByType('navigation');
    const isReload = navEntries.length > 0 && navEntries[0].type === 'reload';

    if (isReload) {
      sessionStorage.removeItem(STORAGE_KEYS.STUDENT_TEMP_SUBJECTS);
      sessionStorage.removeItem(STORAGE_KEYS.TEACHER_TEMP_SUBJECTS);
    }
  } catch (error) {
    console.error('Error al verificar navegación:', error);
  }
}

/**
 * Obtiene las materias temporales creadas por el estudiante
 */
export function getStudentTemporarySubjects() {
  try {
    const data = sessionStorage.getItem(STORAGE_KEYS.STUDENT_TEMP_SUBJECTS);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Error al obtener materias del estudiante:', e);
    return [];
  }
}

/**
 * Agrega una nueva materia temporal del estudiante
 * Valida unicidad de código
 */
export function addStudentTemporarySubject(subject) {
  const list = getStudentTemporarySubjects();
  const exists = list.some(
    item => item.codigo.toLowerCase() === subject.codigo.toLowerCase()
  );

  if (exists) {
    return { success: false, error: 'Ya existe una materia con ese código.' };
  }

  list.push(subject);
  sessionStorage.setItem(STORAGE_KEYS.STUDENT_TEMP_SUBJECTS, JSON.stringify(list));
  return { success: true };
}

/**
 * Obtiene las materias temporales creadas por el profesor
 */
export function getTeacherTemporarySubjects() {
  try {
    const data = sessionStorage.getItem(STORAGE_KEYS.TEACHER_TEMP_SUBJECTS);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Error al obtener materias del profesor:', e);
    return [];
  }
}

/**
 * Agrega una nueva materia temporal del profesor
 * Valida unicidad de código
 */
export function addTeacherTemporarySubject(subject) {
  const list = getTeacherTemporarySubjects();
  const exists = list.some(
    item => item.codigo.toLowerCase() === subject.codigo.toLowerCase()
  );

  if (exists) {
    return { success: false, error: 'Ya existe una materia con ese código.' };
  }

  list.push(subject);
  sessionStorage.setItem(STORAGE_KEYS.TEACHER_TEMP_SUBJECTS, JSON.stringify(list));
  return { success: true };
}

/**
 * Gestión de usuario registrado en localStorage
 */
export function getRegisteredUser() {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.USER);
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
}

export function saveRegisteredUser(user) {
  localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
}

/**
 * Gestión de sesión activa en localStorage
 */
export function getActiveSession() {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.SESSION);
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
}

export function saveActiveSession(session) {
  localStorage.setItem(STORAGE_KEYS.SESSION, JSON.stringify(session));
}

export function clearActiveSession() {
  localStorage.removeItem(STORAGE_KEYS.SESSION);
}

/**
 * Gestión de perfil de usuario en localStorage
 */
export function getUserProfile() {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.PROFILE);
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
}

export function saveUserProfile(profile) {
  localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(profile));
}

/**
 * Calificaciones por estudiante en localStorage
 */
export function getStudentGradeData(key) {
  try {
    const val = localStorage.getItem(key);
    if (!val) return null;
    try {
      return JSON.parse(val);
    } catch {
      return val;
    }
  } catch {
    return null;
  }
}

export function saveStudentGradeData(key, value) {
  if (typeof value === 'object') {
    localStorage.setItem(key, JSON.stringify(value));
  } else {
    localStorage.setItem(key, value);
  }
}
