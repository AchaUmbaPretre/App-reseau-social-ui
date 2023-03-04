import './commentaire.scss'
import acha from '../../assets/acha.jpg'

const Commentaire = () => {

  const items = [
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a",
      name: "acha umba",
      userId: 1,
      profil: "",
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur a",
      name: "acha umba",
      userId: 2,
      profil: "",
    }

  ]
  return (
    <>
      <div className="commentaires">
        <div className="commentaire-wrapper">
          <img src={acha} alt="" />
          <input type="text" placeholder='Ecrire un commentaire...' />
          <button>send</button>
        </div>
        {
          items.map((item) =>(
            <div className="commentaire">
              <img src={acha} alt="" />
              <div className="info">
                <span>{item.name}</span>
                <p>{item.desc}</p>
              </div>
              <span className="date">1 hour ago</span>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Commentaire