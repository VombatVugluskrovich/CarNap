import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/my-styles.css'
import Footer from './components/Footer';
import Header from './components/Header';
import MainText from './components/textWithImage';
import CardsList from './components/CardsList';
import CardPage from './components/cardPage';
import CardPageContent from '../metadata/cardPageContent.json'

const MainPage: React.FC = () => {
    const current = CardPageContent.filter(x=>x.id==1)[0];
    return (
        <div className='d-flex flex-column'>
            <div className="container-fluid p-0">
                <Header />
               <MainText />
                {/* <CardPage description= {current.description} image={current.image} list={''} /> */}
                <CardsList />
            <p></p>
            </div>
            <Footer />
        </div>
    );
};

export default MainPage;