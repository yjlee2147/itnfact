import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import Play from '../screens/Play';



const screens = {
  Home: {
    screen: Home
  },
  Play: {
    screen: Play
  },

}

const StackNav = createStackNavigator(screens);

export default createAppContainer(StackNav);