using System;       // 5) Написать программу определения оценки студента по его рейтингу.
          
class Program
{
    static void Main()
    {
        const int res = 55;

          if ( 0 <= res && res <= 19 ) {
            Console.WriteLine("Оценка студента F");
        }
          else if ( 20 <= res && res <= 39 ) {
            Console.WriteLine("Оценка студента E");
        }
          else if ( 40 <= res && res <= 59 ) {
            Console.WriteLine("Оценка студента D");
        }
          else if ( 60 <= res && res <= 74 ) {
            Console.WriteLine("Оценка студента C");
        }
          else if ( 75 <= res && res <= 89 ) {
            Console.WriteLine("Оценка студента B");
        }
          else if ( 90 <= res && res <= 100 ) {
            Console.WriteLine("Оценка студента A");
        }
    }
}