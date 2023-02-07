import { NavLink } from 'react-router-dom';
import './PortfolioCard.css';

const PortfolioCard = ({
	image,
	title,
	description,
	repositoryUrl,
	websiteUrl,
}) => {
	return (
		<div className='card-container'>
			<div className='row'>
				<div className='card-content'>
					<img src={image} alt='Two children playing' className='' />
					<h2 className='project-title'>{title}</h2>
					<p>{description}</p>
					<div className='project-links'>
						<NavLink className='repository' to={repositoryUrl} target='_blank'>
							<b>Repository</b>
						</NavLink>
						<NavLink className='website' to={websiteUrl} target='_blank'>
							<b>Website</b>
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PortfolioCard;
