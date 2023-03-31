import "./App.css";
import { Canvas } from "@react-three/fiber";
import { LinearEncoding, NoToneMapping } from "three";
import Entry from "./World";
function App() {
  return (
    <div className="App w-screen h-screen">
      <Canvas
        gl={{
          pixelRatio: 2,
          autoClear: false,
          outputEncoding: LinearEncoding,
          toneMapping: NoToneMapping,
        }}
      >
        <Entry />
      </Canvas>
    </div>
  );
}

export default App;
