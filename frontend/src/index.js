import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import '../src/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import PrivateRoute from './components/PrivateRoute';
import store from './store';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';

const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={ <HomeScreen />} />
      <Route path='/login' element={ <LoginScreen />} /> 
      <Route path='/register' element={ <RegisterScreen />} /> 
      {/* private routes can go inside this block */}
      <Route path='' element={<PrivateRoute />}>
        <Route path='/profile' element={ <ProfileScreen />} /> 
      </Route>
    </Route>   
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
     <React.StrictMode>
    <RouterProvider router={ router }/>
  </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
