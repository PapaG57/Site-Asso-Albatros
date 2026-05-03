import { useForm, ValidationError } from '@formspree/react';
import './Contact.css';

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm("xgodonpj");

  if (state.succeeded) {
    return (
      <div className="contact-page">
        <section className="page-header">
          <div className="container">
            <h1>Contact & Adhésion</h1>
            <div className="title-underline"></div>
          </div>
        </section>
        <section className="section-padding">
          <div className="container">
            <div className="success-message">
              <h2>Merci pour ton message !</h2>
              <p>Nous avons bien reçu ta demande et l'équipe de l'Albatros te répondra dans les plus brefs délais.</p>
              <button onClick={() => window.location.reload()} className="btn btn-secondary">Envoyer un autre message</button>
            </div>
          </div>
        </section>
      </div>
    );
  }

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
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nom complet</label>
                  <input type="text" name="name" id="name" placeholder="Votre nom" required />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" placeholder="votre@email.com" required />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Sujet</label>
                  <select name="subject" id="subject">
                    <option value="info">Demande d'information</option>
                    <option value="adhesion">Devenir membre / Adhésion</option>
                    <option value="benevolat">Devenir bénévole</option>
                    <option value="autre">Autre</option>
                  </select>
                  <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea name="message" id="message" rows={5} placeholder="Votre message..." required></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                <button type="submit" className="btn btn-secondary btn-block" disabled={state.submitting}>
                  {state.submitting ? 'Envoi en cours...' : 'Envoyer le message'}
                </button>
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
                  En devenant membre de l'Association Albatros, tu participes activement à la lutte 
                  contre l'exclusion. Tu recevras nos rapports d'activité et seras convié à nos 
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
