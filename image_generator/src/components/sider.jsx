import { Menu } from 'antd'
import React from 'react'
import logoSider from '../images/logoipsum-321.svg'
import { Link } from 'react-router-dom'
import { FileImageOutlined, VideoCameraOutlined, HomeOutlined } from '@ant-design/icons'

function Sider() {
    return (
        <div style={{
            position:'fixed',
            padding : '5px',
            display:'grid',
            alignItems:'center',
            justifyContent:'center',
            margin : '10px 0px 0px 0px',
            gap : '30px'
        }}>
            <div className="logo-container">
                <img src={logoSider} alt="" />
            </div>
            <div className="menu-container">
                <Menu theme='dark'>
                    <Menu.Item icon={<HomeOutlined />}>
                        <Link to={'/'}>Home</Link>
                    </Menu.Item>
                    <Menu.Item icon={<FileImageOutlined />}>
                        <Link to={'/search-images'}>Search for images</Link>
                    </Menu.Item>
                    <Menu.Item icon={<VideoCameraOutlined />}>
                        <Link to={'/search-videos'}>Search for Videos</Link>
                    </Menu.Item>
                </Menu>
            </div>
        </div>
    )
}

export default Sider