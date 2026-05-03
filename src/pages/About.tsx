import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <section className="page-header">
        <div className="container">
          <h1>Qui sommes-nous ?</h1>
          <div className="title-underline"></div>
        </div>
      </section>

      <section className="about-content section-padding">
        <div className="container">
          <div className="about-grid">
            <div className="about-main-text text-content">
              <h2>Notre Histoire et Vision</h2>
              <p>
                L'Association Albatros est née d'un constat alarmant : au cœur de nos villes et villages 
                au Cameroun, des milliers d'individus vivent dans une précarité telle qu'ils finissent 
                par devenir "invisibles" aux yeux de la société.
              </p>
              <p>
                Sa création répond à l’urgence qu’il y a de ne plus laisser la fatalité décider de 
                l'existence de ces personnes. Nous croyons fermement que chaque être humain mérite 
                dignité, écoute et soutien, quelle que soit sa situation de départ.
              </p>
              <p>
                Notre démarche ne se limite pas à l'aide d'urgence ; elle s'appuie sur une 
                identification précise des causes d'exclusion pour proposer des solutions durables 
                et adaptées à chaque parcours de vie.
              </p>
            </div>
            <div className="about-values">
              <h3>Nos Valeurs</h3>
              <div className="value-item">
                <span className="value-icon">❤️</span>
                <div>
                  <h4>Dignité</h4>
                  <p>Replacer l'humain au centre de toutes nos préoccupations.</p>
                </div>
              </div>
              <div className="value-item">
                <span className="value-icon">⚖️</span>
                <div>
                  <h4>Justice Sociale</h4>
                  <p>Lutter contre l'indifférence et les inégalités d'accès à l'aide.</p>
                </div>
              </div>
              <div className="value-item">
                <span className="value-icon">🤝</span>
                <div>
                  <h4>Solidarité</h4>
                  <p>Agir ensemble pour un impact réel et mesurable sur le terrain.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
