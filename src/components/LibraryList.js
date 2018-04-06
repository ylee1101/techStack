import React, { Component } from "react";
import { ListView, Platform, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import ListItem from './ListItem';

class LibraryList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  renderRow(library) {
    return (
      <ListItem 
        library={library}
      />
    )
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    )
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
};


const styles = StyleSheet.create({});

export default connect(mapStateToProps)(LibraryList);

// state is {libraries: Array(9)}