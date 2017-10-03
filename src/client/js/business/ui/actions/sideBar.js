import {createAction} from 'redux-actions';


export const actionTypes = {
    show: 'SIDE_BAR::SHOW',
    hide: 'SIDE_BAR::HIDE',
    resize: 'SIDE_BAR::RESIZE',
    toogleVisibility: 'SIDE_BAR::TOOGLE_VISIBILITY',
};

export default {
    show: createAction(actionTypes.show),
    hide: createAction(actionTypes.hide),
    resize: createAction(actionTypes.resize),
    toogleVisibility: createAction(actionTypes.toogleVisibility),
};
