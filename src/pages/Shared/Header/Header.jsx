import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div>
        <Link>
          <p className="text-2xl font-bold">
            DOCTOR<span className="text-green-700"> HOUSE</span>
          </p>
        </Link>
      </div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="blog">Blog</Link>
    </nav>
  );
};

export default Header;
