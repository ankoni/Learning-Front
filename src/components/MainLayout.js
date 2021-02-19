import MainHeader from "./menu/MainHeader";
import Layout from "antd/es/layout";
import {Redirect, Route} from "react-router-dom";
import MainPage from "./main/main-page/MainPage";
import Login from "./login/Login";
import LearningPage from "./learning/LearningPage";
import Profile from "./Profile";
import React from "react";

const MainLayout = (props) => {

    const onLogin = () => {
        props.login('khjkh')
    }

    return (
        <Layout className='full-height'>
            {props.profile.userName ? <MainHeader/> : ""}
            {
                props.profile.userName ?
                    <Redirect to="/" /> :
                    <Redirect to="/login" />
            }
            <Route exact path='/' component={MainPage}/>
            <Route exact path='/login' render={ () => <Login login={onLogin}/> }/>
            <Route path='/learning' component={LearningPage}/>
            <Route path='/profile' component={Profile}/>
        </Layout>
    )
}

export default MainLayout;