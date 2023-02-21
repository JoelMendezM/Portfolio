import {
	Box,
	Flex,
	FormLabel,
	Heading,
	IconButton,
	Input,
	InputGroup,
	InputLeftElement,
	Link,
	Stack,
	Textarea,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react';
import { BsGithub, BsLinkedin, BsPerson, BsTwitter } from 'react-icons/bs';
import { MdEmail, MdOutlineEmail } from 'react-icons/md';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
	const form = useRef();

	const sendEmail = e => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_v5nh1ls',
				'template_j2dzuag',
				form.current,
				'J1Zpmz2JuRNa1gIp6'
			)
			.then(
				result => {
					console.log(result.text);
					alert('Message sent properly');
					e.target.reset();
				},
				error => {
					console.log(error.text);
				}
			);
	};

	return (
		<Flex bg='black' align='center' justify='center' id='contact'>
			<Box
				borderRadius='lg'
				m={{ base: 5, md: 16, lg: 10 }}
				p={{ base: 5, lg: 16 }}
			>
				<Box>
					<VStack spacing={{ base: 4, md: 8, lg: 20 }}>
						<Heading
							fontSize={{
								base: '4xl',
								md: '5xl',
							}}
						>
							Get in Touch
						</Heading>

						<Stack
							spacing={{ base: 4, md: 8, lg: 20 }}
							direction={{ base: 'column', md: 'row' }}
						>
							<Stack
								align='center'
								justify='space-around'
								direction={{ base: 'row', md: 'column' }}
							>
								<Link href='mailto:joel.j.mendez.m@gmail.com?subject=Information request&body=Dear Joel, I would like more information about your services. I would you like to have chat, call or video call to talk about it.'>
									<IconButton
										color='white'
										aria-label='email'
										variant='ghost'
										size='lg'
										fontSize='3xl'
										icon={<MdEmail />}
										_hover={{
											bg: 'gray',
											color: useColorModeValue('white', 'gray.700'),
										}}
										isRound
									/>
								</Link>

								<Link href='https://github.com/JoelMendezM/' target='_blank'>
									<IconButton
										color='white'
										aria-label='github'
										variant='ghost'
										size='lg'
										fontSize='3xl'
										icon={<BsGithub />}
										_hover={{
											bg: 'gray',
											color: useColorModeValue('white', 'gray.700'),
										}}
										isRound
									/>
								</Link>

								<Link href='https://twitter.com/JoelMndez2/' target='_blank'>
									<IconButton
										color='white'
										aria-label='twitter'
										variant='ghost'
										size='lg'
										icon={<BsTwitter size='28px' />}
										_hover={{
											bg: 'gray',
											color: useColorModeValue('white', 'gray.700'),
										}}
										isRound
									/>
								</Link>

								<Link
									href='https://www.linkedin.com/in/joel-mendez-martinez-front-end/'
									target='_blank'
								>
									<IconButton
										color='white'
										aria-label='linkedin'
										variant='ghost'
										size='lg'
										icon={<BsLinkedin size='28px' />}
										_hover={{
											bg: 'gray',
											color: useColorModeValue('white', 'gray.700'),
										}}
										isRound
									/>
								</Link>
							</Stack>

							<Box
								bg='rgb(66,66,66)'
								borderRadius='lg'
								p={8}
								color='white'
								shadow='base'
							>
								<VStack spacing={5}>
									<form ref={form} onSubmit={sendEmail}>
										<FormLabel>Name</FormLabel>
										<InputGroup>
											<InputLeftElement>{<BsPerson />}</InputLeftElement>
											<Input
												type='text'
												name='user_name'
												placeholder='Your Name'
											/>
										</InputGroup>
										<FormLabel>Email</FormLabel>
										<InputGroup>
											<InputLeftElement>{<MdOutlineEmail />}</InputLeftElement>
											<Input
												type='email'
												name='user_email'
												placeholder='Your Email'
											/>
										</InputGroup>

										<FormLabel>Message</FormLabel>
										<Textarea
											name='message'
											placeholder='Your Message'
											rows={6}
											resize='none'
										/>
										<Input
											type='submit'
											value='Send'
											colorScheme='gray'
											marginTop={2}
											bg={'gray.700'}
											color='white'
											_hover={{
												bg: 'gray.900',
											}}
										/>
									</form>
									{/* <FormControl ref={form} onSubmit={sendEmail} isRequired>
										<FormLabel>Name</FormLabel>
										<InputGroup>
											<InputLeftElement>{<BsPerson />}</InputLeftElement>
											<Input
												type='text'
												name='user_name'
												placeholder='Your Name'
											/>
										</InputGroup>

										<FormLabel>Email</FormLabel>
										<InputGroup>
											<Input
												type='email'
												name='user_email'
												placeholder='Your Email'
											/>
										</InputGroup>

										<FormLabel>Message</FormLabel>
										<Textarea
											name='message'
											placeholder='Your Message'
											rows={6}
											resize='none'
										/>

										<Input
											type='submit'
											value='Send'
											colorScheme='gray'
											marginTop={2}
											bg={'gray.700'}
											color='white'
											_hover={{
												bg: 'gray.900',
											}}
										/>
									</FormControl> */}
								</VStack>
							</Box>
						</Stack>
					</VStack>
				</Box>
			</Box>
		</Flex>
	);
}
