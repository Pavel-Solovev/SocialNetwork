import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from './users.module.css';

export const Users = (props: UsersPropsType) => {

    if (props.usersPage.users.length === 0) {
        props.onCallbackSetUsers([
                {
                    user_id: 1,
                    photoUrl: 'https://64.media.tumblr.com/a1beb74e613a53ca910eb424f62100e2/3ce00a00d7ba4edd-70/s1280x1920/53e3a9edac98e6d0c4d3c385dcb4be8a01644226.jpg',
                    fullName: 'name 1',
                    followed: true,
                    status: '34g',
                    location: {
                        city: 'Minsk',
                        country: 'Belarus'
                    }
                },
                {
                    user_id: 2,
                    photoUrl: 'https://shikimori.one/system/characters/original/197751.jpg',
                    fullName: 'name 2',
                    followed: false,
                    status: '12',
                    location: {
                        city: 'Kiev',
                        country: 'Ukraine'
                    }
                },
                {
                    user_id: 3,
                    photoUrl: 'https://shikimori.one/system/characters/original/197751.jpg',
                    fullName: 'name 3',
                    followed: true,
                    status: 'sdf',
                    location: {
                        city: 'Moscow',
                        country: 'Russia'
                    }
                }
            ]
        )
    }


    return <div>{
        props.usersPage.users.map(u =>
            <div key={u.user_id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={s.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={()=>{props.onCallbackFollowUnfollow(u.user_id)}}>Unfollow</button>
                            : <button onClick={()=>{props.onCallbackFollowUnfollow(u.user_id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>
                )
    }
        </div>;
};
