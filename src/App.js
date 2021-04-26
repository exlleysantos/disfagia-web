import React from 'react';

import Routes from './routes';
import { GlobalStyles } from './styles/GlobalStyles';
import { CombineProviders } from './store';

const App = () => (
	<CombineProviders>
		<Routes />
		<GlobalStyles />
	</CombineProviders>
);

export default App;
