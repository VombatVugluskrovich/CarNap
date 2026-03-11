import { Link } from "react-router-dom"
import HomeButton from "./homeBtn"

const AboutUs = () => {
    return(
        <div>
            
            <div className="w-100 container" style={{
            padding: '10px',
        }}>  <HomeButton />
            <div className="p-3 mb-2 bg-light border rounded align-items-center d-flex flex-column flex-md-row justify-content-between"
                style={{
                    minHeight: '500px'
                }}
            >
                
                <img src={"images/aboutus.png"} style={{
                    maxWidth: '80%',
                    maxHeight: '500px'
                }}></img>
                <p style={{
                    fontSize: '1.3rem',
                    paddingLeft: '12px',

                }}>Ми — сучасний автосервіс, який спеціалізується на комплексному обслуговуванні та відновленні 
                автомобілів будь-якої складності. Наша команда об’єднала досвідчених майстрів, 
                сучасне обладнання та індивідуальний підхід до кожного клієнта, щоб ви відчували впевненість і безпеку на дорозі.</p>

            </div >
            <h3>Чому обирають нас?</h3>
            <ul style={{
                fontSize: '1.3rem',
                marginLeft: '25px',
                paddingBlock: '15px',

            }}>

                <li>Відновлення «під ключ»: ми повертаємо автомобілям ідеальний вигляд навіть після складних ДТП завдяки професійному рихтуванню та фарбуванню.</li>
                <li>Глибока технічна експертиза: від планової заміни оливи до капітального ремонту двигунів та агрегатів — ми знаємо кожен вузол вашого авто.</li>
                <li>Комфортний сервіс: ми цінуємо ваш час, тому чітко дотримуємось термінів та пропонуємо прозорі умови співпраці.</li>
                <li>Якість без компромісів: використовуємо лише перевірені запчастини та передові методи діагностики</li>
            </ul>
             <Link to={'/contacts'}><h4>Зателефонуйте нам!  <a href="tel:+38(067) 714 07 47" style={{backgroundColor: 'lightgray'}}> +38(067) 714 07 47</a></h4>  </Link>
        </div>
        </div>
    )
}
export default AboutUs