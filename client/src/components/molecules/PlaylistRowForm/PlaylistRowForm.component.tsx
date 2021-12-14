import { Checkbox } from 'components/atoms';
import React from 'react';
import { FiLock, FiUnlock } from "react-icons/fi";
import { RowContainer, PlaylistName } from './PlaylistRowForm.styles';
import { PlaylistRowFormPropsI } from './PlaylistRowForm.types';

export const PlaylistRowForm: React.FC<PlaylistRowFormPropsI> = ({ playlist, shouldBeDisabled, selectPlaylist, isChecked }) => {

  const onCheckboxPress = (): void => {
    selectPlaylist(playlist.id, !isChecked);
  };

  return (
    <RowContainer onClick={shouldBeDisabled ? () => { } : onCheckboxPress}>
      <Checkbox disabled={shouldBeDisabled} checked={isChecked} onChange={onCheckboxPress} id={`${playlist.id}`} name={`checkbox-${playlist.id}`} />
      <PlaylistName>{playlist.name}</PlaylistName>
      {playlist.public ? <FiUnlock /> : <FiLock />}
    </RowContainer>
  );
};