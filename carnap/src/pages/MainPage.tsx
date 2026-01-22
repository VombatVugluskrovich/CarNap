import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/my-styles.css'
const MainPage: React.FC = () => {
  return (
  <div className="w-100 d-flex align-items-center pre-header" style={{ height: 150 }}>
    <div className="d-flex justify-content-end " style={{ width: '20%' }}>
        <img 
        src="/images/Logo.png" 
        height={150} 
        width={150} 
        alt="CarNap Logo" 
        />
    </div>

    <div className="d-flex justify-content-center" style={{ width: '70%', color: 'white' }}>
        <div className='flex-column'>
            <div className='d-flex justify-content-center' style={{height:'50%'}}>
                <h1 className="m-0">CAR NAP | СТО, Автосервіс Київ</h1>
            </div>
            <div className='d-flex justify-content-justify' style={{height:'50%'}}>
                <p> Наши прекрасные телефоны и все дела</p>
            </div>
        </div>
    </div>

    <div style={{ width: '30%' }}>
        <button className="btn btn-primary">OK</button>
    </div>
</div>
  );
};

export default MainPage;