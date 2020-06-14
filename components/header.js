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
                    
                    <nav className="navbar navbar-expand-lg navbar-dark" style={{"backgroundColor": "#000000"}}>
                        <a className='header0-logo mr-auto' href="/">
                            <img width="100%" src='../img/logo_with_text.png' alt="img" />
                        </a>
                        <a className="nav-link text-white" href="/">Home</a>
                        <a className="nav-link text-white" href="/blog">Blogs</a>
                    </nav>
                </div>
            </TweenOne>
        )
    }
}

export default Header