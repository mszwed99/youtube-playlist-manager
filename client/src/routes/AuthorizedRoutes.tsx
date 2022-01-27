import React from 'react';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate.component';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from 'screens/Home/Home';
import SearchVideoScreen from 'screens/SearchVideoScreen/SearchVideoScreen.component';
import VideoScreen from 'screens/VideoScreen/VideoScreen.component';
import PublicPlaylists from 'screens/PublicPlaylists/PublicPlaylists.component';
import PlaylistScreen from 'screens/Playlist/Playlist.component';

const AuthorizedRoutes = () => (
  <Router>
    <Switch>
      <MainTemplate>
        <Route exact path="/" component={Home} />
        <Route exact path="/playlists" component={PublicPlaylists} />
        <Route exact path="/search/:phrase" component={SearchVideoScreen} />
        <Route exact path="/video/:videoId" component={VideoScreen} />
        <Route exact path="/playlist/:playlistId" component={PlaylistScreen} />
        <Route exact path="/playlist/:playlistId/video/:videoId" component={PlaylistScreen} />
        {/* <Route path="*" component={Home} /> */}
      </MainTemplate>
    </Switch>
  </Router>
);

export default AuthorizedRoutes;
