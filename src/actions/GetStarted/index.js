import * as types from './types';
import Recommender from '../../lib/recommender';

export const loadData = () => async (dispatch) => {
  dispatch({ type: types.LOAD_DATA_PENDING });

  try {
    const features = await Recommender.loadFeatures();
    const frameworks = await Recommender.loadFrameworks();

    dispatch({
      type: types.LOAD_DATA_SUCCESS,
      payload: { features, frameworks }
    });
  } catch (error) {
    dispatch({ type: types.LOAD_DATA_FAILURE });
  }
};

export const registerFeature = (feature, value) => ({
  type: types.REGISTER_FEATURE,
  payload: { feature, value },
})
