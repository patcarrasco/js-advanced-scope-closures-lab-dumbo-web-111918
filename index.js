function produceDrivingRange(range) {
  return function (x1, x2) {
    start = parseInt(x1);
    end = parseInt(x2);
    let dist = Math.abs(end - start);
    let diff = Math.abs(dist - range)
    if (dist > range) {
      return `${diff} blocks out of range`
    } else {
      return `within range by ${diff}`
    }
  }
}

function produceTipCalculator(prop) {
  return function (fare) {
    return (fare*prop)
  }
}

function createDriver() {
  let driverId = 0
  return class {
    constructor(name) {
      this.name = name
      this.id = ++driverId
    }
  }
}
