import { Image } from '@chakra-ui/image';
import { Center, Grid, GridItem, Text } from '@chakra-ui/react';
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
					<Image
						boxSize='200px'
						fit='cover'
						src='https://images5.alphacoders.com/810/thumbbig-810547.webp'
					/>
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
