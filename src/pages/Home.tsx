import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1>Ne plus laisser la fatalité décider de l'existence.</h1>
            <p className="hero-subtitle">
              Dans les replis de notre société, des milliers de personnes vivent dans une vulnérabilité extrême. 
              Parce qu'ils sont invisibles, nous agissons pour leur redonner une place et une dignité.
            </p>
            <div className="hero-btns">
              <Link to="/faire-un-don" className="btn btn-primary">Soutenir nos actions</Link>
              <Link to="/a-propos" className="btn btn-secondary">Découvrir notre mission</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-intro section-padding">
        <div className="container">
          <div className="section-title">
            <h2>Notre Engagement</h2>
            <div className="title-underline"></div>
          </div>
          <div className="mission-grid">
            <div className="mission-text">
              <p>
                Notre association se veut un cadre de promotion pour la recherche et la vulgarisation 
                de l’aide sociale et humanitaire dédiée aux personnes en situation de précarité ou 
                d’exclusion sociale.
              </p>
              <p>
                Sa création répond à l’urgence qu’il y a de ne plus laisser la fatalité décider 
                de l'existence de ces personnes. Sa démarche s'appuie sur l’identification précise 
                des zones d’ombre, la compréhension des causes d’exclusion, le recensement des 
                besoins réels sur le terrain.
              </p>
            </div>
            <div className="mission-highlights">
              <div className="highlight-card">
                <span className="highlight-icon">🔍</span>
                <h4>Identification</h4>
                <p>Repérer les zones d'ombre et les besoins réels sur le terrain.</p>
              </div>
              <div className="highlight-card">
                <span className="highlight-icon">🤝</span>
                <h4>Accompagnement</h4>
                <p>Proposer une aide humanitaire et sociale adaptée et durable.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
