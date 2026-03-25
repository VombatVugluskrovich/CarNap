import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/my-styles.css'
import Footer from './components/Footer';
import Header from './components/Header';
import MainText from './components/textWithImage';
import CardsList from './components/CardsList';
import CardPage from './components/cardPage';
import { BrowserRouter, Routes, Route, Link, Router, useSearchParams, useLocation, useParams } from 'react-router-dom'
import ContactsPage from './Contacts';
import ServicesPage from './components/Services';
import OrderCallPage from './components/OrderCall';
import AboutUs from './components/aboutUs';


const MainPage: React.FC = () => {
    const [searchParams] = useSearchParams();
    const currentCard = searchParams.get('id');

    return (
        
        <div className='d-flex flex-column'>
            <div className="container-fluid p-0">
                <Header />
                <Routes>
                    <Route path='/' element={<MainText />} />
                    <Route path='/page' element={<CardPage id={currentCard} />} />
                    <Route path='/contacts' element={<ContactsPage />} />
                    <Route path='/services' element={<ServicesPage />} />
                    <Route path='/ordercall' element={<OrderCallPage />} />
                    <Route path='/aboutus' element={<AboutUs />}/>
                </Routes>
            </div>
            <Footer />
        </div>
    );
};

export default MainPage;