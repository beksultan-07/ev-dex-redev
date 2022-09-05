import React from 'react';
import {Container, Title, Wrap} from '../../UI/UI';
import styled from 'styled-components';

const Content = styled.div`
	::before, ::after{
    content: "";
    display: block;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 40%;
    height: 100%;
    z-index: 2;
    background: linear-gradient(271.49deg, rgb(10, 29, 47) 30.42%, rgba(255, 255, 255, 0) 95.89%);
	}
	::before{
		transform: rotate(180deg);
		left: 0;
	}
`;

const Documents = () => (
	<>
		<Wrap bg={true}>
			<Container>
				<Title indentBottom={'90px'} textAlign={true} color={'#fff'}>Документы</Title>
				<Content></Content>
			</Container>
		</Wrap>
	</>
);

export default Documents;
