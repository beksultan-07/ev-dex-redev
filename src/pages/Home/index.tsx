import React from 'react';
import Banner from '../../components/banner';
import Advantage from '../../components/advantage';
import OurAdvantages from '../../components/our_advantages';
import HowItWorks from '../../components/how_it_works';
import Documents from '../../components/documents';
import Partners from '../../components/partners';

const Home: React.FC = () => (
	<>
		<Banner/>
		<Advantage/>
		<OurAdvantages/>
		<HowItWorks/>
		<Documents/>
		<Partners/>
	</>
);

export default Home;
