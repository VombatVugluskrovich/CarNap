import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/my-styles.css'
import chapters from '../metadata/chapters.json'
import ServiceCard from './components/ServiceCard';
import Footer from './components/Footer';
const colors = {
    darkBlue: '#002e4d',
    orangeBtn: '#f08161',
    lightBg: '#f8f9fa'
  };
const MainPage: React.FC = () => {
  return (
    <div className='d-flex flex-column'>
    <div className="container-fluid p-0">
        <div className="w-100 d-flex text-white px-4" 
        style={{ height: '150px', backgroundColor: '#002e4d', position: 'relative' }}>
        
        <div className='col-2'></div>
        <div className="col-3 d-flex justify-content-start align-items-start px-4">
        <img 
            src="/images/Logo.png" 
            alt="CarNap Logo" 
            style={{ 
            height: '165px', 
            width: 'auto', 
            zIndex: 10,
            objectFit: 'contain'
            }} 
        />
        </div>

        {/* Текст */}
        <div className="col-4 d-flex align-items-center justify-content-left px-4" style={{padding:'20px]'}}>
        <div className='d-flex w-100'>
                <div>
                    <h2 className="fw-bold">CAR NAP | СТО, Автосервіс Київ</h2>
                </div>
                <div className='col-sm-4'>
                        <h5>
                            <a href="tel:+380677140747" className="text-white text-decoration-none">
                            +38(067) 714 07 47
                            </a>
                        </h5>
                        <h5>
                            <a href="tel:+380677140747" className="text-white text-decoration-none">
                            +38(067) 714 07 47
                            </a>
                        </h5>
                </div>
            </div> 
        </div>
            <div className="col-2 d-flex align-items-center justify-content-center px-4">
            <button className="btn btn-outline-light px-4 py-2" onClick={()=>alert('ololoo')}>Запис Online</button>
            </div>
        </div>
        <div className="w-100 bg-light border-bottom">
            <nav className="d-flex justify-content-center py-2 gap-3">
                {/* Заглушка, чтобы текст меню не залез под логотип на десктопе */}
                <div className="d-none d-lg-block" style={{ width: '180px' }}></div>
                <a href="#" className="text-decoration-none text-dark px-2">Послуги</a>
                <a href="#" className="text-decoration-none text-dark px-2">Обслуговування</a>
                <a href="#" className="text-decoration-none text-dark px-2">Контакти</a>
            </nav>
        </div>
        <div className='d-flex w-100 justify-content-center py-2 gap-3"'>
            <section className="py-5" style={{ backgroundColor: colors.lightBg }}>
                <div className="container">
        
                <div className="text-center mb-5">
                    <h2 style={{ color: colors.darkBlue, fontWeight: 'bold', textTransform: 'uppercase' }}>
                        Діагностика ходової
                    </h2>
                    <h3 style={{ color: colors.darkBlue }}>
                        Діагностична лінія
                    </h3>
                </div>

                <div className="row align-items-start">
                {/* Левая колонка: Изображение стенда */}
                    <div className="col-lg-3 mb-4">
                        <div className="shadow-sm rounded overflow-hidden">
                        <img 
                            src="/images/CarMainPage.png" 
                            alt="Car" 
                            width={'auto'}
                            className="img-fluid"
                            style={{ display: 'block' }}
                        />
                        </div>
                    </div>

                {/* Правая колонка: Текст */}
                    <div className="col-lg-6 px-lg-4">
                        <div style={{ lineHeight: '1.6', color: '#333', textAlign: 'left' }}>
                            <p className="fs-5">
                                <strong style={{ color: colors.darkBlue }}>
                                НАШ ПРІОРИТЕТ - ЯКІСТЬ ПОСЛУГ, ЩО НАДАЮТЬСЯ.
                                </strong> 
                                {' '}Тому для діагностики ходової частини автомобіля ми використовуємо новітню діагностичну лінію SDL, 
                                яка на сьогоднішній день зарекомендувала себе на ринку як найбільш сучасне та ефективне 
                                обладнання для інструментального контролю технічного стану автотранспортних засобів.
                            </p>

                            <p className="mt-4 fs-5">
                                <strong style={{ color: colors.darkBlue }}>
                                За 10-15 хвилин Ви зможете дізнатися ВСЕ про стан підвіски та гальмівної системи Вашого автомобіля.
                                </strong> 
                                {' '}У Вашій присутності наші фахівці перевірять на випробувальному стенді ефективність роботи ходової частини, 
                                розвал-сходження, роботу гальмівної системи передньої та задньої осі, ручного гальма стоянки, 
                                працездатність всіх амортизаторів, коефіцієнт зчеплення з дорогою всіх коліс авто, роботу гальмівних дисків на биття, 
                                деформацію та знос.
                            </p>

                            {/* Кнопка */}
                            <div className="mt-4">
                                <button 
                                className="btn btn-lg px-5 text-white" 
                                style={{ 
                                    backgroundColor: colors.orangeBtn, 
                                    borderRadius: '0', 
                                    fontWeight: 500,
                                    border: 'none'
                                }}
                                onClick={() => console.log('Перехід до деталей')}
                                >
                                Детальніше
                                </button>
                            </div>
                    </div>
                </div>
            </div>
      </div>
            </section>
        </div>
        
        <div className='d-flex  gap-2 w-100 container justify-content-center align-items-center px-4'>
            {chapters.map((c: any) => (
                <ServiceCard caption={c.description} imageUrl='' url=''></ServiceCard>
            ))}
        </div>
        
    </div>
    <Footer/>
    </div>
  );
};

export default MainPage;