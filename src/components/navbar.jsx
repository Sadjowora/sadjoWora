import Link from "next/link";

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo">
                <Link href="/">
                    SadjoWora
                </Link>
            </div>
            <div>
                <a href="mailto:geniewora@gmail.com" className="cta-link"> Dites Bonjour! </a>&nbsp;
                <a href="https://drive.google.com/file/d/1G5kaG8n_cWXiG22vcU6_B5U3o6K8MenN/view?usp=drive_link" className="cta-btn"> Mon CV </a>
            </div>
        </div>
    )
}

export default Navbar;