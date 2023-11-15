import {Link, Outlet} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import ChangeLanguage from './component/ChangeLanguage';
import LanguageSelector from './component/LanguageSelector';

import {Container} from './AiFilm.style';
import {LikeContext} from "./context/LikeContext";

const AiFilm = () => {
  const {t} = useTranslation();
  const {movieIds} = useContext(LikeContext);
  return (
    <>

      <Container>
        <nav>
          <Link className="navbar-brand" to="/">AiFilm</Link>
          <div>

            <Link className={`nav-link like-btn ${movieIds ? 'active' : ''}`} to="liked">Like</Link>

            <Link className="nav-link" to="/logout">{t('logout')}</Link>
            <ChangeLanguage/>
                        <LanguageSelector />
                        
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