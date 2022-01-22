import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native';

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreens';

import Colors from '../constants/Colors';

const ProductsNavigator = createStackNavigator({
    ProductsOverview: {
        screen: ProductsOverviewScreen
    }
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgrondColor: Platform.OS === 'android' ? Colors.primary : ''
        },
        headerTintColor: Platform.OS === 'android' ?'white' : Colors.primary
    }
});

export default createAppContainer(ProductsNavigator);