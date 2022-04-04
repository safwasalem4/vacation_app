import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as pageActions from '../redux/actions/vacationRequests';

import VacationRequests from '../screens/vacationRequests/VacationRequests';

const VacationRequestsController = ({ vacationRequests }) => {
  const [requestsList, setRequestsList] = useState(vacationRequests);
  const [searchText, setSearchText] = useState('');

  const search = (searchInput) => {
    setSearchText(searchInput);
    let vacationRequestsList = [];
    let searchName = searchInput.toLowerCase();

    if (searchInput === '') {
      vacationRequestsList = vacationRequests;
    } else {
      for (let i = 0; i < vacationRequests.length; i++) {
        const request = vacationRequests[i];
        const { name, replacementName } = request;

        const requestName = name.toLowerCase();
        const requestReplacementName = replacementName.toLowerCase();

        if (requestName.search(searchName) !== -1 || requestReplacementName.search(searchName) !== -1) {
          vacationRequestsList.push(request);
        }
      }
    }

    setRequestsList(vacationRequestsList);
  };

  return <VacationRequests vacationRequests={requestsList} searchText={searchText} search={search} />;
};

const mapStateToProps = (state) => ({
  vacationRequests: state.vacationRequests.vacationRequests,
});

const ActionCreators = Object.assign({}, pageActions);

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(VacationRequestsController);
