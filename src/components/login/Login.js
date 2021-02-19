import React from 'react';
import {Content} from 'antd/es/layout/layout';
import Layout from 'antd/es/layout';
import {connect} from "react-redux";
import {changeLoginFormAction, loginAction} from "../../redux/auth-reducer";

const Login = (props) => {

    let controls = props.controls;

    const getControl = (controlId) => {
        return controls.find(control => control.id === controlId);
    }

    const getIndex = (controlId) => {
        return controls.findIndex(control => control.id === controlId);
    }

    const updateControls = (control) => {
         controls[getIndex(control.id)] = control;
    }

    const sendForm = (event) => {
        event.preventDefault();
        props.login(true);
    }

    const inputHandlerChange = (controlId, event) => {
        const val = event.target.value;
        let control = getControl(controlId);
        control.value = val;
        updateControls(control);
        props.changeLoginForm(controls);
    }

    return (
        <Layout className='full-height'>
            <Content>
                <form onSubmit={(e) => sendForm(e)}>
                    <input name="login" placeholder="Логин"
                           value={getControl("login").value}
                           onChange={(event) => inputHandlerChange("login", event)}/>
                    <input name="password" type="password"
                           placeholder="Пароль"
                           value={getControl("password").value}
                           onChange={(event) => inputHandlerChange("password", event)}/>
                    <button type={"submit"}>Войти</button>
                </form>
            </Content>
        </Layout>
    )
}

let mapStateToProps = (state) => {
    return {
        authorized: state.profile.authorized,
        controls: state.profile.controls
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
