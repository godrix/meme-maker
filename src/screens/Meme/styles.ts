import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
  align-items:center;
  
`;

export const Input = styled.TextInput`
width:90%;
margin:10px;
font-size:18px;
height:40px;
padding-left:15px;
border-color:blue;
border-width:1px;
border-style:solid;
border-radius:10px;
`;



export const Text = styled.Text`
  font-family: 'Anton_400Regular';
  font-size: 21px;
`;

export const MemeImage = styled.Image.attrs({
  resizeMode:"stretch"
})`
width:100%;
height:350px;
`;
