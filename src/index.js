import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Components/Header";
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import CreateStudentComponent from "./Components/CreateStudentComponent";
import EditStudentComponent from "./Components/EditStudentComponent";
import StudentListComponent from "./Components/StudentListComponent";

  function AppLayout(){
    return(
      <div className="bg-white"> 
      <Header />
      <Outlet />
    </div>
    )
  }

  const appRouter=createBrowserRouter([{
    path: '/',
    element: <AppLayout />,
    children: [
    {
      path: '/',
      element: <CreateStudentComponent />
    },
    {
      path: '/CreateStudent',
      element: <CreateStudentComponent />
    },
    {
    path:'/EditStudent/:id',
    element:<EditStudentComponent />
  },
  {
    path:'/StudentList',
    element: <StudentListComponent />
  }
]
  }])

 
const root= ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);