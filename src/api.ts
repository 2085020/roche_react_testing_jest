import Axios, { AxiosError } from 'axios';
import { Member } from './api-model';
import { User } from 'model';

const url = 'https://api.github.com/orgs/roche/members';

export const getMembers = (): Promise<Member[]> =>
  Axios.get(url)
    .then((response) => response.data)
    .catch((error: AxiosError) => {
      switch (error.response.status) {
        case 403:
          throw 'Too much Github API calls!';
        case 503:
          throw 'Unavailable service';
      }
    });


export const login = (credential: Credential): Promise<User> => {
  return Promise.reject('Pending to implement');
};
