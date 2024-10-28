import './Header.css';


const Header = () => {
    return (
        <div className='nav-bar'>
            <h1>My Daily Store</h1>
            <div className='nav-section'>
                <a href="/home">Home</a>
                <a href="/store">Store</a>
                <a href="/about us">About Us</a>
                <a href="/contact us">Contact Us</a>
            </div>
        </div>
    );
};

export default Header;