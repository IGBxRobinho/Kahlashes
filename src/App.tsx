import React from 'react';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import GlobalStyle from './Style/global';

const App: React.FC = () => {
	return(
		<>
			<SignUp />
			<GlobalStyle />
		</>

		)
}

export default App;
