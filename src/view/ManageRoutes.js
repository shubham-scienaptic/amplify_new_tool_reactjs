import React from 'react'
import Header from './Header/Header';
import { Outlet } from 'react-router-dom';

function ManageRoutes() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default ManageRoutes
