import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Provider } from 'react-redux';
import { store } from './redux/store';
import {

  RouterProvider,
} from "react-router-dom";
import "./index.css";
import router from './routes/MainRoutes.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} >
       
      </RouterProvider>
    </Provider >
  </React.StrictMode>,
)
