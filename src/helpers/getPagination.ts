// Axios Instance
import apiMovie from "../conf/api.movie";
// Models
import { PaginationModel } from "../models";

const getPagination = async (url:string, page:number, isquery?:string):Promise<PaginationModel> => {
  try {
    const response = await apiMovie.get(
      url
      // `${url}${isquery ? "&" : "?"}page=${page}`
    ,{params:{
        ...(isquery && {query: isquery}),
        page
    }});

    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Aucun objet retourné")
  }
};

export default getPagination;
