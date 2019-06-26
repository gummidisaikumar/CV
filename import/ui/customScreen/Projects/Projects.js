import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import AppIntroSlider from 'react-native-app-intro-slider';
import ProjectData from './ProjectData';
import CustomButton from '../../customComponent/CustomButton/CustomButton';

const win = Dimensions.get('window');
class Projects extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  _renderItem = (item) => {
    return (
      <View style={[styles.flexContainer]}>
         <View style={styles.titleContianer}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
          <View style={[styles.imgContainer]}>
            <Image source={item.image} style={[styles.imgItem]}/>
          </View>
          <View style={[styles.textContainer]}>
            <Text style={styles.text}>{item.text}</Text>
          </View>
      </View>
    );
  }
  _renderNextButton = () => {
    return (
      <View>
            <Icon name="chevron-left" size={18}  color="#fff"/>
      </View>
    );
  }
  _renderDoneButton = () => {
    return (
      <View>
        <Icon name="chevron-left" size={18}  color="#fff"/>
      </View>
    );
  }
  render() {
    return (
      <View style={[styles.flexContainer]}>
        <View style={[styles.add_btn__container]}>
         <CustomButton 
           text="Add Project"
           onPress={() => this.props.navigation.navigate("AddProject")}
          />
        </View>
      <AppIntroSlider
        renderItem={this._renderItem}
        slides={ProjectData}
       renderDoneButton={this._renderDoneButton}
      renderNextButton={this._renderNextButton}
      />
      </View>
    );
  }
}

Projects.propTypes = {};

Projects.defaultProps = {};

const styles = StyleSheet.create({
  flexContainer:{
    flex: 1,
    flexDirection: 'column',
  },
  titleContianer:{
    flex: 0.25,
    paddingTop: 5,
    paddingBottom: 5,
    alignItems: 'center',    
  },
  title:{
    color: '#333',
    textAlign: 'center',
    fontSize: 25,
  },
  imgContainer:{
    flex: 4,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: "center",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 40,
    marginBottom: 40,
  },
  imgItem:{
    width: '100%',
    height: '100%',
  },
textContainer:{
   flex: 2,
   flexDirection:'column',
},
text:{
  flex: 1, 
  width: win.width,
  flexWrap: 'wrap',
  color: '#333', 
  alignItems: 'center',
  textAlign: 'center',
},
add_btn__container:{
  flex: 0.15,
  justifyContent: 'center',
  paddingLeft: 15,
  paddingRight: 15,
},

});
 
export default Projects;
