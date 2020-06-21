import React, { Component, useState, useEffect } from 'react';
import Header from '../header'
import TableOfContent from './table_content'
import { Tree, Col } from 'antd'
import { getFireStoreURLImage, displayTimeDiffNow } from '../../utils/utils'
import FirebaseEngine from '../../app/firebase'

// const blogObj = require('./blog01.json') 
// const {details, header:blogHeader, subHeader:blogSubHeader} = blogObj
const BlogHeaderObj = (props) => {
    const {header, subHeader} = props
    return (
        <div className="blog0-title">
            <div className="blog0-header1"  key="BlogHeader" id="BlogHeader">{header}</div>
            {subHeader ? <div className="blog0-sub-header">{subHeader}</div> : <div></div>}
            <br/>
        </div>
    )
}

const blogDetailObj = (item) => {
    const {blogType, info, name, complexInfo, path, width} = item
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
    else if (blogType == "image") {
        const imgPath = getFireStoreURLImage(path)
        const imgWidth = width || '100%'
        return (
            <div key={name} id={name} className="text-center">
                <img src={imgPath} width={imgWidth} alt='img'/>
                <br/> <br/>
            </div>
        )
    }
}

function Blog(props) {
    const { match } = props
    const { params } = match
    const { blogid: blogID } = params
    let [blog, setBlog] = useState({})
    let [details, setDetails] = useState([])
    let [header, setHeader] = useState('')
    let [subHeader, setSubHeader] = useState('')
    console.log(blogID)

    useEffect(() => {
        FirebaseEngine.getDocument(blogID).then(res => {
            const {author, updatedAt, name, details} = res
            setBlog(res)
            setDetails(details)
            setHeader(name)
            setSubHeader(author + '-' + displayTimeDiffNow(updatedAt))
        })
    }, [])

    return (
        <div>
            <Header/>
            <div className="row flex-xl-nowrap w-100">
                <div className="col-xl-2 col-md-3 blog0-sidebar">
                    <TableOfContent data={blog}/>
                </div>
                <div className='blog0-wrapper col-8'>
                    <BlogHeaderObj header={header} subHeader={subHeader}/>
                    {details.map(blogDetailObj)}
                </div>
            </div>
        </div>
    )
}

export default Blog;