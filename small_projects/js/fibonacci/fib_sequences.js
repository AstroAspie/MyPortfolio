const fibonacci = (a, b, max) => {
  let f_sequence = array(a, b);
  for(var i = 2; i < max; i++) {
    f_sequence[i] = f_sequence[i-1] + f_sequence[i-2];
  }

  return f_sequence;
};