import { Scroll, ScrollControls, Sparkles, SpotLight, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MotionConfig } from "framer-motion";
import { Leva } from "leva";
import { Suspense, useEffect, useState } from "react";
import { Cursor } from "./components/Cursor";
import { Experience } from "./components/Experience";
import { Interface } from "./components/Interface";
import { LoadingScreen } from "./components/LoadingScreen";
import { Menu } from "./components/Menu";
import { ScrollManager } from "./components/ScrollManager";
import { framerMotionConfig } from "./config";
import Overlay from "./components/HTML/Overlay";
import { Navigation } from "./components/Navigation";

function App() {
  const [section, setSection] = useState(0);
  const [started, setStarted] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  const [isInView,setIsInView] = useState(0)

  const [navOpened,setNavOpened] = useState(false)

  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

  const isMobile = window.innerWidth < 768;

  return (
    <>
      <LoadingScreen started={started} setStarted={setStarted} />
      <MotionConfig
        transition={{
          ...framerMotionConfig,
        }}
      >
        <Canvas shadows camera={{ position: [0, 0, 3], fov: 30 }}>
        <Stars radius={50} depth={0} count={1000} factor={4} saturation={1}  fade speed={1.5} />
        <Sparkles size={2} count={400} color={"#8734F1"} scale={[8, 8, 10]}  ></Sparkles>
        <Sparkles size={2} count={400} color={"#ff7b25"} scale={[8, 8, 10]} ></Sparkles>
        <SpotLight color={"#8734F1"} intensity={.01} position={[-4.5,1,0]} />
    <SpotLight color={"#ff7b25"} intensity={.01} position={[4.5,-1,0]} />
    
          <color attach="background" args={["#000"]} />
          <ScrollControls pages={7.5} damping={0.1}>
            <ScrollManager section={section} onSectionChange={setSection} />


              <Suspense>
                {started && (
                  <Experience section={section} menuOpened={menuOpened} />
                )}
              </Suspense>


            <Scroll html>
              {started && <Overlay navOpened={navOpened} setNavOpened={setNavOpened} setIsInView={setIsInView} isInView={isInView}  />}
            </Scroll>
          </ScrollControls>
        </Canvas>
        
        {started&& <Navigation
          section = {section}
          onSectionChange={setSection}
          menuOpened={menuOpened}
          setMenuOpened={setMenuOpened}
          isInView={isInView}
          navOpened={navOpened}
        />}
        {/* <Cursor /> */}
      </MotionConfig>
      <Leva hidden />
    </>
  );
}

export default App;
