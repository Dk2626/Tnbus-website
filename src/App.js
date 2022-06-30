import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutScreen from './Screens/AboutScreen';
import AdminScreen from './Screens/AdminScreen';
import ContactScreen from './Screens/ContactScreen';
import LoginScreen from './Screens/LoginScreen';
import SearchScreen from './Screens/SearchScreen';
import UserScreen from './Screens/UserScreen';
import './App.css';
import ScrollToTop from './ScrolltoTop';

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  if (isLogin === false) {
    return <LoginScreen />;
  } else
    return (
      <ScrollToTop>
        <Routes>
          <Route path='/' element={<SearchScreen />} />
          <Route path='about' element={<AboutScreen />} />
          <Route path='contact' element={<ContactScreen />} />
          <Route path='user' element={<UserScreen />} />
          <Route path='admin' element={<AdminScreen />} />
        </Routes>
      </ScrollToTop>
    );
};

export default App;
