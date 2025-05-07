// This file sets up the animated particles background for the header section

// Initialize particles.js on the element with id "particles-js"
particlesJS("particles-js", {
  particles: {
    // Number of particles on the screen
    number: { value: 60 },
    // Color of the particles
    color: { value: "#ffffff" },
    // Shape of the particles (circles)
    shape: { type: "circle" },
    // Opacity of each particle
    opacity: { value: 0.3 },
    // Size of each particle
    size: { value: 3 },
    // Settings for the lines that connect particles
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.2,
      width: 1,
    },
    // Particle movement settings
    move: { enable: true, speed: 2 },
  },
  interactivity: {
    // Detect mouse events on the canvas
    detect_on: "canvas",
    events: {
      // Repulse particles when mouse hovers
      onhover: { enable: true, mode: "repulse" },
      // Add more particles when mouse clicks
      onclick: { enable: true, mode: "push" },
    },
    modes: {
      // How far particles move away on hover
      repulse: { distance: 100 },
      // How many particles to add on click
      push: { particles_nb: 4 },
    },
  },
  // Enable retina display support for sharper particles
  retina_detect: true,
});
