import { useNavigate } from "react-router-dom";
import '../styles/bloqueTema.css'

function BloqueTema({ title, autor, img, id, onClick }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (id) {
      navigate(`/libro/${id}`);
    }
  };

  return (
    <div className="BloqueTema card" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <img src={img} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{autor}</p>
      </div>
    </div>
  );
}

export default BloqueTema