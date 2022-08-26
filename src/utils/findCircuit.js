import SCHEDULE from "../data/schedule";

const findCircuit = (circuitId) => {
  return SCHEDULE.find((elem) => elem.circuitId === circuitId).bgImage;
};

export default findCircuit;
