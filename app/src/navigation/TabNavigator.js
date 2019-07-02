import { createBottomTabNavigator } from 'react-navigation';
import { colors } from '../constants';

// grabs stacks
import StackHome from './StackHome';
import StackSearch from './StackSearch';
import StackDownloads from './StackDownloads';
import Favourite from './StackFavourite';
import StackMore from './StackMore';

export default createBottomTabNavigator(
  {
    StackHome,
    Favourite,
    StackSearch,
    StackDownloads,
    // StackMore
  },
  {
    initialRouteName: 'StackHome',
    tabBarOptions: {
      activeTintColor: colors.white,
      inactiveTintColor: colors.inactiveGrey,
      style: {
        backgroundColor: '#363636',
        borderTopWidth: 0
      }
    }
  }
);
