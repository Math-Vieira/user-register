export const delayAction = (action: Function, delay = 300) => {
  setTimeout(() => {
    action();
  }, delay);
};
