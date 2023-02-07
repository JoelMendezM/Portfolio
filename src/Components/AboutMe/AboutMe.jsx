import { Image } from '@chakra-ui/image';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/tabs';
import './AboutMe.css';

const AboutMe = () => {
	return (
		<Tabs defaultIndex={0} isFitted variant='enclosed' bg='black' pt='5rem'>
			<TabList>
				<Tab color='white'>Skill Set</Tab>
				<Tab color='white'>Background</Tab>
				<Tab color='white'>Who I am</Tab>
				<Tab color='white'>Hobbies</Tab>
			</TabList>
			<TabPanels>
				<TabPanel>
					<Image
						boxSize='200px'
						fit='cover'
						src='https://www.freepnglogos.com/uploads/naruto-png/image-kunai-naruto-fictional-battle-omniverse-23.png'
					/>
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
