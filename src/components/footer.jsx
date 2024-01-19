const Footer = () => {
    return (
        <>
            <hr />
            <div className="footer-container">
                <p>
                    &copy; {new Date().getFullYear()} SadjoWora Portofolio
                    <small>&nbsp; <strong>Tel: </strong> 620027539 </small>
                    <small>&nbsp; <strong>Email: </strong> geniewora@gmail.com </small>
                </p>
                <div className="social_icons">
                    <a
                        href="https://twitter.com/@SadjoWora"
                        aria-label="Twitter"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a
                        href="https://github.com/Sadjowora"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/mamadou-sadjo-diallo-6b581418b//"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Footer;