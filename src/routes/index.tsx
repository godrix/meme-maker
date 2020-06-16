import * as React from 'react';
import {Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Meme from '../screens/Meme';

import assets from '../constants/assets';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{
            headerTitle:()=>(
              <Image source={assets.logo} 
              style={{ width: 250, height: 70 }}
              resizeMode="contain"
              />
            )
          }} />
        <Stack.Screen name="Meme" component={Meme} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;