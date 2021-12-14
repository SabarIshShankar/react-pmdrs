import "./styles.css";
import * as THREE from 'three';
import {useEffect} from 'react';
import {Canvas, useFrame, useThree} from '@react-three/fiber';
import {Physics, usePlane, useCompountBody, useSphere} from '@react-three/cannon'

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
