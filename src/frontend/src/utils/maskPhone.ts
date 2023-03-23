// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const maskPhone = (value: any) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{4})(\d+?)$/, '$1');
};

export default maskPhone;
