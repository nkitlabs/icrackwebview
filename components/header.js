import React, { Component } from 'react';
import TweenOne from 'rc-tween-one';
import { Menu } from 'antd';
const { Item, SubMenu } = Menu;

class Header extends Component {
    render() {
        return (
            <TweenOne
                component='header'
                animation={{ opacity: 0, type: 'from' }}
                className='header0 home-page-wrapper'
            >
                <div className='home-page' key='homepage'>
                    {/* <TweenOne
                        animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
                        className='header0-logo'
                    >
                        <img width="100%" src='../img/logo_with_text.png' alt="img" />
                    </TweenOne> */}
                    
                    <nav className="navbar navbar-expand-lg navbar-dark" style={{"backgroundColor": "#000000"}}>
                        <a className='header0-logo mr-auto' href="#">
                            <img width="100%" src='../img/logo_with_text.png' alt="img" />
                        </a>
                        <a className="nav-link text-white" href="#">Blogs</a>
                        <a className="text-white nav-link" href="#">Tools</a>
                    </nav>
                    {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">Disabled</a>
                            </li>
                            </ul>
                        </div>
                    </nav> */}
                    {/* <TweenOne
                        animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
                        className='header0-menu'
                    >
                        <Menu
                            mode='horizontal'
                            defaultSelectedKeys={['blog']}
                            theme="dark"
                        >
                            <SubMenu
                                key='blog'
                                className='header0-item'
                                popupClassName="header0-item-child"
                                title={<div className='header0-item-block'>Blogs</div>}
                            >
                                <Item key='blog-light-reading' className='item-sub'>Light Reading</Item>
                                <Item key='blog-programming' className='item-sub'>Programming</Item>
                                <Item key='blog-busienss' className='item-sub'>Business</Item>
                            </SubMenu>
                            <SubMenu
                                key='tools'
                                className='header0-item'
                                popupClassName="header0-item-child"
                                title={<div className='header0-item-block'>Tools</div>}
                            >
                            </SubMenu>
                            <SubMenu
                                key='about_us'
                                className='header0-item'
                                popupClassName="header0-item-child"
                                title={<div className='header0-item-block'>About us</div>}
                            >
                            </SubMenu>
                        </Menu>
                    </TweenOne> */}
                </div>
            </TweenOne>
        )
    }
}

export default Header