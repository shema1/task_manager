
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import tasksReducer from './components/task.reducer'
import usersReducer from './components/auth/auth.reducer'

const reducers = combineReducers({
    tasks: tasksReducer,
    users: usersReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
)

export default store