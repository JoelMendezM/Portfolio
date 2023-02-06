import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';
import '../Components/PortfolioCard/Portfolio.css';
import PortfolioCard from '../Components/PortfolioCard/PortfolioCard';
import portfolioCardData from '../Components/PortfolioCard/PortfolioCardData';

const Portfolio = () => {
	return (
		<div>
			<Navbar />
			<div className='portfolio-container'>
				<h1 className='portfolio-heading'>PROJECTS</h1>
			</div>
			{portfolioCardData.map((value, index) => {
				return (
					<PortfolioCard
						key={index}
						image={value.image}
						title={value.title}
						description={value.description}
						repositoryUrl={value.repositoryUrl}
						websiteUrl={value.websiteUrl}
					/>
				);
			})}
			<Footer />
		</div>
	);
};

export default Portfolio;
