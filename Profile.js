'use strict';

import React, { Component } from 'react';

import {
    StyleSheet,
    Image,
    View,
    TouchableHighlight,
    FlatList,
    Text,
} from 'react-native';


export default class Profile extends Component {


    static navigationOptions = {
        title: 'Profile',
    };

    render () {
        const item = this.props.navigation.state.params.item;
        const day = item.updated_in_days === 1 ? 'day' : 'days';
        console.log(item);

      return (
          <View>
              <Image
                  style={styles.thumb}
                  source={{ uri: item.img_url }}
              />
              <Text
                style={styles.heading}
              >
                  {item.title}

              </Text>
              <Text
                style={styles.subheading}
              >
                  {item.price_formatted}
              </Text>
              <Text style={{marginLeft: 30}}>
                  Last updated: {item.updated_in_days} {day} ago
              </Text>

          </View>
      );
    }
}

const styles = StyleSheet.create({
    thumb: {
        width: 300,
        height: 300,
        marginTop: 30,
        marginBottom: 30,
        marginLeft: 30,
        marginRight: 30
    },
    textContainer: {
        flex: 1
    },
    separator: {
        height: 1,
        backgroundColor: '#dddddd'
    },
    heading: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#48BBEC',
        marginLeft: 30,
        marginRight: 30,
    },
    subheading: {
        fontSize: 15,
        color: '#6c7ba2',
        marginLeft: 30,
        marginRight: 30,
    },
    rowContainer: {
        flexDirection: 'row',
        padding: 10
    },
});