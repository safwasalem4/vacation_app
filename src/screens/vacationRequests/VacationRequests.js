import React from 'react';
import { FlatList } from 'react-native';

import ScreenContainer from '../../components/ScreenContainer';
import VacationItem from './VacationItem';
import Input from '../../components/Input';

const VacationRequests = ({ vacationRequests, searchText, search }) => {
  return (
    <ScreenContainer back header={'Vacation Requests'}>
      <FlatList
        data={vacationRequests}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => `${index}`}
        ListHeaderComponent={
          <Input searchIcon placeholder={'Search...'} value={searchText} onChangeText={(text) => search(text)} />
        }
        renderItem={({ item }) => <VacationItem item={item} />}
      />
    </ScreenContainer>
  );
};

export default VacationRequests;
