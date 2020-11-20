import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import updateLocale from 'dayjs/plugin/updateLocale';
import es from 'dayjs/locale/es';

dayjs.extend(relativeTime);
dayjs.extend(updateLocale);

dayjs.updateLocale(es);

/**
 *
 * @param {Date} DATE Date to format [createAT]
 */
export const dateFormat = (DATE) => {
  return dayjs(DATE).locale('es').format('dddd, D [de] MMMM [del] YYYY [a las] H:mm');
};

/**
 *
 * @param {Date} createAT Date to create [createAT]
 */
const timeAgoDAYJS = (createAT) => {
  const newTimestamp = new Date(Date.parse(createAT));
  return dayjs(newTimestamp).locale('es').fromNow();
};

export default timeAgoDAYJS;
