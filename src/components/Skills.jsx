const Skills = () => {
    return (
        <div className="skills-container">
            <h2>Compétences</h2>
            <div className="grid-skills">
                <div className="skill-card html">
                    <i className="fa-brands fa-html5 html-icon"></i>
                    <p>HTML</p>
                </div>
                <div className="skill-card css">
                    <i className="fa-brands fa-css3-alt css-icon"></i>
                    <p>CSS</p>
                </div>
                <div className="skill-card js">
                    <i className="fa-brands fa-js-square js-icon"></i>
                    <p>JavaScript</p>
                </div>
                <div className="skill-card react">
                    <i className="fa-brands fa-react react-icon"></i>
                    <p>React</p>
                </div> 
                <div className="skill-card python">
                    <i className="fa-brands fa-n n-icon"></i>
                    <p>Next/js</p>
                </div>
                <div className="skill-card python">
                    <i className="fa-brands fa-bootstrap fa-bootstrap"></i>
                    <p>Bootstrap</p>
                </div>
                <div className="skill-card python">
                    <i className="fa-brands fa-github fa-github"></i>
                    <p>Github</p>
                </div>
                <div className="skill-card python">
                    <i className="fa-brands fa-v v-icon"></i>
                    <p>Vercel</p>
                </div>
            </div>
        </div>
    )
}

export default Skills;