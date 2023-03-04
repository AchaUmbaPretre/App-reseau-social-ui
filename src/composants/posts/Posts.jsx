import React from 'react'
import Post from '../post/Post'
import './posts.scss'


const Posts = () => {

  const postItems = [
    {
      id : 1,
      nom : "Acha umba",
      userId : 1,
      profile : '',
      desc : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum nostrum officia nulla nobis earum nihil adipisci tempore ratione perspiciatis fugit, veritatis ipsa iste corrupti enim aliquam repellendus perferendis quas sequi.",
      img : "",

    },
    {
      id : 2,
      nom : "Acha umba",
      userId : 2,
      profile : '',
      desc : "1Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum nostrum officia nulla nobis earum nihil adipisci tempore ratione perspiciatis fugit, veritatis ipsa iste corrupti enim aliquam repellendus perferendis quas sequi.",
    }
  ]

  return (
    <>
      <div className="posts">
        { postItems.map((item) => (
          <Post item ={item} key={item.id} />
        ))
        }
      </div>
    </>
  )
}

export default Posts