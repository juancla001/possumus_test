import { useNavigate } from 'react-router-dom';
import dath404 from '../assets/images/dath404.png'

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>

      <div className="container">
        <img src={dath404} alt="" />
      </div>

      <div className="btn">
        <button className="btn btn-info btn-sm" type="button" onClick={() => navigate(-1)}>Atras</button>
      </div>

    </>
  )
}

export default NotFound;