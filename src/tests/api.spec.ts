import Axios, {AxiosError} from 'axios';
import { Member } from '../api-model';
import { getMembers } from '../api';
describe('API specs', () => {
    it('should return members when it resolves ok', async () => {
        // ARRANGE
        const members: Member[] = [
          { id: 1, login: 'test login', avatar_url: 'test avatar' },
        ];
        const response = {
          data: members,
        };
        const getStub = jest.spyOn(Axios, 'get').mockResolvedValue(response);
        // ACT

        const result = await getMembers();
        // ASSERT
        expect(getStub).toHaveBeenCalledWith(
          'https://api.github.com/orgs/roche/members'
        );
        expect(result).toEqual(members);
    })

    it('should throw an exeption "too much api calls', async () => {
      // ARRANGE
      const error = { response: {status : 403}} as AxiosError;
      const getStub = jest.spyOn(Axios, 'get').mockRejectedValue(error);
      // ACT
      try {
        await getMembers();
      } catch (error) {
        // ASSERT
        expect(getStub).toHaveBeenCalledWith(
        'https://api.github.com/orgs/roche/members'
        );
        expect(error).toEqual('Too much Github API calls!')
      }

  })
});
