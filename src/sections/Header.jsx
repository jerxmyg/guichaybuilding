import { useState, React } from 'react';
import { FaXmark, FaBars } from 'react-icons/fa6';
import { Link } from 'react-scroll';
import logo from '../assets/2/gbuilding.jpg'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const navItems = [
        { link: 'Home', path: 'home' },
        { link: 'About', path: 'about' },
        { link: 'Services', path: 'services' },
        { link: 'Projects', path: 'projects' },
        { link: 'Contact', path: 'contact' },
    ];

    return (
        <nav
            className="w-full bg-white justify-between items-center gap-1 lg:px-16
            px-6 py-4 sticky top-0 z-50"
        >
            
            <h1 className="text-black md:text-4xl text-3xl font-bold font-rubik">
                Guichay{' '}
                <span className="text-green-800 italic">
                    Building
                </span>
            </h1>
            <ul className="lg:flex justify-center items-center gap-6 hidden">
                {navItems.map(({ link, path }) => (
                    <Link
                        key={path}
                        className="text-black uppercase font-bold cursor-pointer p-3 rounded-full hover:bg-green-800 hover:text-black text-[15px]"
                        to={path}
                        spy={true}
                        offset={-100}
                        smooth={true}
                    >
                        {link}
                    </Link>
                ))}
            </ul>


            {/* Mobile menu */}
            <div
                className="flex justify-between items-center lg:hidden mt-3"
                onClick={toggleMenu}
            >
                <div>
                    {isMenuOpen ? (
                        <FaXmark className="text-green-800 text-3xl cursor-pointer" />
                    ) : (
                        <FaBars className="text-green-800 text-3xl cursor-pointer" />
                    )}
                </div>
            </div>

            <div
                className={`${
                    isMenuOpen ? 'flex' : 'hidden'
                } w-full h-fit bg-green-800 p-4 absolute left-0`}
                onClick={closeMenu}
            >
                <ul className="flex flex-col justify-center items-center gap-2 w-full">
                    {navItems.map(({ link, path }) => (
                        <Link
                            key={path}
                            className="text-black uppercase font-semibold cursor-pointer p-2 rounded-lg hover:bg-black hover:text-white w-full text-center"
                            to={path}
                            spy={true}
                            offset={-100}
                            smooth={true}
                        >
                            {link}
                        </Link>
                    ))}
                </ul>

            </div>
        </nav>
    );
};

export default Header;
