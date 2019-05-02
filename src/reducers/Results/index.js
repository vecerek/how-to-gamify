import * as types from '../../actions/Results/types';

const initialState = {
  recommendations: [],
  processing: true,
  details: {
    open: false,
    result: null,
  },
};

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case types.RECOMMEND_FRAMEWORK_PENDING:
      return {
        ...state,
        processing: true,
      }
    case types.RECOMMEND_FRAMEWORK_SUCCESS:
      return {
        ...state,
        recommendations: action.payload,
        processing: false,
      }
    case types.TOGGLE_DETAILS:
      return {
        ...state,
        details: {
          open: action.payload.open,
          result: action.payload.id && state.recommendations.find(
            el => el.framework.id === action.payload.id
          )
        }
      }
    default:
      return state;
  }
};
