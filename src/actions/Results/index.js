import * as types from './types';
import Recommender from '../../lib/recommender';

export const recommendFrameworks = () => async (dispatch, getState) => {
  const {
    getStarted: { frameworks, userDefinedFramework }
  } = getState();

  dispatch({ type: types.RECOMMEND_FRAMEWORK_PENDING });

  try {
    const recommendations = await new Recommender(
      frameworks,
      userDefinedFramework
    ).results;

    dispatch({
      type: types.RECOMMEND_FRAMEWORK_SUCCESS,
      payload: recommendations
    });
  } catch (error) {
    dispatch({ type: types.RECOMMEND_FRAMEWORK_FAILURE });
  }
}
