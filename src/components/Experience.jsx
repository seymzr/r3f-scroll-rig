import {
  Environment,
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial,
  useScroll,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useEffect, useRef, useState } from "react";
import { framerMotionConfig } from "../config";
import { Avatar } from "./Avatar";
import { Background } from "./Background";
import { Office } from "./Office";
import { Projects } from "./Projects";
import { DotFinal } from "./DotFinal";
import { RocketFinal2 } from "./RocketFinal2";
import { Unicorn1 } from "./Unicorn1";
import { Cube } from "./Cube";
import { useTransformation } from "../hooks/useTransformation";
import { Vector3 } from "three";

export const Experience = (props) => {
  const { menuOpened } = props;
  const { viewport } = useThree();
  const data = useScroll();

  const isMobile = window.innerWidth < 768;
  const responsiveRatio = viewport.width / 12;
  const officeScaleRatio = Math.max(0.5, Math.min(0.9 * responsiveRatio, 0.9));

  const [section, setSection] = useState(0);

  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();

  useEffect(() => {
    animate(cameraPositionX, menuOpened ? -5 : 0, {
      ...framerMotionConfig,
    });
    animate(cameraLookAtX, menuOpened ? 5 : 0, {
      ...framerMotionConfig,
    });
  }, [menuOpened]);

  const characterContainerAboutRef = useRef();

  const [characterAnimation, setCharacterAnimation] = useState("Typing");
  useEffect(() => {
    setCharacterAnimation("Falling");
    setTimeout(() => {
      setCharacterAnimation(section === 0 ? "Typing" : "Standing");
    }, 600);
  }, [section]);

  const characterGroup = useRef();

  useFrame((state) => {
    let curSection = Math.floor(data.scroll.current * data.pages);

    if (curSection > 3) {
      curSection = 3;
    }

    if (curSection !== section) {
      setSection(curSection);
    }

    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);

    // const position = new THREE.Vector3();
    /* if (section === 0) {
      characterContainerAboutRef.current.getWorldPosition(
        characterGroup.current.position
      );
    } */
    // console.log([position.x, position.y, position.z]);

    // const quaternion = new THREE.Quaternion();
    // characterContainerAboutRef.current.getWorldQuaternion(quaternion);
    // const euler = new THREE.Euler();
    // euler.setFromQuaternion(quaternion, "XYZ");

    // console.log([euler.x, euler.y, euler.z]);
  });
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const random = useRef();
  useTransformation(ref1, ref2, ref3, random);
  const item = "dot2"; // Or any default value you want
  const tl = useRef();

  const scrollData = useScroll();
  /* useFrame((state, delta) => {
    tl.current.seek(scrollData.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline({
      defaults: { duration: 1, ease: "power1.inOut" },
    });

    /* tl.current
      .to(ref1.current.position,{x:-1},0)
      .to(ref1.current.position,{x:3.8},.01)
      .to(ref1.current.position, { x: 3.8,y:-1 },.2 )
       
  }, []); */
  return (
    <>

      {/* <axesHelper args={[20, 20, 20]} /> */}

      <Float floatIntensity={1} speed={1}>
        <DotFinal scale={1} visible={item === "dot2"} r={ref1} />
        <RocketFinal2 r={ref2} visible={item == "rocket final"} />
        <Unicorn1 r={ref3} visible={item === "unicorn1"} />
        <Cube r={random} visible={item === "cube"} />
      </Float>
      <Environment preset="sunset" blur={5} />
      <Rig />
    </>
  );
};

function Rig() {
  const { camera, mouse } = useThree();
  const vec = new Vector3();

  return useFrame(() => {
    camera.position.lerp(vec.set(mouse.x, mouse.y, camera.position.z), 0.1);
    camera.lookAt(0, 0, 0);
  });
}

