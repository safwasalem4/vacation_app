import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { responsiveHeight } from 'react-native-responsive-dimensions';

import * as pageActions from '../../redux/actions/vacationRequests';

import ScreenContainer from '../../components/ScreenContainer';
import HomeButton from './HomeButton';

class Home extends Component {
  incrementCount() {
    let { actions, navigation } = this.props;
    actions.getVacationRequests(navigation);
  }

  render() {
    const { navigation } = this.props;

    return (
      <ScreenContainer header={'Home'} mainViewStyle={styles.mainViewStyle}>
        {/* Vacation Requests */}
        <HomeButton
          buttonTitle={'Vacation' + '\n' + 'Requests'}
          source={require('../../config/images/vacation-requests.png')}
          onPress={() => this.incrementCount()}
        />

        {/* Request Vacation */}
        <HomeButton
          buttonTitle={'Create' + '\n' + 'Vacation' + '\n' + 'Request'}
          source={require('../../config/images/create-request.png')}
          onPress={() => navigation.navigate('RequestVacation')}
        />
      </ScreenContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  vacationRequests: state.vacationRequests.vacationRequests,
});

const ActionCreators = Object.assign({}, pageActions);

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  mainViewStyle: {
    flex: 1,
    alignItems: 'center',
    marginTop: responsiveHeight(10),
  },
});
