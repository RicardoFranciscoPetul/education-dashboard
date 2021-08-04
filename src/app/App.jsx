import { Router } from 'react-router-dom';
import { Layout } from './components';
import AppContext from './appContext';
import history from '../history';
import routes from './RootRoutes';
import { Provider } from 'react-redux';
import store from './state/store';

function App() {
	return (
		<AppContext.Provider value={{ routes }}>
			<Provider store={store}>
				<Router history={history}>
					<Layout />
				</Router>
			</Provider>
		</AppContext.Provider>
	);
}

export default App;
