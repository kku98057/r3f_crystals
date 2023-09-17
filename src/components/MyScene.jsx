import { ScrollControls } from "@react-three/drei";
import { Crystal } from "../../public/model/Crystal";
import Background from "./Background";

export default function MyScene() {
  return (
    <>
      <Crystal />
      <Background />
    </>
  );
}
