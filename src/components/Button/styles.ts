import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
background-color: blue;
height: 60px;
flex-direction: row;
border-radius: 10px;
overflow: hidden;
align-items: center;
margin: 8px;
`;
export const ButtonIcon = styled.View`
 height: 60px;
  width: 60px;
  background-color: rgba(0, 0, 0, 0.1);
  border-top-left-radius:10px;
  border-bottom-left-radius:10px;
  justify-content: center;
  align-items: center;
   
`;

export const ButtonText = styled.Text`
flex: 1;
justify-content: center;
text-align: center;
color: #fff;
font-family: 'Anton_400Regular';
font-size: 18px;
`;