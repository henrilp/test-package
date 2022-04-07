import { SELECT_INPUT_SEPARATOR } from './aElements'

export const formatters = {
  date: {
    YEAR: 'year',
    BIRTHDAY: 'birthday',
    BIRTHDAY_WITH_FRACTION: 'birthdayFraction',
    MONTH: 'absoluteMonth',
    RELATIVE: 'relativeDate',
    RELATIVE_SHORT: 'relativeShort',
    ABSOLUTE_DATE: 'absoluteDate',
    ABSOLUTE_DATETIME: 'absoluteDatetime',
    WEEK_DAY_LONG: 'weekDayLong',
    WEEK_DAY_SHORT: 'weekDayShort',
    TIME: 'time',
    ISO: 'iso',
    NO_FORMATTING: null
  },
  number: {
    NONE: 'none',
    COMMAS: 'commas',
    ABBREVIATED: 'abbreviated',
    CURRENCY: 'currency',
    ABBREVIATED_CURRENCY: 'abbreviatedCurrency'
  }
}

export const formatterOptions = {
  dateTime: [
    {
      label: 'Year',
      subtitle: '2020',
      value: formatters.date.YEAR
    },
    {
      label: 'Month of Year',
      subtitle: 'January',
      value: formatters.date.MONTH
    },
    SELECT_INPUT_SEPARATOR,
    {
      label: 'Birthday',
      subtitle: '33',
      value: formatters.date.BIRTHDAY
    },
    {
      label: 'Birthday with fraction',
      subtitle: '33.45',
      value: formatters.date.BIRTHDAY_WITH_FRACTION
    },
    {
      label: 'Relative',
      subtitle: '10 days ago',
      value: formatters.date.RELATIVE
    },
    {
      label: 'Relative (short)',
      subtitle: '10d',
      value: formatters.date.RELATIVE_SHORT
    },
    {
      label: 'Date',
      subtitle: '7/31/2020',
      value: formatters.date.ABSOLUTE_DATE
    },
    {
      label: 'Date / Time',
      subtitle: '7/31/2020 at 2:15 PM',
      value: formatters.date.ABSOLUTE_DATETIME
    },
    SELECT_INPUT_SEPARATOR,
    {
      label: 'Day of Week',
      subtitle: 'Monday',
      value: formatters.date.WEEK_DAY_LONG
    },
    {
      label: 'Day of Week (short)',
      subtitle: 'Mon',
      value: formatters.date.WEEK_DAY_SHORT
    },
    SELECT_INPUT_SEPARATOR,
    {
      label: 'Time',
      subtitle: '2:15 PM',
      value: formatters.date.TIME
    },
    SELECT_INPUT_SEPARATOR,
    {
      label: 'ISO',
      subtitle: '2020-07-31T14:15:00.000Z',
      value: formatters.date.ISO
    },
    {
      label: 'No Formatting',
      subtitle: 'Tue Sep 15 2020 13:55:51 GMT+0200 (heure d’été d’Europe centrale)',
      value: formatters.date.NO_FORMATTING
    }
  ],
  number: [
    {
      label: 'Default',
      subtitle: '1,500,000',
      value: formatters.number.COMMAS
    },
    SELECT_INPUT_SEPARATOR,
    {
      label: 'None',
      subtitle: '1500000',
      value: formatters.number.NONE
    },
    {
      label: 'Abbreviated',
      subtitle: '1.5M',
      value: formatters.number.ABBREVIATED
    },
    SELECT_INPUT_SEPARATOR,
    {
      label: 'Currency',
      subtitle: '$1,500,000.00',
      value: formatters.number.CURRENCY
    },
    {
      label: 'Currency Abbreviated',
      subtitle: '$1.5M',
      value: formatters.number.ABBREVIATED_CURRENCY
    }
  ]
}
