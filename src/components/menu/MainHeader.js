import React from 'react';
import {NavLink} from 'react-router-dom';
import {Header} from 'antd/es/layout/layout';
import Menu from 'antd/es/menu';
import Avatar from 'antd/es/avatar/avatar';
import {changeLoginFormAction, loginAction} from "../../redux/auth-reducer";
import {connect} from "react-redux";

function MainHeader(props) {

    const getFirstLetter = (str) => {
        return str ? str.slice(0,1) : "";
    }

    return (
        <Header className="header">
            <Menu mode='horizontal' theme='dark' className="header-items">
                <Menu.Item>
                    <NavLink exact to="/">Главная</NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink to="/learning">Обучение</NavLink>
                </Menu.Item>
            </Menu>
            <div className="header-profile">
                <NavLink to="/profile">
                    <Avatar
                        className="profile-img"
                        size="large"
                    >
                        {getFirstLetter(props.user.name)}
                    </Avatar>
                </NavLink>
            </div>
        </Header>
    )
}

let mapStateToProps = (state) => {
    return {
        user: state.profile.user
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        login: (isLogin) => {
            dispatch(loginAction(isLogin))
        },
        changeLoginForm: (controls) => {
            dispatch(changeLoginFormAction(controls))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainHeader);
