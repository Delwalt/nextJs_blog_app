import Link from 'next/link';
import {Navbar, Logo} from '../theme/styles';




const Header = () => (
    <Navbar>
        <Link href="/">
            <Logo title="See All Articles" >GKMIT | Blog</Logo>
        </Link>
    </Navbar>
);




export default Header;
