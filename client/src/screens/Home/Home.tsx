import { Button } from 'components/atoms';
import { NoPlaylists } from 'components/molecules';
import { CreatePlaylistForm, Modal, PlaylistList } from 'components/organisms';
import { RootState } from 'ducks/modules/rootReducer';
import { getFollowedPlaylists, getPlaylists } from 'ducks/modules/UsersPlaylists/usersPlaylistsSlice';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { ContainerWithoutPlaylists, ContainerWithPlaylists, CreateButtonContainer } from './Home.styles';

const Home: React.FC = () => {
  const { playlists, followedPlaylists } = useSelector((state: RootState) => state.usersPlaylists);
  const dispatch = useDispatch()
  const history = useHistory();
  const [isNewPlaylistModalOpen, setIsNewPlaylistModalOpen] = useState(false);

  useEffect(() => {
    dispatch(getPlaylists());
    dispatch(getFollowedPlaylists());
  }, [dispatch]);

  const openPlayListModal: () => void = () => {
    setIsNewPlaylistModalOpen(true);
  };

  const closePlayListModal: () => void = () => {
    setIsNewPlaylistModalOpen(false);
  };

  const redirectToPublicPlaylists: () => void = () => {
    history.push('/playlists');
  }

  return (
    <>
      {isNewPlaylistModalOpen && <Modal title="Stwórz nową playlistę" onClose={closePlayListModal} body={<CreatePlaylistForm closeModalFc={closePlayListModal} />} />}
      {playlists.length || followedPlaylists.length ? (
        <ContainerWithPlaylists>
          <CreateButtonContainer>
            <Button onPress={openPlayListModal} label="Dodaj playlistę" />
          </CreateButtonContainer>
          <PlaylistList playlists={playlists} title="Twoje playlisty" />
          <PlaylistList playlists={followedPlaylists} title="Obserwowane playlisty" />
        </ContainerWithPlaylists>
      ) : (
        <ContainerWithoutPlaylists>
          <NoPlaylists onPressOpenModal={openPlayListModal} onPressRedirect={redirectToPublicPlaylists} />
        </ContainerWithoutPlaylists >
      )}
    </>
  );
};

export default Home;