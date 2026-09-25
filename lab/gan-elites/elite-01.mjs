// Cortex chord — the gate law — GAN-HARDENED elite #1
// bred by the quilt-loom Divergence Foundry (live leg)
// family: sorted_index   hash: 9c294496f8   voice: mech   gen: 1   novelty: 1
// contract: Given {probs} (2-5 calibrated probabilities on a 0.05 grid) and {doubt} (0-1, 0.05 grid): let pmax = max(probs). If pmax >= 0.55 AND doubt < 0.5 -> mode "accept". Else if pmax >= 0.35 -> mode "flag". Else -> mode "escalate". Return {mode, pmax} (pmax as a number).
// provenance: outputs/elites/gate_law/ + outputs/fleet_live_results.json
export const solve = function solve(input) {
  const sorted = [...input.probs].sort((a, b) => b - a);
  const pmax = sorted[0];
  let idx = (pmax >= 0.35) + (pmax >= 0.55);
  if (idx === 2 && input.doubt >= 0.5) idx = 1;
  const mode = ['escalate', 'flag', 'accept'][idx];
  return { mode, pmax };
};
export default solve;
