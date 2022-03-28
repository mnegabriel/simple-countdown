const timeMap = new Map([
  ["miliseconds", { divider: 1000 }],
  ["seconds", { divider: 60 }],
  ["minutes", { divider: 60 }],
  ["hours", { divider: 24 }],
  ["days", { divider: 30 }]
]);

/**
 * @typedef {object} CounterObject
 * @property {number} miliseconds
 * @property {number} seconds
 * @property {number} minutes
 * @property {number} hours
 * @property {number} days
 * 
 * 
 * @param {number} timeInMiliseconds 
 * @returns {CounterObject}
 */

export function getTimeDifference(timeInMiliseconds) {

  const brokenDown = {};

  [...timeMap.entries()].forEach(([key, val]) => {

    if (key === "days") {
      brokenDown[key] = timeInMiliseconds;
    } else {
      const rest = timeInMiliseconds % val.divider;

      timeInMiliseconds = (timeInMiliseconds - rest) / val.divider;
      brokenDown[key] = rest;
    }
  })

  return brokenDown;
}
