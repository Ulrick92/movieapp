// Actor Model
interface Actor{
    adult?: Boolean,
    also_known_as?: string[],
    biography?:string,
    birthday?: string,
    deathday?: string,
    gender?: number,
    homepage?: string,
    id: number,
    imdb_id?: string,
    known_for_department?: string,
    name: string,
    place_of_birth?: string,
    popularity?: number,
    profile_path?: string
    original_name?: string,
    character?: string
}

export default Actor