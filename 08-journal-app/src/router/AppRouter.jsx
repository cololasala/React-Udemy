import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { Routes, Route } from 'react-router-dom';
import { JournalRoutes } from '../journal/routes/JournalRoutes'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/auth/*" element={<AuthRoutes/>}/>
        <Route path="/*" element={<JournalRoutes/>}/>
      </Routes>
    </>
  );
};
