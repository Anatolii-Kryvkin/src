using System;       //1) Если а - четное, посчитать а*б, иначе а + б.

    class Program
    {
        static void Main()
        {

          const int a = 3, b = 11;
            
              if ( a % 2 == 0 ) {
                Console.WriteLine(a * b);
              }
                else
              {
                Console.WriteLine(a + b);
              }
        }
    }
