import {Link, Outlet} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import ChangeLanguage from './component/ChangeLanguage';

import {Container} from './AiFilm.style';
import {LikeContext} from "./context/LikeContext";
import {useContext} from "react";
import {useAuth0} from "@auth0/auth0-react";

const AiFilm = () => {

  const {t} = useTranslation();
  const {movieIds} = useContext(LikeContext);
  const {
    isAuthenticated,
    loginWithRedirect,
    logout,
  } = useAuth0();

  return (
    <>

      <Container>
        <nav>
          <Link className="navbar-brand" to="/">AiFilm</Link>
          <div>
            {!isAuthenticated && (
              <button onClick={() => loginWithRedirect()}>{t('signin')}</button>
            )}
            {isAuthenticated && (
              <>
                <Link className={`nav-link like-btn ${movieIds ? 'active' : ''}`} to="liked">Like</Link>
                <ChangeLanguage/>
                <button onClick={()=> logout()} className="nav-link" >{t('logout')}</button>
              </>
            )}
          </div>
        </nav>
        <div className="container">
          <Outlet/>
        </div>
      </Container>

      <footer>
        <p>Application de Recherche de Films avec Vue 3 et TMDb API</p>
      </footer>
    </>
  );
};

export default AiFilm;