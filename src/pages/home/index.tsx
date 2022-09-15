import React, {useEffect} from 'react';
import Banner from '../../components/banner';
import Advantage from '../../components/advantage';
import OurAdvantages from '../../components/our_advantages';
import HowItWorks from '../../components/how_it_works';
import Documents from '../../components/documents';
import Partners from '../../components/partners';
import Slider from '../../components/slider';

type Props = {
	dark: boolean;
	setDark: React.Dispatch<React.SetStateAction<boolean>>;
};
const Home: React.FC<Props> = ({dark, setDark}) => {
	useEffect(() => {
		setDark(false);
	}, [setDark]);
	return (
		<>
			<Banner/>
			<Advantage/>
			<OurAdvantages/>
			<Slider setDark={setDark}/>
			<HowItWorks/>
			<Documents/>
			<Partners/>
		</>
	);
};

export default Home;
