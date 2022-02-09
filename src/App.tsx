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
import {addPost, upgradeNewPostText} from "./redux/state";

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
    newPostChange:string
}
type dialog = {
    id?: number
    name: string
}
type message = {
    id?: number
    message: string
}
type DialogPageType = {
    messagesData: message[]
    dialogsData: dialog[]
}
type AppPropsType = {
    profilePage: ProfileDataType
    dialogPage: DialogPageType
}
type state = {
    state:AppPropsType

}



const App = (props: state) => {
    return (
        <div className='app-wrapper'>

            <Header/>
            <Navbar/>

            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path='/Profile' element={<Profile
                        profilePage={props.state.profilePage} addPostCallback={addPost}
                        upgradeNewPostText={upgradeNewPostText}
                    />}
                    />
                    <Route path='/Messages/*' element={<Dialogs
                        dialogPage={props.state.dialogPage}
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
