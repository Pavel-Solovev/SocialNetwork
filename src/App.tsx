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

type PostType = {
    id:number
    description_post:string
    likesCount: number
    avatar_img:string
}

type ProfileDataType = {
    content_img:string
    title_name:string
    title_post:string
    post: PostType[]
}

type dialog = {
    id?: number
    name: string
}


type message = {
    id?: number
    message: string
}


type AppPropsType = {
    ProfileData: ProfileDataType
    messageData: message[]
    dialogData: dialog[]
}



const App = (props: AppPropsType) => {
    return (
        <div className='app-wrapper'>

            <Header/>
            <Navbar/>

            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path='/Profile' element={<Profile
                        content_img={props.ProfileData.content_img}
                        title_name={props.ProfileData.title_name}
                        title_post={props.ProfileData.title_post}
                        description_post={props.ProfileData.post}
                    />}
                    />
                    <Route path='/Messages/*' element={<Dialogs
                        dialogs={props.dialogData}
                        message={props.messageData}
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
