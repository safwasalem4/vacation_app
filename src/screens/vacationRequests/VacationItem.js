import React from 'react';
import { StyleSheet } from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import moment from 'moment';

import { formatDate } from '../../methods/Helper';
import { FONT_WEIGHT, TEXT_SIZE } from '../../components/CustomText';
import colors from '../../config/colors';
import Card from '../../components/Card';
import RowText from '../../components/RowText';

const VacationItem = ({ item }) => {
  const { name, replacementName, mobile, startDate, requestDays } = item;

  return (
    <Card title={name}>
      <RowText
        textOne={'Mobile: '}
        textTwo={mobile}
        textOneType={TEXT_SIZE.body}
        textTwoType={TEXT_SIZE.body}
        textOneWeight={FONT_WEIGHT.semiBold}
        textOneStyle={styles.textOneStyle}
        textTwoStyle={styles.textTwoStyle}
      />

      <RowText
        textOne={'Duration: '}
        textTwo={`${requestDays} Day`}
        textOneType={TEXT_SIZE.body}
        textTwoType={TEXT_SIZE.body}
        textOneWeight={FONT_WEIGHT.semiBold}
        textOneStyle={styles.textOneStyle}
        textTwoStyle={styles.textTwoStyle}
      />

      <RowText
        textOne={'From: '}
        textTwo={formatDate(startDate)}
        textOneType={TEXT_SIZE.body}
        textTwoType={TEXT_SIZE.body}
        textOneWeight={FONT_WEIGHT.semiBold}
        textOneStyle={styles.textOneStyle}
        textTwoStyle={styles.textTwoStyle}
      />

      <RowText
        textOne={'To: '}
        textTwo={formatDate(moment(startDate).add(requestDays, 'days'))}
        textOneType={TEXT_SIZE.body}
        textTwoType={TEXT_SIZE.body}
        textOneWeight={FONT_WEIGHT.semiBold}
        textOneStyle={styles.textOneStyle}
        textTwoStyle={styles.textTwoStyle}
      />

      <RowText
        textOne={'Replacement by: '}
        textTwo={replacementName}
        textOneType={TEXT_SIZE.body}
        textTwoType={TEXT_SIZE.body}
        textOneWeight={FONT_WEIGHT.semiBold}
        textOneStyle={styles.textOneStyle}
        textTwoStyle={styles.textTwoStyle}
      />
    </Card>
  );
};

export default VacationItem;

const styles = StyleSheet.create({
  title: {
    marginTop: 12,
  },
  textOneStyle: {
    width: responsiveWidth(35),
    color: colors.dark,
  },
  textTwoStyle: {
    color: colors.subTitle,
  },
});
