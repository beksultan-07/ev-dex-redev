import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/home';
import DexInfo from './pages/dex_info';

const App: React.FC = () => {
	const [dark, setDark] = React.useState(false);

	return (
		<>
			<Layout dark={dark} setDark={setDark}>
				<Routes>
					<Route path="/" element={<Home setDark={setDark}/>}/>
					<Route path="/dex-info" element={<DexInfo setDark={setDark}/>}/>
				</Routes>
			</Layout>
		</>
	);
};

export default App;
