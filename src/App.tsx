import React from 'react';
import './App.css';
import Layout from './components/layout';
import Banner from './components/banner';
import Advantage from './components/advantage';
import OurAdvantages from './components/our_advantages';

const App: React.FC = () => (
	<>
		<Layout>
			<Banner/>
			<Advantage/>
			<OurAdvantages/>
		</Layout>
	</>
);

export default App;
