import React from "react";
import PropTypes from "prop-types";
import { View, Text , Image, StyleSheet, TextInput, ScrollView, PixelRatio, TouchableOpacity , Button}  from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import ImagePicker from 'react-native-image-picker';
import Icon from "react-native-vector-icons/FontAwesome";
import Styles from "../../StyleSheet/CommonStyle";
import { createStackNavigator, createAppContainer } from "react-navigation";
import CustomButton from "../../customComponent/CustomButton/CustomButton";

class AddProfile extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isDateTimePickerVisible: false,
      DateValue: new Date(),
      avatarSource: null,
    };

    this.showDateTimePicker = this.showDateTimePicker.bind(this);
    this.hideDateTimePicker = this.hideDateTimePicker.bind(this);
    this.handleDatePicked = this.handleDatePicked.bind(this);
    this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
  }

  showDateTimePicker(){
    console.warn("yes");
    this.setState({ isDateTimePickerVisible: true });
  };
 
  hideDateTimePicker() {
    console.warn("yes");
    this.setState({ isDateTimePickerVisible: false });
  };
 
  handleDatePicked (date){
    console.warn("A date has been picked: ", date);
    this.setState({ DateValue: date });
    this.hideDateTimePicker();
  };

  
  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.warn('Response = ', response);

      if (response.didCancel) {
        console.warn('User cancelled photo picker');
      } else if (response.error) {
        console.warn('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.warn('User tapped custom button: ', response.customButton);
      } else {
        let source = { uri: response.uri };

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source,
        });
      }
    });
  }

  render() {
    return(
        <View style={[Style.flexContainer, Style.borderColor, Styles.pd_15]}>
        <ScrollView>
        <TouchableOpacity onPress={this.selectPhotoTapped}>
          <View
            style={[
              Style.avatar,
              Style.avatarContainer,
              { marginBottom: 20 },
            ]}
          >
            {this.state.avatarSource === null ? (
              <Text>Select a Photo</Text>
            ) : (
              <Image style={Style.avatar} source={this.state.avatarSource} />
            )}
          </View>
        </TouchableOpacity>
          
          <View>
            <TextInput style={[Styles.formLabel]}
              placeholder="FirstName"
              placeholderTextColor="#d6d7da"
              />
          </View>
          <View>
            <TextInput style={[Styles.formLabel]}
              placeholder="LastName"
              placeholderTextColor="#d6d7da"
              />
          </View>
          <View>
          <TouchableOpacity>
             <Text style={[Styles.formLabel, Style.formLabel_picker]}
             onPress={this.showDateTimePicker}
             >{`${this.state.DateValue}`}</Text>
             </TouchableOpacity>
              <DateTimePicker
                isVisible={this.state.isDateTimePickerVisible}
                onConfirm={this.handleDatePicked}
                onCancel={this.hideDateTimePicker}
              />
          </View>
          <View>
            <TextInput style={[Styles.formLabel]}
              placeholder="PhoneNumber"
              keyboardType = 'numeric'
              placeholderTextColor="#d6d7da"
              />
          </View>
          <View>
            <TextInput style={[Styles.formLabel]}
              placeholder="EmailID"
              placeholderTextColor="#d6d7da"
              />
          </View>
          <View>
            <TextInput style={[Styles.formLabel]}
              placeholder="Designation"
              placeholderTextColor="#d6d7da"
              />
          </View>
          <View>
            <TextInput style={[Styles.formLabel]}
              placeholder="profile Summary"
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
  };
};

AddProfile.propTypes = {};

AddProfile.defaultProps = {};

const AddProfileNavigator = createStackNavigator({
    AddProfile: {
      screen: AddProfile
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
  
  export default createAppContainer(AddProfileNavigator);
  
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
    },
    formLabel_picker:{
      height: 60,
    },
    avatarContainer: {
      borderColor: '#9B9B9B',
      borderWidth: 1 / PixelRatio.get(),
      justifyContent: 'center',
      alignItems: 'center',
    },
    avatar: {
      borderRadius: 75,
      width: 250,
      height: 250,
    },
  })