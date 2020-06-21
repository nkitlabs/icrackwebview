import React, { useEffect, useState } from 'react';
import { displayTimeDiffNow, displayText } from '../../utils/utils'
import { RightOutlined } from '@ant-design/icons'
import {getFireStoreURLImage} from '../../utils/utils'
import FirebaseEngine from '../../app/firebase'

const maxHeaderLen = 50
const maxExTextLen = 110

const firstBlogObj = (blog) => {
  const {name, imgPath, exText, updatedAt, author, id} = blog
  const blogLink = '/blog/'+id
  const imgURL = getFireStoreURLImage(imgPath)
  return(
    <div>
      <div className="text-center">
        <a href={blogLink}>
          <img className="py-3 blogexample0-img-first-blog" src={imgURL} width='100%' alt='img'/>
        </a>
      </div>
        <a href={blogLink}><div className="blogexample0-blog-header">{displayText(name, maxHeaderLen)}</div></a>
        <div className="blogexample0-blog-subheader">{author} - {displayTimeDiffNow(updatedAt)}</div>
        <div className="blogexample0-blog-detail">{displayText(exText, maxExTextLen)}</div>
    </div>
  )
}

const secondBlogObj = (blog) => {
  const {name, imgPath, exText, updatedAt, author, id} = blog
  const blogLink = '/blog/'+id
  const imgURL = getFireStoreURLImage(imgPath)
  return(
    <div className=" py-3 row flex-xl-nowrap">
      <div className="col-xl-4 col-md-4">
        <a href={blogLink}>
          <img className="blogexample0-img-second-blog" src={imgURL} width='100%' alt='img'/>
        </a>
      </div>
      <div className="col-xl-8 col-md-8">
        <a href={blogLink}><div className="blogexample0-blog-header">{displayText(name, maxHeaderLen)}</div></a>
        <div className="blogexample0-blog-subheader">{author} - {displayTimeDiffNow(updatedAt)}</div>
        <div className="blogexample0-blog-detail">{displayText(exText, maxExTextLen)}</div>
      </div>
    </div>
  )
} 

const otherBlogsObject = (blog) => {
  const {id, name, updatedAt, author} = blog
  const keyObject = 'blogex-'+id
  const blogLink = '/blog/'+id
  return (  
    <tr key={keyObject}>
      <td className='p-1'>
        <a href={blogLink}><div className="blogexample0-blog-header">{displayText(name, maxHeaderLen)}</div></a>
        <div className="blogexample0-blog-subheader">{author} - {displayTimeDiffNow(updatedAt)}</div>
      </td>
    </tr>
  )
}

function ExampleBlog(){
  // const { result } = require('../../data/blog_list.json')

  let result = [{}, {}, {}]
  let [firstBlog, setFirstBlog] = useState({})
  let [secondBlog, setSecondBlog] = useState({})
  let [otherBlogs, setOtherBlogs] = useState([])

  useEffect(() => {
    FirebaseEngine.getExampleDocs().then((res) => {
      result = res
      const [ first, second, ...others ] = result
      setFirstBlog(first)
      setSecondBlog(second)
      setOtherBlogs(others)
    })
  }, [])

  return (
    <div className="blogexample0-wrapper">
      <div className="title-header">Our Blogs</div>
      <div className="row flex-xl-nowrap w-100">
        <div className="col-xl-6 col-md-6">
          {firstBlogObj(firstBlog)}
        </div>
        <div className="col-xl-6 col-md-6">
          {secondBlogObj(secondBlog)}
          <table className="table">
            <tbody>
              {otherBlogs.map((blog) => otherBlogsObject(blog))}
            </tbody>
          </table>
          <div className="text-right">
            <a href='/blog' className="blogexample0-blog-header py-2 text-right">
              Read more <RightOutlined />
            </a>
          </div>
        </div>
      </div>
    </div>  
  );
}

export default ExampleBlog