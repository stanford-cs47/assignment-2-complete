import React from 'react';
import { StyleSheet, Text, View, Image, Platform, Dimensions, TouchableOpacity } from 'react-native';
import { Images, Profiles } from './App/Themes';
import { Ionicons } from '@expo/vector-icons';

export default class App extends React.Component {
  constructor() {
    super();
    var haroldProfile = Profiles.harold;
    this.state = {
      profileImage: haroldProfile.image,
      name: haroldProfile.name,
      age: haroldProfile.age,
      occupation: haroldProfile.occupation
    };
  }

  randomProfile() {
    var newProfile = Profiles.random();
    console.log(newProfile);
    this.setState({
      profileImage: newProfile.image,
      name: newProfile.name,
      age: newProfile.age,
      occupation: newProfile.occupation
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statusBar}/>
        <View style={styles.topBar}>
          <Ionicons name="md-settings" size={32} color="#A5A5A5" />
          <Image source={Images.logo} resizeMode={'contain'} style={styles.titleImage}/>
          <Image source={Images.chat} style={styles.rightIcon}/>
        </View>
        <View style={styles.mainView}>
          <View style={styles.card}>
            <Image source={this.state.profileImage} style={styles.profileImage}/>
            <View style={styles.nameAndAge}>
              <Text style={styles.name}>
                {this.state.name + ", "}
              </Text>
              <Text style={styles.age}>
                {this.state.age}
              </Text>
            </View>
            <Text style={styles.occupation}>
              {this.state.occupation}
            </Text>
          </View>
        </View>
        <View style={styles.actionBar}>
          <TouchableOpacity onPress={this.randomProfile.bind(this)}>
            <View style={styles.smallImageWrapper}>
              <Image source={Images.rewind} resizeMode={'contain'} style={styles.smallImage}/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.randomProfile.bind(this)}>
            <View style={styles.bigImageWrapper}>
              <Image source={Images.nope} resizeMode={'contain'} style={styles.bigImage}/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.randomProfile.bind(this)}>
            <View style={styles.smallImageWrapper}>
              <Image source={Images.boost} resizeMode={'contain'} style={styles.smallImage}/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.randomProfile.bind(this)}>
            <View style={styles.bigImageWrapper}>
              <Image source={Images.like} resizeMode={'contain'} style={styles.bigImage}/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.randomProfile.bind(this)}>
            <View style={styles.smallImageWrapper}>
              <Image source={Images.superLike} resizeMode={'contain'} style={styles.smallImage}/>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const {height, width} = Dimensions.get('window');
var cardWidth = 0.9 * width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBar: {
    height: Platform.OS === 'ios' ? 44 : 56,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#A5A5A5'
  },
  statusBar: {
    height: 20,
    width: '100%',
  },
  leftIcon: {
    height: 40,
    width: 40,
    tintColor: "#C5C5C5"
  },
  titleImage: {
    height: 30,
    width: '65%',
  },
  rightIcon: {
    height: 40,
    width: 40,
    tintColor: "#C5C5C5"
  },
  mainView: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    width: cardWidth,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#A5A5A5',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  profileImage: {
    width: '100%',
    height: cardWidth,
    borderTopLeftRadius: 10
  },
  nameAndAge: {
    flexDirection: 'row',
    marginTop: 8,
    marginLeft: 16,
  },
  occupation: {
    marginLeft: 16,
    marginBottom: 8,
    fontSize: 16,
    color: '#A5A5A5',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  age: {
    fontSize: 24,
  },
  actionBar: {
    width: '75%',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  smallImageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20
  },
  bigImageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 25
  },
  smallImage: {
    width: 22,
    height: 22
  },
  bigImage: {
    width: 25,
    height: 25
  }
});
