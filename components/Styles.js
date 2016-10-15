import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  containerWithNav: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  subtitle: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  bigIcon: {
    color: '#000000',
  },
  navContainer: {
    alignSelf: 'stretch',
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection:'row',
    padding: 5,
    marginBottom: 50,
    marginTop: 30,
    backgroundColor: '#00C4C4',
  },
  navIcon: {
    marginLeft: 5,
    marginRight: 5,
    color: '#000000',
  }
});
