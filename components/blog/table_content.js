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
            <div className="text-center font-weight-bold py-3" style={{fontSize:'18px'}}>Table of Content</div>
                <div className="px-2">
                    <table className="table table-hover">
                        <tbody>
                            <tr key="header-toc">
                                <td className='p-1'>
                                    <a href="#BlogHeader" className="text-dark" style={{display:'block', fontSize:'14px'}}>{header}</a>
                                </td>
                            </tr>
                            {blogHeader.map((item) => {
                                return(
                                    <tr key={item.name + '-toc'}>
                                        <td className='p-1'>
                                            <a href={'#'+item.name} className="text-dark" style={{display:'block', fontSize:'14px'}}>{item.info}</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            {/* <ul>

                <li className='blog0-table-content-item' key="BlogHeader">
                    <a href="#BlogHeader" className="text-dark">{header}</a>
                </li>
            {blogHeader.map((item) => {
                return (
                    <li className='blog0-table-content-item' key={item.name + '-toc'}>
                        <a href={'#'+item.name} className="text-dark">{item.info}</a>
                    </li>
                )
            })}
            </ul>  */}
        </div>
    )
}

export default TableOfContent