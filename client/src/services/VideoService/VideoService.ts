import { APIService } from 'services/APIService';
import { AddVideoI } from './VideoService.types';

export const addVideoToPlaylist = (payload: AddVideoI) => APIService.post(`video/add/${payload.playlistId}`, { ...payload.video });
