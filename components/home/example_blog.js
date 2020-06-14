import React from 'react';

const timeDiffNow = (s) => {
  const now = Date.now()
  const t = new Date(s)
  const diff = now-t
  if (diff < 60000) {
    return '1 minute ago'
  } else if (diff < 60 * 60 * 1000) {
    return Math.floor(diff/(60*1000)) + ' minutes ago'
  } else if (diff < 2 * 60 * 60 * 1000) {
    return '1 hour ago'
  } else if (diff < 24 * 60 * 60 * 1000) {
    return Math.floor(diff/(60*60*1000)) + ' hours ago'
  } else if (diff < 2 * 24 * 60 * 60 * 1000) {
    return '1 day ago'
  } else if (diff < 8 * 24 * 60 * 60 * 1000) {
    return Math.floor(diff/(24*60*60*1000)) + ' days ago'
  } else if (diff < 8 * 24 * 60 * 60 * 1000) {
    return Math.floor(diff/(24*60*60*1000)) + ' days ago'
  } else {
    return t.format('dd MMM YYYY')
  }

}

const firstBlogObj = (blog) => {
  const {name, imgPath, exText, updatedAt, author, id} = blog
  const blogLink = '/blog/'+id
  return(
    <div>
      <div className="text-center">
        <a href={blogLink}>
          <img className="py-3 blogexample0-img-first-blog" src={imgPath} width='100%' alt='img'/>
        </a>
      </div>
        <a href={blogLink}><div className="blogexample0-blog-header">{name}</div></a>
        <div className="blogexample0-blog-subheader">{author} - {timeDiffNow(updatedAt)}</div>
        <div className="blogexample0-blog-detail">{exText}</div>
    </div>
  )
}

const secondBlogObj = (blog) => {
  const {name, imgPath, exText, updatedAt, author, id} = blog
  const blogLink = '/blog/'+id
  return(
    <div className=" py-3 row flex-xl-nowrap">
      <div className="col-xl-4 col-md-4">
        <a href={blogLink}>
          <img className="blogexample0-img-second-blog" src={imgPath} width='100%' alt='img'/>
        </a>
      </div>
      <div className="col-xl-8 col-md-8">
        <a href={blogLink}><div className="blogexample0-blog-header">{name}</div></a>
        <div className="blogexample0-blog-subheader">{author} - {timeDiffNow(updatedAt)}</div>
        <div className="blogexample0-blog-detail">{exText}</div>
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
        <a href={blogLink}><div className="blogexample0-blog-header">{name}</div></a>
        <div className="blogexample0-blog-subheader">{author} - {timeDiffNow(updatedAt)}</div>
      </td>
    </tr>
  )
}

function ExampleBlog(){
  const { result } = require('../../data/blog_list.json')
  const [ firstBlog, secondBlog, ...otherBlogs ] = result

  console.log(otherBlogs)

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
            {/* </div> */}
          </div>
      </div>
    </div>  
  );
}

export default ExampleBlog