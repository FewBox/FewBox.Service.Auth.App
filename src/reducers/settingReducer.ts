import ActionTypes from '../actions/ActionTypes';
import { IAction } from '../actions/Action';
import { SettingPage } from './State';

const settingState = { lang: 'en-us', isFewBoxDelivery: true, isHelp: localStorage.getItem('isHelp') === 'true' };
export default (state: SettingPage = settingState, action: IAction<any>): SettingPage => {
    switch (action.type) {
        case ActionTypes.CHANGE_LANGUAGE:
            return { ...state, lang: action.value };
        default:
            return state;
    }
}