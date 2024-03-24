import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Start from './pages/Start';
import StartDescription from './pages/StartDescription';
import DongsanDescription from './pages/DongsanDescription';
import DongsanQuiz from './pages/DongsanQuiz';
import GoToOffice from './pages/GoToOffice';
import OfficeDescription from './pages/OfficeDescription';
import OfficeQuiz from './pages/OfficeQuiz';
import GoToPostOffice from './pages/GoToPostOffice';
import PostOfficeQuiz from './pages/PostOfficeQuiz';
import GoToStatue from './pages/GoToStatue';
import StatueDescription from './pages/StatueDescription';
import StatueQuiz from './pages/StatueQuiz';
import GoToFinal from './pages/GoToFinal';

export default function DefaultRouter() {
  return (
    <Router basename="plutogame">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Start" element={<Start />} />
        <Route path="/StartDescription" element={<StartDescription />} />
        <Route path="/DongsanDescription" element={<DongsanDescription />} />
        <Route path="/DongsanQuiz" element={<DongsanQuiz />} />
        <Route path="/GoToOffice" element={<GoToOffice />} />
        <Route path="/OfficeDescription" element={<OfficeDescription />} />
        <Route path="/OfficeQuiz" element={<OfficeQuiz />} />
        <Route path="/GoToPostOffice" element={<GoToPostOffice />} />
        <Route path="/PostOfficeQuiz" element={<PostOfficeQuiz />} />
        <Route path="/GoToStatue" element={<GoToStatue />} />
        <Route path="/StatueDescription" element={<StatueDescription />} />
        <Route path="/StatueQuiz" element={<StatueQuiz />} />
        <Route path="/GoToFinal" element={<GoToFinal />} />
      </Routes>
    </Router>
  );
}
