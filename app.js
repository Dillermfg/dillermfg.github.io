document.getElementById('calculator-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const bendAngle = parseFloat(document.getElementById('bend-angle').value);
  const bendRadius = parseFloat(document.getElementById('bend-radius').value);
  const tubeDiameter = parseFloat(document.getElementById('tube-diameter').value);
  const numCuts = parseInt(document.getElementById('num-cuts').value);

  // Calculations
  const anglePerCut = bendAngle / (2 * numCuts);
  const arcLength = (Math.PI * bendRadius * (bendAngle / 180));
  const segmentLength = arcLength / numCuts;
  const totalLength = segmentLength * numCuts;

  // Display results
  document.getElementById('angle-per-cut').textContent = anglePerCut.toFixed(2);
  document.getElementById('segment-length').textContent = segmentLength.toFixed(2);
  document.getElementById('total-length').textContent = totalLength.toFixed(2);

  document.getElementById('results').classList.remove('hidden');
});
