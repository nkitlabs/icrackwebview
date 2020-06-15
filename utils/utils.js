
import React from 'react';
import { Button } from 'antd';

export const isImg = /^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?/;
export const getChildrenToRender = (item, i) => {
  let tag = item.name.indexOf('title') === 0 ? 'h1' : 'div';
  tag = item.href ? 'a' : tag;
  let children = typeof item.children === 'string' && item.children.match(isImg)
    ? React.createElement('img', { src: item.children, alt: 'img' })
    : item.children;
  if (item.name.indexOf('button') === 0 && typeof item.children === 'object') {
    children = React.createElement(Button, {
      ...item.children
    });
  }
  return React.createElement(tag, { key: i.toString(), ...item }, children);
};

export const  timeDiffNow = (s) => {
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
  } else {
    return t.format('dd MMM YYYY')
  }
}

export const displayText = (s, n) => {
  if (s.length > n) {
    return s.substring(0, n-3) + '...'
  }
  return s
}