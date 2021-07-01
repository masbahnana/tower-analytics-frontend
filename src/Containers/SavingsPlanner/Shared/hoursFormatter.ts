const formatHours = (n: number): string =>
  `${+(n.toFixed(0)).toLocaleString()} hours`; /* 2,500 hours */

export default formatHours;
