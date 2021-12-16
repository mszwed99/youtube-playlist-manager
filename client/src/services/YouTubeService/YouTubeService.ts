
import axios from 'axios';

export const getVideosByPhrase = (phrase: string) => axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${phrase}&key=${process.env.REACT_APP_YT_API_KEY2}`);  

export const getVideoDetailsById = (id: string) => axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${process.env.REACT_APP_YT_API_KEY2}`);