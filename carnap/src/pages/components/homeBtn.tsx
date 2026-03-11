import { Link } from "react-router-dom"
const HomeButton = () => {
     return(<Link to={'/'}><img style={{minWidth: '40px', height: "auto"}} src="images/home.svg" /></Link>)
}
export default HomeButton