import { Image } from '@chakra-ui/image';
import {
	Box,
	Center,
	Grid,
	GridItem,
	Heading,
	Link,
	ListItem,
	Text,
	UnorderedList,
} from '@chakra-ui/react';
import { FaRegLaughBeam } from 'react-icons/fa';
import { HiOutlineHeart } from 'react-icons/hi';
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
import Carousel from '../Carousel/Carousel';
import salsa from '../../assets/hobbies/salsa-casino.mp4';

const AboutMe = () => {
	return (
		<>
			<Heading
				fontSize='3rem'
				fontWeight='800'
				color='white'
				backgroundColor='black'
				pt='4rem'
				textAlign='center'
			>
				ABOUT ME
			</Heading>
			<Tabs defaultIndex={0} isFitted variant='enclosed' bg='black' pt='2rem'>
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
									<Text className='title-upwork'>
										FREELANCE UPWORK PLATFORM
									</Text>
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
						<Center flexDirection='column'>
							<Text fontSize={['lg', 'xl', '3xl']} textAlign='center'>
								I consider myself an enthusiastic, intelligent and curious
								person. Always looking to learn new things and grow every day as
								a professional and as a person.
							</Text>
							<Box className='container-soft-skills'>
								<Text fontSize={['md', 'lg', 'xl']}>SOFT SKILLS:</Text>
								<UnorderedList fontSize={['sm', 'md', 'lg']} color='white'>
									<ListItem>Problem resolution</ListItem>
									<ListItem>Teamwork</ListItem>
									<ListItem>Effective communication</ListItem>
									<ListItem>Time management</ListItem>
									<ListItem>Critical thinking</ListItem>
									<ListItem>Adaptability</ListItem>
									<ListItem>Continuous learning</ListItem>
									<ListItem>Creativity</ListItem>
								</UnorderedList>
							</Box>
						</Center>
					</TabPanel>
					<TabPanel>
						<Grid
							templateRows={[
								'repeat(4, 1fr)',
								'repeat(2, 1fr)',
								'repeat(1, 1fr)',
							]}
							templateColumns={[
								'repeat(1, 1fr)',
								'repeat(2, 1fr)',
								'repeat(2, 1fr)',
								'repeat(4, 1fr)',
							]}
							gap={2}
						>
							<GridItem>
								<Center flexDirection='column' textAlign='center'>
									<Carousel />
									<Text fontWeight='800'>Travel Lover</Text>
									<Text>Each picture represent a different country</Text>
								</Center>
							</GridItem>
							<GridItem className='dance'>
								<Center flexDirection='column' textAlign='center'>
									<video controls>
										<source src={salsa} type='video/mp4' />
									</video>
									<Text fontWeight='800'>Dance Lover</Text>
									<Text>
										Me: red shoes <FaRegLaughBeam className='smile-icon' />
									</Text>
								</Center>
							</GridItem>
							<GridItem>
								<Center flexDirection='column' textAlign='center'>
									<iframe
										width='280'
										height='280'
										src='https://www.youtube.com/embed/g9zKPCL7qmw'
										title='YouTube video player'
										frameBorder='0'
										allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
										allowfullscreen
									></iframe>
									<Text fontWeight='800'>Play and watch Basketball</Text>
									<Text>
										Love Golden State Warriors{' '}
										<HiOutlineHeart className='heart-icon' />
									</Text>
								</Center>
							</GridItem>
							<GridItem>
								<Center flexDirection='column' textAlign='center'>
									<iframe
										width='280'
										height='280'
										src='https://www.youtube.com/embed/4JmqqkueAdE'
										title='YouTube video player'
										frameBorder='0'
										allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
										allowfullscreen
									></iframe>
									<Text fontWeight='800'>Play and watch Ping Pong</Text>
								</Center>
							</GridItem>
						</Grid>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</>
	);
};

export default AboutMe;
