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

const blogReactObj = details.map((item) => {
    const {blogType, info, name, complexInfo} = item
    if (blogType == "text") {
        if (complexInfo != undefined) {
            const finalRes = complexInfo.map((item, idx)=>{
                const {toLink, isBold, isUnderline, text} = item
                let result = text
                if (toLink != undefined) {
                    result = (<u key={name+'-'+idx}><a target="_blank" href={toLink} className="text-dark">{result}</a></u>)
                }
                if (isBold) {
                    result = (<b key={name+'-'+idx}>{result}</b>)
                }
                if (isUnderline && toLink == undefined) {
                    result = (<u key={name+'-'+idx}>{result}</u>)
                }
                return result
            })
            return (
                <div key={name} id={name}>
                    <span className="blog0-text-info">
                        {finalRes}
                    </span>
                    <br/><br/>
                </div>
            )
        }
        return (<div key={name} id={name}><span className="blog0-text-info">{info}</span><br/><br/></div>)
    }
    else if (blogType == "header2") {
        return (<div key={name} id={name}><span className="blog0-header2">{info}</span><br/><br/></div>)
    }
})

function Blog(props) {
    // const { match } = props
    // const { params } = match
    // const { blogid: blogID } = params
    // const onSelect = (keys, event) => {
    // console.log('Trigger Select', keys, event);
    // };

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
                    {/* {blogID} */}
                    {BlogHeaderObj()}
                    {blogReactObj}
                    {/* <div>test <a target="_blank" href="https://www.google.com">home</a>to be test</div> */}
                </div>
            </div>
        </div>
    )
}

export default Blog;