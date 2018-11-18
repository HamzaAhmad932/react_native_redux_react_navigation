import { NavigationActions } from 'react-navigation'
import { AppNavigator } from '../components/AppNavigator'

const router = AppNavigator.router;
const initalAction = router.getActionForPathAndParams('dashboard')
const initialState = router.getStateForAction(initalAction)

export default navigationReducer = (state = initialState, action) => {
  let nextState;

  switch (action.type) {
    case 'Quiz':
      nextState = router.getStateForAction(
        NavigationActions.navigate({ routeName: 'quiz' }),
        state
      )
      break;
    case 'Summary':
      nextState = router.getStateForAction(
        NavigationActions.navigate({ routeName: 'summary' }),
        state
      )
      break;
    case 'Dashboard':
      nextState = router.getStateForAction(
        NavigationActions.navigate({ routeName: 'dashboard' }),
        state
      )
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  return nextState || state
}