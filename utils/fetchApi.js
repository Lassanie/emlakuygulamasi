import axios from 'axios';


export const baseUrl = 'https://bayut.p.rapidapi.com'


  export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'fcf1818480msh59657cb715b4b32p1897cbjsna11598286a41',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          },
    });
    
  return data;
  }
