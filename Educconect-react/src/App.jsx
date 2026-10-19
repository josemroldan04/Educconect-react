import React, { useEffect, Suspense, lazy } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { checkAndHandleReload } from './utils/storage';
import NotFound from './pages/NotFound';

// Lazy load all 135 sections for optimal code-splitting and performance
const Section1 = lazy(() => import('./pages/sections/Section1'));
const Section2 = lazy(() => import('./pages/sections/Section2'));
const Section3 = lazy(() => import('./pages/sections/Section3'));
const Section4 = lazy(() => import('./pages/sections/Section4'));
const Section5 = lazy(() => import('./pages/sections/Section5'));
const Section6 = lazy(() => import('./pages/sections/Section6'));
const Section7 = lazy(() => import('./pages/sections/Section7'));
const Section8 = lazy(() => import('./pages/sections/Section8'));
const Section9 = lazy(() => import('./pages/sections/Section9'));
const Section10 = lazy(() => import('./pages/sections/Section10'));
const Section11 = lazy(() => import('./pages/sections/Section11'));
const Section12 = lazy(() => import('./pages/sections/Section12'));
const Section13 = lazy(() => import('./pages/sections/Section13'));
const Section14 = lazy(() => import('./pages/sections/Section14'));
const Section15 = lazy(() => import('./pages/sections/Section15'));
const Section16 = lazy(() => import('./pages/sections/Section16'));
const Section17 = lazy(() => import('./pages/sections/Section17'));
const Section18 = lazy(() => import('./pages/sections/Section18'));
const Section19 = lazy(() => import('./pages/sections/Section19'));
const Section20 = lazy(() => import('./pages/sections/Section20'));
const Section21 = lazy(() => import('./pages/sections/Section21'));
const Section22 = lazy(() => import('./pages/sections/Section22'));
const Section23 = lazy(() => import('./pages/sections/Section23'));
const Section24 = lazy(() => import('./pages/sections/Section24'));
const Section25 = lazy(() => import('./pages/sections/Section25'));
const Section26 = lazy(() => import('./pages/sections/Section26'));
const Section27 = lazy(() => import('./pages/sections/Section27'));
const Section28 = lazy(() => import('./pages/sections/Section28'));
const Section29 = lazy(() => import('./pages/sections/Section29'));
const Section30 = lazy(() => import('./pages/sections/Section30'));
const Section31 = lazy(() => import('./pages/sections/Section31'));
const Section32 = lazy(() => import('./pages/sections/Section32'));
const Section33 = lazy(() => import('./pages/sections/Section33'));
const Section34 = lazy(() => import('./pages/sections/Section34'));
const Section35 = lazy(() => import('./pages/sections/Section35'));
const Section36 = lazy(() => import('./pages/sections/Section36'));
const Section37 = lazy(() => import('./pages/sections/Section37'));
const Section38 = lazy(() => import('./pages/sections/Section38'));
const Section39 = lazy(() => import('./pages/sections/Section39'));
const Section40 = lazy(() => import('./pages/sections/Section40'));
const Section41 = lazy(() => import('./pages/sections/Section41'));
const Section42 = lazy(() => import('./pages/sections/Section42'));
const Section43 = lazy(() => import('./pages/sections/Section43'));
const Section44 = lazy(() => import('./pages/sections/Section44'));
const Section45 = lazy(() => import('./pages/sections/Section45'));
const Section46 = lazy(() => import('./pages/sections/Section46'));
const Section47 = lazy(() => import('./pages/sections/Section47'));
const Section48 = lazy(() => import('./pages/sections/Section48'));
const Section49 = lazy(() => import('./pages/sections/Section49'));
const Section50 = lazy(() => import('./pages/sections/Section50'));
const Section51 = lazy(() => import('./pages/sections/Section51'));
const Section52 = lazy(() => import('./pages/sections/Section52'));
const Section53 = lazy(() => import('./pages/sections/Section53'));
const Section54 = lazy(() => import('./pages/sections/Section54'));
const Section55 = lazy(() => import('./pages/sections/Section55'));
const Section56 = lazy(() => import('./pages/sections/Section56'));
const Section57 = lazy(() => import('./pages/sections/Section57'));
const Section58 = lazy(() => import('./pages/sections/Section58'));
const Section59 = lazy(() => import('./pages/sections/Section59'));
const Section60 = lazy(() => import('./pages/sections/Section60'));
const Section61 = lazy(() => import('./pages/sections/Section61'));
const Section62 = lazy(() => import('./pages/sections/Section62'));
const Section63 = lazy(() => import('./pages/sections/Section63'));
const Section64 = lazy(() => import('./pages/sections/Section64'));
const Section65 = lazy(() => import('./pages/sections/Section65'));
const Section66 = lazy(() => import('./pages/sections/Section66'));
const Section67 = lazy(() => import('./pages/sections/Section67'));
const Section68 = lazy(() => import('./pages/sections/Section68'));
const Section69 = lazy(() => import('./pages/sections/Section69'));
const Section70 = lazy(() => import('./pages/sections/Section70'));
const Section71 = lazy(() => import('./pages/sections/Section71'));
const Section72 = lazy(() => import('./pages/sections/Section72'));
const Section73 = lazy(() => import('./pages/sections/Section73'));
const Section74 = lazy(() => import('./pages/sections/Section74'));
const Section75 = lazy(() => import('./pages/sections/Section75'));
const Section76 = lazy(() => import('./pages/sections/Section76'));
const Section77 = lazy(() => import('./pages/sections/Section77'));
const Section78 = lazy(() => import('./pages/sections/Section78'));
const Section79 = lazy(() => import('./pages/sections/Section79'));
const Section80 = lazy(() => import('./pages/sections/Section80'));
const Section81 = lazy(() => import('./pages/sections/Section81'));
const Section82 = lazy(() => import('./pages/sections/Section82'));
const Section83 = lazy(() => import('./pages/sections/Section83'));
const Section84 = lazy(() => import('./pages/sections/Section84'));
const Section85 = lazy(() => import('./pages/sections/Section85'));
const Section86 = lazy(() => import('./pages/sections/Section86'));
const Section87 = lazy(() => import('./pages/sections/Section87'));
const Section88 = lazy(() => import('./pages/sections/Section88'));
const Section89 = lazy(() => import('./pages/sections/Section89'));
const Section90 = lazy(() => import('./pages/sections/Section90'));
const Section91 = lazy(() => import('./pages/sections/Section91'));
const Section92 = lazy(() => import('./pages/sections/Section92'));
const Section93 = lazy(() => import('./pages/sections/Section93'));
const Section94 = lazy(() => import('./pages/sections/Section94'));
const Section95 = lazy(() => import('./pages/sections/Section95'));
const Section96 = lazy(() => import('./pages/sections/Section96'));
const Section97 = lazy(() => import('./pages/sections/Section97'));
const Section98 = lazy(() => import('./pages/sections/Section98'));
const Section99 = lazy(() => import('./pages/sections/Section99'));
const Section100 = lazy(() => import('./pages/sections/Section100'));
const Section101 = lazy(() => import('./pages/sections/Section101'));
const Section102 = lazy(() => import('./pages/sections/Section102'));
const Section103 = lazy(() => import('./pages/sections/Section103'));
const Section104 = lazy(() => import('./pages/sections/Section104'));
const Section105 = lazy(() => import('./pages/sections/Section105'));
const Section106 = lazy(() => import('./pages/sections/Section106'));
const Section107 = lazy(() => import('./pages/sections/Section107'));
const Section108 = lazy(() => import('./pages/sections/Section108'));
const Section109 = lazy(() => import('./pages/sections/Section109'));
const Section110 = lazy(() => import('./pages/sections/Section110'));
const Section111 = lazy(() => import('./pages/sections/Section111'));
const Section112 = lazy(() => import('./pages/sections/Section112'));
const Section113 = lazy(() => import('./pages/sections/Section113'));
const Section114 = lazy(() => import('./pages/sections/Section114'));
const Section115 = lazy(() => import('./pages/sections/Section115'));
const Section116 = lazy(() => import('./pages/sections/Section116'));
const Section117 = lazy(() => import('./pages/sections/Section117'));
const Section118 = lazy(() => import('./pages/sections/Section118'));
const Section119 = lazy(() => import('./pages/sections/Section119'));
const Section120 = lazy(() => import('./pages/sections/Section120'));
const Section121 = lazy(() => import('./pages/sections/Section121'));
const Section122 = lazy(() => import('./pages/sections/Section122'));
const Section123 = lazy(() => import('./pages/sections/Section123'));
const Section124 = lazy(() => import('./pages/sections/Section124'));
const Section125 = lazy(() => import('./pages/sections/Section125'));
const Section126 = lazy(() => import('./pages/sections/Section126'));
const Section127 = lazy(() => import('./pages/sections/Section127'));
const Section128 = lazy(() => import('./pages/sections/Section128'));
const Section129 = lazy(() => import('./pages/sections/Section129'));
const Section130 = lazy(() => import('./pages/sections/Section130'));
const Section131 = lazy(() => import('./pages/sections/Section131'));
const Section132 = lazy(() => import('./pages/sections/Section132'));
const Section133 = lazy(() => import('./pages/sections/Section133'));
const Section134 = lazy(() => import('./pages/sections/Section134'));
const Section135 = lazy(() => import('./pages/sections/Section135'));

