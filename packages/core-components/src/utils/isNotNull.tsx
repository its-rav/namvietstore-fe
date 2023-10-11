const isNotNull = (text: string | undefined): boolean =>
  typeof text !== 'undefined' && text !== null;

export default isNotNull;
