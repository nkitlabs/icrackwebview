import React, { Component, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../header'
import Footer from '../footer'
import { Pagination } from 'antd';
import { displayTimeDiffNow, displayText } from '../../utils/utils'
import FirebaseEngine from '../../app/firebase'


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
    const currentPage = parseInt(params.get('page')) || 1
    const [totalBlog, setTotalBlog] = useState(1)
    const blogsPerPage = 2
    let [blogs, setBlogs] = useState([])
    let [isFirstTime, setIsFirstTime] = useState(true)

    let [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        FirebaseEngine.countDocument().then(res => {
            setTotalBlog(res)
            setIsLoading(true)
            return res
        })
        .then((res) => FirebaseEngine.getDocumentByPage(res, currentPage, blogsPerPage))
        .then(res => {
            setIsLoading(false)
            setBlogs(res)
            window.scrollTo(0,0)
            setIsFirstTime(false)
        })
    }, [])

    useEffect(() => {
        if (!isFirstTime) {
            setIsLoading(true)
            FirebaseEngine.getDocumentByPage(totalBlog, currentPage, blogsPerPage).then(res => {
                setIsLoading(false)
                setBlogs(res)
                window.scrollTo(0,0)
            })
        }
    }, [currentPage])

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
                        pageSize = {blogsPerPage}
                        onChange={(page, pageSize) => {
                            props.history.push('/blog?page='+page)
                        }}
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default BlogList