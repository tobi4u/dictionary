import { HiSpeakerWave } from "react-icons/hi2";
import Button from "./Button";

const Header = () => {
  return (
    <div>
      <h1>Hello</h1>
      <div className="flex items-center gap-1">
        <span>/djf/,</span>
        <span>/kdc/</span>
        <span>
          <HiSpeakerWave />
        </span>
      </div>
      <div>
        <Button/>
      </div>
    </div>
  );
};

export default Header;
