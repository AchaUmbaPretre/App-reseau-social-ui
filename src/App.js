import './App.css';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { createBrowserRouter, RouterProvider, Route, Outlet, Navigate } from 'react-router-dom'
import Topbar from './composants/topbar/Topbar';
import LeftBar from './composants/leftBar/LeftBar';
import RightBar from './composants/rightBar/RightBar';
import Home from './pages/home/Home';
import Profil from './pages/profil/Profil';
import { useContext } from 'react';
import { DarkContext } from './context/ModeContext';
import { AuthContext } from './context/authContext';


function App() {

  const { currentUser }= useContext(AuthContext)

  const {darkMode} = useContext(DarkContext);

  const Layout = ()=>{
    return(
      <div className= {`theme-${darkMode ? "dark" : "light"}`}>
        <Topbar/>
        <div className="app-container">
          <LeftBar/>
          <div className="app-outlet">
            <Outlet/>
          </div>
          <RightBar/>
        </div>
      </div>
    )
  }

  const SecuriteRoute = ({children}) =>{
      if(!currentUser){
        return(
          <Navigate to="/login" />
        )
      }
      return children;
  }

  const router = createBrowserRouter([
      {
        path: '/',
        element: (<SecuriteRoute><Layout/></SecuriteRoute>),
        children:[
          {
            path: '/',
            element: <Home/>,
          },
          {
            path: '/profil/:id',
            element: <Profil/>
          }
        ]
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register/>
      }
  ]);

  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}

export default App;
