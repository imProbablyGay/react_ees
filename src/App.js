import React, {useState, useMemo, useEffect} from 'react';
import { BrowserRouter, Link, Route, Routes, Navigate} from 'react-router-dom';
import About from './pages/About';
import Posts from './pages/Posts';
import './App.css';
import NavBar from 'components/NavBar';
import CertainPost from 'pages/CertainPost';
import { privateRoutes, publicRoutes } from 'routes/routes';
import Error from './pages/Error'
import { AuthContext } from 'context';
import Router from 'components/Router';

function App() {
  let [isAuth, setIsAuth] = useState(false);
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }

    setIsLoading(false)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        isAuth, setIsAuth, isLoading
      }}
    >
      <BrowserRouter>
        <NavBar/>
        <Router/>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App;
