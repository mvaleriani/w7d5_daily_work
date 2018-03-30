import React from 'react';
import ReactDOM from 'react-dom';
import {login, logout, signUp} from './util/sessionAPIUtil';

document.addEventListener('DOMContentLoaded', ()=>{
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
  window.login = login;
  window.logout = logout;
  window.signUp = signUp;
});
