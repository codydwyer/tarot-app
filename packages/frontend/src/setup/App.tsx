import type { ReactElement } from 'react';
import { Route,  BrowserRouter as Router, Routes } from 'react-router-dom';
import { HomeLayout, DecksLayout, SpreadsLayout, PullLayout, CardsLayout, CreateCardLayout, CreateDeckLayout, CreateThemeLayout, CreateSpreadLayout } from '@layout/index';
import './styles.css'

export default ():ReactElement => <Router>
  <Routes>
    <Route path="/" element={<HomeLayout />} />
    <Route path="/cards" element={<CardsLayout />} />
    <Route path="/create-card" element={<CreateCardLayout />} />
    <Route path="/create-deck" element={<CreateDeckLayout />} />
    <Route path="/create-spread" element={<CreateSpreadLayout />} />
    <Route path="/create-theme" element={<CreateThemeLayout />} />
    <Route path="/decks" element={<DecksLayout />} />
    <Route path="/pull" element={<PullLayout />} />
    <Route path="/spreads" element={<SpreadsLayout />} />
  </Routes>
</Router>;