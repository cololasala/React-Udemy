import { Routes, Route } from 'react-router-dom';
import { JournalPage } from '../pages';

export const JournalRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<JournalPage/>}/>
      </Routes>
    </>
  );
};
