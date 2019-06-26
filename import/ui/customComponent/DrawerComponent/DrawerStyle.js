import { StyleSheet,Dimensions } from "react-native";

let { height } = Dimensions.get("window");
let box_count = 3;
let box_height = height / box_count;

const DrawerStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  box: {
    height: box_height
  },
  box1: {
    flex: 2.5
  },
  box2: {
    flex: 8,
    backgroundColor: "#fff"
  },
  box3: {
    flex: 0.75,
    backgroundColor: "#d41268f0",
    alignItems: "flex-end",
    justifyContent: "center"
  },
  navItem: {
    borderBottomWidth: 1,
    borderColor: "#d41268f0",
    flexDirection: "row"
  },
  navItemContainer: {
    flex: 1,
    flexDirection: "row",
    paddingBottom: 12,
    paddingTop: 12,
    paddingLeft: 12,
    paddingRight: 12
  },
  navTextPosition: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  navItemText: {
    fontSize: 18,
    color: "#d41268f0",
    paddingLeft: 15
  },
  navActiveItem: {
    backgroundColor: "#fff"
  },
  footerText: {
    color: "#fff",
    fontSize: 18
  }
});

export default DrawerStyle;
