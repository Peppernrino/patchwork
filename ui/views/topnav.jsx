'use babel'
import React from 'react'
import { Link } from 'react-router'
import Issues from '../com/issues'

export default class TopNav extends React.Component {

  render() {
    return <div id="topnav">
      <div className="compose"><Link className="btn" to="/composer"><i className="fa fa-edit" /></Link></div>
      <div className="search">
        <input type="text" placeholder="Search" />
      </div>
      <div><Issues /></div>
    </div>
  }
}