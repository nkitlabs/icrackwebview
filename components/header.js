import React, { Component } from 'react';
import TweenOne from 'rc-tween-one';
import { Menu } from 'antd';
const { Item, SubMenu } = Menu;

class Header extends Component {
    render() {
        return (
            <TweenOne
                component='header'
                // id='Nav0_0'
                animation={{ opacity: 0, type: 'from' }}
                className='header0 home-page-wrapper'
            >
                <div className='home-page'>
                    <TweenOne
                        animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
                        className='header0-logo'
                    >
                        <img width="100%" src='../img/logo_ic_real_no_bg.png' alt="img" />
                    </TweenOne>
                    <TweenOne
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
                                title='Blogs'
                            >
                                <Item key='blog-light-reading' className='item-sub'>Light Reading</Item>
                                <Item key='blog-programming' className='item-sub'>Programming</Item>
                                <Item key='blog-busienss' className='item-sub'>Business</Item>
                            </SubMenu>
                            <SubMenu
                                key='tools'
                                className='header0-item'
                                popupClassName="header0-item-child"
                                title='Tools'
                            >
                            </SubMenu>
                            <SubMenu
                                key='about_us'
                                className='header0-item'
                                popupClassName="header0-item-child"
                                title='About us'
                            >
                            </SubMenu>
                        </Menu>
                    </TweenOne>
                </div>
            </TweenOne>
        )
    }
}

export default Header