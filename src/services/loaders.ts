import { getMovieDetail, MovieDetails } from './movieApi';

export async function movieDetailLoader({ params }: { params: { id: string } }): Promise<MovieDetails | null> {
  if (!params.id) {
    return null;
  }
  
  // Format ID to IMDB format if needed
  let formattedId = params.id;
  if (!formattedId.startsWith('tt')) {
    formattedId = `tt${formattedId}`;
  }
  
  try {
    const movie = await getMovieDetail(formattedId);
    return movie || null;
  } catch (error) {
    console.error(`Error loading movie ${formattedId}:`, error);
    return null;
  }
}
