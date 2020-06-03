import React, { Component } from 'react';
import { Button } from 'antd';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import { DownOutlined } from '@ant-design/icons';

class Banner extends Component {
    render() {
        return (
            <div className='banner0'>
                <QueueAnim
                    key="QueueAnim"
                    type={['bottom', 'top']}
                    delay={300}
                    className='banner0-text-wrapper'
                >
                    <div key='title' className='banner0-title'>
                        <img src='./img/logo_with_text_below.png' width='100%' alt='img'/>
                    </div>
                    <div key="content" className='banner0-content'>The place where we can learn together</div>
                    {/* <div key="content" className='banner0-content'>In the Circle</div> */}
                    <br/>
                    <div key='button'>
                        <Button ghost key="button" className='banner0-button'>Read More</Button>
                    </div>
                </QueueAnim>
                <TweenOne
                    animation={{
                        y: '-=20',
                        yoyo: true,
                        repeat: -1,
                        duration: 1000,
                    }}
                    className="banner0-icon"
                    key="icon"
                >
                    <DownOutlined />
                </TweenOne>
            </div>
        )
    }
}

export default Banner