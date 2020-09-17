import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList103022Navigator from '../features/ArticleList103022/navigator';
import ArticleList103021Navigator from '../features/ArticleList103021/navigator';
import ArticleList103020Navigator from '../features/ArticleList103020/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList103022: { screen: ArticleList103022Navigator },
ArticleList103021: { screen: ArticleList103021Navigator },
ArticleList103020: { screen: ArticleList103020Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
