import { Image } from '@chakra-ui/image';
import { Center, Grid, GridItem, Link, Text } from '@chakra-ui/react';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/tabs';
import bootstrap from '../../assets/skills/bootstrap.svg.png';
import css from '../../assets/skills/css.png';
import chakra from '../../assets/skills/chakra-ui.png';
import firebase from '../../assets/skills/firebase.png';
import git from '../../assets/skills/git.svg.png';
import github from '../../assets/skills/github.png';
import html from '../../assets/skills/HTML.png';
import jira from '../../assets/skills/jira.png';
import js from '../../assets/skills/js.svg.png';
import react from '../../assets/skills/react.svg.png';
import redux from '../../assets/skills/redux.png';
import ruby from '../../assets/skills/ruby.svg.png';
import sass from '../../assets/skills/sass.svg.png';
import shopify from '../../assets/skills/shopify.png';
import slack from '../../assets/skills/slack.png';
import trello from '../../assets/skills/trello.png';
import top from '../../assets/background/top-rated.jpg';
import reviews from '../../assets/background/upwork-reviews.jpg';
import marriott from '../../assets/background/marriot-testimonial.jpg';
import alkemy from '../../assets/background/alkemy.png';
import coderhouse from '../../assets/background/coderhouse.png';
import degree from '../../assets/background/bachelor-degree.jpg';
import './AboutMe.css';

