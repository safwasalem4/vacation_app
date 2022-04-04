import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';

import * as pageActions from '../redux/actions/createRequest';
import RequestVacation from '../screens/RequestVacation';

class RequestVacationController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      replacementName: '',
      mobileNumber: '',
      startDate: '',
      requestedDays: '',
      selectDate: false,
      errors: {
        name: undefined,
        replacementName: undefined,
        mobileNumber: undefined,
        startDate: undefined,
        requestedDays: undefined,
      },
    };
  }

  async onSubmit() {
    const { actions, navigation } = this.props;
    const { name, replacementName, mobileNumber, startDate, requestedDays, selectDate } = this.state;
    const body = {
      name,
      replacementName,
      mobile: mobileNumber,
      startDate: moment(startDate).format(),
      requestDays: requestedDays,
      selectDate,
    };

    const isValid = await this.validateInputs();

    if (isValid) {
      actions.createVacationRequest(navigation, body);
    }
  }

  async validateInputs() {
    let isValid = true;
    const { name, replacementName, startDate, requestedDays } = this.state;
    let err = {
      name: undefined,
      replacementName: undefined,
      mobileNumber: undefined,
      startDate: undefined,
      requestedDays: undefined,
    };

    if (name === '') {
      err.name = 'Please enter name';
      isValid = false;
    }

    if (replacementName === '') {
      err.replacementName = 'Please enter replacement name';
      isValid = false;
    }
    if (startDate === '') {
      err.startDate = 'Please select vacation start date';
      isValid = false;
    }

    if (requestedDays === '') {
      err.requestedDays = 'Please enter vacation requested days';
      isValid = false;
    } else if (!Number(requestedDays)) {
      err.requestedDays = 'Vacation requested days must be number';
      isValid = false;
    }

    this.setState({ errors: err });

    return isValid;
  }

  render() {
    return (
      <RequestVacation
        inputs={this.state}
        onSubmit={() => this.onSubmit()}
        setState={(res) => this.setState({ ...res })}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  requestData: state.vacationRequests.requestData,
});

const ActionCreators = Object.assign({}, pageActions);

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(RequestVacationController);
