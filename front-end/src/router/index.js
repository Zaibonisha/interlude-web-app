import React , {useEffect, useState} from 'react'
import {createBrowserRouter, RouterProvider, Navigate, useNavigate} from 'react-router-dom'
import MainDashboard from './Dashboard'
import App from '../App'
import { SignIn, SignUp, ErrorPage, Breaks, Exercise, Settings, Navbar, Sidebar, Dashboard } from '../pages'
import API from '../../src/services'

const AuthRoute = ({user, children}) => {
    const [authenticated, setAuthenticated] = useState(false);  
    const navigate = useNavigate();
    const verifySession = () => {
        if (localStorage.getItem('token')) {
            setAuthenticated(true);
        } else {
            navigate('/sign-in');
        }
    }

	useEffect(() => {
		verifySession();
	}, []);

	return authenticated ? children : null;
}

const NoAuthRoute = ({user, children}) => {
    if (localStorage.getItem('token')) {
        return <Navigate to ="/" replace/>
    }

    return children
}
const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <AuthRoute>
                <MainDashboard />
            </AuthRoute>
        ),
        children: [
            {
                path: 'dashboard',
                element: <Dashboard />
            },
            {
                path: '/breaks',
                element: <Breaks/>
            },
            {
                path: 'exercise',
                element: <Exercise/>
            },
            {
                path: 'settings',
                element: <Settings/>
            },
        ]
    },
    {
        path: '/sign-in',
        element: (
            <NoAuthRoute>
                <SignIn />
            </NoAuthRoute>
        ),
        errorElement: <ErrorPage />
    },
    {
        path: '/sign-up',
        element: (
            <NoAuthRoute>
                <SignUp />
            </NoAuthRoute>
        ),
        errorElement: <ErrorPage />
        
    }
])

const Routers = () => {
    return <RouterProvider router={router} />
}

export default Routers;