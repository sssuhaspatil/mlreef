import { combineReducers } from 'redux';
import projects from './projectReducer';
import branches from './branchesReducer';
import jobs from './jobsReducer';
import users from './usersReducer';
import mergeRequests from './mergeReducer';
import user from './userReducer';
import actionModal from './actionModalReducer';
import groups from './groupsReducer';
import processors from './processorReducer';

const rootReducer = combineReducers({
  branches,
  jobs,
  projects,
  users,
  mergeRequests,
  user,
  actionModal,
  groups,
  processors,
});

export default rootReducer;
