import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Nav/Nav";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Route, Routes} from 'react-router-dom';
import {Music} from "./Components/Music/Music";
import {News} from "./Components/News/New";
import {Settings} from "./Components/Settings/Settings";
import {UsersContainer} from "./Components/Users/UsersContainer";

const App = () => {
    return (
        <div className='app-wrapper'>

            <Header/>
            <Navbar/>

            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path='/Profile' element={<Profile/>}/>
                    <Route path='/Messages/*' element={<Dialogs/>}/>
                    <Route path='/Users/*' element={<UsersContainer/>}/>
                    <Route path='/News/*' element={<News/>}/>
                    <Route path='/Music/*' element={<Music/>}/>
                    <Route path='/Settings/*' element={<Settings/>}/>
                </Routes>
            </div>
        </div>


    )
        ;
}

export default App;
