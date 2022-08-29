using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GameHotterColder
{
    internal class Program
    {
        static void Main(string[] args)
        {
            const int Parar = 0;
            int NumeroIngreasado, contador = 0;

            Random generar = new Random();

            int NumeroRandom = generar.Next(1, 100);
            
            Console.WriteLine("El numero ha sido escogido");

            do
            {
                Console.Write("Inserta un numero: ");
                NumeroIngreasado = int.Parse(Console.ReadLine());

                contador++;

                if (NumeroRandom == NumeroIngreasado)
                {
                    Console.WriteLine("¡Lo tienes!.");
                    Console.WriteLine("Vueltas: " + contador);

                    contador = 0;

                    
                }

                if (NumeroIngreasado > NumeroRandom)
                {
                    Console.WriteLine("Frio");
                }

                if (NumeroIngreasado < NumeroRandom)
                {
                    Console.WriteLine("Caliente");
                }
            }
            while (NumeroIngreasado != Parar);




        }
    }
}
