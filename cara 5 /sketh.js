function setup() {
  createCanvas(600, 600);//crea un área de dibuix de 600 píxels quadrats. 600 píxels d'ample i 600 pixels d'alçada, canvas és área de dibuix. Setup és la confuguració o característiques del nostre codí
}
//farem canvis aleatoris amb random i canvis suaus amb noise
function draw() {//draw significa dibuixar
  let canvigran=random(0,255);
  let canvisuau=noise(0.001*frameCount)*25;
   let canvisuau2=noise(0.001*frameCount+10000)*127;
  let tremolor=random(50)
  background(canvigran);//fons de color gris, és de color gris perqué hi ha un número entre 0 i 255 i el 0 és negre i el 255 és blanc
  print(canvisuau);
  print(canvigran)
  strokeWeight(canvisuau);
  fill(198+canvigran,250-canvigran,25-canvisuau);//fill és omplir de color el que hi ha a continuació en aquest cas el·lipses. El primer número és el nivell de vermellor(R:red, el segon número és el nivell de verdor(G:green) i el tercer número és el nivell de blavor(B:blue). Podem fer 255x255x255:16.700.000 de colors diferents. He de posar el color que vulgui als ull i a la caraaa canviant els 3 números, buscant a google colors RGB
ellipse(300+tremolor,300,300,300);//És la cara sencera. El primer número significa la posició X (horizontal) del centre de la el·lipse. El segon número significa la posició Y (vertical) del centre de la el·ipse. El tercer número significa l'amplada de la el·lipse pixels i el quart l'alçada de la el·lipse. Sempre els números són pixels contats des de la cantonada superior equerra, és a dir el punt 0,0 es troba diferent que a matemàtiques (cantonada inferior esquerra)
  fill(75-canvigran,15+tremolor,55+canvigran);//color dels ulls
  ellipse(350+tremolor,250,100,47);//és l'ull dret perquè és 350 de X al centre
  ellipse(250+tremolor,250,100,47);//és l'ull esquerre perquè és 250 píxels de X al centre
  fill(0)//és el color de la boca i és negre perquè és 0
  arc(300+tremolor,340,115,30,0,PI);//boca
  fill(255,255,255);
  ellipse(350+tremolor,250,15,15);
  ellipse(235+tremolor,242,8,8);
  fill(0)
  ellipse(350+tremolor,250,40,40);
  ellipse(250+tremolor,250,40,40);
  fill(255,255,255);
  ellipse(250+tremolor,250,12,12);
  ellipse(350+tremolor,250,12,12);
  fill(255,255);
  ellipse(365+tremolor,242,8,8);
  ellipse(235+tremolor,242,8,8);
  noFill();55,
   arc(350+tremolor,225,80,30,PI,0);//cella esquera
  noFill();//no omplis de color la cella
   arc(250+tremolor,225,80,30,PI,0);//cella dreta
  strokeWeight(4);
  line(370+tremolor,370,410+tremolor,310);//els dos primers numeros són X i Y
  line(190+tremolor,310,230+tremolor,370);
}
