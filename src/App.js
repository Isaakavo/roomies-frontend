import { createContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

export const ContexDefault = createContext({
  jwt: '',
  putJwt: () => {},
  host: 'http://127.0.0.1:5000/',
});

const DefaultProvider = ({ children }) => {
  const [jwt, setJwt] = useState('');
  const value = {
    jwt,
    putJwt: (data) => setJwt(data),
    host: 'http://127.0.0.1:5000/',
  };
  return (
    <ContexDefault.Provider value={value}>{children}</ContexDefault.Provider>
  );
};

function App() {
  return (
    <DefaultProvider>
      <Routes>
        <Route path='login' element={<Login />}></Route>
        <Route path='dashboard' element={<Dashboard />}></Route>
      </Routes>
    </DefaultProvider>
  );
}

export default App;
