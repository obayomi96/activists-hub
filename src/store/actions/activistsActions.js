import ActivistsService from '../../services/ActivistsService';
import {
  FETCH_ACTIVISTS,
  CREATE_ACTIVIST
} from './actionTypes'

const activistsService = new ActivistsService();

export const fetchActivists = () => async (dispatch) => {
  try {
    const data = await activistsService.fetchActivists()
    if (data) {
      dispatch({
        type: FETCH_ACTIVISTS,
        payload: data
      })
    }
  } catch (error) {
    throw error
  }
}

export const addActivist = (dataValues) => async (dispatch) => {
  try {
    const data = await activistsService.addActivist(dataValues)
    if (data) {
      dispatch({
        type: CREATE_ACTIVIST,
        payload: data
      })
    }
  } catch(error) {
    throw error
  }
}
