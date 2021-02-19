const LOGIN = 'LOGIN';
const LOGIN_FORM = 'LOGIN_FORM';
const LOGOUT = 'LOGOUT';

const initialState = {
    authorized: false,
    controls: [
        {
            id: "login",
            value: "",
            placeholder: "Логин",
            type: "text"
        },
        {
            id: "password",
            value: "",
            placeholder: "Пароль",
            type: "password"
        },
    ],
    user: {
        id: null,
        name: null
    }
}

export const authReducer = (state = initialState, action) => {
    const loginAccess = state.controls[0].value === "1" && state.controls[1].value === "1";

    if (action.type === LOGIN && loginAccess) {
        state = {
            authorized: action.payload,
            controls: state.controls,
            user: {
                id: 1,
                name: state.controls.find(it => it.id === "login").value
            }
        }
        return state;
    } else if (action.type === LOGIN_FORM) {
        state = {
            authorized: state.authorized,
            controls: action.controls,
            user: state.user
        }
        return state;
    } else {
        return initialState;
    }
}

export const loginAction = (isLogin) => ({type: LOGIN, payload: isLogin})
export const changeLoginFormAction = (controls) => (
    {
        type: LOGIN_FORM,
        controls
    }
)