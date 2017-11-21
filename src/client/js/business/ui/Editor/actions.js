import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';

import {createActionWithCheck} from '../../../utils/redux-actions';


export const actionsTypes = {
    pane: {
        add: 'EDITOR::PANE::ADD',
    },
    tab: {
        add: 'EDITOR::TAB::ADD',
        remove: 'EDITOR::TAB::REMOVE',
        setActive: 'EDITOR::TAB::SET_ACTIVE',
        move: 'EDITOR::TAB::MOVE',
        moveIntoNewPane: 'EDITOR::TAB::MOVE_INTO_NEW_PANE',
        dragStart: 'EDITOR::TAB::DRAG_START',
        dragOver: 'EDITOR::TAB::DRAG_OVER',
        dragOut: 'EDITOR::TAB::DRAG_OUT',
        dragEnd: 'EDITOR::TAB::DRAG_END',
        // TODO
        updateContent: 'EDITOR::TAB::UPDATE_CONTENT',
    },
};


export default {
    tab: {
        /**
         * Add a new tab from the content provided into the corresponding pane.
         *
         * @param {Object} payload -
         *      Action payload.
         * @param {string} payload.contentId -
         *      Id of the content displayed by the Editor.
         * @param {string} [payload.contentType='problem'] -
         *      Type of the content displayed by the Editor.
         * @param {string} [payload.paneId] -
         *      Id of the pane to add the tab. If not specified it will
         *      generate an uuid.
         * @param {string} payload.title -
         *      Title displayed by the tab.
         * @param {number} [payload.tabIndex] -
         *      Index where to add the tab. If undefined or greater than the
         *      number of tabs, the tab is added at the end.
        */
        add: createActionWithCheck(actionsTypes.tab.add, {
            contentId: PropTypes.string.isRequired,
            contentType: PropTypes.string,
            title: PropTypes.string.isRequired,
            paneId: PropTypes.string.isRequired,
            tabId: PropTypes.string.isRequired,
            tabIndex: PropTypes.number,
        }, props => ({paneId: uuidv4(), ...props, tabId: uuidv4()})),

        /**
         * Close the corresponding tab. The active tab will be the previous
         * activated tab. If the pane is empty, it will be removed.
         *
         * @param {string} payload.paneId -
         *       Id of the pane to add the tab.
         * @param {string} payload.tabId -
         *       Id of the tab.
         */
        remove: createActionWithCheck(actionsTypes.tab.remove, {
            paneId: PropTypes.string.isRequired,
            tabId: PropTypes.string.isRequired,
        }),

        /**
         * Set the corresponding tab to active.
         *
         * @param {string} payload.paneId -
         *       Id of the pane to add the tab.
         * @param {string} payload.tabId -
         *       Id of the tab.
         */
        setActive: createActionWithCheck(actionsTypes.tab.setActive, {
            paneId: PropTypes.string.isRequired,
            tabId: PropTypes.string.isRequired,
        }),

        /**
         * Move an existing tab into from an existing pane to a new pane.
         * If `paneFrom` is empty it will be removed.
         *
         * @param {string} payload.paneIdFrom -
         *       Id of the pane from where the tab is extracted.
         * @param {string} payload.tabId -
         *       Id of the tab.
         * @param {number} [payload.paneIndex] -
         *       Index where the pane will be inserted. If undefined or greater than
         *       the number of panes, the pane will be added at the end.
         */
        moveIntoNewPane: createActionWithCheck(
            actionsTypes.tab.moveIntoNewPane,
            {
                paneIdFrom: PropTypes.string.isRequired,
                tabId: PropTypes.string.isRequired,
                paneIndex: PropTypes.number,
                paneId: PropTypes.string.isRequired,
            },
            props => ({...props, paneId: uuidv4()}),
        ),

        /**
         * Move an existing tab into from an existing pane to an existing pane.
         * If `paneFrom` is empty it will be removed.
         *
         * @param {string} payload.paneIdFrom -
         *       Id of the pane from where the tab is extracted.
         * @param {string} payload.tabId -
         *       Id of the tab.
         * @param {string} payload.paneIdTo -
         *       Id of the pane where the tab is moved.
         * @param {number} [payload.paneIndex] -
         *       Position of paneIdTo where the tab is moved. If not specified,
         *       the tab will be add to the end.
         */
        move: createActionWithCheck(actionsTypes.tab.move, {
            paneIdFrom: PropTypes.string.isRequired,
            tabId: PropTypes.string.isRequired,
            paneIdTo: PropTypes.string.isRequired,
            tabIndex: PropTypes.number,
        }),
        dragStart: createActionWithCheck(actionsTypes.tab.dragStart),
        dragOver: createActionWithCheck(actionsTypes.tab.dragOver),
        dragOut: createActionWithCheck(actionsTypes.tab.dragOut),
        dragEnd: createActionWithCheck(actionsTypes.tab.dragEnd),
        // TODO
        updateTabContent: createActionWithCheck(actionsTypes.tab.updateContent),
    },
};
