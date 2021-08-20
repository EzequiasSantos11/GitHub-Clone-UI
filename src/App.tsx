import React, {useState} from  'react';
import {ThemeProvider} from 'styled-components';
import 'react-calendar-heatmap/dist/styles.css';
import GlobalsStyles from './styles/GlobalsStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Profile from './pages/Profile';
import Repo from './pages/Repo';
import {Footer} from './components/Footer'
import { ThemeName, themes } from './styles/themes';
function App() {
  const [themeName, setThemeName] = useState<ThemeName>('light');
  const currentTheme = themes[themeName];

  return (
    <ThemeProvider theme={currentTheme}>
      <BrowserRouter>
        <Header themeName={themeName} setThemeName={setThemeName}/>
        <Routes>
          <Route path="/" element={<Profile/>} />
          <Route path="/:username" element={<Profile/>}/>
          <Route path="/:username/:reponame" element={<Repo/>}/>
        </Routes>
        <Footer/>
        <GlobalsStyles/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
