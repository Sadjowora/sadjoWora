import Image from "next/image";

const About = () => {
    return (
        <div className="about-container">
            <div className="flex-about">                
                <div className="about-img">
                    <Image src='/images/hero-devices.svg' className="profile-img" width={105} height={81} alt="photo responsive" />
                </div>
               <h2>A propos de Moi</h2>
                <div className="about-text"> 
                <p>
                En tant que développeur, j'ai toujours été passionné par la création de solutions élégantes et efficaces à des problèmes complexes. J'ai de solides bases en développement de logiciels, avec un accent sur les technologies Web telles que <strong> HTML , CSS </strong> et <strong> JavaScript.</strong> J'aime travailler à la fois sur le front-end et le back-end des applications, et je suis toujours à la recherche de moyens d'optimiser les performances, d'améliorer l'expérience utilisateur et d'assurer le plus haut niveau de qualité de code. j'ai travaillé sur des projets de simples sites Web statiques jusqu'à des applications complexes au niveau de l'entreprise avec des framework comme <strong>ReactJs / NextJs.</strong>.
                </p>    
                </div>                
            </div>
        </div>

    )
}

export default About;