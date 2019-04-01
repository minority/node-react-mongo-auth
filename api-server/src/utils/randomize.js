import randomize from "randomatic";

const generateString = length => {
  return randomize("Aa0", length);
};

export default {
  generateString
};
