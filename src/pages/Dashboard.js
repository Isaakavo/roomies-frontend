import { useContext } from 'react';
import { ContexDefault } from '../App';

import Table from '../components/Table';

const Dashboard = () => {
  const { jwt, task, host } = useContext(ContexDefault);

  return (
    <Table/>
  );
};

export default Dashboard;
