// Cortex chord — the gate law — GAN-HARDENED elite #3
// bred by the quilt-loom Divergence Foundry (live leg)
// family: reduce_carrier   hash: f177d74468   voice: mech   gen: 4   novelty: 0.86043
// contract: Given {probs} (2-5 calibrated probabilities on a 0.05 grid) and {doubt} (0-1, 0.05 grid): let pmax = max(probs). If pmax >= 0.55 AND doubt < 0.5 -> mode "accept". Else if pmax >= 0.35 -> mode "flag". Else -> mode "escalate". Return {mode, pmax} (pmax as a number).
// provenance: outputs/elites/gate_law/ + outputs/fleet_live_results.json
export const solve = function solve(input) {
  const st = input.probs.reduce(
    (acc, p) => {
      const m = p > acc.pmax ? p : acc.pmax;
      return { pmax: m, mode: (m >= 0.55 && input.doubt < 0.5) ? 'accept' : (m >= 0.35 ? 'flag' : 'escalate') };
    },
    { pmax: input.probs[0], mode: 'escalate' },
  );
  return st;
};
export default solve;
