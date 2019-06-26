import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Styles from '../../StyleSheet/CommonStyle';

class UserProfile extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[Commonstyle.profileContainer]}>
        <Image
          source={require("../../../public/img/sai.jpg")}
          style={{ width: 100, height: 100, borderRadius: 50}}
        />
        <Text style={[Commonstyle.profileText]}>Saikumar</Text>
      </View>
    );
  }
}

UserProfile.propTypes = {};

UserProfile.defaultProps = {};

export default UserProfile;

const Commonstyle = StyleSheet.create({
  profileContainer: {
    justifyContent: 'center',
    alignItems: "center",
   // backgroundColor: "#114d76",
    paddingTop: 20,
    paddingBottom: 15,
  },
  profileText:{
    color: '#fff',
    fontSize: 20,
  }
});

