export const convertValue = {
  stripCurrency: str => {
      return  str.replace(/[^0-9.,]/g, '');
  },
  toNumber: str => {
    if (typeof str === 'string') {
      str = str.replace(/[^0-9.,]/g, '');
      str = parseFloat(str);
    }
    return str;
  },
  toCurrency: num => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(num);
  }
}