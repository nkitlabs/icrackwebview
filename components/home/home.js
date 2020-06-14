
import React, { Component, useRef, useEffect } from 'react';
import Header from '../header'
import Footer from '../footer'
import Banner from './banner'
import ContentSummary from './content_summary'
import ExampleBlog from './example_blog'

function Home() { 
    let readMoreRef = useRef()
    return(
        <div>
            <Header />
            <Banner readMoreRef={readMoreRef} />
            <div ref={readMoreRef}><ContentSummary/></div>
            <ExampleBlog />
            <Footer />
        </div>
    )
}
  
export default Home;