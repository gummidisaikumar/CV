import React from "react";
import PropTypes from "prop-types";
import { View, Text , Image, StyleSheet, TextInput, ScrollView }  from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Styles from "../../StyleSheet/CommonStyle";
import { createStackNavigator, createAppContainer } from "react-navigation";
import CustomButton from "../../customComponent/CustomButton/CustomButton";

class AddProject extends React.Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <View style={[Style.flexContainer, Style.borderColor, Styles.pd_15]}>
            <ScrollView>
              <View>
                <TextInput style={[Styles.formLabel]}
                  placeholder="Project title"
                  placeholderTextColor="#d6d7da"
                  />
              </View>
              <View>
                <TextInput style={[Styles.formLabel]}
                  placeholder="Duration From"
                  placeholderTextColor="#d6d7da"
                  />
              </View>
              <View>
                <TextInput style={[Styles.formLabel]}
                  placeholder="Duration To"
                  placeholderTextColor="#d6d7da"
                  />
              </View>
              <View>
                <TextInput style={[Styles.formLabel]}
                  placeholder="Project Summary"
                  placeholderTextColor="#d6d7da"
                  multiline = {true}
                  />
              </View>
              <View style={[Styles.ptb_8]}>
                 <CustomButton 
                  text="Save"
                 />
              </View>  
              <View style={[Styles.ptb_8]}>
                  <CustomButton 
                  text="Cancel"
                />
              </View>  
              </ScrollView>
            </View>
         )
    }
}

AddProject.propTypes = {};

AddProject.defaultProps = {};

const AddProjectNavigator = createStackNavigator({
    AddProject: {
      screen: AddProject
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
          onPress={() => navigation.navigate('Projects')}>
           Back
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
  
  export default createAppContainer(AddProjectNavigator);
  

  const Style = StyleSheet.create({
    flexContainer:{
      flex: 1,
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
      borderBottomColor: "#d41268f0",
      borderLeftWidth: 5,
      borderRightWidth: 5,
      borderBottomWidth: 5,
    }
  })