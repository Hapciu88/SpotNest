// Get the radius slider
var radiusSlider = document.getElementById("radius");
// Get the output text
var radiusOutput = document.getElementById("radiusValue");

// Update the current slider value (on page load)
radiusOutput.innerHTML = radiusSlider.value;

// Update the current slider value (on input change)
radiusSlider.oninput = function() {
  radiusOutput.innerHTML = this.value;
};
