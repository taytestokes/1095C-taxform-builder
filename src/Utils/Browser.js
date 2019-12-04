// Gets browser size
export const getBrowserSize = () => {
  if (window.innerWidth < 1100) return "small";
  else return "large";
};
