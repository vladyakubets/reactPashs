import { Header, Sidebar } from "../components";
// import {Outlet} from "react-router-dom";
import { FC, ReactNode } from "react";
import { Outlet } from "react-router-dom";

export interface MainLayoutProps {
    switchTheme: () => void;
    theme: string;
    children?: ReactNode;
}


const MainLayout: FC<MainLayoutProps> = ({ switchTheme, theme }) => {
    return (
        <div>
            <Header switchTheme={switchTheme} theme={theme} />
            <Sidebar />
            <Outlet />
        </div>
    );
};

export { MainLayout };
