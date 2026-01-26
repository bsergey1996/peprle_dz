interface SearchMovie {
  '#TITLE': string;
  '#YEAR': number;
  '#IMDB_ID': string;
  '#IMG_POSTER': string;
  '#RANK': number;
}

export interface MovieDetail {
  short: {
    name: string;
    image: string;
    description: string;
    aggregateRating: {
      ratingValue: number;
    };
    genre: string[];
    actor: Array<{ name: string }>;
    director: Array<{ name: string }>;
    datePublished: string;
  };
}

export interface Movie {
  id: string;
  title: string;
  rating: number;
  image: string;
  year: number;
}

export interface MovieDetails extends Movie {
  description: string;
  genres: string[];
  actors: string[];
  directors: string[];
  releaseDate: string;
}

const SEARCH_API = 'https://search.imdbot.workers.dev/';
const DETAIL_API = 'https://search.imdbot.workers.dev/';

export async function searchMovies(query: string): Promise<Movie[]> {
  try {
    const response = await fetch(`${SEARCH_API}?q=${encodeURIComponent(query)}`);
    if (!response.ok) throw new Error('Failed to fetch movies');
    
    const data = await response.json();
    
    if (!data.ok || !Array.isArray(data.description)) {
      return [];
    }

    return data.description.map((movie: SearchMovie) => ({
      id: movie['#IMDB_ID'],
      title: movie['#TITLE'],
      rating: movie['#RANK'] > 0 ? (movie['#RANK'] / 1000000) * 10 : 0,
      image: movie['#IMG_POSTER'] || '',
      year: movie['#YEAR'],
    }));
  } catch (error) {
    console.error('Error searching movies:', error);
    return [];
  }
}

export async function getMovieDetail(id: string): Promise<MovieDetails | null> {
  try {
    const response = await fetch(`${DETAIL_API}?tt=${id}`);
    if (!response.ok) throw new Error('Failed to fetch movie details');
    
    const data = await response.json();
    
    if (!data.short) {
      return null;
    }

    const movie = data.short;
    
    return {
      id: id,
      title: movie.name || '',
      rating: movie.aggregateRating?.ratingValue || 0,
      image: movie.image || '',
      year: new Date(movie.datePublished).getFullYear() || 0,
      description: movie.description || '',
      genres: Array.isArray(movie.genre) ? movie.genre : [],
      actors: Array.isArray(movie.actor) ? movie.actor.map((a: any) => a.name) : [],
      directors: Array.isArray(movie.director) ? movie.director.map((d: any) => d.name) : [],
      releaseDate: movie.datePublished || '',
    };
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
}
