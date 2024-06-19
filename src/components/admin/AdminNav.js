import React from "react";
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/collapse';

function AdminNav({Toggle}) {
    return (
        <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
            <i className='navbar-brand bi bi-justify-left fs-4' onClick={Toggle}></i>
            <button className='navbar-toggler d-lg-none' type='button' data-bs-toggle='collapse'
                aria-expanded='false' aria-label='Toggle Navigation'>
                <i className='bi bi-justify'></i>
            </button>
            <div className='collapse navbar-collapse' id='collapsibleNavId'>
                <ul className='navbar-nav ms-auto mt-2 mt-lg-0'>
                    <li className='nav-item dropdown'>
                        <a className='nav-link dropdown-toggle text-white' href='#' id='dropdownId' 
                            data-bs-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                            BroxWorx
                        </a>
                        <div className='dropdown-menu' aria-labelledby='dropdownId'>
                            <a className='dropdown-item' href='#'>Profile</a>
                            <a className='dropdown-item' href='#'>Setting</a>
                            <a className='dropdown-item' href='#'>Logout</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default AdminNav;