import '../Styles/Home.css';
import AboutCard from './components/AboutCard';
import Landing from './components/Landing';

function Home() {
	return (
		<div className='Home'>
			<Landing/>
			<AboutCard/>
		</div>
	);
}

export default Home;
