import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";
import { Header } from './components/common/Header';
import LibraryList from './components/LibraryList';

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{flex: 1}}>
          <Header headerText="Tech Stack" />
          <LibraryList />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
});
