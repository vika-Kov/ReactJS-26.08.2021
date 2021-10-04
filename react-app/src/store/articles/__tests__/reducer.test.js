import  {articlesReducer, initialState} from './reducer'
import {GET_ARTICLES_PENDING} from "./actions";
import {REQUEST_STATUS} from "../../utils/constants";

describe('articles reducer', () => {


  it('GET_ARTICLES_PENDING', () => {
    const action = {
      type: GET_ARTICLES_PENDING,
      payload: {
        list: [],
        request: {
          error: null,
          status: REQUEST_STATUS.PENDING,
        },
      }
    }

    expect(articlesReducer(initialState, action)).toEqual({
      ...initialState,
      request: {
        error: null,
        status: REQUEST_STATUS.PENDING,
      },
    })
  })



})