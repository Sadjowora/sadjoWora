import Image from "next/image";

const Hero = () => {
    return (
        <div className="hero-container">
            <Image src='/images/profile.jpg' className="profile-img" width={300} height={300} alt="photo personel de sadjo" />
            <div className="hero-text">
                <h1>Bonjour, je suis Sadjo 👋</h1>
                <p>
                Je me nomme Diallo Mamadou Sadjo, je suis un développeur web frontend basé à Conakry, en Guinée. Je me spécialise dans la création et la conception de sites et d'applications web, et de tout ce qui va avec.
                </p>
                <div className="social-icons">
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
                        href="https://www.linkedin.com/in/mamadou-sadjo-diallo-6b581418b/"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero;