import { Link, Outlet } from 'react-router-dom';
import MovieContextProvider from './context/MovieContext';
import { Container } from './AiFilm.style.jsx';
import { useTranslation } from 'react-i18next';
import ChangeLanguage from './component/ChangeLanguage';
//import { useContext } from 'react';



const AiFilm = () => {
    const {t} = useTranslation()
    //const likeState = useContext(likeContext)

    return (
        <>
            <MovieContextProvider>
                <Container>
                    <nav>
                        <Link className="navbar-brand" to="/">AiFilm</Link>
                        <div>

                        <Link className="nav-link like-btn" to="/liked">Like</Link>
                        <Link className="nav-link" to="/logout">{t('logout')}</Link>
                        <ChangeLanguage />
                        </div>
                    </nav>
                    <div className="container">
                        <Outlet/>
                    </div>
                </Container>

                <Outlet/>

                <footer>
                    <p>Application de Recherche de Films avec Vue 3 et TMDb API</p>
                </footer>
            </MovieContextProvider>
        </>
    );
};

export default AiFilm;