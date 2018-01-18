import {FETCH_WEATHER} from '../actions/index';

export default function(state=[],action){

    console.log('Action received',action);
    switch(action.type){
        case FETCH_WEATHER : 
             // return state.concat([action.payload.data]);
           //  console.log("State Here",state);
             if(!action.payload.data)
                  return state;
              else    
                 return [action.payload.data, ...state];
    }
    return state;
}