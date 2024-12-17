import { giphyApi } from "./10-axios"

export const getImage = async (): Promise<string> => {
   try {
      const response = await giphyApi.get('/random');
      return response.data.data.images.downsized_large.url;
   } catch (error) {
      throw'Url not found';
   }
}



console.log('<--------------- JK 11-async-await --------------->');
getImage().then((image) => {
    console.log(image);
}).catch((error) => {
    console.log(error);
});