import { HomePage, NotFoundPage, ProfilePage, WatchPage } from '@/pages';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '@/components/Layout';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/watch/:id" element={<WatchPage />} />
        <Route path="/:username" element={<ProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
