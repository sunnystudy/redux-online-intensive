//Actions
import { profileActions } from "../actions";

describe('profile actions: ', () => {
    test('fillProfile', () => {
        expect(profileActions.fillProfile(__.userProfile)).toMatchSnapshot();
    });
    test('updateAvatar', () => {
        expect(profileActions.updateAvatar(__.url)).toMatchSnapshot();
    });
    test('clearProfile', () => {
        expect(profileActions.clearProfile()).toMatchSnapshot();
    });
});
