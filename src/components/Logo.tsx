import logo from "../img/logo.png";

console.log(logo);

function Logo() {
  return <img src={logo} alt="" style={{ width: 50, height: 50 }} />;
}

export default Logo;
