import { useReducer } from 'react';
import VisibilityContext from '@/context/visibility/context';
import VisibilityReducer from '@/context/visibility/reducer';
import { SET_ENTRY_VISIBLE } from '@/types/index';

const VisibilityProvider = ({ children }) => {
  const initialState = {
    visibleEntry: ''
  };

  const [state, dispatch] = useReducer(VisibilityReducer, initialState);

  const setVisibleEntry = entry => {
    dispatch({
      type: SET_ENTRY_VISIBLE,
      payload: entry
    });
  };

  return (
    <VisibilityContext.Provider
      value={{
        visibleEntry: state.visibleEntry,
        setVisibleEntry
      }}
    >
      {children}
    </VisibilityContext.Provider>
  );
};

export default VisibilityProvider;