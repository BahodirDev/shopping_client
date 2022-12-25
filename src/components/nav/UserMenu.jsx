import React from 'react';
import { NavLink } from 'react-router-dom';


function UserMenu(props) {
    return (
        <>
            <div className='p-3 mb-2 h4 mt-2 bg-light'>
                User Links
            </div>
            <ul className='list-group list-unstyled'>
                <li>
                    <NavLink className='list-group-item' to={'/dashboard/user/orders'}>
                        Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink className='list-group-item' to={'/dashboard/user/profile'} >
                        Profile
                    </NavLink>
                </li>

            </ul>
        </>
    );
}

export default UserMenu;