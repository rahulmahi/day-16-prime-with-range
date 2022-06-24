for(var i = 2;i <= 15;i++)
 {
    var d = 0;

    for(j = 2;j <= i / 2;j++)
     {
      if(i % j == 0){
       console.log("Not prime Number" ,i);
          d = 1;
          j=i+1; 
         
     }    
   }
  if(d == 0)
  {
     console.log("Prime Number" ,i);
   }
}
  
