import React from 'react';
import { Facebook, Instagram, MusicNote } from 'react-bootstrap-icons'; // Используем react-bootstrap-icons

const Footer: React.FC = () => {
  const footerBg = '#002e4d';

  return (
    <footer className="text-white py-4" style={{ backgroundColor: footerBg }}>
      <div className="container">
        <div className="row gy-4">
          
          {/* Контакти */}
          <div className="col-md-3">
            <h5 className="fw-bold mb-4 text-uppercase">Контакти</h5>
            <p className="mb-1 fw-bold">Car Nap</p>
            <p className="mb-3">
                            
              <a href="tel:+380677140747">
                +38(067) 714 07 47
              </a>
             </p>
             <p  className="mb-3">
              <a href="tel:+380677140747" >
                            +38(067) 714 07 47
               </a>
            </p>
            <a href='https://maps.app.goo.gl/FUV24txZsGYfAdhZ8' target='blank'>
                <p className="mb-1">КИЇВ, УКРАЇНА</p>
                <p className="mb-3"> вулиця Гліба Бабіча, 1</p>
            </a>
            <p>
              <a href="mailto:INFO@BOSCHSERVICE.KIEV.UA" className="border-bottom border-secondary">
                INFO@BOSCHSERVICE.KIEV.UA
              </a>
            </p>
          </div>

          {/* Час роботи */}
          <div className="col-md-3">
            <h5 className="fw-bold mb-4 text-uppercase">Час роботи</h5>
            <p className="mb-1">ПН - СБ: 9:00–19:00</p>
            <p>НД: ВИХІДНИЙ</p>
          </div>

          {/* Ми в соцмережах */}
          <div className="col-md-2">
            <h5 className="fw-bold mb-4 text-uppercase">Ми в соцмережах</h5>
            <div className="d-flex gap-3 fs-3">
              <a href="https://www.instagram.com/carnap_kyiv/" className="text-white" target='blank'><Instagram /></a>
              <a href="https://www.tiktok.com/@carnap.kyiv?_t=8rLFJETL2lb&_r=1" className="text-white" target='blank'><MusicNote /></a> {/* Иконка TikTok */}
            </div>
          </div>

          {/* Зателефонуйте нам */}
          <div className="col-md-4 text-md-end">
            <h5 className="fw-bold mb-4 text-uppercase">Зателефонуйте нам сьогодні</h5>
            <h2 className="fw-bold mb-4">
              <a href="tel:+380677140747" >
                +38(067) 714 07 47
              </a>
            </h2>
            <div className="d-flex justify-content-md-end gap-2">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" 
                alt="Visa" 
                style={{ height: '30px', backgroundColor: 'white', padding: '4px', borderRadius: '4px' }}
              />
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" 
                alt="Mastercard" 
                style={{ height: '30px', backgroundColor: 'white', padding: '4px', borderRadius: '4px' }}
              />
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;