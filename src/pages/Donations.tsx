import React from 'react';
import { Link } from 'react-router-dom';
import './Donations.css';

const Donations: React.FC = () => {
  return (
    <div className="donations-page">
      <section className="page-header">
        <div className="container">
          <h1>Faire un Don</h1>
          <div className="title-underline"></div>
          <p>Soutenez nos actions au Cameroun</p>
        </div>
      </section>

      <section className="maintenance-section section-padding">
        <div className="container">
          <div className="maintenance-card">
            <div className="maintenance-illustration">
              <svg viewBox="0 0 200 150" width="200" height="150" className="construction-svg">
                {/* Sol / Ground */}
                <rect x="20" y="130" width="160" height="2" fill="var(--color-gray)" />
                
                {/* Character / Bonhomme stylisé moderne */}
                <circle cx="140" cy="60" r="12" fill="var(--color-green)" />
                <path d="M140 72 c0 0 -15 0 -15 25 l0 33" stroke="var(--color-green)" strokeWidth="8" strokeLinecap="round" />
                <path d="M140 72 c0 0 15 0 15 25 l0 33" stroke="var(--color-green)" strokeWidth="8" strokeLinecap="round" />
                <path d="M140 85 l-30 -10" stroke="var(--color-green)" strokeWidth="6" strokeLinecap="round" />
                
                {/* Brick wall being built / Mur en construction */}
                <rect x="40" y="110" width="40" height="15" rx="2" fill="#d35400" opacity="0.8" />
                <rect x="85" y="110" width="40" height="15" rx="2" fill="#d35400" />
                <rect x="62" y="92" width="40" height="15" rx="2" fill="#d35400" />
                
                {/* Floating brick being placed / Brique en cours de pose */}
                <rect x="100" y="70" width="40" height="15" rx="2" fill="#d35400" className="floating-brick" />
                
                {/* Trowel / Truelle */}
                <path d="M105 75 l-15 -5 l5 -8 z" fill="var(--color-gray)" />
                <path d="M105 75 l5 5" stroke="var(--color-dark)" strokeWidth="2" />
                
                {/* Cones / Cônes de chantier modernes */}
                <path d="M30 130 l10 -30 l10 30 z" fill="var(--color-yellow)" />
                <rect x="33" y="115" width="14" height="4" fill="var(--color-white)" />
              </svg>
            </div>
            <h2>Chantier de Solidarité</h2>
            <div className="maintenance-content">
              <p>
                Nous préparons actuellement une plateforme de donation sécurisée pour garantir la parfaite 
                transparence et la traçabilité de vos contributions.
              </p>
              <p>
                La solidarité est au cœur de notre mission, et nous mettons tout en œuvre pour que 
                vous puissiez soutenir l'Association Albatros dans les meilleures conditions techniques.
              </p>
              <div className="direct-donation-notice">
                <p>
                  <strong>Note importante :</strong> Vous pouvez néanmoins soutenir nos actions dès à présent. 
                  Pour effectuer un don par virement bancaire ou par chèque, nous vous invitons à nous contacter directement.
                </p>
              </div>
              <div className="maintenance-info">
                <h3>Souhaitez-vous être informé de l'ouverture ?</h3>
                <p>N'hésitez pas à nous contacter directement pour toute proposition de soutien ou de partenariat.</p>
                <Link to="/contact" className="btn btn-secondary">Nous contacter</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donations;
