using System;           // 2) Определить какой четверти принадлежит точка с координатами (x, y)
    class Program       
    {
        static void Main()
        {
            const int x = 0, y = 30;
            
            if (x>0  && y>0) {
                Console.WriteLine("Точка пренадлежит I четверти");
            } else if (x<0 && y>0) {
                Console.WriteLine("Точка пренадлежит II четверти");
            } else if (x<0 && y<0) {
                Console.WriteLine("Точка пренадлежит III четверти");
            } else if (x>0 && y<0) {
                Console.WriteLine("Точка пренадлежит IV четверти");
            } else if (x <= 0 && y > 0) {
                Console.WriteLine("х в точке 0");
            } else if (x > 0 && y == 0) {
                Console.WriteLine("у в точке 0");
            } else if (x == 0 && y <= 0) {
                Console.WriteLine("х у в точке 0");
            } 
             
            Console.ReadLine();
        }
    }
