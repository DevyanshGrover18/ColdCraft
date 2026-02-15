import { Link, useNavigate } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="nav">
      <Link to="/" className="logo">
        <span className="logo-fire">🔥</span>
        ColdCraft
      </Link>
      <button className="nav-cta" onClick={() => navigate('/generate')}>
        Generate Email
      </button>
    </nav>
  );
}

export default Navbar;