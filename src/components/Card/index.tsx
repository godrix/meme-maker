import React from 'react';
import { useNavigation } from '@react-navigation/native';

import layout from '../../constants/layout';

import { Container, Img } from './styles';

interface CardProps{
  data : {
    id: string;
    name: string;
    url: string;
    width: number,
    height: number,
    box_count: number
  },
}

const Card: React.FC<CardProps> = ({data}) => {
  const size = layout.width / 2;
  const navigation = useNavigation();

  const handleMakeMeme = ()=>{
    navigation.navigate('Meme', {meme:data});
  }

  return (
    <Container onPress={handleMakeMeme} activeOpacity=
    {0.8}>
      <Img source={{uri:data.url}} style={{height:size, width:size}} resizeMode="stretch" />
  </Container>
  );
}

export default Card;