const AboutMe = () => {
	return (
		<Tabs defaultIndex={0} isFitted variant='enclosed' bg='black' pt='5rem'>
			<TabList>
				<Tab p={['0.3rem', '1rem', '1.5rem']} color='white'>
					Skill Set
				</Tab>
				<Tab p={['0.3rem', '1rem', '1.5rem']} color='white'>
					Background
				</Tab>
				<Tab p={['0.3rem', '1rem', '1.5rem']} color='white'>
					Who I am
				</Tab>
				<Tab p={['0.3rem', '1rem', '1.5rem']} color='white'>
					Hobbies
				</Tab>
			</TabList>
			<TabPanels>
				<TabPanel>
					<Grid
						templateRows={[
							'repeat(8, 1fr)',
							'repeat(4, 1fr)',
							'repeat(3, 1fr)',
						]}
						templateColumns={[
							'repeat(2, 1fr)',
							'repeat(3, 1fr)',
							'repeat(4, 1fr)',
						]}
						gap={2}
						fontWeight={500}
					>
						<GridItem>
							<Center flexDirection='column' className='test'>
								<Image w={120} h={130} src={bootstrap} />
								<Text>Bootstrap</Text>
							</Center>
						</GridItem>
						<GridItem>
							<Center flexDirection='column'>
								<Image w={120} h={130} src={firebase} />
								<Text>Firebase</Text>
							</Center>
						</GridItem>
						<GridItem>
							<Center flexDirection='column'>
								<Image w={120} h={130} src={css} />
								<Text>CSS3</Text>
							</Center>
						</GridItem>
						<GridItem>
							<Center flexDirection='column'>
								<Image w={120} h={130} src={git} />
								<Text>Git</Text>
							</Center>
						</GridItem>
						<GridItem>
							<Center flexDirection='column'>
								<Image w={120} h={130} src={github} />
								<Text>Github</Text>
							</Center>
						</GridItem>
						<GridItem>
							<Center flexDirection='column'>
								<Image w={120} h={130} src={html} />
								<Text>HTML5</Text>
							</Center>
						</GridItem>
						<GridItem>
							<Center flexDirection='column'>
								<Image w={120} h={130} src={jira} />
								<Text>Jira</Text>
							</Center>
						</GridItem>
						<GridItem>
							<Center flexDirection='column'>
								<Image w={120} h={130} src={js} />
								<Text>JavaScript</Text>
							</Center>
						</GridItem>
						<GridItem>
							<Center flexDirection='column'>
								<Image w={120} h={130} src={react} />
								<Text>React JS</Text>
							</Center>
						</GridItem>
						<GridItem>
							<Center flexDirection='column'>
								<Image w={120} h={130} src={redux} />
								<Text>Redux</Text>
							</Center>
						</GridItem>
						<GridItem>
							<Center flexDirection='column'>
								<Image w={120} h={130} src={ruby} />
								<Text>Ruby</Text>
							</Center>
						</GridItem>
						<GridItem>
							<Center flexDirection='column'>
								<Image w={120} h={130} src={chakra} />
								<Text>Chakra UI</Text>
							</Center>
						</GridItem>
						<GridItem>
							<Center flexDirection='column'>
								<Image w={120} h={130} src={sass} />
								<Text>Sass</Text>
							</Center>
						</GridItem>
						<GridItem>
							<Center flexDirection='column'>
								<Image w={120} h={130} src={shopify} />
								<Text>Shopify</Text>
							</Center>
						</GridItem>
						<GridItem>
							<Center flexDirection='column'>
								<Image w={120} h={130} src={slack} />
								<Text>Slack</Text>
							</Center>
						</GridItem>
						<GridItem>
							<Center flexDirection='column'>
								<Image w={120} h={130} src={trello} />
								<Text>Trello</Text>
							</Center>
						</GridItem>
					</Grid>
				</TabPanel>
				<TabPanel>
					<Grid
						templateRows={[
							'repeat(1, 1fr)',
							'repeat(1, 1fr)',
							'repeat(1, 1fr)',
						]}
						templateColumns={[
							'repeat(3, 1fr)',
							'repeat(3, 1fr)',
							'repeat(3, 1fr)',
						]}
						gap={1}
						fontWeight={700}
					>
						<GridItem
							h={660}
							display='flex'
							alignItems='center'
							justifyContent='center'
							className='container-upwork'
						>
							<Center flexDirection='column'>
								<Text className='title-upwork'>FREELANCE UPWORK PLATFORM</Text>
								<Center className='background-upwork'>
									<Image src={top} />
									<Image src={reviews} />
									<Image src={marriott} />
									<Text>If you want to take a look:</Text>
									<Link
										href='https://www.upwork.com/freelancers/~010243cd1d7e26063d?viewMode=1'
										isExternal
									>
										Click here!
									</Link>
								</Center>
							</Center>
						</GridItem>
						<GridItem
							borderRight='1px solid white;'
							borderLeft='1px solid white;'
							h={600}
							display='flex'
							alignItems='center'
							justifyContent='center'
							className='container-front-end'
						>
							<Center>
								<Text className='title-front-end'>FRONT-END</Text>
								<Center className='background-front-end'>
									<Image src={alkemy} className='alkemy' />
									<Text>Acceleration: </Text>
									<Link
										className='alkemy-link'
										href='https://assets.alkemy.org/certificates/google-oauth2%7C106402354811067069167/0688aca1-fe51-4ba8-9995-700af7f5936f.pdf'
										isExternal
									>
										Certificate
									</Link>
									<Image src={coderhouse} className='coder' />
									<Text>Front-end Carrier:</Text>
									<Link>React Js</Link>
									<Link>JavaScript</Link>
									<Link>Desarrollo Web</Link>
								</Center>
							</Center>
						</GridItem>
						<GridItem
							h={600}
							display='flex'
							alignItems='center'
							justifyContent='center'
							textAlign='center'
							className='container-academic'
						>
							<Center>
								<Text className='title-academic'>ACADEMIC - UNIVERSITY</Text>
								<Center className='background-academic'>
									<Text>
										I got a <strong>{`CHEMICAL BACHELOR'S DEGREE`}</strong>{' '}
										{`'2009 -
										2015'`}
									</Text>
									<Image src={degree} />
								</Center>
							</Center>
						</GridItem>
					</Grid>
				</TabPanel>
				<TabPanel>
					<Image
						boxSize='200px'
						fit='cover'
						src='https://www.freepnglogos.com/uploads/naruto-png/image-kunai-naruto-fictional-battle-omniverse-23.png'
					/>
				</TabPanel>
			</TabPanels>
		</Tabs>
	);
};

export default AboutMe;
