import React from 'react';
import Banner from '../../components/banner';
import Advantage from '../../components/advantage';
import OurAdvantages from '../../components/our_advantages';
import HowItWorks from '../../components/how_it_works';
import Documents from '../../components/documents';
import Partners from '../../components/partners';
import Slider from '../../components/slider';

const Home: React.FC = () => (
	<>
		<Banner/>
		<Advantage/>
		<OurAdvantages/>
		<Slider/>
		<HowItWorks/>
		<Documents/>
		<Partners/>
	</>
);

export default Home;
