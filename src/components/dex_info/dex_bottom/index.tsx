import React from 'react';
import styled from 'styled-components';
import Articles from '../articles/index';
import Description from '../description/index';

const Wrap = styled.div`
	display: flex;
	align-items: flex-start;
  justify-content: space-between;
  position: relative;
	z-index: 1;
	@media(max-width: 900px){
		flex-direction: column-reverse;
	}
`;

const DexBottom: React.FC = () => (
	<>
		<Wrap>
			<Description/>
			<Articles/>
		</Wrap>
	</>
);

export default DexBottom;
