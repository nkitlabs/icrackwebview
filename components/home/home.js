
import React, { Component } from 'react';
import Header from '../header'
import Banner from './banner'
import ContentSummary from './content_summary'
import ExampleBlog from './example_blog'

class Home extends Component { 
    render(){
        return(
            <div>
                <Header />
                <Banner />
                <ContentSummary />
                <ExampleBlog />
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
            </div>
        )
    }

}
  
export default Home;