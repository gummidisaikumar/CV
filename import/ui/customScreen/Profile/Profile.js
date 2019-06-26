import React from "react";
import PropTypes from "prop-types";
import { View, Text , Image, StyleSheet, Dimensions}  from "react-native";
import Styles from '../../StyleSheet/CommonStyle';
import ProfileData  from './ProfileData';
import CustomButton from "../../customComponent/CustomButton/CustomButton";

let { height } = Dimensions.get("window");
let box_count = 2;
let box_height = height / box_count;

class Profile extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[Style.flexContainer, Style.borderColor]}>
        <View style={[Style.add_btn__container]}>
         <CustomButton 
           text="Add Profile"
           onPress={() => this.props.navigation.navigate("AddProfile")}
          />
        </View>
        <View style={[Style.box, Styles.flexContainer]}>
        {ProfileData.map((data)=>(
        <View  key={data.index} style={{flex: 1, alignItems:'center', justifyContent: 'center', paddingLeft: 10, paddingRight: 10}}> 
        <Image
          source={data.profileImg} arounded
          style={{ width: 200, height: 200,  borderRadius: 100}}
        />
        <Text style={[Style.title]}>{data.ProfileName}</Text>
        <Text style={[Style.title]}>{data.Designation}</Text>
        <Text style={[Style.title]}>{data.PhoneNumber}</Text>
        <Text style={[Style.title]}>{data.EmailId}</Text>
        <Text style={[Style.descriptionText]}>{data.Description}</Text>
        </View>
        ))}
        </View>
      </View>
    );
  }
}

Profile.propTypes = {};

Profile.defaultProps = {};

export default Profile;

const Style = StyleSheet.create({
  flexContainer: {    
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  box: {
    height: box_height - 20
  },
  add_btn__container:{
    flex: 0.15,
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
  title:{
    textAlign: 'center',
    fontSize: 20,
  },
  descriptionText:{
    textAlign:'center',
    fontSize: 16,
  },
  borderColor:{
    borderLeftColor: "#d41268f0",
    borderRightColor: "#d41268f0",
    borderLeftWidth: 5,
    borderRightWidth: 5,
  }
})