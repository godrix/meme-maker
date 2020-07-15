import {useState, useEffect} from 'react';

export const useFetch = (url:string, options={})=>{
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(()=> {
      (async ()=>{
        try {
          const res = await fetch(url, options);
          const json = await res.json();
          setResponse(json);
        } catch (error) {
          setError(error);
        }
      })()
    },[]);

    return {response, error};
}