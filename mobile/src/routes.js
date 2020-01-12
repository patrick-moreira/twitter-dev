import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './pages/Login';
import Timeline from './pages/Timeline';
import New from './pages/New';

const AppContainer = createStackNavigator({
    Login,
    Timeline,
    New
}, {
  initialRouteName: 'Login',
});

const Routes = createAppContainer(AppContainer);

export default Routes;