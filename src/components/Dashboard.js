import { useContext } from 'react';
import { ContexDefault } from '../App';

const Dashboard = () => {
  const { jwt, host } = useContext(ContexDefault);

  console.log(jwt)

  return (<h1>Hola mundo {jwt} y {host} </h1>)
};


export default Dashboard