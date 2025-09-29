import '../styles/bloqueTema.css'

function BloqueTema({ title, autor, img }) {
  return (
    <div className="BloqueTema card">
    <img src={img} className="card-img-top" alt={title} />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{autor}</p>
    </div>
  </div>
  
  );
}

export default BloqueTema