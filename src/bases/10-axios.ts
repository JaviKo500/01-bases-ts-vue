import axios from 'axios';

const apiKey = 'JYFliq5Q3HMvcD6QLDTYzXDx6EvzlQfN';

export const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey
    }
});

giphyApi.get('/random')
.then((response) => {
    console.log(response.data);
})
.catch((error) => {
    console.log(error);
});