import type { ReactElement } from 'react';
import { Route,  BrowserRouter as Router, Routes } from 'react-router-dom';
import { HomeLayout, DecksLayout, SpreadsLayout, PullLayout, CardsLayout } from '@layout/index';
import './styles.css'

export default ():ReactElement => <Router>
  <Routes>
    <Route path="/" element={<HomeLayout />} />
    <Route path="/cards" element={<CardsLayout />} />
    <Route path="/decks" element={<DecksLayout />} />
    <Route path="/pull" element={<PullLayout />} />
    <Route path="/spreads" element={<SpreadsLayout />} />
  </Routes>
</Router>;