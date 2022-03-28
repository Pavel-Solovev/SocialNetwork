import React from 'react';
import {connect} from "react-redux";
import {StoreType} from "../../redux/redux-store";
import {Users} from "./Users";



const mapStateToProps = (state: StoreType) => {
    let store = state.getState()
    return {
        users: store.userPage
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        store
    }
}

export connect(mapStateToProps, mapDispatchToProps)(Users)