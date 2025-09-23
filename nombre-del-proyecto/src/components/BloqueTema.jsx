import '../styles/bloqueTema.css'

function BloqueTema({ title, autor, img }) {
  return (
    <div className="BloqueTema">
      <h2>{title} - {autor}</h2>
      <img src={img} alt={title} />
    </div>
  );
}

export default BloqueTema