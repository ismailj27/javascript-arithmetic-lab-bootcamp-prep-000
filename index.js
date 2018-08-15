function add(a, b) {
  return (a + b)
}

function subtract(a, b) {
  return (a - b)
}

function multiply(a, b) {
  return ( a * b)
}

function divide(a, b) {
  return (a/b)
}

function inc(n) {
  n++
  return (n)
}

function dec(n) {
  n--
  return (n)
}

function makeInt(n) {
<<<<<<< HEAD
  var num = parseInt(n, 10)
  return num
}

function preserveDecimal(n) {
  var num = parseFloat(n)
  return num
=======
  parseInt(n)
  return n
  n = n * 0
  return n
>>>>>>> b0030655d12aa2394f71331919f0a1b1e4cc6fd9
}

