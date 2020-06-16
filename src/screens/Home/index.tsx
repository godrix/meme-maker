import React, {useState, useEffect} from 'react';
import { FlatList } from 'react-native';

import Card from '../../components/Card';

import { Container } from './styles';

interface MemeResponse {
    id: string;
    name: string;
    url: string;
    width: number;
    height: number;
    box_count: number;
}

const Home: React.FC = () => {
  const [templates, setTemplates] = useState<MemeResponse[]>([]);

  useEffect(()=> {
      (async ()=>{
        const resp = await fetch('https://api.imgflip.com/get_memes');
        const {data: {memes}} = await resp.json();

        setTemplates(memes);
      })()
    },[]);

  return (
    <Container>
      <FlatList 
        data={templates}
        renderItem={({item})=>(<Card data={item}/>)}
        keyExtractor={(item)=> item.id}
        numColumns={2}
      />
    </Container>
  );
}

export default Home;