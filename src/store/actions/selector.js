export const SELECT = "SELECT"

export const select = (pressed) => {
  return {
    type: SELECT,
    payload: pressed
  };
};