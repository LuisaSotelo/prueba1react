var descuento = Number
var base = Number
var preciofinal = Number
function CalcularPrecio (base, descuento)
   if (base <= 0 || descuento < 0 || descuento > 100)
   {return " El valor es invalido" };
  
   if (descuento === 0)
   {return "El precio base sin descuento es" + base};
   

   if (descuento > 0 && descuento <= 100 ){
    var preciofinal = base - ( base*descuento/100 ) ;
   return "El precio final con descuento es" + preciofinal
   }
   

   console.log (CalcularPrecio(200,20))
