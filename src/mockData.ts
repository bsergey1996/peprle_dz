import img1 from './assets/Card Image.png';
import img2 from './assets/Card Image (1).png';
import img3 from './assets/Card Image (2).png';
import img4 from './assets/Card Image (3).png';
import img5 from './assets/Card Image (4).png';
import img6 from './assets/Card Image (5).png';
import img7 from './assets/Card Image (6).png';
import img8 from './assets/Card Image (7).png';

export interface Movie {
  id: number;
  title: string;
  rating: number;
  image: string;
  isFavorite: boolean;
}

export const MOVIE_DATA: Movie[] = [
  {
    id: 1,
    title: 'Черное зеркало',
    rating: 8.8,
    image: img1,
    isFavorite: false,
  },
  {
    id: 2,
    title: 'Очень странные дела',
    rating: 8.7,
    image: img2,
    isFavorite: true,
  },
  {
    id: 3,
    title: 'Одни из нас',
    rating: 9.2,
    image: img3,
    isFavorite: false,
  },
  {
    id: 4,
    title: 'Ведьмак',
    rating: 8.0,
    image: img4,
    isFavorite: false,
  },
  {
    id: 5,
    title: 'Мандалорец',
    rating: 8.7,
    image: img5,
    isFavorite: true,
  },
  {
    id: 6,
    title: 'Игра в кальмара',
    rating: 8.1,
    image: img6,
    isFavorite: false,
  },
  {
    id: 7,
    title: 'Локи',
    rating: 8.2,
    image: img7,
    isFavorite: false,
  },
  {
    id: 8,
    title: 'Пацаны',
    rating: 8.7,
    image: img8,
    isFavorite: false,
  },
];
