using System;               //3) Посчитать суммы только положительных из трех чисел.

    class Program
    {
        static void Main()
        {
            int suma = 0;
            const int a = 50, b = 12, c = -48;
            
            if (Math.Sign(a) == 1) {
                suma +=a;
            } else {
                Console.WriteLine("Число A не положительное");
            } 
            if (Math.Sign(b) == 1) {
                suma +=b;
            } else {
                Console.WriteLine("Число B не положительное");
            }
            if (Math.Sign(c) == 1) {
                suma +=c;
            } else {
                Console.WriteLine("Число C не положительное");
            } 
                
             Console.WriteLine(suma);
        }
    }