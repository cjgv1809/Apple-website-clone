import { Html } from "@react-three/drei";

function Loader() {
  return (
    <Html>
      <div class="loader">
        <div class="face">
          <div class="circle"></div>
        </div>
        <div class="face">
          <div class="circle"></div>
        </div>
      </div>
    </Html>
  );
}

export default Loader;
