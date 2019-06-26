import React from "react";
import PropTypes from "prop-types";
import { View, Text , TouchableOpacity} from "react-native";
import Communications from 'react-native-communications';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';


class PhoneCall extends React.Component {
    constructor(props) {
        super(props);
        this.callToNumber = this.callToNumber.bind(this);
    }
    
  callToNumber(number){
    RNImmediatePhoneCall.immediatePhoneCall(number);
  }
    render() {
      
        return (  
            <TouchableOpacity
			onPress={() => this.callToNumber('9618010075')}
		  >
            <Text>call</Text>
            </TouchableOpacity>
        )
    }
}

PhoneCall.propTypes = {};

PhoneCall.defaultProps = {};
 
export default PhoneCall;