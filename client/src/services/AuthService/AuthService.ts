import { APIService } from 'services/APIService';
import { RegisterPayloadI, LoginPayloadI } from './AuthService.types';

export const register = (payload: RegisterPayloadI) => APIService.post('auth/signup', { ...payload });

export const login = (payload: LoginPayloadI) => APIService.post('auth/signin', { ...payload });
