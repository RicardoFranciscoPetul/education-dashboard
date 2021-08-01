import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from './components';
import AppContext from './appContext';
import history from '../history';
import routes from './RootRoutes';

function App() {
	return (
		<AppContext.Provider value={{ routes }}>
			<Router history={history}>
				<Layout />
			</Router>
		</AppContext.Provider>
	);
}

export default App;
