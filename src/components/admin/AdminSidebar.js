import React from 'react';
import '../../styles/AdminSidebar.css';

function AdminSidebar() {
    return (
        <div className='sidebar p-2'>
            <div className='m-2'>
                <span className='brand-name fs-4'> broxworx admin</span>
            </div>
            <hr className='text-dark'/>
            <div className='list-group list-group-flush'>
                <a className='list-group-item py-2'>
                    <i className='bi bi-speedometer2 fs-5 me-3'></i>
                    <span>Dashboard</span>
                </a>
                <a className='list-group-item py-2'>
                    <i className='bi bi-house fs-5 me-3'></i>
                    <span>Home</span>
                </a>
                <a className='list-group-item py-2'>
                    <i className='bi bi-clipboard-data fs-5 me-3'></i>
                    <span>Reports</span>
                </a>
                <a className='list-group-item py-2'>
                    <i className='bi bi-ui-checks-grid fs-5 me-3'></i>
                    <span>Configs</span>
                </a>
                <a className='list-group-item py-2'>
                    <i className='bi bi-power fs-5 me-3'></i>
                    <span>Logout</span>
                </a>
            </div>
            
        </div>
    ) 
}

export default AdminSidebar;
