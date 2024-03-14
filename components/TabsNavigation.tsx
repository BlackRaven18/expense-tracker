import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { Ionicons } from '@expo/vector-icons';
import Home from './Home';
import Dashboard from './Dashboard';

const Tab = createMaterialBottomTabNavigator();

export default function TabsNavigation() {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={({ route }) => ({
                tabBarIcon(props) {
                    let iconName = "";
                    let size = 24;

                    if (route.name === "Home") {
                        iconName = props.focused ? "home-sharp" : "home-outline";
                    } else if (route.name === "Dashboard"){
                        iconName = props.focused ? "bar-chart" : "bar-chart-outline";
                    } else {
                        iconName = ""
                    }
                    return <Ionicons name={iconName as "text"} size={size}></Ionicons>
                },
            })}

        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Dashboard" component={Dashboard} />
        </Tab.Navigator>
    );
}