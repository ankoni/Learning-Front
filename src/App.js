import React, { useState } from 'react';
import './App.sass';
import 'antd/dist/antd.css';
import MainHeader from './components/menu/MainHeader';
import {Route, BrowserRouter} from 'react-router-dom';
import { Redirect } from "react-router-dom";
import LearningPage from './components/learning/LearningPage';
import Profile from './components/Profile';
import MainPage from './components/main/main-page/MainPage';
import Layout from 'antd/es/layout';
import Login from './components/login/Login';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: null
        };
    }

    renderHeader() {
        if (this.state.profile) {
            return (<MainHeader/>)
        }
    }
    render() {
        return (
            <Layout className='full-height'>
                <BrowserRouter>
                    {this.renderHeader()}
                    {
                        this.state.profile ?
                            <Redirect to="/" /> :
                            <Redirect to="/login" />
                    }

                    <Route exact path='/' component={MainPage}/>
                    <Route exact path='/login' component={Login}/>
                    <Route path='/learning' component={LearningPage}/>
                    <Route path='/profile' component={Profile}/>
                </BrowserRouter>
            </Layout>

        )
    }
}

export default App;
