import AboutMe from '../Components/AboutMe/AboutMe';
import Footer from '../Components/Footer/Footer';
import Hero from '../Components/Hero/Hero';
import Navbar from '../Components/Navbar/Navbar';
import Portfolio from './Portfolio';

const Home = () => {
	return (
		<div>
			<Navbar />
			<Hero />
			<Portfolio />
			<AboutMe />
			<Footer />
		</div>
	);
};

export default Home;
