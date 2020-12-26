function calculateWeight(earthWeight = 0, planet ='') {
  switch (planet.toLowerCase()) {
    case 'mercury':
      return earthWeight * 0.378;
    case 'venus':
      return earthWeight * 0.907;
    case 'mars':
      return earthWeight * 0.377;
    case 'jupiter':
      return earthWeight * 2.36;
    case 'saturn':
      return earthWeight * 0.916;
    default: 
      return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.';
  }
}

console.log(calculateWeight(90, 'Mercury'));