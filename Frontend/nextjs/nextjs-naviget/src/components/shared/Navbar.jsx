import Link from "next/link";

const Navbar = () => {
  return (
    <div
      className={
        "flex items-center justify-between px-4 py-4 bg-blue-700 text-white"
      }
    >
      <div>
        <Link href={"/"} className={"text-2xl font-bold"}>
          MySite
        </Link>
      </div>
      <div>
        <ul className={"flex items-center justify-between space-x-3"}>
          <li>
            <Link href={"/about"}>About Us</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link href={"/login"}>Login</Link>
          </li>
          <li>
            <Link href={"/register"}>Register</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
