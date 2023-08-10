import './App.css';
import { Home, Watch } from '@/pages';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/watch/:id" element={<Watch />} />
      </Route>
    </Routes>
  );
};

export default App;
