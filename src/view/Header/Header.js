import React, { useState } from 'react';
import HP from '../../assessts/Hp.png';
import { Menu, Avatar, Layout } from 'antd';
import { UserOutlined, DownOutlined, HomeOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
const { Header } = Layout

const items = [
    {
        path: '/',
        label: 'Home',
        key: 'category',
        icon: <HomeOutlined style={{ fontSize: '1.2em' }} />
    }
]

function Headers() {
    const [route, setRoute] = useState('');
    let navigate = useNavigate();
    const handleKey = () => {
        let path = `/`;
        navigate(path);
    }       
    return (
        <>
            <Header
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    background: '#fff'
                }}
            >
                <img src={HP} style={{ width: '3.5em', height: '3.5em', cursor:'pointer' }} alt='HP' onClick={handleKey} />
                <h5 style={{ margin: '0.2em', fontSize: '1.4em', color: '#0095d9' }}>Partner Audit Screenshot Search Tool</h5>
                <Menu
                    theme="transparnet"
                    mode="horizontal"
                    defaultOpenKeys={['/']}
                    items={items}
                    style={{
                        flex: 1,
                        minWidth: 0,
                        justifyContent: 'end',
                        color: '#0095d9',
                        fontSize: '1.2em',
                        fontWeight: 'bold'
                    }}
                    onClick={handleKey}
                    selectedKeys={route}
                >
                </Menu>
                <Avatar size={43} style={{ background: '#0095d9', cursor: 'pointer', border: '1px solid #fff' }} icon={<UserOutlined />} />
            </Header>
        </>
    )
}

export default Headers
