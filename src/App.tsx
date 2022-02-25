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
import {StoreType} from "./redux/redux-store";
// import {AppStateType} from "./redux/redux-store";


type PropsType = {
    store: StoreType
}

const App: React.FC<PropsType> = (props) => {
    const state = props.store.getState()
    return (
        <div className='app-wrapper'>

            <Header/>
            <Navbar/>

            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path='/Profile' element={<Profile
                        profilePage={state.profilePage}
                        dispatch={props.store.dispatch.bind(props.store)}
                    />}
                    />
                    <Route path='/Messages/*' element={<Dialogs
                        dialogPage={state.dialogPage}
                        dispatch={props.store.dispatch.bind(props.store)}
                    />}
                    />
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
