
const Header = () =>{
    return (
        <header className="header">
            <div className="logo">
                <img src="/logo.png" alt="Librería Luciano Lollo" className="logo-image" />
                <h1 className="logo-text">Librería Luciano Lollo</h1>
            </div>
            <nav className="nav">
                <a href="#">Inicio</a>
                <a href="#">Tema 1</a>
                <a href="#">Tema 2</a>
                <a href="#">Tema 3</a>
                <a href="#">Tema 4</a>
                <a href="#">Registro</a>
                <a href="#">Contacto</a>
            </nav>
        </header>
    )

}

export default Header