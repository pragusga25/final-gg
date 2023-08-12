import { Home, Profile, Watch } from '@/pages';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '@/components/Layout';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/watch/:id" element={<Watch />} />
        <Route path="/:username" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default App;
