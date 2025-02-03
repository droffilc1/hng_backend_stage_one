export function isPrime(n: number): boolean {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

// A perfect number equals the sum of its proper divisors (excluding itself)

export function isPerfect(n: number): boolean {
  if (n < 2) return false;
  let sum = 1; // 1 is always a divisor
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      sum += i;
      if (i !== n / i) {
        sum += n / i;
      }
    }
  }
  return sum === n;
}

// An Armstrong number is one where the sum of its own digits each raised to
//  the power of the number of digits equals the number itself.
export function isArmstrong(n: number): boolean {
  const digits = n.toString().split("").map(Number);
  const power = digits.length;
  const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0);
  return sum === n;
}

export function digitSum(n: number): number {
  const isNegative = n < 0;
  const sum = Math.abs(n)
    .toString()
    .split("")
    .reduce((sum, digit) => sum + parseInt(digit, 10), 0);

  return isNegative ? -sum : sum;
}

export function getProperties(n: number): string[] {
  const armstrong = isArmstrong(n);
  const odd = n % 2 !== 0;
  if (armstrong) {
    return odd ? ["armstrong", "odd"] : ["armstrong", "even"];
  } else {
    return odd ? ["odd"] : ["even"];
  }
}
