function setup() {
  createCanvas(600, 600);//crea un área de dibuix de 600 píxels quadrats. 600 píxels d'ample i 600 pixels d'alçada, canvas és área de dibuix. Setup és la confuguració o característiques del nostre codí
   // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
}

function draw() {//draw significa dibuixar
  background(220);//fons de color gris, és de color gris perqué hi ha un número entre 0 i 255 i el 0 és negre i el 255 és blanc
  let vol = mic.getLevel();
  let h = map(vol, 0, 1, 0, 2000);
  print(h);
  strokeWeight(2);
  fill(158+h,210+h,25);//fill és omplir de color el que hi ha a continuació en aquest cas el·lipses. El primer número és el nivell de vermellor(R:red, el segon número és el nivell de verdor(G:green) i el tercer número és el nivell de blavor(B:blue). Podem fer 255x255x255:16.700.000 de colors diferents. He de posar el color que vulgui als ull i a la caraaa canviant els 3 números, buscant a google colors RGB
ellipse(300,300,300,300);//És la cara sencera. El primer número significa la posició X (horizontal) del centre de la el·lipse. El segon número significa la posició Y (vertical) del centre de la el·ipse. El tercer número significa l'amplada de la el·lipse pixels i el quart l'alçada de la el·lipse. Sempre els números són pixels contats des de la cantonada superior equerra, és a dir el punt 0,0 es troba diferent que a matemàtiques (cantonada inferior esquerra)
  fill(205,20,15+h);//color dels ulls
  ellipse(350,250,100,47);//és l'ull dret perquè és 350 de X al centre
  ellipse(250,250,100,47);//és l'ull esquerre perquè és 250 píxels de X al centre
  fill(0)//és el color de la boca i és negre perquè és 0
  arc(300,340,115+h,30+h,0,PI);//boca
  fill(255,255,255);
  ellipse(350,250,15,15);
  ellipse(235,242,8,8);
  fill(0)
  ellipse(350,250,40,40+h);
  ellipse(250,250,40,40+h);
  fill(255,255,255);
  ellipse(250,250,12,12);
  ellipse(350,250,12,12);
  fill(255,255);
  ellipse(365,242,8,8);
  ellipse(235,242,8,8);
  noFill();55,
   arc(350,225,80,30+h,PI,0);//cella esquera
  noFill();//no omplis de color la cella
   arc(250,225,80,30+h,PI,0);//cella dreta
  strokeWeight(4);
  line(370,370,410,310);//els dos primers numeros són X i Y
  line(190,310,230,370);
}
