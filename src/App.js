import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './component/About';
import Blog from './component/Blog';
import Contact from './component/Contact';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Services from './component/Services';
import Team from './component/Team';
import withClickTracker from './Hoc';
import component from './component/component';
import Modal from './Portal';
import AiFilm from './routes/AiFilm/AiFilm';
import MovieDetail from './routes/AiFilm/MovieDetail';
import MovieHome from './routes/AiFilm/MovieHome';
import MovieLiked from './routes/AiFilm/MovieLiked';
import MovieContextProvider from "./routes/AiFilm/context/MovieContext";
import LikeContextProvider from "./routes/AiFilm/context/LikeContext";
import {Auth0Provider} from "@auth0/auth0-react";
import {getConfig} from "./config";
import history from "./utils/history";

function App() {
    const MyComponenetwithTracker = withClickTracker(component);
  const onRedirectCallback = (appState) => {
    history.push(
      appState && appState.returnTo ? appState.returnTo : window.location.pathname
    );
  };

// Please see https://auth0.github.io/auth0-react/interfaces/Auth0ProviderOptions.html
// for a full list of the available properties on the provider
  const config = getConfig();

  const providerConfig = {
    domain: config.domain,
    clientId: config.clientId,
    onRedirectCallback,
    authorizationParams: {
      redirect_uri: window.location.origin,
      ...(config.audience ? { audience: config.audience } : null),
    },
  };

    return (
        <>
          <MovieContextProvider>
            <LikeContextProvider>
              <Auth0Provider
                {...providerConfig}
              >
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/team" element={<Team/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/ai-film" element={<AiFilm/>}>
                    <Route index element={<MovieHome/>}/>
                    <Route path="detail-film/:id" element={<MovieDetail />}/>
                    <Route path="liked" element={<MovieLiked />}/>
                </Route>
            </Routes>
              </Auth0Provider>
            </LikeContextProvider>
          </MovieContextProvider>
            <MyComponenetwithTracker/>
            <Modal>
                <p>Contenu de la modal</p>
            </Modal>
        </>
    );
}

export default App;
