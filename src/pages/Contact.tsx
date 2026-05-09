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
                  <span className="info-icon">
                    <img src={`${import.meta.env.BASE_URL}emplacement.png`} alt="Localisation" style={{ width: '24px', height: 'auto' }} />
                  </span>
                  <p>Village de Songloulou, région du Littoral et le département de la Sanaga-Maritime, Cameroun</p>
                </div>
                <div className="info-item">
                  <span className="info-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f1c40f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6" stroke="#e67e22"></polyline>
                    </svg>
                  </span>
                  <p>florentgerard@fgdeveloppement.com</p>
                </div>
                <div className="info-item">
                  <span className="info-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </span>
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
