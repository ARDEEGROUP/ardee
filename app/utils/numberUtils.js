// numberUtils.js

const numberUtils = {
  numberFormat: (value, locale = "en-IN") => {
    return new Intl.NumberFormat(locale).format(value);
  },

  numberIntFormat: (value, locale = "en-IN") => {
    return new Intl.NumberFormat(locale, {
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
    }).format(value);
  },

  numberFloatFormat: (value, locale = "en-IN", maximumFractionDigits = 2) => {
    return new Intl.NumberFormat(locale, { maximumFractionDigits }).format(
      value
    );
  },

  percentIntFormat: (value, locale = "en-IN") => {
    return (
      new Intl.NumberFormat(locale, { maximumFractionDigits: 0 }).format(
        value
      ) + "%"
    );
  },

  percentFloatFormat: (value, locale = "en-IN", maximumFractionDigits = 2) => {
    return (
      new Intl.NumberFormat(locale, { maximumFractionDigits }).format(value) +
      "%"
    );
  },

  priceFormat: (value, currency, locale = "en-IN") => {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
    }).format(value);
  },

  priceIntFormat: (value, currency = "INR", locale = "en-IN") => {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
    }).format(value);
  },

  priceFloatFormat: (
    value,
    currency = "INR",
    locale = "en-IN",
    maximumFractionDigits = 2
  ) => {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
      maximumFractionDigits,
    }).format(value);
  },
  convertToPaise: (rupees) => {
    return rupees * 100;
  },
};

export default numberUtils;
