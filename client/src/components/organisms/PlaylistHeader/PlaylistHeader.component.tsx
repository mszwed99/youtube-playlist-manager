import { Button, Input } from 'components/atoms';
import { RootState } from 'ducks/modules/rootReducer';
import React, { useState } from 'react';
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
  const { publicPlaylists } = useSelector((state: RootState) => state.publicPlaylists);
  const { userInfo } = useSelector((state: RootState) => state.auth);

  const [isFollowed, setIsFollowed] = useState(publicPlaylists.find(plist => plist.id == playlist.id)?.followers.some(follower => follower.id === 2));
  const [isEditingName, setIsEditingName] = useState(false);
  const [editingValue, setEditingValue] = useState('');

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
        {/* @TODO: playlist.owner.id === userInfo.id Add checking if user is owner when owner will be adder */}
        {!isEditingName ? (
          <Title>{playlist?.name} <FiEdit2 size={18} onClick={onPressEditPlaylistName} cursor="pointer" /></Title>
        ) : (
          <>
            <Input value={editingValue} onChange={handleEditingNameChange} name="editingPlaylistName" />
            <Button label="Edit" onPress={onEditPlaylistNamePress} />
          </>
        )}
        <h2>{playlist?.public ? 'Publiczna' : 'Prywatna'}</h2>
        <SubTitle>stworzona przez testuser</SubTitle>
        <SubTitle>{playlist?.videos?.length} utworów</SubTitle>
      </DetailsContainer>
      {/* @TODO: playlist.owner.id === userInfo.id Add checking if user is owner when owner will be added */}
      <Button label={playlist?.public ? 'Zmień na prywatną' : 'Zmień na publiczną'} onPress={onChangePublicPress} secondary />
      {/* @TODO: playlist.owner.id === userInfo.id Add checking if user is owner when owner will be added */}
      {userInfo.id === userInfo.id ? (
        <Button label="Usuń" onPress={onDeletePlaylistPress} error />
      ) : (
        <Button label={isFollowed ? 'Przestań obserwować' : 'Obserwuj'} secondary={isFollowed} onPress={onPressFollow} />
      )}
    </Header>
  );
};
