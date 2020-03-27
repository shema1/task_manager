import { createSelector } from 'reselect';

export const tasksListSelector = (state) => {
  return state.tasks.tasksList;
};

