import React from "react";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome";
import { Text, View, TouchableOpacity } from "react-native";

import { NavigationActions } from "react-navigation";
import UserProfile from "../UserProfile/UserProfile";
import LabelData from "./LabelData";
import styles from './DrawerStyle';



class DrawerComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { 
      navActiveItem: ''
     }
     this.logOut = this.logOut.bind(this);
  }
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
    //console.warn(navigateAction.routeName);
  };

  logOut(){
    this.props.navigation.navigate("Login")
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, styles.box1]}>
          <UserProfile />
        </View>
        <View style={[styles.box, styles.box2]}>
          {LabelData.map(data => (
            <View  key={data.index} style={[styles.navItem]}>
              <TouchableOpacity
                onPress={this.navigateToScreen(data.NavLink)}
                style={styles.navItemContainer} 
              >
                <Text>
                  <Icon name={data.NavIcon} size={22} color="#d41268f0" />
                </Text>
                <View style={[styles.navTextPosition]}>
                  <Text style={styles.navItemText}>{data.NavLabel}</Text>
                  <Text>
                    <Icon
                      name={data.NavArrowIcon}
                      size={15}
                      color="#d41268f0"
                    />
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <View style={[styles.box, styles.box3]}>
          <TouchableOpacity style={styles.navItemContainer} onPress={this.logOut}>
            <Icon name="sign-out" size={22} color="#fff">
              <Text style={styles.footerText}>Log Out</Text>
            </Icon>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

DrawerComponent.propTypes = {};

DrawerComponent.defaultProps = {};

export default DrawerComponent;