const LoadingFallback = () => (
  <div className="seccion-scope">
    <div
      className="telefono"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '200px',
        color: '#3b78b8',
        fontWeight: 'bold'
      }}
    >
      Cargando...
    </div>
  </div>
);

export default function App() {
  useEffect(() => {
    checkAndHandleReload();
  }, []);

  return (
    <HashRouter>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          {/* Semantic routes */}
          <Route path="/" element={<Section1 />} />
          <Route path="/bienvenido" element={<Section1 />} />
          <Route path="/login" element={<Section2 />} />
          <Route path="/recuperar" element={<Section3 />} />
          <Route path="/registro" element={<Section4 />} />
          <Route path="/estudiante" element={<Section5 />} />
          <Route path="/estudiante/perfil" element={<Section6 />} />
          <Route path="/estudiante/notificaciones" element={<Section7 />} />
          <Route path="/estudiante/nueva-materia" element={<Section8 />} />
          <Route path="/profesor" element={<Section45 />} />
          <Route path="/profesor/perfil" element={<Section46 />} />
          <Route path="/profesor/notificaciones" element={<Section47 />} />
          <Route path="/profesor/agregar-materia" element={<Section135 />} />

          {/* Legacy index routes */}
          <Route path="/index.html" element={<Section1 />} />
          <Route path="/1_seccion.html" element={<Section1 />} />
          <Route path="/seccion/1" element={<Section1 />} />
          <Route path="/1" element={<Section1 />} />

          {/* Section routes (1 to 135) for HTML compatibility and numeric IDs */}
          <Route path="/2_seccion.html" element={<Section2 />} />
          <Route path="/seccion/2" element={<Section2 />} />
          <Route path="/2" element={<Section2 />} />
          <Route path="/3_seccion.html" element={<Section3 />} />
          <Route path="/seccion/3" element={<Section3 />} />
          <Route path="/3" element={<Section3 />} />
          <Route path="/4_seccion.html" element={<Section4 />} />
          <Route path="/seccion/4" element={<Section4 />} />
          <Route path="/4" element={<Section4 />} />
          <Route path="/5_seccion.html" element={<Section5 />} />
          <Route path="/seccion/5" element={<Section5 />} />
          <Route path="/5" element={<Section5 />} />
          <Route path="/6_seccion.html" element={<Section6 />} />
          <Route path="/seccion/6" element={<Section6 />} />
          <Route path="/6" element={<Section6 />} />
          <Route path="/7_seccion.html" element={<Section7 />} />
          <Route path="/seccion/7" element={<Section7 />} />
          <Route path="/7" element={<Section7 />} />
          <Route path="/8_seccion.html" element={<Section8 />} />
          <Route path="/seccion/8" element={<Section8 />} />
          <Route path="/8" element={<Section8 />} />
          <Route path="/9_seccion.html" element={<Section9 />} />
          <Route path="/seccion/9" element={<Section9 />} />
          <Route path="/9" element={<Section9 />} />
          <Route path="/10_seccion.html" element={<Section10 />} />
          <Route path="/seccion/10" element={<Section10 />} />
          <Route path="/10" element={<Section10 />} />
          <Route path="/11_seccion.html" element={<Section11 />} />
          <Route path="/seccion/11" element={<Section11 />} />
          <Route path="/11" element={<Section11 />} />
          <Route path="/12_seccion.html" element={<Section12 />} />
          <Route path="/seccion/12" element={<Section12 />} />
          <Route path="/12" element={<Section12 />} />
          <Route path="/13_seccion.html" element={<Section13 />} />
          <Route path="/seccion/13" element={<Section13 />} />
          <Route path="/13" element={<Section13 />} />
          <Route path="/14_seccion.html" element={<Section14 />} />
          <Route path="/seccion/14" element={<Section14 />} />
          <Route path="/14" element={<Section14 />} />
          <Route path="/15_seccion.html" element={<Section15 />} />
          <Route path="/seccion/15" element={<Section15 />} />
          <Route path="/15" element={<Section15 />} />
          <Route path="/16_seccion.html" element={<Section16 />} />
          <Route path="/seccion/16" element={<Section16 />} />
          <Route path="/16" element={<Section16 />} />
          <Route path="/17_seccion.html" element={<Section17 />} />
          <Route path="/seccion/17" element={<Section17 />} />
          <Route path="/17" element={<Section17 />} />
          <Route path="/18_seccion.html" element={<Section18 />} />
          <Route path="/seccion/18" element={<Section18 />} />
          <Route path="/18" element={<Section18 />} />
          <Route path="/19_seccion.html" element={<Section19 />} />
          <Route path="/seccion/19" element={<Section19 />} />
          <Route path="/19" element={<Section19 />} />
          <Route path="/20_seccion.html" element={<Section20 />} />
          <Route path="/seccion/20" element={<Section20 />} />
          <Route path="/20" element={<Section20 />} />
          <Route path="/21_seccion.html" element={<Section21 />} />
          <Route path="/seccion/21" element={<Section21 />} />
          <Route path="/21" element={<Section21 />} />
          <Route path="/22_seccion.html" element={<Section22 />} />
          <Route path="/seccion/22" element={<Section22 />} />
          <Route path="/22" element={<Section22 />} />
          <Route path="/23_seccion.html" element={<Section23 />} />
          <Route path="/seccion/23" element={<Section23 />} />
          <Route path="/23" element={<Section23 />} />
          <Route path="/24_seccion.html" element={<Section24 />} />
          <Route path="/seccion/24" element={<Section24 />} />
          <Route path="/24" element={<Section24 />} />
          <Route path="/25_seccion.html" element={<Section25 />} />
          <Route path="/seccion/25" element={<Section25 />} />
          <Route path="/25" element={<Section25 />} />
          <Route path="/26_seccion.html" element={<Section26 />} />
          <Route path="/seccion/26" element={<Section26 />} />
          <Route path="/26" element={<Section26 />} />
          <Route path="/27_seccion.html" element={<Section27 />} />
          <Route path="/seccion/27" element={<Section27 />} />
          <Route path="/27" element={<Section27 />} />
          <Route path="/28_seccion.html" element={<Section28 />} />
          <Route path="/seccion/28" element={<Section28 />} />
          <Route path="/28" element={<Section28 />} />
          <Route path="/29_seccion.html" element={<Section29 />} />
          <Route path="/seccion/29" element={<Section29 />} />
          <Route path="/29" element={<Section29 />} />
          <Route path="/30_seccion.html" element={<Section30 />} />
          <Route path="/seccion/30" element={<Section30 />} />
          <Route path="/30" element={<Section30 />} />
          <Route path="/31_seccion.html" element={<Section31 />} />
          <Route path="/seccion/31" element={<Section31 />} />
          <Route path="/31" element={<Section31 />} />
          <Route path="/32_seccion.html" element={<Section32 />} />
          <Route path="/seccion/32" element={<Section32 />} />
          <Route path="/32" element={<Section32 />} />
          <Route path="/33_seccion.html" element={<Section33 />} />
          <Route path="/seccion/33" element={<Section33 />} />
          <Route path="/33" element={<Section33 />} />
          <Route path="/34_seccion.html" element={<Section34 />} />
          <Route path="/seccion/34" element={<Section34 />} />
          <Route path="/34" element={<Section34 />} />
          <Route path="/35_seccion.html" element={<Section35 />} />
          <Route path="/seccion/35" element={<Section35 />} />
          <Route path="/35" element={<Section35 />} />
          <Route path="/36_seccion.html" element={<Section36 />} />
          <Route path="/seccion/36" element={<Section36 />} />
          <Route path="/36" element={<Section36 />} />
          <Route path="/37_seccion.html" element={<Section37 />} />
          <Route path="/seccion/37" element={<Section37 />} />
          <Route path="/37" element={<Section37 />} />
          <Route path="/38_seccion.html" element={<Section38 />} />
          <Route path="/seccion/38" element={<Section38 />} />
          <Route path="/38" element={<Section38 />} />
          <Route path="/39_seccion.html" element={<Section39 />} />
          <Route path="/seccion/39" element={<Section39 />} />
          <Route path="/39" element={<Section39 />} />
          <Route path="/40_seccion.html" element={<Section40 />} />
          <Route path="/seccion/40" element={<Section40 />} />
          <Route path="/40" element={<Section40 />} />
          <Route path="/41_seccion.html" element={<Section41 />} />
          <Route path="/seccion/41" element={<Section41 />} />
          <Route path="/41" element={<Section41 />} />
          <Route path="/42_seccion.html" element={<Section42 />} />
          <Route path="/seccion/42" element={<Section42 />} />
          <Route path="/42" element={<Section42 />} />
          <Route path="/43_seccion.html" element={<Section43 />} />
          <Route path="/seccion/43" element={<Section43 />} />
          <Route path="/43" element={<Section43 />} />
          <Route path="/44_seccion.html" element={<Section44 />} />
          <Route path="/seccion/44" element={<Section44 />} />
          <Route path="/44" element={<Section44 />} />
          <Route path="/45_seccion.html" element={<Section45 />} />
          <Route path="/seccion/45" element={<Section45 />} />
          <Route path="/45" element={<Section45 />} />
          <Route path="/46_seccion.html" element={<Section46 />} />
          <Route path="/seccion/46" element={<Section46 />} />
          <Route path="/46" element={<Section46 />} />
          <Route path="/47_seccion.html" element={<Section47 />} />
          <Route path="/seccion/47" element={<Section47 />} />
          <Route path="/47" element={<Section47 />} />
          <Route path="/48_seccion.html" element={<Section48 />} />
          <Route path="/seccion/48" element={<Section48 />} />
          <Route path="/48" element={<Section48 />} />
          <Route path="/49_seccion.html" element={<Section49 />} />
          <Route path="/seccion/49" element={<Section49 />} />
          <Route path="/49" element={<Section49 />} />
          <Route path="/50_seccion.html" element={<Section50 />} />
          <Route path="/seccion/50" element={<Section50 />} />
          <Route path="/50" element={<Section50 />} />
          <Route path="/51_seccion.html" element={<Section51 />} />
          <Route path="/seccion/51" element={<Section51 />} />
          <Route path="/51" element={<Section51 />} />
          <Route path="/52_seccion.html" element={<Section52 />} />
          <Route path="/seccion/52" element={<Section52 />} />
          <Route path="/52" element={<Section52 />} />
          <Route path="/53_seccion.html" element={<Section53 />} />
          <Route path="/seccion/53" element={<Section53 />} />
          <Route path="/53" element={<Section53 />} />
          <Route path="/54_seccion.html" element={<Section54 />} />
          <Route path="/seccion/54" element={<Section54 />} />
          <Route path="/54" element={<Section54 />} />
          <Route path="/55_seccion.html" element={<Section55 />} />
          <Route path="/seccion/55" element={<Section55 />} />
          <Route path="/55" element={<Section55 />} />
          <Route path="/56_seccion.html" element={<Section56 />} />
          <Route path="/seccion/56" element={<Section56 />} />
          <Route path="/56" element={<Section56 />} />
          <Route path="/57_seccion.html" element={<Section57 />} />
          <Route path="/seccion/57" element={<Section57 />} />
          <Route path="/57" element={<Section57 />} />
          <Route path="/58_seccion.html" element={<Section58 />} />
          <Route path="/seccion/58" element={<Section58 />} />
          <Route path="/58" element={<Section58 />} />
          <Route path="/59_seccion.html" element={<Section59 />} />
          <Route path="/seccion/59" element={<Section59 />} />
          <Route path="/59" element={<Section59 />} />
          <Route path="/60_seccion.html" element={<Section60 />} />
          <Route path="/seccion/60" element={<Section60 />} />
          <Route path="/60" element={<Section60 />} />
          <Route path="/61_seccion.html" element={<Section61 />} />
          <Route path="/seccion/61" element={<Section61 />} />
          <Route path="/61" element={<Section61 />} />
          <Route path="/62_seccion.html" element={<Section62 />} />
          <Route path="/seccion/62" element={<Section62 />} />
          <Route path="/62" element={<Section62 />} />
          <Route path="/63_seccion.html" element={<Section63 />} />
          <Route path="/seccion/63" element={<Section63 />} />
          <Route path="/63" element={<Section63 />} />
          <Route path="/64_seccion.html" element={<Section64 />} />
          <Route path="/seccion/64" element={<Section64 />} />
          <Route path="/64" element={<Section64 />} />
          <Route path="/65_seccion.html" element={<Section65 />} />
          <Route path="/seccion/65" element={<Section65 />} />
          <Route path="/65" element={<Section65 />} />
          <Route path="/66_seccion.html" element={<Section66 />} />
          <Route path="/seccion/66" element={<Section66 />} />
          <Route path="/66" element={<Section66 />} />
          <Route path="/67_seccion.html" element={<Section67 />} />
          <Route path="/seccion/67" element={<Section67 />} />
          <Route path="/67" element={<Section67 />} />
          <Route path="/68_seccion.html" element={<Section68 />} />
          <Route path="/seccion/68" element={<Section68 />} />
          <Route path="/68" element={<Section68 />} />
          <Route path="/69_seccion.html" element={<Section69 />} />
          <Route path="/seccion/69" element={<Section69 />} />
          <Route path="/69" element={<Section69 />} />
          <Route path="/70_seccion.html" element={<Section70 />} />
          <Route path="/seccion/70" element={<Section70 />} />
          <Route path="/70" element={<Section70 />} />
          <Route path="/71_seccion.html" element={<Section71 />} />
          <Route path="/seccion/71" element={<Section71 />} />
          <Route path="/71" element={<Section71 />} />
          <Route path="/72_seccion.html" element={<Section72 />} />
          <Route path="/seccion/72" element={<Section72 />} />
          <Route path="/72" element={<Section72 />} />
          <Route path="/73_seccion.html" element={<Section73 />} />
          <Route path="/seccion/73" element={<Section73 />} />
          <Route path="/73" element={<Section73 />} />
          <Route path="/74_seccion.html" element={<Section74 />} />
          <Route path="/seccion/74" element={<Section74 />} />
          <Route path="/74" element={<Section74 />} />
          <Route path="/75_seccion.html" element={<Section75 />} />
          <Route path="/seccion/75" element={<Section75 />} />
          <Route path="/75" element={<Section75 />} />
          <Route path="/76_seccion.html" element={<Section76 />} />
          <Route path="/seccion/76" element={<Section76 />} />
          <Route path="/76" element={<Section76 />} />
          <Route path="/77_seccion.html" element={<Section77 />} />
          <Route path="/seccion/77" element={<Section77 />} />
          <Route path="/77" element={<Section77 />} />
          <Route path="/78_seccion.html" element={<Section78 />} />
          <Route path="/seccion/78" element={<Section78 />} />
          <Route path="/78" element={<Section78 />} />
          <Route path="/79_seccion.html" element={<Section79 />} />
          <Route path="/seccion/79" element={<Section79 />} />
          <Route path="/79" element={<Section79 />} />
          <Route path="/80_seccion.html" element={<Section80 />} />
          <Route path="/seccion/80" element={<Section80 />} />
          <Route path="/80" element={<Section80 />} />
          <Route path="/81_seccion.html" element={<Section81 />} />
          <Route path="/seccion/81" element={<Section81 />} />
          <Route path="/81" element={<Section81 />} />
          <Route path="/82_seccion.html" element={<Section82 />} />
          <Route path="/seccion/82" element={<Section82 />} />
          <Route path="/82" element={<Section82 />} />
          <Route path="/83_seccion.html" element={<Section83 />} />
          <Route path="/seccion/83" element={<Section83 />} />
          <Route path="/83" element={<Section83 />} />
          <Route path="/84_seccion.html" element={<Section84 />} />
          <Route path="/seccion/84" element={<Section84 />} />
          <Route path="/84" element={<Section84 />} />
          <Route path="/85_seccion.html" element={<Section85 />} />
          <Route path="/seccion/85" element={<Section85 />} />
          <Route path="/85" element={<Section85 />} />
          <Route path="/86_seccion.html" element={<Section86 />} />
          <Route path="/seccion/86" element={<Section86 />} />
          <Route path="/86" element={<Section86 />} />
          <Route path="/87_seccion.html" element={<Section87 />} />
          <Route path="/seccion/87" element={<Section87 />} />
          <Route path="/87" element={<Section87 />} />
          <Route path="/88_seccion.html" element={<Section88 />} />
          <Route path="/seccion/88" element={<Section88 />} />
          <Route path="/88" element={<Section88 />} />
          <Route path="/89_seccion.html" element={<Section89 />} />
          <Route path="/seccion/89" element={<Section89 />} />
          <Route path="/89" element={<Section89 />} />
          <Route path="/90_seccion.html" element={<Section90 />} />
          <Route path="/seccion/90" element={<Section90 />} />
          <Route path="/90" element={<Section90 />} />
          <Route path="/91_seccion.html" element={<Section91 />} />
          <Route path="/seccion/91" element={<Section91 />} />
          <Route path="/91" element={<Section91 />} />
          <Route path="/92_seccion.html" element={<Section92 />} />
          <Route path="/seccion/92" element={<Section92 />} />
          <Route path="/92" element={<Section92 />} />
          <Route path="/93_seccion.html" element={<Section93 />} />
          <Route path="/seccion/93" element={<Section93 />} />
          <Route path="/93" element={<Section93 />} />
          <Route path="/94_seccion.html" element={<Section94 />} />
          <Route path="/seccion/94" element={<Section94 />} />
          <Route path="/94" element={<Section94 />} />
          <Route path="/95_seccion.html" element={<Section95 />} />
          <Route path="/seccion/95" element={<Section95 />} />
          <Route path="/95" element={<Section95 />} />
          <Route path="/96_seccion.html" element={<Section96 />} />
          <Route path="/seccion/96" element={<Section96 />} />
          <Route path="/96" element={<Section96 />} />
          <Route path="/97_seccion.html" element={<Section97 />} />
          <Route path="/seccion/97" element={<Section97 />} />
          <Route path="/97" element={<Section97 />} />
          <Route path="/98_seccion.html" element={<Section98 />} />
          <Route path="/seccion/98" element={<Section98 />} />
          <Route path="/98" element={<Section98 />} />
          <Route path="/99_seccion.html" element={<Section99 />} />
          <Route path="/seccion/99" element={<Section99 />} />
          <Route path="/99" element={<Section99 />} />
          <Route path="/100_seccion.html" element={<Section100 />} />
          <Route path="/seccion/100" element={<Section100 />} />
          <Route path="/100" element={<Section100 />} />
          <Route path="/101_seccion.html" element={<Section101 />} />
          <Route path="/seccion/101" element={<Section101 />} />
          <Route path="/101" element={<Section101 />} />
          <Route path="/102_seccion.html" element={<Section102 />} />
          <Route path="/seccion/102" element={<Section102 />} />
          <Route path="/102" element={<Section102 />} />
          <Route path="/103_seccion.html" element={<Section103 />} />
          <Route path="/seccion/103" element={<Section103 />} />
          <Route path="/103" element={<Section103 />} />
          <Route path="/104_seccion.html" element={<Section104 />} />
          <Route path="/seccion/104" element={<Section104 />} />
          <Route path="/104" element={<Section104 />} />
          <Route path="/105_seccion.html" element={<Section105 />} />
          <Route path="/seccion/105" element={<Section105 />} />
          <Route path="/105" element={<Section105 />} />
          <Route path="/106_seccion.html" element={<Section106 />} />
          <Route path="/seccion/106" element={<Section106 />} />
          <Route path="/106" element={<Section106 />} />
          <Route path="/107_seccion.html" element={<Section107 />} />
          <Route path="/seccion/107" element={<Section107 />} />
          <Route path="/107" element={<Section107 />} />
          <Route path="/108_seccion.html" element={<Section108 />} />
          <Route path="/seccion/108" element={<Section108 />} />
          <Route path="/108" element={<Section108 />} />
          <Route path="/109_seccion.html" element={<Section109 />} />
          <Route path="/seccion/109" element={<Section109 />} />
          <Route path="/109" element={<Section109 />} />
          <Route path="/110_seccion.html" element={<Section110 />} />
          <Route path="/seccion/110" element={<Section110 />} />
          <Route path="/110" element={<Section110 />} />
          <Route path="/111_seccion.html" element={<Section111 />} />
          <Route path="/seccion/111" element={<Section111 />} />
          <Route path="/111" element={<Section111 />} />
          <Route path="/112_seccion.html" element={<Section112 />} />
          <Route path="/seccion/112" element={<Section112 />} />
          <Route path="/112" element={<Section112 />} />
          <Route path="/113_seccion.html" element={<Section113 />} />
          <Route path="/seccion/113" element={<Section113 />} />
          <Route path="/113" element={<Section113 />} />
          <Route path="/114_seccion.html" element={<Section114 />} />
          <Route path="/seccion/114" element={<Section114 />} />
          <Route path="/114" element={<Section114 />} />
          <Route path="/115_seccion.html" element={<Section115 />} />
          <Route path="/seccion/115" element={<Section115 />} />
          <Route path="/115" element={<Section115 />} />
          <Route path="/116_seccion.html" element={<Section116 />} />
          <Route path="/seccion/116" element={<Section116 />} />
          <Route path="/116" element={<Section116 />} />
          <Route path="/117_seccion.html" element={<Section117 />} />
          <Route path="/seccion/117" element={<Section117 />} />
          <Route path="/117" element={<Section117 />} />
          <Route path="/118_seccion.html" element={<Section118 />} />
          <Route path="/seccion/118" element={<Section118 />} />
          <Route path="/118" element={<Section118 />} />
          <Route path="/119_seccion.html" element={<Section119 />} />
          <Route path="/seccion/119" element={<Section119 />} />
          <Route path="/119" element={<Section119 />} />
          <Route path="/120_seccion.html" element={<Section120 />} />
          <Route path="/seccion/120" element={<Section120 />} />
          <Route path="/120" element={<Section120 />} />
          <Route path="/121_seccion.html" element={<Section121 />} />
          <Route path="/seccion/121" element={<Section121 />} />
          <Route path="/121" element={<Section121 />} />
          <Route path="/122_seccion.html" element={<Section122 />} />
          <Route path="/seccion/122" element={<Section122 />} />
          <Route path="/122" element={<Section122 />} />
          <Route path="/123_seccion.html" element={<Section123 />} />
          <Route path="/seccion/123" element={<Section123 />} />
          <Route path="/123" element={<Section123 />} />
          <Route path="/124_seccion.html" element={<Section124 />} />
          <Route path="/seccion/124" element={<Section124 />} />
          <Route path="/124" element={<Section124 />} />
          <Route path="/125_seccion.html" element={<Section125 />} />
          <Route path="/seccion/125" element={<Section125 />} />
          <Route path="/125" element={<Section125 />} />
          <Route path="/126_seccion.html" element={<Section126 />} />
          <Route path="/seccion/126" element={<Section126 />} />
          <Route path="/126" element={<Section126 />} />
          <Route path="/127_seccion.html" element={<Section127 />} />
          <Route path="/seccion/127" element={<Section127 />} />
          <Route path="/127" element={<Section127 />} />
          <Route path="/128_seccion.html" element={<Section128 />} />
          <Route path="/seccion/128" element={<Section128 />} />
          <Route path="/128" element={<Section128 />} />
          <Route path="/129_seccion.html" element={<Section129 />} />
          <Route path="/seccion/129" element={<Section129 />} />
          <Route path="/129" element={<Section129 />} />
          <Route path="/130_seccion.html" element={<Section130 />} />
          <Route path="/seccion/130" element={<Section130 />} />
          <Route path="/130" element={<Section130 />} />
          <Route path="/131_seccion.html" element={<Section131 />} />
          <Route path="/seccion/131" element={<Section131 />} />
          <Route path="/131" element={<Section131 />} />
          <Route path="/132_seccion.html" element={<Section132 />} />
          <Route path="/seccion/132" element={<Section132 />} />
          <Route path="/132" element={<Section132 />} />
          <Route path="/133_seccion.html" element={<Section133 />} />
          <Route path="/seccion/133" element={<Section133 />} />
          <Route path="/133" element={<Section133 />} />
          <Route path="/134_seccion.html" element={<Section134 />} />
          <Route path="/seccion/134" element={<Section134 />} />
          <Route path="/134" element={<Section134 />} />
          <Route path="/135_seccion.html" element={<Section135 />} />
          <Route path="/seccion/135" element={<Section135 />} />
          <Route path="/135" element={<Section135 />} />

          {/* 404 handler */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
}
