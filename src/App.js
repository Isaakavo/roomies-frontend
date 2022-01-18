import { createContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

export const ContexDefault = createContext({
  jwt: '',
  putJwt: () => {},
  host: 'http://127.0.0.1:5000/api/',
  tasks: {},
  putTasks: () => {},
});

const DefaultProvider = ({ children }) => {
  const [jwt, setJwt] = useState('');
  const [tasks, setTasks] = useState({});
  const value = {
    jwt,
    putJwt: (data) => setJwt(data),
    host: 'http://127.0.0.1:5000/api/',
    tasks,
    putTasks: (data) => setTasks(data),
  };
  return (
    <ContexDefault.Provider value={value}>{children}</ContexDefault.Provider>
  );
};

function App() {
  return (
    <DefaultProvider>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='dashboard' element={<Dashboard />}></Route>
      </Routes>
    </DefaultProvider>
  );
}

export default App;
