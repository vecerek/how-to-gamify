import * as types from '../../actions/Results/types';

const initialState = {
  recommendations: [],
  processing: true,
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
    default:
      return state;
  }
};
