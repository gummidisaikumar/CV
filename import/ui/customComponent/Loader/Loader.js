import React, { Component } from "react";
import PropTypes from "prop-types";
import { ActivityIndicator, View, StyleSheet, Modal } from "react-native";

class MyLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: props.loading
    };
  }
  render() {
    const { loading } = this.state;
    console.warn("state", loading);
    return (
      <Modal transparent={true} animationType={"none"} visible={loading}>
        <View style={styles.container}>
          <ActivityIndicator
            animating={loading}
            color="#fff"
            size="large"
            style={styles.loaderIndicator}
          />
        </View>
      </Modal>
    );
  }
}

MyLoader.propTypes = {
  loading: PropTypes.bool.isRequired
};

MyLoader.defaultProps = {
  loading: false
};

export default MyLoader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 70
  },
  loaderIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 80
  }
});
