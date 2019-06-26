import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, Dimensions, TextInput } from "react-native";
import CustomButton from "../../customComponent/CustomButton/CustomButton";
import { ScrollView } from "react-native-gesture-handler";
import axios from "axios";

let { height } = Dimensions.get("window");
let box_count = 3;
let box_height = height / box_count;

class Signup extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state={
      firstName: '',
      lastName: '',
      emailId: '',
      Password: '',
    }
    this.Submit = this.Submit.bind(this);
  }

  Submit(){
    axios.post('https://cv-application.herokuapp.com/user/signup', {
      "firstName": this.state.firstName,
      "lastName": this.state.lastName,
      "emailId": this.state.emailId,
      "password":  this.state.Password
    })
    .then((response)=>{
      if(response.data.userId){
        this.setState({loading: false})
        console.warn(response.data.userId);
        this.props.navigation.navigate("Login")
      }
    }).then((err)=>{
      console.warn(err);
    }); 
  }
  render() {
    return (
      <ScrollView>
      <View style={[styles.flexContainer]}>
        <View style={[styles.box, styles.headerSection]}>
        <View style={[styles.logo__container]}>
          <Text style={[styles.logo_text]}>CV</Text>
        </View>
        </View>
        <View style={[styles.box, styles.bodySection]}>
          <View style={[styles.mb_20px]}>
           <TextInput style={[styles.formLabel]}
            placeholder="firstName"
            placeholderTextColor="#d6d7da"
            onChangeText={(firstName) => this.setState({firstName})}
            value={this.state.firstName}
            selectionColor={'white'}
            />
            <TextInput style={[styles.formLabel]}
            placeholder="lastName"
            placeholderTextColor="#d6d7da"
            onChangeText={(lastName) => this.setState({lastName})}
            value={this.state.lastName}
            selectionColor={'white'}
            />
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
              text="Sing Up"
              onPress = {this.Submit}
              />
         </View>
          <View style={[styles.ptb_8px]}>
            <CustomButton 
              text="Cancel"
              onPress={() => this.props.navigation.navigate("Login")}
              />
          </View>  
        </View>
        <View style={[styles.box, styles.footerSection]}>
        
        </View>
      </View>
      </ScrollView>
    );
  }
}


Signup.propTypes = {};

Signup.defaultProps = {};

export default Signup;

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
