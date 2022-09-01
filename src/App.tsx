import React from 'react';
import './App.css';
import Layout from './components/layout';
import Banner from './components/banner';
import Advantage from './components/advantage';

const App: React.FC = () => (
	<>
		<Layout>
			<Banner/>
			<Advantage/>
		</Layout>
	</>
);

export default App;
