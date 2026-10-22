function setup() {
  createCanvas(600, 600);//crea un área de dibuix de 600 píxels quadrats. 600 píxels d'ample i 600 pixels d'alçada, canvas és área de dibuix. Setup és la confuguració o característiques del nostre codí
}

function draw() {//draw significa dibuixar
 // background(250);//fons de color gris, és de color gris perqué hi ha un número entre 0 i 255 i el 0 és negre i el 255 és blanc
  let canvigran = sin(frameCount*0.05)*20;//genera números de 20 a -20 sense parar i ordenat
  let canvimitja = sin(frameCount*0.05)*15;//genera números des de 15 a -15 sense parar i ordenats
  let canvipetit = sin(frameCount*0.05)*8;//genera números des de 8 a -8 sense parar i ordenats
  let canvimoltgran = sin(frameCount*0.05)*200;//genera números entre 127 a -127 sense parar i ordenats
  let canvimoltpetit = sin(frameCount*0.05)*4;//genera números entre 4 a -4 sense parar i ordenats
   print("Canvi gran: "+canvigran);
   print("Canvi petit: "+canvipetit);
  strokeWeight(2);
  fill(198+canvimoltgran,250-canvimoltgran,25-canvimoltgran);//fill és omplir de color el que hi ha a continuació en aquest cas el·lipses. El primer número és el nivell de vermellor(R:red, el segon número és el nivell de verdor(G:green) i el tercer número és el nivell de blavor(B:blue). Podem fer 255x255x255:16.700.000 de colors diferents. He de posar el color que vulgui als ull i a la caraaa canviant els 3 números, buscant a google colors RGB
ellipse(300,300,300,300);//És la cara sencera. El primer número significa la posició X (horizontal) del centre de la el·lipse. El segon número significa la posició Y (vertical) del centre de la el·ipse. El tercer número significa l'amplada de la el·lipse pixels i el quart l'alçada de la el·lipse. Sempre els números són pixels contats des de la cantonada superior equerra, és a dir el punt 0,0 es troba diferent que a matemàtiques (cantonada inferior esquerra)
  fill(255,255,255);//color dels ulls
  ellipse(350,250,100,47+canvipetit);//és l'ull dret perquè és 350 de X al centre
  ellipse(250,250,100,47+canvipetit);//és l'ull esquerre perquè és 250 píxels de X al centre
  fill(255,25,25)//és el color de la boca 
  arc(300,340,115,30+canvimoltgran,0,PI);//boca
  fill(255,255,255);
  fill(0)
  ellipse(350,250,40,40+canvipetit);
  ellipse(250,250,40,40+canvipetit);
  fill(255,255,255);
  ellipse(250,250,12,12+canvimoltpetit);
  ellipse(350,250,12,12+canvimoltpetit);
  fill(255,255);
  ellipse(365,242,8,8+canvimoltpetit);
  ellipse(235,242,8,8+canvimoltpetit);
  noFill();55,
   arc(350,225,80,30+canvigran,PI,0);//cella esquera
  noFill();//no omplis de color la cella
   arc(250,225,80,30+canvigran,PI,0);//cella dreta
  strokeWeight(4);
  line(370,370,410,310);//els dos primers numeros són X i Y
  line(190,310,230,370);
}
