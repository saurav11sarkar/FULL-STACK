import logo from "@/assets/genetic-data-svgrepo-com.svg";
import { Link } from "react-router-dom";
import { ModeToggle } from "../more-togglor";
const Navbar = () => {
  return (
    <div className=" max-w-7xl mx-auto h-16 flex items-center gap-3 px-5">
      <div className="flex items-center">
        <img className="w-8" src={logo} alt="" />
      </div>
      <Link to={"/"}>Tasks</Link>
      <Link to={"/user"}>User</Link>
      <div className="ml-auto">
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
