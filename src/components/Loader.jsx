import { Html } from "@react-three/drei";

function Loader() {
  return (
    <Html>
      <div className="loader">
        <div className="face">
          <div className="circle"></div>
        </div>
        <div className="face">
          <div className="circle"></div>
        </div>
      </div>
    </Html>
  );
}

export default Loader;
