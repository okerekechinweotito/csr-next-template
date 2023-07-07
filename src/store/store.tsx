import { atom } from 'jotai';

export const userDetailsAtom = atom({
  email: '',
  password: '',
});

export const intendedUserPathAtom = atom<string>('/dashboard');
