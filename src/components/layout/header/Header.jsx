import { Link } from "react-router-dom";
import Gnb from "./Gnb";

const Header = () => {
  return (
    <header>
      <h1>
        {/* 샤크라 링크 쓰면 안되고 라우터로 사용해야한다. */}
        <Link to={"/"}>Logo</Link>
      </h1>
      <Gnb />
    </header>
  );
};

export default Header;
