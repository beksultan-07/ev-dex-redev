import React from 'react';
import './App.css';
import Layout from './components/layout';
import Banner from './components/banner';
import Advantage from './components/advantage';
import OurAdvantages from './components/our_advantages';
import HowItWorks from './components/how_it_works';
import Documents from './components/documents';

const App: React.FC = () => (
	<>
		<Layout>
			<Banner/>
			<Advantage/>
			<OurAdvantages/>
			<HowItWorks/>
			<Documents/>
		</Layout>
	</>
);

export default App;
