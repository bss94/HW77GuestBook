import {createRoot} from 'react-dom/client';
import App from './App';
import {Provider} from 'react-redux';
import {CssBaseline} from '@mui/material';
import {store} from './app/store';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ToastContainer position="bottom-left"/>
    <CssBaseline/>
    <App/>
  </Provider>,
);
