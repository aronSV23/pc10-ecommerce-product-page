import { Avatar } from 'primereact/avatar';
import { Menu } from 'primereact/menu';
import { Menubar } from 'primereact/menubar';
import { Sidebar } from 'primereact/sidebar';
import React, { useState } from 'react';
import cartIcon from '../../assets/images/icon-cart.svg';
import avatar from '../../assets/images/image-avatar.png';
import logo from '../../assets/images/logo.svg';
import { CartModal } from './CartModal';

export const Header = () => {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [isOpenCartModal, setIsOpenCartModal] = useState(false);

    const mod = {
        button: {
            style:{
                left: '0 !important'
            },
            onClick: (e) => {
                e.stopPropagation();
                setSidebarVisible(!sidebarVisible)
            }
        }
    }

    const items = [
        { label: 'Collections' },
        { label: 'Men' },
        { label: 'Women' },
        { label: 'About' },
        { label: 'Contact' }
    ];

    const start = <img alt="logo" src={logo} height="40" className="mr-2"></img>;
    const end = (
        <div className="flex align-items-center gap-2">
            <button className='p-button p-button-text h-8 w-8 text-gray-500 rounded' aria-label="cart" 
                        onClick={() => setIsOpenCartModal(!isOpenCartModal)}
                       >
                <img src={cartIcon} alt="Cart" className="h-6 w-6 rounded" />
            </button>
            <Avatar image={avatar} shape="circle" />
            {isOpenCartModal && <CartModal isOpenCartModal={isOpenCartModal} setIsOpenCartModal={setIsOpenCartModal} />}
        </div>
    );



    return (
        <header>
            <Menubar model={items} start={start} end={end} pt={mod} />
            <Sidebar visible={sidebarVisible} onHide={() => setSidebarVisible(false)}>
                <Menu model={items} />
            </Sidebar>
        </header>
    );
};
