function factorial(n: number): number 
{
      return n * factorial(n - 1);
    }

  
  console.log(factorial(8));