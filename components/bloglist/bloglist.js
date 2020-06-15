import React, { Component, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../header'
import Footer from '../footer'
import { Pagination } from 'antd';
import { displayTimeDiffNow, displayText } from '../../utils/utils'


const maxHeaderLen = 50
const maxExTextLen = 110

const blogObject = (blog) => {
    const {name, imgPath, exText, updatedAt, author, id} = blog
    const keyObject = 'bloglist-'+id
    const blogLink = '/blog/'+id
    return (
        <tr key={keyObject}>
            <td className='p-1 row flex-xl-nowrap w-100 m-0'>
                <div className="col-xl-4 col-md-4">
                    <a href={blogLink}>
                        <img className="bloglist0-img-blog" src={imgPath} width='100%' alt='img'/>
                    </a>
                </div>
                <div className="col-xl-8 col-md-8">
                    <a href={blogLink}><div className="bloglist0-blog-header">{displayText(name, maxHeaderLen)}</div></a>
                    <div className="bloglist0-blog-subheader">{author} - {displayTimeDiffNow(updatedAt)}</div>
                    <div className="bloglist0-blog-detail">{displayText(exText, maxExTextLen)}</div>
                </div>
            </td>
        </tr>
    )
}

function BlogList(props) {
    const { search } = useLocation() || {}
    const params = new URLSearchParams(search)
    const currentPage = params.get('page') || 1
    const totalBlog = 95
    const blogsPerPage = 10
    const lastPage = Math.ceil(totalBlog / blogsPerPage)
    let [blogs, setBlogs] = useState([])


    let [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            const { result } = require('../../data/blog_list.json')
            setBlogs(result)
            window.scrollTo(0,0)
        }, 3000)

    }, [currentPage])
    // useEffect(() => {
    //     console.log(1)
    //     window.scrollTo(0, 0)
    // }, [currentPage])

    return(
        <div>
            {isLoading ? 
                (
                    <div className="bloglist0-loading-obj spinner-border text-secondary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                ) : (<div></div>)
            }
            <Header />
            <div className="bloglist0-wrapper">
                <div  style={{opacity:(isLoading ? '0.3': '1.0')}}>
                    <div className="bloglist0-title-header">Blog Archive</div>
                    <div className="row flex-xl-nowrap w-100">
                        <div className="col-xl-9 col-md-9">
                            <div className="py-3 row flex-xl-nowrap">
                                <table className="table">
                                    <tbody>
                                        {blogs.map((blog) => blogObject(blog))}
                                        {/* <tr>
                                            <td className='p-1 row flex-xl-nowrap w-100 m-0'>
                                                <div className="col-xl-4 col-md-4">
                                                    <img className="bloglist0-img-blog" src='./img/blog01-test.jpg' width='100%' alt='img'/>
                                                </div>
                                                <div className="col-xl-8 col-md-8">
                                                    <div className="bloglist0-blog-header">My first blog ever</div>
                                                    <div className="bloglist0-blog-subheader">Natthakun Kitthaworn - 2 Hours ago</div>
                                                    <div className="bloglist0-blog-detail">This is what I want to tell you when I passed 26 years old. ...</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='p-1 row flex-xl-nowrap w-100 m-0'>
                                                <div className="col-xl-4 col-md-4">
                                                    <img className="bloglist0-img-blog" src='./img/blog01-test.jpg' width='100%' alt='img'/>
                                                </div>
                                                <div className="col-xl-8 col-md-8">
                                                    <div className="bloglist0-blog-header">My first blog ever</div>
                                                    <div className="bloglist0-blog-subheader">Natthakun Kitthaworn - 2 Hours ago</div>
                                                    <div className="bloglist0-blog-detail">This is what I want to tell you when I passed 26 years old. ...</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='p-1 row flex-xl-nowrap w-100 m-0'>
                                                <div className="col-xl-4 col-md-4">
                                                    <img className="bloglist0-img-blog" src='./img/blog01-test.jpg' width='100%' alt='img'/>
                                                </div>
                                                <div className="col-xl-8 col-md-8">
                                                    <div className="bloglist0-blog-header">My first blog ever</div>
                                                    <div className="bloglist0-blog-subheader">Natthakun Kitthaworn - 2 Hours ago</div>
                                                    <div className="bloglist0-blog-detail">This is what I want to tell you when I passed 26 years old. ...</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='p-1 row flex-xl-nowrap w-100 m-0'>
                                                <div className="col-xl-4 col-md-4">
                                                    <img className="bloglist0-img-blog" src='./img/blog01-test.jpg' width='100%' alt='img'/>
                                                </div>
                                                <div className="col-xl-8 col-md-8">
                                                    <div className="bloglist0-blog-header">My first blog ever</div>
                                                    <div className="bloglist0-blog-subheader">Natthakun Kitthaworn - 2 Hours ago</div>
                                                    <div className="bloglist0-blog-detail">This is what I want to tell you when I passed 26 years old. ...</div>
                                                </div>
                                            </td>
                                        </tr> */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-3">
                        </div>
                    </div>
                    <Pagination
                        defaultCurrent={currentPage}
                        total={totalBlog}
                        showSizeChanger={false}
                        onChange={(page, pageSize) => {
                            props.history.push('/blog?page='+page)
                        }}
                        // itemRender={(page, type, originalElement) => renderPagination(page, type, originalElement, currentPage, lastPage)}
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default BlogList