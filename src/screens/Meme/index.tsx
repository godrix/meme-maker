import React, {useState, useEffect} from 'react';
import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system';

import {useNavigation, useRoute} from '@react-navigation/native';
import qs from 'qs';

import Button from '../../components/Button';

import { Container, MemeImage, Input } from './styles';

interface RouterParams {
  meme:{
    id: string;
    name: string;
    url: string;
    width: number,
    height: number,
    box_count: number
  }
}

const Meme: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const routeParams = route.params as RouterParams;
  const [load, setLoad] = useState(false);
  const [image, setImage] = useState(routeParams.meme.url);
  const [boxes, setBoxes] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  useEffect(()=>{
      navigation.setOptions({title:routeParams.meme.name})
    },[]);

  const handleInputChange = (index:number, text:string) =>{
   const values: string[] = boxes;
   values[index] = text
   setBoxes(values)
  }

  const handleShared = async ()=>{
    if (!(await Sharing.isAvailableAsync())) {
      alert(`Uh oh, sharing isn't available on your platform`);
      return;
    }

    const {uri} = await FileSystem.downloadAsync(
      image,
      FileSystem.documentDirectory + '.jpg'
    );

    await Sharing.shareAsync(uri);
  }

  const handleSubmit = async ()=>{
    if(load){
      return;
    }
    setLoad(true);
    const params = qs.stringify({
      template_id:routeParams.meme.id,
      username:'reactnative',
      password:'gfdshgoijp9ç49tjgr9g',
      boxes:boxes.map(text=> ({text}))
    });

    const resp = await fetch(`https://api.imgflip.com/caption_image?${params}`);
    const response = await resp.json();

    const  {data:{url}} = response;
    setImage(url);
    setLoad(false);
    setDone(true);
  }
  return (
    <Container>
      <MemeImage source={{uri:image}}/>
      {
        (new Array(routeParams.meme.box_count)).fill('').map((_, index)=>(
          <Input
           key={String(Math.random())} 
           placeholder={`input #${index+1}`} 
           onChangeText={text => handleInputChange(index, text)}
           />
        ))
      }
      {done?
      (<Button 
        label="Compartilhar" 
        onPress={handleShared} 
        icon="share-2"
        />):
    (<Button 
      label="make a meme" 
      onPress={handleSubmit} 
      icon="plus-circle"
      load={load}
      />)
    }
    </Container>
  );
}

export default Meme;