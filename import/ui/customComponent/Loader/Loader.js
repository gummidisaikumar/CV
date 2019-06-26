import React from "react";
import { View, Text, Image, Animated } from "react-native";

class Myloader extends React.PureComponent {
  constructor(props) {
    super(props);
    this.loadingspin = new Animated.Value(0); 
  };

 spinAnimation(){
     this.loadingspin.setValue(0);
     Animated.sequence([
         Animated.timing(
             this.loadingspin,{
                 toValue: 1,
                 duration: 1000
             }
         )
     ]).start(()=> this.spinAnimation());
 };

 componentDidMount(){
     this.spinAnimation();
 };

  render() {
      const spin = this.loadingspin.interpolate({
          inputRange: [0,1],
          outputRange: ['0deg', '360deg'],
      })
    return (
      <View style={{opacity: (this.props.show || true ? 1 : 0)}}>
        <Animated.Image  style={{ transform: [{rotate: spin}]}} source={require("../../../public/img/spinner-icon-gif-10.jpg")}/>
      </View>
    );
  }
}

Myloader.propTypes = {};

Myloader.defaultProps = {};

export default Myloader;

const Commonstyle = StyleSheet.create({
 
});

