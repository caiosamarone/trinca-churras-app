export const formatBRLStringToNumber = (brlString: string) => {
  const formattedAmount = brlString.replace('R$ ', '').replace('.', '');
  const removePoints = formattedAmount.replace('.', '');
  const changeCommaToPoints = removePoints.replace(',', '.');
  return Number(changeCommaToPoints);
};

export const formatNumberToBrlString = (amount: number) => {
  const options = {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 3,
  };
  const formatNumber = new Intl.NumberFormat('pt-BR', options);
  return formatNumber.format(amount);
};
