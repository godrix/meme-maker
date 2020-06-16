import React, {useEffect} from 'react';
import {Anton_400Regular, useFonts} from '@expo-google-fonts/anton';
import * as SplashScreen from 'expo-splash-screen';
import Routes from './src/routes';

const App: React.FC = () => {
  
  const [fontsLoaded] = useFonts({
    Anton_400Regular
  })

  useEffect(()=>{
    (async ()=>{
      await SplashScreen.preventAutoHideAsync();

      if(fontsLoaded){
        await SplashScreen.hideAsync();
      }
    })();

   
  },[fontsLoaded])

  if(!fontsLoaded){
    return <></>
  }
  return <Routes />;
}

export default App;