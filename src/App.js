import { createContext, useContext, useState } from 'react';
import Login from './components/Login';

const host = 'http://127.0.0.1:5000/';

export const ContexDefault = createContext({ jwt: '' });

const DefaultProvider = ({ children }) => {
  const [jwt, setJwt] = useState('');
  const value = { jwt: jwt, setJwt: (jwt) => setJwt(jwt) };
  return (
    <ContexDefault.Provider value={value}>
      {children}
    </ContexDefault.Provider>
  );
};

function App() {
  return (
    <DefaultProvider>
      <Login host={host} />
    </DefaultProvider>
  );
}

export default App;
