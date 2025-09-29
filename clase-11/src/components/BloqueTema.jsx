import '../styles/bloqueTema.css'

function BloqueTema({ title, autor, img }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top"/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{autor}</p>
  </div>
</div>
  );
}

export default BloqueTema