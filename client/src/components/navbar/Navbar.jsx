import React from 'react'
import classes from './navbar.module.css'
import { Link,Navigate } from 'react-router-dom'
import womanImg from '../../assets/woman.jpg'
import { useState } from 'react'
import { logout } from '../../redux/authSlice'
import { useDispatch } from 'react-redux'

const Navbar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());

    return <Navigate to = '/login' />
  }
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <Link to='/'>WebArticle</Link>
        </div>
        <ul className={classes.center}>
          <li className={classes.listItem}>Home</li>
          <li className={classes.listItem}>Categories</li>
        </ul>
        <div className={classes.right}>
          <img src={womanImg} className={classes.img} />
          <button className={classes.button}>
            <Link to='/create'>New Post</Link>
          </button>
          <button className={classes.button} onClick={handleLogout}>
            Logout
          </button>
        </div>
        </div>
      </div>
  )
}

export default Navbar