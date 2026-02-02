const Header = () => {
    return (
        <div>
            <div className="w-100 d-flex text-white px-4"
                style={{ height: '150px', backgroundColor: '#002e4d', position: 'relative' }}>

                <div className='col-2'></div>
                <div className="col-3 d-flex col-3 d-flex justify-content-start align-items-start px-4">
                    <img
                        src="/images/Logo.png"
                        alt="CarNap Logo"
                        style={{
                            height: '150px',
                            width: 'auto',
                            zIndex: 10,
                            objectFit: 'contain',
                            marginLeft: '0px'
                        }}
                    />
                </div>

                {/* Текст */}
                <div className="col-4 d-flex align-items-center justify-content-left px-4" style={{ padding: '20px]' }}>
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
                    <button className="btn btn-outline-light px-4 py-2" onClick={() => alert('ololoo')}>Запис Online</button>
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
        </div>)
}
export default Header