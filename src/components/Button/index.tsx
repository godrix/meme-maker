import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Feather as Icon} from '@expo/vector-icons';
import {BaseButtonProperties} from 'react-native-gesture-handler';

import { Container, ButtonIcon, ButtonText } from './styles';

interface ButtonProps extends BaseButtonProperties{
  icon:string;
  iconColor?:string;
  iconSize?:number;
  label:string;
  load?:boolean;
}

const Button: React.FC<ButtonProps> = ({icon, label, iconColor='#fff', iconSize=24, load=false, ...rest }) => {
  return (
    <Container {...rest}>
      <ButtonIcon>
        {
          load ?
          (<ActivityIndicator />):
          (<Icon name={icon} color={iconColor} size={iconSize}/>)
        }
      </ButtonIcon>
      <ButtonText>
        {label}
      </ButtonText>
    </Container>
  );
}

export default Button;