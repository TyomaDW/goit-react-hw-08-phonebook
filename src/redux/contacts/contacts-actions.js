import { createAction } from '@reduxjs/toolkit';

export const changeFilter = createAction('contacts/changeFilter');

const actions = { changeFilter };
export default actions;
