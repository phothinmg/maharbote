import { render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';
import  Home  from './pages/Home/index.jsx';
import { NotFound } from './pages/_404.jsx';
import Mmdate from './pages/Mmdate.jsx';
import './style.css';

export function App() {
	return (
		<LocationProvider>
			<main>
				<Router>
					<Route path="/" component={Home} />
					<Route path="/Mmdate" component={Mmdate} />
					<Route default component={NotFound} />
				</Router>
			</main>
		</LocationProvider>
	);
}

render(<App />, document.getElementById('app'));
