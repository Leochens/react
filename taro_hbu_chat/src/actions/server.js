import ACTIONS from '../constants/ActionTypes'
import { normalize } from 'normalizr';
import Schemas from '../schemas'

const BASE_URL = 'http://localhost:3001';

export const actionFetchTopics = () => {
    return {
        SERVER_API:{
            type: ACTIONS.SERVER_ACTIONS.FET_TOPIC_LIST,
            url:BASE_URL+'/messages',
            param: {},
            normalizeFunc: json => {
                console.log(json);
                const topics = normalize(json,Schemas.topicSchema);
                console.log('扁平后',topics);

                return topics;
            }
        }
    }
}
