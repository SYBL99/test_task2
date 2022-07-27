import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

function Layout () {
    return (
        <>
            <header>
                <NavLink to="/"> Home </NavLink>
                <NavLink to="/locations"> Locations </NavLink>
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                2022
            </footer>
        </>
    )
}

export default Layout;
