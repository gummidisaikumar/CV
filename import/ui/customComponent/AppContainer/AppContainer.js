import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from "react-navigation";
import React from "react";
import { View, Text, Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Projects from "../../customScreen/Projects/Projects";
import Profile from "../../customScreen/Profile/Profile";
import Skills from "../../customScreen/Skills/Skills";
import Hobbies from "../../customScreen/Hobbies/Hobbies";
import welcome from "../../customScreen/Welcome/welcome";
import DrawerComponent from "../DrawerComponent/DrawerComoponent";
import Dashboard from "../../customScreen/Dashboard/Dashboard";
import AddProfile from "../../customScreen/AddProfile/AddProfile";
import PhoneCall from "../../customScreen/PhoneCall/PhoneCall";
import AddProject from "../../customScreen/AddProject/AddProject";
import Signup from "../../Authication/Signup/Signup";
import Login from "../../Authication/Login/Login";

const DashboardTabNavigator = createBottomTabNavigator(
  {
    Profile,
    Projects,
    Skills,
    Hobbies
  },   
  {
    defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
     
      let IconComponent = Icon;
      let iconName;
      if (routeName === 'Profile') {
        iconName = "user-circle";
      } else if (routeName === 'Projects') {
        iconName = "briefcase";
      }
      else if (routeName === 'Skills') {
        iconName = "book";
      }
      else if (routeName === 'Hobbies') {
        iconName = "bandcamp";
      }
      return <IconComponent name={iconName} size={22} color="#fff" />;
    },
  }),
    tabBarOptions: {
      activeTintColor: "#e91e63",
      labelStyle: {
        fontSize: 12,
        color: "#fff"
      },
      style: {
        backgroundColor: "#d41268f0"
      }
    },
    animationEnabled: true,
    swipeEnabled: true
  }
);

DashboardTabNavigator.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  const headerTitle = routeName;
  return {
    headerTitle,
  };
}

const AppStackNavigator = createStackNavigator(
  {
    DashboardTabNavigator: {
      screen: DashboardTabNavigator
    }
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#d41268f0"
      },
      headerLeft: (
        <Icon name="bars" size={30} style={{paddingLeft: 15}} color="#fff"
        onPress={() => navigation.toggleDrawer()}/>
      ),
      headerRight:(
        <View style={{paddingRight: 15}}>
           <Image
             source={require('../../../public/img/sai.jpg')}
              style={{ width: 50, height: 50, borderRadius: 50 }}
          />
        </View>
      )
    })
  }
);

const AppDrawerNavigator = createDrawerNavigator(
  {
    DrawerComponent: {
      screen: AppStackNavigator
    },
    Profile:{
      screen: Profile
    },
    Projects:{
      screen:Projects
    },

    Skills:{
      screen: Skills
    },
    Hobbies:{
      screen:Hobbies
    },
    PhoneCall:{
      screen: PhoneCall
    }
  },
  {
    drawerWidth: 280,
    drawerBackgroundColor: "#d41268f0",
    useNativeAnimations: false,
    contentComponent: DrawerComponent,
  }
);

const AppSwitchContainer = createSwitchNavigator({
  //welcome: welcome,
  Login: Login,
  Signup: Signup,
  DrawerComponent: AppDrawerNavigator,
  Dashboard:Dashboard,
  AddProfile: AddProfile,
  AddProject: AddProject,
});

export default (AppContainer = createAppContainer(AppSwitchContainer));
