import { useState } from 'react';
import './Donations.css';

const Donations: React.FC = () => {
  const [amount, setAmount] = useState<number | string>(50);

  const amounts = [10, 20, 50, 100, 200];

  return (
    <div className="donations-page">
      <section className="page-header">
        <div className="container">
          <h1>Faire un Don</h1>
          <p>Chaque geste compte pour briser l'invisibilité.</p>
          <div className="title-underline"></div>
        </div>
      </section>

      <section className="donations-content section-padding">
        <div className="container">
          <div className="donations-grid">
            <div className="donations-info text-content">
              <h2>Pourquoi donner ?</h2>
              <p>
                Vos dons sont notre unique force pour agir sur le terrain. Ils permettent 
                directement de financer nos campagnes de recensement et l'aide humanitaire 
                d'urgence apportée aux personnes exclues.
              </p>
              <div className="impact-box">
                <h4>L'impact de votre don :</h4>
                <ul>
                  <li><strong>20 €</strong> finance un kit de première nécessité.</li>
                  <li><strong>50 €</strong> permet le recensement d'une zone d'ombre complète.</li>
                  <li><strong>100 €</strong> assure un suivi social pour une famille pendant un mois.</li>
                </ul>
              </div>
            </div>

            <div className="donations-form-container">
              <h3>Soutenir l'Albatros</h3>
              <div className="amount-selector">
                <p>Choisissez un montant :</p>
                <div className="amount-btns">
                  {amounts.map(amt => (
                    <button 
                      key={amt} 
                      className={`amount-btn ${amount === amt ? 'active' : ''}`}
                      onClick={() => setAmount(amt)}
                    >
                      {amt}€
                    </button>
                  ))}
                  <input 
                    type="number" 
                    placeholder="Autre" 
                    className="custom-amount"
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
              </div>
              <button className="btn btn-primary btn-block">
                Continuer vers le paiement sécurisé
              </button>
              <p className="secure-note">🛡️ Paiement 100% sécurisé via Stripe/PayPal</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donations;
