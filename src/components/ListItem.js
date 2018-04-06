import React, { Component } from "react";
import { TouchableWithoutFeedback, StyleSheet, Text, View, LayoutAnimation } from "react-native";
import { connect } from 'react-redux';
import { CardSection } from "./common";
import * as actions from '../actions/index'; //use when there are many things to import

// ListItme component is to show a single library
class ListItem extends Component {
    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDescription() {
        const { library, expanded } = this.props;

        if (expanded) {
            return (
                <CardSection>
                    <Text style={styles.bodyStyle}>
                        {library.description}
                    </Text>
                </CardSection>
            );
        }
    }

  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;
    // console.log("Test",this.props)

    return (
        <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
            <View>
                <CardSection>
                    <Text style={titleStyle}>
                        {title}
                    </Text>
                </CardSection>
                {this.renderDescription()}
            </View>
        </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;

    return { expanded }
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    },
    bodyStyle: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15
    }

});

export default connect(mapStateToProps, actions)(ListItem);