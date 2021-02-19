import React from 'react';
import './App.sass';
import 'antd/dist/antd.css';
import {connect} from "react-redux";
import MainHeader from "./components/menu/MainHeader";
import {Redirect, Route} from "react-router-dom";
import MainPage from "./components/main/main-page/MainPage";
import Login from "./components/login/Login";
import LearningPage from "./components/learning/LearningPage";
import Profile from "./components/Profile";
import Layout from "antd/es/layout";

class App extends React.Component {

    render() {
        return (
            <Layout className='full-height'>
                { this.props.profile.authorized ? <MainHeader/> : "" }
                {
                    this.props.profile.authorized ?
                        <Redirect to="/" /> :
                        <Redirect to="/login" />
                }

                <Route exact path='/' component={MainPage}/>
                <Route exact path='/login' component={Login}/>
                <Route path='/learning' component={LearningPage}/>
                <Route path='/profile' component={Profile}/>
            </Layout>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profile
    }
}

export default connect(mapStateToProps, null)(App);
