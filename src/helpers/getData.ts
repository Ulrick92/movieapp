// Axios Instance
import apiMovie from "../conf/api.movie";

const getData = async <T extends unknown> (url:string):Promise<T> => {
  try {
    const response = await apiMovie.get(url);

    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Aucun objet retourné")
  }
};

export default getData;
