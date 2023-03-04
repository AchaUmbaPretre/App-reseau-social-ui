import './post.scss'
import { Link } from 'react-router-dom'
import acha from '../../assets/acha.jpg'
import Commentaire from '../commentaire/Commentaire';
import { useState } from 'react';

const Post = ({item}) => {

    const likes = false;
    const [commentOpen, setCommentOpen] = useState(false);

  return (
    <>
        <div className="post" key={item.id}>
            <div className="post-top">
                <div className="post-top-left">
                    <img src={acha} alt="" className="post-top-img" />
                    <div className="post-top-left-desc">
                        <Link to={`/profil/:${item.userId}`}>
                            <span className='post-nom'>{item.nom}</span>
                        </Link>    
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="post-top-right">
                    ...
                </div>
            </div>

            <div className="post-center">
                <p>{item.desc}</p>
                <img src={acha} alt="" />
                <div className="post-center-rows">
                    <div className="post-rows">
                    {likes ? <i className="fa fa-heart"></i> :<i className="fa-regular fa-heart"></i>}
                        <span>12 J'aime</span>
                    </div>

                    <div className="post-rows" onClick={() =>setCommentOpen(!commentOpen)}>
                        <i className="fa-regular fa-comment"></i>
                        <span >10 Commentaire</span>
                    </div>

                    <div className="post-rows">
                        <i className="fa fa-share-nodes"></i>
                        <span>1 Partager</span>
                    </div>
                </div>
                {commentOpen && < Commentaire/>}
            </div>
        </div>
    </>
  )
}

export default Post;