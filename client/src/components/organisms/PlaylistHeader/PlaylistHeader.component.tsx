import { Button, Input } from 'components/atoms';
import { RootState } from 'ducks/modules/rootReducer';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { followPlaylist, getPlaylists, unfollowPlaylist } from 'ducks/modules/UsersPlaylists/usersPlaylistsSlice';
import { deletePlaylist, editPlaylistName, getPlaylistDetails, editPlaylistIsPublic } from 'ducks/modules/CurrentPlaylist/currentPlaylistSlice';
import { FiEdit2 } from 'react-icons/fi';
import { useHistory } from 'react-router';
import { Header, DetailsContainer, Title, SubTitle } from './PlaylistHeader.styles';
import { PlaylistHeaderI } from './PlaylistHeader.types';

export const PlaylistHeader: React.FC<PlaylistHeaderI> = ({ playlist }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { currentPlaylist } = useSelector((state: RootState) => state.currentPlaylist);
  const { userInfo } = useSelector((state: RootState) => state.auth);

  const [isFollowed, setIsFollowed] = useState(false);
  const [isEditingName, setIsEditingName] = useState(false);
  const [editingValue, setEditingValue] = useState('');

  useEffect(() => {
    setIsFollowed(currentPlaylist?.isFollowed);
  }, [currentPlaylist]);

  const onPressFollow = () => {
    setIsFollowed(!isFollowed);
    if (isFollowed) {
      dispatch(unfollowPlaylist({ id: (playlist.id).toString() }))
    } else {
      dispatch(followPlaylist({ id: (playlist.id).toString() }));
    }
  }

  const onPressEditPlaylistName = () => setIsEditingName(true);

  const handleEditingNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setEditingValue(e.currentTarget.value);

  const onEditPlaylistNamePress = async () => {
    await dispatch(editPlaylistName({ id: (playlist.id).toString(), name: editingValue }));
    dispatch(getPlaylistDetails({ id: (playlist.id).toString() }));
    setIsEditingName(false);
  };

  const onDeletePlaylistPress = async () => {
    await dispatch(deletePlaylist({ id: (playlist.id).toString() }));
    await dispatch(getPlaylists());
    history.push('/');
  };

  const onChangePublicPress = async () => {
    await dispatch(editPlaylistIsPublic({ id: (playlist.id).toString(), isPublic: !playlist?.public }));
    dispatch(getPlaylistDetails({ id: (playlist.id).toString() }));
  }

  return (
    <Header>
      <DetailsContainer>
        {!isEditingName ? (
          <Title>{playlist?.name} {playlist?.owner.id === userInfo.id ? <FiEdit2 size={18} onClick={onPressEditPlaylistName} cursor="pointer" /> : null}</Title>
        ) : (
          <>
            <Input value={editingValue} onChange={handleEditingNameChange} name="editingPlaylistName" />
            <Button label="Edit" onPress={onEditPlaylistNamePress} />
          </>
        )}
        <h2>{playlist?.public ? 'Publiczna' : 'Prywatna'}</h2>
        <SubTitle>stworzona przez {playlist?.owner.username}</SubTitle>
        <SubTitle>{playlist?.videos?.length} utworów</SubTitle>
      </DetailsContainer>
      {playlist?.owner.id === userInfo.id ? <Button label={playlist?.public ? 'Zmień na prywatną' : 'Zmień na publiczną'} onPress={onChangePublicPress} secondary /> : null}
      {playlist?.owner.id === userInfo.id ? (
        <Button label="Usuń" onPress={onDeletePlaylistPress} error />
      ) : (
        <Button label={isFollowed ? 'Przestań obserwować' : 'Obserwuj'} secondary={isFollowed} onPress={onPressFollow} />
      )}
    </Header>
  );
};
