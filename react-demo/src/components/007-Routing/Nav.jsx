import {Link} from 'react-router-dom';

const Nav = () => {
    return ( 
        <div>
            <p>
                <Link to="/"> Home </Link>
            </p>
            <button>
                <Link to="/about"> About </Link>
            </button>
            <button>
                <Link to="/contact"> Contact </Link>
            </button>

            <button>
                <Link to="/product/abc"> abc </Link>
            </button>

            <button>
                <Link to="/product/123"> 123 </Link>
            </button>

            <button>
                <Link to="/product/zip"> zip </Link>
            </button>

            <button>
                <Link to="/product/zoop"> zoop </Link>
            </button>
        </div>
     );
}
 
export default Nav;