import { Link } from "react-router-dom"
import servicesList from "..//..//metadata/servicesList.json"
import { Bootstrap } from "react-bootstrap-icons"
const ServicesPage = () => {
    return (
        <div className="w-100 container" style={{
            padding: '10px',
            minHeight: '500px'
        }}>
            <h4 style={{}}>На сьогоднішній день наш Car Nap Сервіс надає наступні види послуг:</h4>
            <ul style={{
                fontSize: '1.3rem',
                marginLeft: '25px',
                paddingBlock: '15px',
                
            }}>
                {servicesList?.map((c: any) => (
                    c.Services.map((item: any) => (
                        <li key={Date.now()}>{item}</li>
                    ))
                ))}
            </ul>
            <Link to={'/contacts'}><h4>Зателефонуйте нам!  <a href="tel:+38(067) 714 07 47" style={{backgroundColor: 'lightgray'}}> +38(067) 714 07 47</a></h4>  </Link>
            
        </div>
    )
}
export default ServicesPage