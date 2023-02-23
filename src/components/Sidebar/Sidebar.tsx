import React, { useState } from 'react';
import './Sidebar.css';
import { Genres } from '../Genres/Genres';

export type SidebarProps = {
    children: React.ReactNode;
};

const Sidebar = ({ children }: SidebarProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleSidebar = ():void => {
        setIsOpen(!isOpen);
    };

    const closeSidebar = ():void => {
        setIsOpen(false);
    };

    return (
        <>
            <SidebarTrigger isOpen={isOpen} onClick={toggleSidebar} />
            <SidebarContent isOpen={isOpen}>
                {children}
                <CloseButton onClick={closeSidebar} />
            </SidebarContent>
        </>
    );
};

type SidebarContentProps = {
    isOpen: boolean;
    children: React.ReactNode;
};

const SidebarContent = ({ isOpen, children }: SidebarContentProps) => {
    const sidebarClasses = isOpen ? 'sidebar-content open' : 'sidebar-content';

    return <div className={sidebarClasses}>{children}</div>;
};

type SidebarTriggerProps = {
    isOpen: boolean;
    onClick: () => void;
};

const SidebarTrigger = ({ isOpen, onClick }: SidebarTriggerProps) => {
    const triggerClasses = isOpen ? 'sidebar-trigger open' : 'sidebar-trigger';

    const buttonClose = 'buttonClose';

    return (
        <div className={triggerClasses} onClick={onClick}>
            <button className={buttonClose}>Жанри</button>
        </div>
    );
};

type CloseButtonProps = {
    onClick: () => void;
};

const CloseButton = ({ onClick }: CloseButtonProps) => {
    const buttonClose = 'buttonClose';

    const genreBox = 'genreBox';
    return (
        <div>
            <button className={buttonClose} onClick={onClick}>
                Закрити
            </button>
            <div className={genreBox}>
                <Genres />
            </div>
        </div>
    );
};

export { Sidebar };
