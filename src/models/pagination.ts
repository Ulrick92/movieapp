// Models
import { MovieModel } from "./";

interface PaginationModel{
    results:MovieModel[],
    total_pages:number,
    previous_page:number,
    next_page:number
}

export default PaginationModel