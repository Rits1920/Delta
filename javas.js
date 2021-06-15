var mov=0 ,s=0;
function shuffling() {
for (var rows=1;rows<=5;rows++) { 
   for (var columns=1;columns<=5;columns++) {  
  
    var rows2=Math.floor(Math.random()*5 + 1); 
    var columns2=Math.floor(Math.random()*5 + 1); 
       swapTiles("mat"+rows+columns,"mat"+rows2+columns2); 
  } 
} 
}

var y=0,r=0,w=0,br=0,o=0,b=0;
function squareshuffling() 
{ y=0,r=0,w=0,br=0,o=0,b=0;
  for (var rows=1;rows<=3;rows++) { 
  for (var col=1;col<=3;col++) { 
      document.getElementById("a"+rows+col) .style.backgroundColor = getcolor();
     }
   }
}  

function getcolor(){
  var color;
  var fail=1;
  while(fail==1)
    {
   var c= Math.floor(Math.random()*6);
   switch(c)
    {case 0 : if(y<4){color="yellow";y++;fail=0;}
               break;
    case 1 : if(o<4){color="orange";o++;fail=0;}
              break;
     case 2 : if(br<4){color="brown";br++;fail=0;}
               break;
     case 3 : if(w<4){color="white";w++;fail=0;}
               break;
     case 4 : if(b<4){color="blue";b++;fail=0;}
               break;
     case 5 : if(r<4){color="red";r++;fail=0;}
               break;    
    }
    }  
return(color);
}


function timerreset()
{ clearInterval(timeVar);
  totalSeconds = 0;
  timeVar=setInterval(setTime, 1000);
} 

function loadagain()
{sqshuffling();
 shuffling();
 document.getElementById("move") .innerHTML= 0; 
 document.getElementById("onwinning").style.display = "none";
 mov=0; totalSeconds = 0;
 clearInterval(timeVar);
 stopTimer(); 
 }

function stopTimer()
{ document.getElementById("seconds").innerHTML = "00";
  document.getElementById("minutes").innerHTML = "00";
   var m= document.getElementById("minutes").innerHTML ;
   var s= document.getElementById("seconds").innerHTML ; 
   document.getElementById("timer").innerHTML = m + ":" + s;    
} 

function newgame()
{     timerreset(); 
    loadagain();
  
}
 

function swapTiles(matl1,matl2) 
{  
  var temp = document.getElementById(matl1).style.backgroundColor;
  document.getElementById(matl1).style.backgroundColor =document.getElementById(matl2).style.backgroundColor;
  document.getElementById(matl2).style.backgroundColor = temp;
  hasbeensolved();
}

function clicking(rows,columns) {
   
     
       if (columns>1) {
         if ( document.getElementById("mat"+rows+(columns-1)).style.backgroundColor=="grey") {
           swapTiles("mat"+rows+columns,"mat"+rows+(columns-1));
            mov++;
if((mov==1)&&(document.getElementById("seconds").innerHTML =="00")&& 
   (document.getElementById("minutes").innerHTML =="00"))
  {  timerreset();}
  document.getElementById("move") .innerHTML= mov;           
           return;
         }
       }
           
       if (columns<5) {
        if ( document.getElementById("mat"+rows+(columns+1)).style.backgroundColor=="grey") 
        {  swapTiles("mat"+rows+columns,"mat"+rows+(columns+1));
          mov++;
          if((mov==1)&&(document.getElementById("seconds").innerHTML =="00")&& 
  (document.getElementById("minutes").innerHTML =="00"))
 {  timerreset();}
 document.getElementById("move") .innerHTML= mov;     
          return;
        }
      }
         
      
       
       if (rows<5) {
         if ( document.getElementById("mat"+(rows+1)+columns).style.backgroundColor=="grey") {
            
           swapTiles("mat"+rows+columns,"mat"+(rows+1)+columns);
            mov++;
  if((mov==1)&&(document.getElementById("seconds").innerHTML =="00")&& 
   (document.getElementById("minutes").innerHTML =="00"))
  {  timerreset();}         
 document.getElementById("move") .innerHTML= mov;          
           return;
         }
       } 
       if (rows>1) {
        if ( document.getElementById("mat"+(rows-1)+columns).style.backgroundColor=="grey") {
         
          swapTiles("mat"+rows+columns,"mat"+(rows-1)+columns);
           mov++;
          if((mov==1)&&(document.getElementById("seconds").innerHTML =="00")&& 
                (document.getElementById("minutes").innerHTML =="00"))
            {  timerreset();}
           document.getElementById("move") .innerHTML= mov;          
          return;
        }
      }
  }

function hasbeensolved()
{
  for (var rows=1;rows<=3;rows++)
  { 
  for (var col=1;col<=3;col++)
  { 
   if( document.getElementById("a"+rows+col).style.backgroundColor != 
      document.getElementById("mat"+(rows+1)+(col+1)) .style.backgroundColor)
   {return;}
 }
 }
 clearInterval(timeVar);
 var sec = document.getElementById("seconds").innerHTML;
 var min= document.getElementById("minutes").innerHTML;  
 document.getElementById("onwinning").style.display = "block";

 document.getElementById("message2").innerText="TIME : "+min+":"+sec;  
 var s=score(min,sec,mov); 
 document.getElementById("message").innerText=" SCORE : "+s; 
 } 

function score(min,sec,mov)
{ min = min*60;
  var totalsec= parseInt(min) +parseInt(sec);
  var s1=(totalsec>3600) ? 100 : (100+((3600-totalsec)*10));
  var s2 =(mov>200) ? 100: (100+((200-mov)*10));
  return (s1+s2) ;
}

var totalSeconds = 0;
var timeVar= setInterval(setTime, 1000);

function setTime()
{  ++totalSeconds;
   document.getElementById("seconds").innerHTML = pad(totalSeconds%60);
   document.getElementById("minutes").innerHTML = pad(parseInt(totalSeconds/60));
   var m= document.getElementById("minutes").innerHTML ;
   var s= document.getElementById("seconds").innerHTML ; 
   document.getElementById("timer").innerHTML = m + ":" + s;    
}

function pad(val)
{  var valString = val + "";
   if(valString.length < 2)
     { return "0" + valString; }
   else
     { return valString; }
}
