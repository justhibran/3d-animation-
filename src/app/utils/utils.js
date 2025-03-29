export function dist(Ax, Ay, Bx, By, Az = null, Bz = null) {
    if (Az == null) {
  
      return Math.sqrt((Bx - Ax) ** 2 + (By - Ay) ** 2);
    } else {
      return Math.sqrt((Bx - Ax) ** 2 + (By - Ay) ** 2 + (Bz - Az) ** 2);
    }
  }
  export function map(value, start1, stop1, start2, stop2) {
    return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
  }