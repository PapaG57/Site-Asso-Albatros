import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <section className="hero-mockup">
        <div className="container">
          <div className="hero-frame">
            <img 
              src={`${import.meta.env.BASE_URL}hero.png`} 
              alt="Enfants du Cameroun souriants" 
              className="hero-image"
            />
            <div className="hero-caption">
              <span className="caption-chevron">«</span>
              <span className="caption-accent">ENSEMBLE</span> POUR UNE MISSION DE CHARITÉ ET DE DIGNITÉ
              <span className="caption-chevron">»</span>
            </div>
          </div>
        </div>
      </section>

      <section className="services-grid-section">
        <div className="container">
          <div className="services-grid">
            <div className="service-col">
              <h3>Rapports</h3>
              <p>Consultation de nos rapports d'activité annuels et bilans financiers.</p>
              <div className="service-icon-circle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </div>
            </div>
            <div className="service-col">
              <h3>Publications</h3>
              <p>Découvrez nos articles de recherche et études sur la précarité au Cameroun.</p>
              <div className="service-icon-circle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </div>
            </div>
            <div className="service-col">
              <h3>Projet Urgent</h3>
              <p>Soutenez nos actions prioritaires pour les populations les plus vulnérables.</p>
              <div className="service-icon-circle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </div>
            </div>
            <div className="service-col">
              <h3>Réhabilitation</h3>
              <p>Programmes de réinsertion sociale et accompagnement vers l'autonomie.</p>
              <div className="service-icon-circle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </div>
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
          <div className="mission-content-alt">
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
        </div>
      </section>
    </div>
  );
};

export default Home;
