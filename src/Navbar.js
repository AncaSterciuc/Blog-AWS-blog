import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>My Blog</h1>
      <div className="links">
        <Link to="/" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>Acasa</Link>
        <Link to="/create">Adauga Blog</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;