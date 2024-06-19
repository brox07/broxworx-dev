import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AdminSidebar from '../../components/admin/AdminSidebar';
import AdminHome from '../../pages/admin/AdminHome';
import { useState } from 'react';

function Admin() {
    const [toggle, setToggle] = useState(true);
    const Toggle = () => {
        setToggle(!toggle);
    }
    return (
        <div className='container-fluid min-vh-100'>
            <div className='row'>
                {toggle && <div className='col-4 col-md-2 bg-white vh-100 position-fixed'>
                    <AdminSidebar/>
                </div>}
                {toggle && <div className='col-4 col-md-2'></div>}
                <div className='col'>
                    <AdminHome Toggle={Toggle}/>
                </div>
            </div>
        </div>
    )
}

export default Admin;