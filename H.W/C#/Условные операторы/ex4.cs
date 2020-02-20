using System;         //4) Посчитать выражение макс(а*б*с, a+б+с)+3.

    class Program
    {
      static void Main()
        {
          const int a = 2, b = 5, c = 4;

          int sum = (a + b + c);
          int mult = (a * b * c);
          int result = sum;
          int result1 = mult;
          
          if (sum > mult) {
            Console.WriteLine(result + 3);
          }
          else if (mult > sum) {
            Console.WriteLine(result1 + 3);
          }
        }
    }
