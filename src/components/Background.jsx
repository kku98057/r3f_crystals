export default function Background() {
  return (
    <mesh position={[0, 0, 0]} castShadow={true} receiveShadow={true}>
      <planeGeometry args={[10, 10, 10]} />
      <meshStandardMaterial color={"#757575"} />
    </mesh>
  );
}
