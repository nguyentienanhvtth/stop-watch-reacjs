import styled from 'styled-components';
import iphoneBg from './images/299px-IPhone_X.png'

export const AppBox = styled.div`
margin: 0 auto;
max-width: 300px;
height: 600px;
margin-top: 50px;
`;

export const IphoneBg = styled.div`
height: 100%;
background-image: url(${iphoneBg});
background-repeat: no-repeat;
background-size: cover;
`;