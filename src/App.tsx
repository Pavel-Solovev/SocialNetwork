import React from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {Nav} from "./Nav/Nav";
import {MainContent} from "./Profile/Profile";

const HeaderData = {
    logo: 'https://upload.wikimedia.org/wikipedia/ru/f/f9/Philadelphia_Eagles_primary_logo.png'
}

const NavDataTadLink = [
    {id: 1, tab_link: 'Profile'},
    {id: 2, tab_link: 'Messages'},
    {id: 3, tab_link: 'News'},
    {id: 4, tab_link: 'Music'},
    {id: 5, tab_link: 'Settings'}
    ]


const MainContentData = {
    content_img: 'https://vjoy.cc/wp-content/uploads/2020/08/bezymyannyjprpapaava.jpg',
    avatar_img: 'https://bipbap.ru/wp-content/uploads/2017/04/72fqw2qq3kxh.jpg'

}

const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <Header
                    logo={HeaderData.logo}
                />
            </header>
            <nav className='nav'>
                <Nav
                    array_tab_link={NavDataTadLink}
                />
            </nav>
            <div className='content'>
                <MainContent
                    content_img={MainContentData.content_img}
                    avatar_img={MainContentData.avatar_img}
                />
            </div>
        </div>
    );
}

export default App;
