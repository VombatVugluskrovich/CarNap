import React from "react";
import CardsList from "./CardsList";

const MainText = () => {
    const colors = {
        darkBlue: '#002e4d',
        orangeBtn: '#f08161',
        lightBg: '#f8f9fa'
    };
    return (
        <div>
            <div className='d-flex w-100 justify-content-center py-2 gap-3"'
                style={{ marginLeft: '10px' }}>
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
                            <div className="col-1"></div>
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
            <CardsList />
        </div>
    )
}
export default MainText