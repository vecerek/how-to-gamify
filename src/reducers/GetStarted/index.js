import * as types from '../../actions/GetStarted/types';

const initialState = {
  frameworks: [],
  features: [],
  isLoading: true,
  userDefinedFramework: {
    features: [],
    domains: [],
    targets: [],
  },
  activeStep: 0,
  currentFeatureIndex: 0,
};

const createFeature = ({ feature: { id }, value }) => ({ id, value });
const updateFramework = (framework, obj) => Object.assign({}, framework, obj);

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case types.LOAD_DATA_PENDING:
      return { ...state, isLoading: true };
    case types.LOAD_DATA_SUCCESS:
      return {
        ...state,
        frameworks: action.payload.frameworks,
        features: action.payload.features,
        isLoading: false,
      };
    case types.LOAD_DATA_FAILURE:
      return state; // TODO: implement error handling
    case types.REGISTER_FEATURE:
      return {
        ...state,
        userDefinedFramework: updateFramework(state.userDefinedFramework, {
          features: state.userDefinedFramework.features.concat(
            createFeature(action.payload)
          ),
        }),
        currentFeatureIndex: state.currentFeatureIndex + 1,
        activeStep: state.currentFeatureIndex === state.features.length - 1
          ? state.activeStep + 1
          : state.activeStep,
      }
    case types.REGISTER_DOMAINS:
      return {
        ...state,
        userDefinedFramework: updateFramework(
          state.userDefinedFramework,
          { domains: action.payload }
        ),
        activeStep: state.activeStep + 1,
      }
    case types.REGISTER_TARGETS:
      return {
        ...state,
        userDefinedFramework: updateFramework(
          state.userDefinedFramework,
          { targets: action.payload }
        ),
        activeStep: state.activeStep + 1,
      }
    default:
      return state;
  }
};
