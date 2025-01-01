import logo from '@/assets/microgenetics-svgrepo-com.svg';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className=" max-w-7xl mx-auto h-16 flex items-center gap-3 px-5">
            <div className='flex items-center'>
            <img className='w-8' src={logo} alt="" />
            </div>
            <Link to={"/"}>Tasks</Link>
            <Link to={"/user"}>User</Link>
        </div>
    );
};

export default Navbar;