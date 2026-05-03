import './Missions.css';

const Missions: React.FC = () => {
  return (
    <div className="missions-page">
      <section className="page-header">
        <div className="container">
          <h1>Nos Missions</h1>
          <div className="title-underline"></div>
        </div>
      </section>

      <section className="missions-list section-padding">
        <div className="container">
          <div className="mission-item-large">
            <div className="mission-image">
               <span className="mission-emoji">🔍</span>
            </div>
            <div className="mission-info-text text-content">
              <h2>Identification et Recensement</h2>
              <p>
                La première étape de notre action est de briser l'invisibilité. Nous menons des campagnes 
                de terrain pour identifier précisément les zones d’ombre et recenser les besoins réels. 
                Comprendre les causes profondes de l'exclusion est essentiel pour agir efficacement.
              </p>
              <ul>
                <li>Enquêtes sociales de proximité</li>
                <li>Cartographie de la précarité</li>
                <li>Écoute active des populations marginalisées</li>
              </ul>
            </div>
          </div>

          <div className="mission-item-large reverse">
            <div className="mission-image">
               <span className="mission-emoji">🆘</span>
            </div>
            <div className="mission-info-text text-content">
              <h2>Aide Humanitaire et Sociale</h2>
              <p>
                Nous mettons à disposition une aide concrète, adaptée et durable. Que ce soit par 
                un soutien matériel direct ou par un accompagnement dans les démarches sociales, 
                notre but est de stabiliser la situation de chaque bénéficiaire.
              </p>
              <ul>
                <li>Distribution de kits de première nécessité</li>
                <li>Accès aux soins de base</li>
                <li>Aide administrative et juridique</li>
              </ul>
            </div>
          </div>

          <div className="mission-item-large">
            <div className="mission-image">
               <span className="mission-emoji">📢</span>
            </div>
            <div className="mission-info-text text-content">
              <h2>Vulgarisation et Sensibilisation</h2>
              <p>
                L'exclusion sociale est souvent nourrie par l'indifférence. Nous œuvrons pour 
                la promotion et la vulgarisation de l'aide humanitaire auprès du grand public 
                et des institutions pour changer les regards et mobiliser davantage de ressources.
              </p>
              <ul>
                <li>Campagnes de sensibilisation média</li>
                <li>Conférences et débats publics</li>
                <li>Publication de rapports sur la précarité</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Missions;
