export const convertNameFromSnakeCaseToNormalText = (name: string) => {
  return name
    .split('_')
    .filter(item => item.length > 0)
    .join(' ');
};
