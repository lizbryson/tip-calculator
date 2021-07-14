export const convertValue = {
  stripCurrency: str => {
      return  str.replace(/[^0-9.,]/g, '');
  },
  toNumber: str => {
    if (typeof str === 'string') {
      str = str.replace(/[^0-9.,]/g, '');
      console.log(str);
      str = parseFloat(str);
      console.log((+str).toFixed(2));
      // str = parseFloat(str);
      // console.log(str);

    }

    return str;
  },
  toCurrency: num => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(num);
  }
}