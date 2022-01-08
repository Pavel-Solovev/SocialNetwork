import React from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {Nav} from "./Nav/Nav";
import {Profile} from "./Profile/Profile";

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


const ProfileData = {
    content_img: 'https://vjoy.cc/wp-content/uploads/2020/08/bezymyannyjprpapaava.jpg',
    avatar_img: 'avatar',
    title_name: 'Username',
    title_post: 'My Posts',
    post: [
            {id: 1, description_post: 'description_post 1'},
            {id: 2, description_post: 'description_post 2'},
            {id: 3, description_post: 'description_post 3'},
            {id: 4, description_post: 'description_post 4'},
            {id: 5, description_post: 'description_post 5'}
        ]


}

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header
                    logo={HeaderData.logo}
            />
            <Nav
                    array_tab_link={NavDataTadLink}
            />
            <Profile
                    content_img={ProfileData.content_img}
                    avatar_img={ProfileData.avatar_img}
                    title_name={ProfileData.title_name}
                    title_post={ProfileData.title_post}
                    description_post={ProfileData.post}
            />
        </div>
    );
}

export default App;
