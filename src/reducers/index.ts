import { combineReducers } from 'redux'
import projectReducer from './projects'

export const reducers = combineReducers({
    projects: projectReducer,
})
