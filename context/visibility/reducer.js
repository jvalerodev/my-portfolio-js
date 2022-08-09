import { SET_ENTRY_VISIBLE } from '@/types/index';

export default (state, action) => {
  switch (action.type) {
    case SET_ENTRY_VISIBLE:
      return {
        ...state,
        visibleEntry: action.payload
      };

    default:
      return state;
  }
};