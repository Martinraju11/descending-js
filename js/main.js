var a=parseFloat(prompt("Enter A value"));
var b=parseFloat(prompt("Enter B value"));
var c=parseFloat(prompt("Enter C value"));
if((a>b)&&(a>c))
    {
        if(b>c)
            {
                document.write("a,b,c");
            }
        else    
            {
                document.write("a,c,b");
            }
    }

else if((b>a)&&(b>c))
    {
        if(a>c)
            {
                document.write("b,a,c");
            }
        else    
            {
                document.write("b,c,a");
            }
    }

 else if((c>a)&&(c>b))
    {
        if(a>b)
            {
                document.write("c,a,b");
            }
        else    
            {
                document.write("c,b,a");
            }
    }
