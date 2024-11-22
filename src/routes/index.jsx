import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Contracts from '../pages/Contracts';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: '/contracts',
    element: (
      <Layout>
        <Contracts />
      </Layout>
    ),
  },
]);
