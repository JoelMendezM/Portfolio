import { useState } from 'react';
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import germany from '../../assets/hobbies/Germany.jpg';
import argentina from '../../assets/hobbies/Argentina.png';
import brazil from '../../assets/hobbies/Brazil.png';
import chile from '../../assets/hobbies/Chile.jpg';
import ecuador from '../../assets/hobbies/Ecuador.png';
import france from '../../assets/hobbies/France.png';
import netherlands from '../../assets/hobbies/Netherlands.png';
import uruguay from '../../assets/hobbies/Uruguay.jpg';
import venezuela from '../../assets/hobbies/Venezuela.png';

// Settings for the slider
const settings = {
	dots: true,
	arrows: false,
	fade: true,
	infinite: true,
	autoplay: true,
	speed: 500,
	autoplaySpeed: 5000,
	slidesToShow: 1,
	slidesToScroll: 1,
};

export default function Carousel() {
	// As we have used custom buttons, we need a reference variable to
	// change the state
	const [slider, setSlider] = useState(null);

	// These are the breakpoints which changes the position of the
	// buttons as the screen size changes
	const top = useBreakpointValue({ base: '90%', md: '50%' });
	const side = useBreakpointValue({ base: '30%', md: '10px' });

	// These are the images used in the slide
	const cards = [
		germany,
		argentina,
		brazil,
		chile,
		ecuador,
		france,
		netherlands,
		uruguay,
		venezuela,
	];

	return (
		<Box
			position={'relative'}
			h={200}
			w={200}
			overflow={'hidden'}
			className='testClass'
		>
			{/* CSS files for react-slick */}
			<link
				rel='stylesheet'
				type='text/css'
				href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
			/>
			<link
				rel='stylesheet'
				type='text/css'
				href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
			/>
			{/* Left Icon */}
			<IconButton
				aria-label='left-arrow'
				colorScheme='transparent'
				borderRadius='full'
				position='absolute'
				left={side}
				top={top}
				transform={'translate(0%, -50%)'}
				zIndex={2}
				onClick={() => slider?.slickPrev()}
			>
				<BiLeftArrowAlt />
			</IconButton>
			{/* Right Icon */}
			<IconButton
				aria-label='right-arrow'
				colorScheme='transparent'
				borderRadius='full'
				position='absolute'
				right={side}
				top={top}
				transform={'translate(0%, -50%)'}
				zIndex={2}
				onClick={() => slider?.slickNext()}
			>
				<BiRightArrowAlt />
			</IconButton>
			{/* Slider */}
			<Slider {...settings} ref={slider => setSlider(slider)}>
				{cards.map((url, index) => (
					<Box
						key={index}
						height='200'
						width='200'
						position='relative'
						backgroundPosition='center'
						backgroundRepeat='no-repeat'
						backgroundSize='cover'
						backgroundImage={`url(${url})`}
					/>
				))}
			</Slider>
		</Box>
	);
}
