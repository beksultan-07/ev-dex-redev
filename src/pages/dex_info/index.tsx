import React from 'react';
import DexTop from '../../components/dex_info/dex_top';
import styled from 'styled-components';
import DexBottom from '../../components/dex_info/dex_bottom';
import {Container} from '../../UI/UI';
import Request from '../../components/dex_info/request';

const Wrap = styled.section`
  padding-top: 190px;
  position: relative;
  ::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
  	background: #111A23;
    height: 950px;
  	width: 100%;
  }

  @media (max-width: 900px) {
    padding-top: 130px;
  }
`;

const DexInfo = () => (
	<>
		<Wrap>
			<Container>
				<DexTop/>
				<DexBottom/>
				<Request/>
			</Container>
		</Wrap>
	</>
);

export default DexInfo;
