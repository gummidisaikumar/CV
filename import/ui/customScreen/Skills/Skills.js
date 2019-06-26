import React from "react";
import PropTypes from "prop-types";
import { View, Text} from 'react-native';
import Styles from '../../StyleSheet/CommonStyle';

class Skills extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <View style={[Styles.flexContainer]}>
            <Text style={[Styles.titleText]}>Skills</Text>
        </View>
    )
  };
};

Skills.propTypes = {};

Skills.defaultProps = {};

export default Skills;