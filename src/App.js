import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminScreen from './Screens/AdminScreen';
import LoginScreen from './Screens/LoginScreen';
import SearchScreen from './Screens/SearchScreen';
import UserScreen from './Screens/UserScreen';

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  if (isLogin === false) {
    return <LoginScreen />;
  } else
    return (
      <Routes>
        <Route path='/' element={<SearchScreen />} />
        <Route path='user' element={<UserScreen />} />
        <Route path='admin' element={<AdminScreen />} />
      </Routes>
    );
};

export default App;
