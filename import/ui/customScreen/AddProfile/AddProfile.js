import React from "react";
import PropTypes from "prop-types";
import { View, Text , Image, StyleSheet, TextInput, ScrollView, PixelRatio, TouchableOpacity , Button}  from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import ImagePicker from 'react-native-image-picker';
import Icon from "react-native-vector-icons/FontAwesome";
import Styles from "../../StyleSheet/CommonStyle";
import { createStackNavigator, createAppContainer } from "react-navigation";
import CustomButton from "../../customComponent/CustomButton/CustomButton";
import { toDateFormatYYYYDDMM } from "../../../public/displayFormater";

const date = new Date();
const dateFormat = toDateFormatYYYYDDMM(date);

class AddProfile extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isDateTimePickerVisible: false,
      dateOfBrith: dateFormat,
      avatarSource: null,
      firstName: '',
      lastName: '',
      emailID: '',
      phoneNumber: '',
      designation: '',
      summary:'',
      imageData: '',
      base64Icon: '',
    };

    this.showDateTimePicker = this.showDateTimePicker.bind(this);
    this.hideDateTimePicker = this.hideDateTimePicker.bind(this);
    this.handleDatePicked = this.handleDatePicked.bind(this);
    this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
    this.Submit = this.Submit.bind(this);

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
    let dateformat = toDateFormatYYYYDDMM(date)
    console.warn(dateformat);
    this.setState({ dateOfBrith:  dateformat});
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
        let imageBase64Data = response.data
       console.log("imageData", imageBase64Data);
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
       
        var imageItem =   `data:image/png;base64${imageBase64Data}`
         console.warn(imageItem);
        this.setState({
          avatarSource: source,
          imageData: imageBase64Data,
          base64Icon: imageItem 
        });
      }
    });
  }
 Submit(){
   console.warn({
     "imageData": this.state.imageData,
     "firstName": this.state.firstName,
     "lastName": this.state.lastName,
     "designation": this.state.designation,
     "summary": this.state.summary,
     "phoneNumber": this.state.phoneNumber,
     "emailId": this.state.emailID,
     "dateOfBrith": this.state.dateOfBrith,
   })
 }
  render() {
    return(
        <View style={[Style.flexContainer, Style.borderColor, Styles.pd_15]}>
        <ScrollView>
        <View style={[Style.headerSection]}>

        <TouchableOpacity onPress={this.selectPhotoTapped}>
          <View
            style={[Style.avatarContainer, Style.avatar]}
          >
            {this.state.avatarSource === null ? (
              <Text>Select a Photo</Text>
            ) : (
              <Image style={Style.avatar} source={this.state.avatarSource} />
            )}
          </View>
        </TouchableOpacity>
          </View>    
          <View>
            <TextInput style={[Styles.formLabel]}
              placeholder="firstName"
              placeholderTextColor="#d6d7da"
              onChangeText={(firstName) => this.setState({firstName})}
              value={this.state.firstName}
              />
          </View>
          <View>
            <TextInput style={[Styles.formLabel]}
              placeholder="LastName"
              placeholderTextColor="#d6d7da"
              onChangeText={(lastName) => this.setState({lastName})}
              value={this.state.lastName}
              />
          </View>
          <View>
          <TouchableOpacity>
             <Text style={[Styles.formLabel, Style.formLabel_picker]}
             onPress={this.showDateTimePicker}
             >{`${this.state.dateOfBrith}`}</Text>
             </TouchableOpacity>
              <DateTimePicker
                isVisible={this.state.isDateTimePickerVisible}
                onConfirm={this.handleDatePicked}
                onCancel={this.hideDateTimePicker}
               // value={this.state.dateOfBrith}

              />
          </View>
          <View>
            <TextInput style={[Styles.formLabel]}
              placeholder="PhoneNumber"
              keyboardType = 'numeric'
              placeholderTextColor="#d6d7da"
              onChangeText={(phoneNumber) => this.setState({phoneNumber})}
              value={this.state.phoneNumber}
              />
          </View>
          <View>
            <TextInput style={[Styles.formLabel]}
              placeholder="EmailID"
              placeholderTextColor="#d6d7da"
              onChangeText={(emailID) => this.setState({emailID})}
              value={this.state.emailID}
              />
          </View>
          <View>
            <TextInput style={[Styles.formLabel]}
              placeholder="Designation"
              placeholderTextColor="#d6d7da"
              onChangeText={(designation) => this.setState({designation})}
           value={this.state.designation}
              />
          </View>
          <View>
            <TextInput style={[Styles.formLabel]}
              placeholder="profile Summary"
              placeholderTextColor="#d6d7da"
              multiline = {true}
              onChangeText={(summary) => this.setState({summary})}
             value={this.state.summary}
              />
          </View>
          <Image style={{width: 50, height: 50}} source={this.state.base64Icon}/>
          <View style={[Styles.ptb_8]}>
             <CustomButton 
              text="Save"
              onPress = {this.Submit}
             />
          </View>  
          <View style={[Styles.ptb_8]}>
              <CustomButton 
              text="Cancel"
              onPress={() => this.props.navigation.navigate('Profile')}
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
      flexDirection: 'column',
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
      height: 50,
      paddingTop: 10,
      paddingBottom: 8,
    },
    headerSection:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',   
    },
    avatarContainer: {
      borderColor: '#9B9B9B',
      borderWidth: 1 / PixelRatio.get(),
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
    },
    avatar: {
      borderRadius: 75,
      width: 150,
      height: 150,
    },
  })