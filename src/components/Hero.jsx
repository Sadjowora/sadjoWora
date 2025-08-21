import Image from "next/image";

const Hero = () => {
    return (
        <div className="hero-container">
            <Image src='/images/profile.jpg' className="profile-img" width={300} height={300} alt="photo personel de sadjo" />
            <div className="hero-text">
                <h1> Bonjour, je suis Sadjo 👋 </h1>
                <p>
                Je me nomme Mamadu Sadjo Djalo, je suis un développeur web Reactjs / NextJs / React Native. J'aime travailler à la fois sur le front-end et le back-end des applications, et je suis toujours à la recherche de moyens d'optimiser les performances, d'améliorer l'expérience utilisateur et d'assurer le plus haut niveau de qualité de code. 
                </p>
                <div className="social-icons">
                    <a
                        href="https://twitter.com/@SabdjoWora"
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
                        href="hhttps://www.linkedin.com/in/mamadu-sadjo-djal%C3%B3-6b581418b/"
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