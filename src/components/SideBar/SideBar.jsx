import React from 'react'
import PImage from '../../assets/pimage.jpg'
import './sideBar.css'
import { Link } from 'react-router-dom';

export default function SideBar() {
  return (
    <>
      <nav className="nav flex-column gap-2 ">
        <img src={PImage} alt="Profile" className="img-fluid mb-3 rounded-circle main_img" />
        <h1 className='my_name'> Jackson Ford </h1>
        <p>UI/UX/Designer in Philippines</p>
        <Link className="nav-link text-dark px-2" to="/">Home</Link>
        <Link className="nav-link text-dark px-2" to="/about">About</Link>
        <Link className="nav-link text-dark px-2" to="/skills">Skills</Link>
        <Link className="nav-link text-dark px-2" to="/experience">Experience</Link>
        <Link className="nav-link text-dark px-2" to="/work">Work</Link>
      </nav>
    </>
  )
}
