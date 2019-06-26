import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import Styles from '../../StyleSheet/CommonStyle';

class Hobbies extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[Styles.flexContainer]}>
        <Text style={[Styles.titleText]}>Hobbies</Text>
      </View>
    );
  }
}

Hobbies.propTypes = {};

Hobbies.defaultProps = {};

export default Hobbies;
