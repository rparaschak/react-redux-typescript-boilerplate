import { AnyAction } from 'redux';
import {
  createAssignAction,
  createAssignStateAction,
  ASSIGN_ACTION,
  ASSIGN_STATE_ACTION,
} from './actionHelpers';

/**
 * Simple reducer High Order Function which adds handling of assign actions e.g. LOGIN_ASSIGN_ACTION
 * @param {string} reducerName
 * @param reducerFunction
 * @returns {(state: any, action: AnyAction) => ({} | any)}
 */
export const withAssignAction = (reducerName: string, reducerFunction: any) => (state: any, action: AnyAction) => {

  const assignActionNameForReducer = `${reducerName.toLocaleUpperCase()}_${ASSIGN_ACTION}`;
  if (action.type === assignActionNameForReducer) {
    const { prop, value } = action.payload;
    return {
      ...state,
      [prop]: value,
    };
  }
  return reducerFunction(state, action);
};

/**
 * Simple reducer High Order Function which adds handling of assign state actions e.g. LOGIN_ASSIGN_STATE_ACTION
 * @param {string} reducerName
 * @param reducerFunction
 * @returns {(state: any, action: AnyAction) => ({} | any)}
 */
export const withAssignStateAction = (reducerName: string, reducerFunction: any) => (state: any, action: AnyAction) => {

  const assignStateActionNameForReducer = `${reducerName.toLocaleUpperCase()}_${ASSIGN_STATE_ACTION}`;
  if (action.type === assignStateActionNameForReducer) {
    return {
      ...action.payload,
    };
  }
  return reducerFunction(state, action);
};

/**
 * extend method - extends given reducer with reducer HOFs
 * @param {string} reducerName
 * @returns {{extend: (reducer: any) => (state: any, action: AnyAction) => (any); createAssignAction: (prop: string, value: any) => {type: string; payload: {prop: string; value: any}}}}
 */
export const createStateHelper = (reducerName: string) => {
  return {
    extend: (reducer: any) => withAssignStateAction(reducerName, withAssignAction(reducerName, reducer)),
    createAssignAction: (prop: string, value: any) => createAssignAction(reducerName, prop, value),
    createAssignStateAction: (newState: any) => createAssignStateAction(reducerName, newState),
  };
};
