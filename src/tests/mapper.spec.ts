import * as apiModel from '../api-model';
import * as viewModel from '../view-model';
import { mapMemberListFromApiToVm } from '../mapper';

describe('Mapper specs', () => {

  it.each<apiModel.Member[]>([undefined, null, []])(
    'should return empty array when it feeds %p',
    (members: any) => {
      // Arrange

      // Act
      const result: viewModel.Member[] = mapMemberListFromApiToVm(members);

      // Assert
      expect(result).toEqual([]);
    }
  );
  it('should return empty when it feeds with undefined', () => {
    // ARRANGE
    const members: apiModel.Member[] = undefined;
    // ACT
    const result: viewModel.Member[] = mapMemberListFromApiToVm(members);
    // ASSERT
    expect(result).toEqual([]);
  });

  it('should return empty when it feeds with null', () => {
    // ARRANGE
    const members: apiModel.Member[] = null;
    // ACT
    const result: viewModel.Member[] = mapMemberListFromApiToVm(members);
    // ASSERT
    expect(result).toEqual([]);
  });

  it('should return empty when it feeds with empty array', () => {
    // ARRANGE
    const members: apiModel.Member[] = [];
    // ACT
    const result: viewModel.Member[] = mapMemberListFromApiToVm(members);
    // ASSERT
    expect(result).toEqual([]);
  });

  it('should return array one mapped when it feeds with one element array', () => {
    // ARRANGE
    const members: apiModel.Member[] = [{
      id:1,
      login:'test login',
      avatar_url:'test avatar'
    }];
    // ACT
    const result: viewModel.Member[] = mapMemberListFromApiToVm(members);
    // ASSERT
    const expectResult: viewModel.Member[] = [
      {
        id: '1',
        login: 'test login',
        avatarUrl: 'test avatar'
      }
    ]
    expect(result).toEqual(expectResult);
  });
});
