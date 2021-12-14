import API from 'services';
import { ModalFooter, PlaylistRowForm } from 'components/molecules';
import { PlaylistI } from 'ducks/modules/UsersPlaylists/usersPlaylistsSlice.types';
import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { VideoI } from 'services/VideoService/VideoService.types';
import { getPlaylists } from 'ducks/modules/UsersPlaylists/usersPlaylistsSlice';
import { AddVideoFormPropsI, FormRowI } from './AddVideoForm.types';

export const AddVideoForm: React.FC<AddVideoFormPropsI> = ({ video, playlists, closeModalFc }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<FormRowI[]>(playlists.map((playlist: PlaylistI) => ({ playlistId: playlist.id, shouldBeAdded: false })));

  const shouldPlaylistBeDisabled: (playlist: PlaylistI) => boolean = (playlist: PlaylistI) => playlist.videos.some((vid: VideoI) => vid.videoId === video.videoId);

  const selectPlaylist = useCallback((playlistId: number, shouldBeAdded: boolean) => {
    const newFormData = [...formData.filter((row: FormRowI) => row.playlistId !== playlistId), { playlistId, shouldBeAdded }];
    setFormData(newFormData);
  }, [formData]);

  const isChecked = useCallback((playlistId: number) => formData.find(row => row.playlistId === playlistId)?.shouldBeAdded || false, [formData]);

  const shouldAddButtonBeDisabled: boolean = !formData.filter(row => row.shouldBeAdded).length;

  const addVideoToSelectedPlaylists: () => Promise<number[]> = async () => {
    console.log('gowno1')
    let statuses: number[] = [];
    const playlistsWhereVideoShouldBeAdded = formData.filter((row) => row.shouldBeAdded);
    await Promise.all(playlistsWhereVideoShouldBeAdded.map(async playlist => {
      await API.VideoService.addVideoToPlaylist({
        playlistId: playlist.playlistId,
        video
      }).then((response) => {
        statuses.push(response?.status);
      });
    }))
    return statuses;
  }
  console.log(video)
  const onPressAddToPlaylist = async () => {
    console.log('gowno2')
    const statuses = await addVideoToSelectedPlaylists();
    dispatch(getPlaylists());
    closeModalFc();
    if (statuses.every(status => status === 201)) {
      const message: string = statuses.length > 1 ? `Dodano wideo do ${statuses.length} playlist` : `Pomyślnie dodano wideo`;
      toast.success(message);
    } else {
      toast.error('Podczas dodawania wideo do playlisty wystąpił błąd');
    }
  };

  return (
    <div style={{ width: '100%' }}>
      {playlists.map(playlist => <PlaylistRowForm key={playlist.id} playlist={playlist} shouldBeDisabled={shouldPlaylistBeDisabled(playlist)} selectPlaylist={selectPlaylist} isChecked={isChecked(playlist.id)} />)}
      <ModalFooter cta1={onPressAddToPlaylist} cta2={closeModalFc} cta1Label="Dodaj video do playlist" cta2Label="Anuluj" shouldCta1BeDisabled={shouldAddButtonBeDisabled} />
    </div>
  );
};
