import React from "react";
import PropTypes from "prop-types";
import {Text,View,StyleSheet, Image} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { createStackNavigator, createAppContainer } from "react-navigation";


class Dashboard extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
          <Text>Saikumar</Text>
      </View>
    );
  }
}

Dashboard.propTypes = {};

Dashboard.defaultProps = {};


const DashboardNavigator = createStackNavigator({
  Dashboard: {
    screen: Dashboard
  },
},
{
  defaultNavigationOptions: ({navigation}) => ({
    headerTintColor: "#fff",
    headerStyle: {
      backgroundColor: "#d41268f0"
    },
    headerLeft: (
      <Icon name="chevron-left" size={18} style={{paddingLeft: 15}} color="#fff"
        onPress={() => navigation.navigate('Profile')}>
        <View>
         <Text style={{paddingRight: 15}}>Back</Text>
         </View>
      </Icon>
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
});

export default createAppContainer(DashboardNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  }
});
