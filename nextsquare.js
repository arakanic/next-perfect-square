// This function finds the next integral perfect square after a positive perfect square is passed as a parameter.

function findNextSquare(sq) {
    if (Math.sqrt(sq) % 1 === 0) {
      return (Math.sqrt(sq) + 1) ** 2
    }
    return -1;
  }