import React, { Component, useState } from 'react';
import Header from '../header'
import TableOfContent from './table_content'
import { Tree, Col } from 'antd'

const blogObj = require('./blog01.json') 
const {details, header:blogHeader, subHeader:blogSubHeader} = blogObj
const BlogHeaderObj = () => {
    return (
        <div className="blog0-title">
            <div className="blog0-header1"  key="BlogHeader" id="BlogHeader">{blogHeader}</div>
            {blogSubHeader ? <div className="blog0-sub-header">{blogSubHeader}</div> : <div></div>}
            <br/>
        </div>
    )
}

const blogReactObj = details.map((item, i) => {
    const {blogType, info, name} = item
    if (blogType == "text") {
        return (<div className="blog0-text-info" key={name} id={name}>{info}<br/><br/></div>)
    }
    else if (blogType == "header2") {
        return (<div className="blog0-header2"  key={name} id={name}>{info}<br/><br/></div>)
    }
})

function Blog(props) {
    const { match } = props
    const { params } = match
    const { blogid: blogID } = params
    const treeData = [
        {
            title: 'parent 0',
            key: '0-0',
            children: [
            { title: 'leaf 0-0', key: '0-0-0', isLeaf: true },
            { title: 'leaf 0-1', key: '0-0-1', isLeaf: true },
            ],
        },
        {
            title: 'parent 1',
            key: '0-1',
            children: [
            { title: 'leaf 1-0', key: '0-1-0', isLeaf: true },
            { title: 'leaf 1-1', key: '0-1-1', isLeaf: true },
            ],
        },
        ];
    const onSelect = (keys, event) => {
    console.log('Trigger Select', keys, event);
    };

    // const onExpand = () => {
    // console.log('Trigger Expand');
    // };
    return (
        <div>
            <Header/>
            <div className="row flex-xl-nowrap w-100">
                <div className="col-xl-2 col-md-3 blog0-sidebar">
                    <TableOfContent data={blogObj}/>
                </div>
                <div className='blog0-wrapper col-8'>
                    {blogID}
                    {BlogHeaderObj()}
                    {blogReactObj}
                    {/* <div>test <a target="_blank" href="https://www.google.com">home</a>to be test</div> */}
                </div>
            </div>
        </div>
    )
}

export default Blog;