import { Link } from "gatsby";

const Header = () => (
  <header>
    <Link to="/">Home</Link>
    <Link to="/posts">Posts</Link>
    <Link to="/talks">talks</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
  </header>
);

export default Header;
