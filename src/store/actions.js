

import * as types from './mutations-type';
import {fetchMoviesByType, fetchMovieById} from '../api';


const actions = {
    [types.FETCH_MOVIES] ({commit}, payload) {
      fetchMoviesByType(payload.type, payload.start, payload.count).then(data => {
        data.type = payload.type;
        return commit([types.FETCH_MOVIES], data);
      });
    }
};


export default actions;
