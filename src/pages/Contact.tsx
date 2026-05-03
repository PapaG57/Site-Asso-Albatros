import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <section className="page-header">
        <div className="container">
          <h1>Contact & Adhésion</h1>
          <p>Rejoignez le mouvement ou posez vos questions.</p>
          <div className="title-underline"></div>
        </div>
      </section>

      <section className="contact-content section-padding">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-container">
              <h2>Envoyez-nous un message</h2>
              <form 
                className="contact-form" 
                action="https://formspree.io/f/xgodonpj" 
                method="POST"
              >
                <div className="form-group">
                  <label htmlFor="name">Nom complet</label>
                  <input type="text" name="name" id="name" placeholder="Votre nom" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" placeholder="votre@email.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Sujet</label>
                  <select name="subject" id="subject">
                    <option value="info">Demande d'information</option>
                    <option value="adhesion">Devenir membre / Adhésion</option>
                    <option value="benevolat">Devenir bénévole</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea name="message" id="message" rows={5} placeholder="Votre message..." required></textarea>
                </div>
                <button type="submit" className="btn btn-secondary btn-block">Envoyer le message</button>
              </form>
            </div>

            <div className="contact-info">
              <div className="info-card">
                <h3>Nos Coordonnées</h3>
                <div className="info-item">
                  <span className="info-icon">📍</span>
                  <p>Cameroun, Douala / Yaoundé</p>
                </div>
                <div className="info-item">
                  <span className="info-icon">📧</span>
                  <p>contact@albatros-asso.cm</p>
                </div>
                <div className="info-item">
                  <span className="info-icon">📱</span>
                  <p>+237 6XX XX XX XX</p>
                </div>
              </div>

              <div className="membership-card">
                <h3>Devenir Membre</h3>
                <p className="text-content">
                  En devenant membre de l'Association Albatros, vous participez activement à la lutte 
                  contre l'exclusion. Vous recevrez nos rapports d'activité et serez convié à nos 
                  assemblées générales.
                </p>
                <p className="membership-fee">Cotisation annuelle : 15 000 FCFA</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
