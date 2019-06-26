import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, Dimensions, Keyboard, TextInput, Alert } from "react-native";
import CustomButton from "../../customComponent/CustomButton/CustomButton";
import axios from "axios";

let { height } = Dimensions.get("window");
let box_count = 3;
let box_height = height / box_count;

class Login extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state={
      emailId: '',
      Password: '',
    }
    this.Submit = this.Submit.bind(this);
  }

  Submit(){
    if(this.state.emailId != '' && this.state.password != ''){
    Keyboard.dismiss();
    axios.post('https://cv-application.herokuapp.com/user/login', {
      "emailId": this.state.emailId,
      "password":  this.state.Password
    })
    .then((response)=>{
      if(response.data.userId){
        console.log(response);
        this.props.navigation.navigate("DrawerComponent")
      }
    }).then((err)=>{
      Alert.alert(JSON.stringify(err.data.message));
    }); 
  }
  else{
    Alert.alert("please enter required field");
  }
  }
  render() {
    return (
      <View style={[styles.flexContainer]}>
       <View style={[styles.box, styles.headerSection]}>
        <View style={[styles.logo__container]}>
          <Text style={[styles.logo_text]}>CV</Text>
        </View>
        </View>
        <View style={[styles.box, styles.bodySection]}>
          <View style={[styles.mb_20px]}>
            <TextInput style={[styles.formLabel]}
            placeholder="emailId"
            placeholderTextColor="#d6d7da"
            onChangeText={(emailId) => this.setState({emailId})}
            value={this.state.emailId}
            selectionColor={'white'}
            />
           <TextInput style={[styles.formLabel]}
           placeholder="Password"
           placeholderTextColor="#d6d7da"
           secureTextEntry
           onChangeText={(Password) => this.setState({Password})}
           value={this.state.Password}
           selectionColor={'white'}
            />
          </View>
          <View style={[styles.ptb_8px]}>
            <CustomButton 
              text="Login"
              onPress = {this.Submit}
          />
         </View>
          <View style={[styles.ptb_8px]}>
            <CustomButton 
              text="Sing Up"
              onPress={() => this.props.navigation.navigate("DrawerComponent")}
              />
          </View>  
        </View>
        <View style={[styles.box, styles.footerSection]}>
        
        </View>
      </View>
    );
  }
}


Login.propTypes = {};

Login.defaultProps = {};

export default Login;

const styles = StyleSheet.create({
  flexContainer: {    
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#d41268f0',
    padding: 20,
    borderWidth: 5,
    borderColor: '#d6d7da',
  },
  box: {
    height: box_height
  },
  headerSection:{
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',    
  },
  logo__container:{
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    width: Dimensions.get('window').width * 0.35,
    height: Dimensions.get('window').width * 0.35,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: '#d6d7da',
    
  },
  ptb_8px:{
    paddingTop: 8,
    paddingBottom: 8,
  },
  mb_20px:{
    marginBottom: 20,
  },
  bodySection:{
    flex: 2,
  },
  footerSection:{
    flex: 0.25,
    //backgroundColor: '#d2709cf0'
  },
  logo_text:{
    fontSize: 45,
    color: '#fff',
    fontWeight: 'bold',
  },
  formLabel:{
    borderColor: '#d6d7da',
    fontSize: 20,
    color: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 8,
    marginBottom: 8,
    paddingLeft: 15,
    paddingRight: 15,
  },
  titleText: {
    fontSize: 20
  }
});
