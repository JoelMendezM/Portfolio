import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import { useState } from 'react';

const Navbar = () => {
	const [isClicked, setIsClicked] = useState(false);
	const [isScrolling, setIsScroling] = useState(false);

	const handleClick = () => {
		setIsClicked(!isClicked);
	};

	const handleScrollNavbar = () => {
		if (window.scrollY >= 100) {
			setIsScroling(true);
		} else {
			setIsScroling(false);
		}
	};

	window.addEventListener('scroll', handleScrollNavbar);

	return (
		<div className={isScrolling ? 'header header-bg' : 'header'}>
			<Link to='/portfolio'>
				<h1>PORTFOLIO</h1>
			</Link>
			<ul className={isClicked ? 'nav-menu active' : 'nav-menu'}>
				<li>
					<Link to='/'>HOME</Link>
				</li>
				<li>
					<Link to='/project'>PROJECT</Link>
				</li>
				<li>
					<Link to='/about'>ABOUT</Link>
				</li>
				<li>
					<Link to='/Contact'>CONTACT</Link>
				</li>
			</ul>
			<div className='hamburger' onClick={handleClick}>
				{isClicked ? (
					<FaTimes size={20} style={{ color: 'white' }} />
				) : (
					<FaBars size={20} style={{ color: 'white' }} />
				)}
			</div>
		</div>
	);
};

export default Navbar;
