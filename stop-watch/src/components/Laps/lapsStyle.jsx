import styled from 'styled-components';

export const LapComponent = styled.div``;

export const LapsBox = styled.div`
width: 80%;
margin: 0 auto;
margin-top: 20px;
`;

export const LapsList = styled.div`
height: 255px;
overflow-y: auto;
position: relative;
&::-webkit-scrollbar {
    width: 3px;
}
`;

export const UlLine = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
list-style: none;
padding-left: 0;
margin: 0;
`;

export const UlList = styled.div`
list-style: none;
padding-left: 0;
margin: 0;
&::after{
    content: "";
    clear: both;
}
`;

export const ListLapRender = styled.li`
height: 35px;
line-height: 35px;
border-bottom: 1px solid #80808047;
`;

export const ListLeft = styled.div`
float: left;
`;

export const ListRight = styled.div`
float: left;
float: right;
`;