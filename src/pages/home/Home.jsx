import React from 'react'
import Posts from '../../composants/posts/Posts'
import Story from '../../composants/story/Story'
import './home.scss'

const Home = () => {
  return (
    <>
      <div className="home">
        <Story/>
        <Posts/>
      </div>
    </>
  )
}

export default Home