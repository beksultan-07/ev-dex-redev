import React from 'react';
import './App.css';
import Layout from './components/layout';
import Banner from './components/banner';

const App: React.FC = () => (
	<>
		<Layout>
			<Banner/>
		</Layout>
	</>
);

export default App;
