function Navbar({ alNavegar }) {
  return (
    <nav className="navbar">
      <h1>GamingHub</h1>
      <ul>
        <li onClick={() => alNavegar("inicio")}>
          Inicio
        </li>
        <li onClick={() => alNavegar("contacto")}>
          Contacto
        </li>
        <li onClick={() => alNavegar("unemi")}>
          UNEMI
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;