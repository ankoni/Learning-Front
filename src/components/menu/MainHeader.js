import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {Header} from 'antd/es/layout/layout';
import Menu from 'antd/es/menu';
import Avatar from 'antd/es/avatar/avatar';

function MainHeader() {
    const UserList = ['U', 'Lucy', 'Tom', 'Edward'];
    const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];
    const GapList = [4, 3, 2, 1];

    const [user, setUser] = useState(UserList[0]);
    const [color, setColor] = useState(ColorList[0]);
    const [gap, setGap] = useState(GapList[0]);

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
                        gap={gap}
                    >
                        {user}
                    </Avatar>
                </NavLink>
            </div>
        </Header>
    )
}

export default MainHeader;
