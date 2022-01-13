import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import { ContexDefault } from '../App';

//TODO
//Investigate more about http only flag and try to implement it
//use react context (or redux) to store the JWT returned from the service
// implement styles, first using styled components, then evaluate
//the option of a css framework

const Login = () => {
  const [value, setValue] = useState({ username: '', password: '' });

  const { putJwt, host } = useContext(ContexDefault);
  const navigate = useNavigate()

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSend = {
      username: value.username,
      password: value.password,
    };
    const response = await axios.post(host + 'api/login', dataToSend);
    console.log(response);
    putJwt(response.data.token);

    if (response.status === 200) {
      navigate('/dashboard');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <span>Usuario</span>
        <input
          type='text'
          name='username'
          value={value.username}
          onChange={handleChange}
        />
        <br />
        <span>Contraseña</span>
        <input
          type='password'
          name='password'
          value={value.password}
          onChange={handleChange}
        />
        <input type='submit' value='Iniciar sesión' />
      </form>
    </div>
  );
};

export default Login;
