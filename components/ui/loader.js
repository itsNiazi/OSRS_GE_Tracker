import { BallTriangle } from "react-loader-spinner";
export default function Loader() {
  return (
    <div>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#F59E0C"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
