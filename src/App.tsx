import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/Home';
import DexInfo from './pages/dex_info';

const App: React.FC = () => (
	<>
		<Layout>
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/dex-info" element={<DexInfo/>}/>
			</Routes>
		</Layout>
	</>
);

export default App;
