import ReactDOM from 'react-dom';
import routes from './config/routes';
import axios from 'axios';

window.onload = () => axios.get('https://youtorial-backend.herokuapp.com/');

ReactDOM.render(
  routes,
  document.getElementById('app')
)
