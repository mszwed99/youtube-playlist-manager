import { Checkbox, Input } from 'components/atoms';
import { ModalFooter } from 'components/molecules';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPlaylist, getPlaylists } from 'ducks/modules/UsersPlaylists/usersPlaylistsSlice';
import { CreatePlaylistFormPropsI } from './CreatePlaylistForm.types';

export const CreatePlaylistForm: React.FC<CreatePlaylistFormPropsI> = ({ closeModalFc }) => {
  const dispatch = useDispatch();
  const [playlistName, setPlaylistName] = useState('');
  const [isPublicPlaylist, setIsPublicPlaylist] = useState(false);

  const onPressCreate: () => void = async () => {
    if (playlistName) {
      await dispatch(createPlaylist({ name: playlistName, isPublic: isPublicPlaylist }));
      await dispatch(getPlaylists());
      closeModalFc();
    }
  }

  const handlePlaylistNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setPlaylistName(e.currentTarget.value);

  const handleCheckboxChange = () => setIsPublicPlaylist(!isPublicPlaylist);
  return (
    <div style={{ width: '100%' }}>
      <Input value={playlistName} onChange={handlePlaylistNameChange} name="playlistName" label="Nazwa playlisty" fullwidth />
      <Checkbox checked={isPublicPlaylist} onChange={handleCheckboxChange} label="Publiczna" id="isPublic" name="isPublic" />
      <ModalFooter cta1={onPressCreate} cta2={closeModalFc} cta1Label="Stwórz playlistę" cta2Label="Anuluj" />
    </div>
  );
};
