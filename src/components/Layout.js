import React from 'react';
import { Menu } from './Menu';

export const Layout = ({ children }) => {
    return (
        <div className='flex'>
            <aside className='w-1/4'><Menu /></aside>
            <div className='w-3/4'>{children}</div>
        </div>
    );
}