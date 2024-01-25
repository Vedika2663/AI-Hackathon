import React, { useState } from 'react';
import HomePage from './homePage';
import NextPage from './NextPage';
import FAQ from './FAQ';
import Contact from './Contact';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
const App=()=>{
  const [java,setJava]=useState('');
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/home",
      element: <NextPage 
      language="java"
      value={java}
      onChange={setJava}
      />,
    },
    {
      path: "/faq",
      element: <FAQ />,
    },
    {
      path: "/contact",
      element: <Contact />,
    }
  ]);
  return (
    <div className="App">
    <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>
    </div>
  );
}
export default App;


