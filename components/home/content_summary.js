import React, { Component } from 'react';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import { Row, Col } from 'antd';


class ContentSummary extends Component {
    render() {
        return (
            <div className='home-page-wrapper content0-wrapper'>
                <div className='home-page content0'>
                    <div className='title-wrapper'>
                        <div className='text-center content0-header-title'>
                            <span>Get to the point through our tools and blogs</span>
                        </div>
                    </div>
                    <div className='title-wrapper'>
                        <div className='text-center content0-subtitle'>
                            <span>
                                IntheCircle brings you the knowledge and skills 
                                that are consolidated and finalized in terms of tools, infographics, 
                                and short summaries to guide you and create new experiences
                                that you never think of before.
                            </span>
                        </div>
                    </div>
                    <OverPack playScale={0.3} className=''>
                        <QueueAnim
                            type="bottom"
                            key="block"
                            leaveReverse
                            component={Row}
                            // componentProps={childWrapper}
                            className='content0-block-wrapper'
                        >
                            <Col 
                                name='block0'
                                className='content0-block'
                                md={8}
                                xs={24}
                                key='block0'
                            >
                                <div className='content0-block-item'>
                                    <div className='content0-block-icon'>
                                        <img src='./img/icon-science.svg' width='100%' alt='img'/>
                                    </div>
                                    <div className='content0-block-title'>Knowledge</div>
                                    We explain the core of the topics with digested note and striking examples.
                                </div>
                            </Col>
                            <Col 
                                name='block1'
                                className='content0-block'
                                md={8}
                                xs={24}
                                key='block1'
                            >
                                <div className='content0-block-item'>
                                    <div className='content0-block-icon'>
                                        <img src='./img/icon-world.svg' width='100%' alt='img'/>
                                    </div>
                                    <div className='content0-block-title'>Global News</div>
                                    We pick weekly important news from all around the world.
                                </div>
                            </Col>
                            <Col 
                                name='block2'
                                className='content0-block'
                                md={8}
                                xs={24}
                                key='block2'
                            >
                                <div className='content0-block-item'>
                                    <div className='content0-block-icon'>
                                        <img src='./img/icon-book.svg' width='100%' alt='img'/>
                                    </div>
                                    <div className='content0-block-title'>Book summary</div>
                                    We provide a variety of books and summarize it into a short form.
                                </div>
                            </Col>
                        {/* {childWrapper.children.map((block, i) => {
                            const { children: item, ...blockProps } = block;
                            return (
                            <Col key={i.toString()} {...blockProps}>
                                <div {...item}>
                                {item.children.map(getChildrenToRender)}
                                </div>
                            </Col>
                            );
                        })} */}
                        </QueueAnim>
                    </OverPack>
                </div>
            </div>
        )
    }
}

export default ContentSummary