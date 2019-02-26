export const ASSIGN_ACTION = 'ASSIGN_ACTION';
export const ASSIGN_STATE_ACTION = 'ASSIGN_STATE_ACTION';

export const createAssignAction = (reducer: string, prop: string, value: any) => {
  return {
    type: `${reducer.toLocaleUpperCase()}_${ASSIGN_ACTION}`,
    payload: {
      prop,
      value,
    },
  };
};

export const createAssignStateAction = (reducer: string, state: any) => {
  return {
    type: `${reducer.toLocaleUpperCase()}_${ASSIGN_STATE_ACTION}`,
    payload: {
      ...state,
    },
  };
};
