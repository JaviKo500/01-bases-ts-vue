const apiKey = 'JYFliq5Q3HMvcD6QLDTYzXDx6EvzlQfN';

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
.then((response) => {   
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
});