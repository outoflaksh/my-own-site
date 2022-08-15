import "../styles/navbar.css";

const Navbar = () => {
    return (
        <nav>
            <div className="brand">
                root<span>@outoflaksh</span>
            </div>
            <div>
                <ul className="nav-links">
                    <li>skills</li>
                    <li>projects</li>
                    <li>resume</li>
                    <li className="nav-btn">get in touch</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
