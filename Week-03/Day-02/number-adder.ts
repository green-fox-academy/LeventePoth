function factorial(n: number): number {
    if (n <= 1) { //base case
      return 1;
    }
    else {
      return n * factorial(n - 1);
    }
  }
  
  console.log(factorial(6));