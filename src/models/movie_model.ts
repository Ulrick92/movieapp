// Genres Model
interface Genres{
    id?: number,
    name?: string
}

// ProductionCompanies Model
interface ProductionCompanies{
    id?: number,
    logo_path?: string,
    name?: string,
    origin_country?: string
}

// ProductionCountries
interface ProductionCountries{
    iso_3166_1?: string,
    name?: string
}

// SpokenLanguages
interface SpokenLanguages{
    english_name?: string,
    iso_639_1?: string,
    name?: string
}

// Movie Model
interface MovieModel {
    release_date?: string,
    vote_average?: number,
    adult?: boolean,
    backdrop_path?: string,
    belongs_to_collection?: object,
    budget?: number,
    genres?: Genres[],
    homepage?: string,
    id?: number,
    imdb_id?: string,
    original_language?: string,
    original_title?: string,
    overview?: string,
    popularity?: number,
    poster_path?: string,
    production_companies?: ProductionCompanies[],
    production_countries?: ProductionCountries[],
    revenue?: number,
    runtime?: number,
    spoken_languages?: SpokenLanguages[],
    status?: string,
    tagline?: string,
    title?: string,
    video?: boolean,
    genre_ids?:number[]
}

export default MovieModel