import React , {useState} from 'react'
import {createBrowserRouter, RouterProvider, Navigate, useNavigate} from 'react-router-dom'
import { SignIn, SignUp, ErrorPage } from '../pages'


const router = createBrowserRouter([
    {
        path: '/',
        element: <SignIn />,
        errorElement: <ErrorPage />
    },
    {
        path: '/sign-in',
        element: <SignIn/>,
        errorElement: <ErrorPage />
    },
    {
        path: '/sign-up',
        element: <SignUp/>,
        errorElement: <ErrorPage />
        
    }
])

const Routers = () => {
    return <RouterProvider router={router} />
}

export default Routers;