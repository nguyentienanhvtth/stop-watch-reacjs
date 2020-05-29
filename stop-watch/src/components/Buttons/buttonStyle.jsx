import styled from 'styled-components';

export const ClearFix = styled.div`
clear: both;
`;

export const BtnBox = styled.div``;

export const BtnLeft = styled.div`
float: left;
width: 50%;
text-align: center;
`;

export const BtnRight = styled.div`
float: right;
text-align: center;
width: 50%;
`;

export const BtnLap = styled.button`
&:disabled{
  cursor: no-drop;
  background-color: #e6e6e6;
}
width: 60px;
height: 60px;
border-radius: 50%;
outline: none;
border: 1px solid gray;
cursor: pointer;
background-color: #fff;
&:active{
  background-color: gray;
}
`;

export const BtnRestart = styled.button`

&:disabled{
  cursor: no-drop;
  background-color: #e6e6e6;
}
width: 60px;
height: 60px;
border-radius: 50%;
outline: none;
border: 1px solid gray;
cursor: pointer;
background-color: #fff;
&:active{
  background-color: gray;
}
`;

export const BtnStart = styled.button`
&:disabled{
  cursor: no-drop;
  background-color: #e6e6e6;
}
width: 60px;
height: 60px;
border-radius: 50%;
outline: none;
border: 1px solid gray;
cursor: pointer;
background-color: greenyellow;
`;

export const BtnStop = styled.button`
&:disabled{
  cursor: no-drop;
  background-color: #e6e6e6;
}
width: 60px;
height: 60px;
border-radius: 50%;
outline: none;
border: 1px solid gray;
cursor: pointer;
background-color: red;
`;
