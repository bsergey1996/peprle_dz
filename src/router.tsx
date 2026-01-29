import { createBrowserRouter, Navigate } from 'react-router-dom';
import { useUser } from './context/UserContext';
import Layout from './Components/Layout/Layout';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import MovieDetailPage from './pages/MovieDetailPage';
import Favorites from './pages/Favorites';
import { movieDetailLoader } from './services/loaders';

const PublicOnlyRoute = ({ children }: { children: React.ReactNode }) => {
  const { currentUser } = useUser();
  
  if (currentUser) {
    return <Navigate to="/" replace />;
  }
  
  return <>{children}</>;
};

const router = createBrowserRouter([
  {
    path: '/login',
    element: (
      <PublicOnlyRoute>
        <LoginPage />
      </PublicOnlyRoute>
    ),
  },
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'favorites',
        element: <Favorites />,
      },
      {
        path: 'movie/:id',
        element: <MovieDetailPage />,
        loader: movieDetailLoader,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/login" replace />,
  },
]);

export default router;
