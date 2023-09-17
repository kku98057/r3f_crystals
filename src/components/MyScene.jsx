import { ScrollControls } from "@react-three/drei";
import { Crystal } from "../../public/model/Crystal";
import Background from "./Background";

export default function MyScene() {
  return (
    <ScrollControls pages={6} damping={0.5}>
      <Crystal />
      <Background />
    </ScrollControls>
  );
}
