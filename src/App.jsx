import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Routes/Home';
import Portfolio from './Routes/Portfolio';
import About from './Routes/About';
import Contact from './Routes/Contact';
import Project from './Routes/Project';

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/portfolio' element={<Portfolio />} />
				<Route path='/project' element={<Project />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
		</>
	);
}

export default App;
