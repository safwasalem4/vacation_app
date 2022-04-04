import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as pageActions from '../../redux/actions/vacationRequests';
import ScreenContainer from '../../components/ScreenContainer';
import VacationItem from './VacationItem';

class VacationRequests extends Component {
  render() {
    const { vacationRequests } = this.props;

    return (
      <ScreenContainer back header={'Vacation Requests'}>
        <FlatList
          data={vacationRequests}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => `${index}`}
          renderItem={({ item }) => <VacationItem item={item} />}
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

export default connect(mapStateToProps, mapDispatchToProps)(VacationRequests);
