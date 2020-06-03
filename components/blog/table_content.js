import React, { Component, useState } from 'react';

function TableOfContent (props) {
    const { data } = props
    const { details, header } = data
    const blogHeader = details.filter((item) => {
        const {blogType} = item
        return blogType.startsWith('header')
    })
    return (
        <div>
            <ul>
                Table of Content
                <li className='blog0-table-content-item' key="BlogHeader"><a href="#BlogHeader">{header}</a></li>
            {blogHeader.map((item) => {
                return <li className='blog0-table-content-item' key={item.name + '-toc'}><a href={'#'+item.name}>{item.info}</a></li>
            })}
            </ul> 
        </div>
    )
}

export default TableOfContent