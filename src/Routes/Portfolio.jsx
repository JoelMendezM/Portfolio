import '../Components/PortfolioCard/Portfolio.css';
import PortfolioCard from '../Components/PortfolioCard/PortfolioCard';
import portfolioCardData from '../Components/PortfolioCard/PortfolioCardData';

const Portfolio = () => {
	return (
		<div>
			<h1 className='portfolio-heading'>PROJECTS</h1>
			<div className='portfolio-container'>
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
			</div>
		</div>
	);
};

export default Portfolio;
