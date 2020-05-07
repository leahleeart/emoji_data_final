
let img;
let button;

//set up x, y position arrays for each emoji
let heart = [400, 100];
let thumb = [530,110];
let maskface = [620,190];
let hearteyes = [665,285];
let cryface = [670, 395];
let virus = [645,490];
let lightbulb = [590, 550];
let claphand = [500,600];
let stars = [400,620];
let flowers = [300,600];
let heartFace = [200, 530];
let fire = [150,440];
let star = [140,360];
let firework = [150,290];
let eyes = [170,230];
let pray = [200,180];
let womanintech = [240,143];
let okHand = [275, 120];
let angryface = [315,100];



function setup() {
  createCanvas(windowWidth, windowHeight);
  r = 255;
  g = 255;
  b = 255;
  imageMode(CENTER);
  textAlign(CENTER, CENTER);
  background(255);
  button = createButton('dark mode');
  button.position(40, 40);
  button.mousePressed(changeBG);
}

function draw(){
background (r,g,b);

//gray lines//gray lines//gray lines//gray lines//gray lines//gray lines
//from heart
stroke(225, 224, 225);
strokeWeight(2);
line(heart[0], heart[1], claphand[0], claphand[1]);
line(heart[0], heart[1], heartFace[0], heartFace[1]);
line(heart[0], heart[1], okHand[0], okHand[1]);
line(heart[0], heart[1], fire[0], fire[1]);
line(heart[0], heart[1], stars[0], stars[1]);

//from okHand
stroke(225, 224, 225);
strokeWeight(2);
line(okHand[0], okHand[1], thumb[0], thumb[1]);

//from heartFace
stroke(225, 224, 225);
strokeWeight(2);
line(heartFace[0], heartFace[1], womanintech[0], womanintech[1]);
line(heartFace[0], heartFace[1], claphand[0], claphand[1]);

//from hearteyes
stroke(225, 224, 225);
strokeWeight(2);
line(hearteyes[0], hearteyes[1], claphand[0], claphand[1]);
line(hearteyes[0], hearteyes[1], firework[0], firework[1]);
line(hearteyes[0], hearteyes[1], flowers[0], flowers[1]);
line(hearteyes[0], hearteyes[1], thumb[0], thumb[1]);
line(hearteyes[0], hearteyes[1], fire[0], fire[1]);


//from claphand
stroke(225, 224, 225);
strokeWeight(2);
line(claphand[0], claphand[1], lightbulb[0], lightbulb[1]);
line(claphand[0], claphand[1], thumb[0], thumb[1]);

//from stars
stroke(225, 224, 225);
strokeWeight(2);
line(stars[0], stars[1], lightbulb[0], lightbulb[1]);
line(stars[0], stars[1], thumb[0], thumb[1]);
line(stars [0],stars[1], heartFace [0], heartFace [1]);

//from pray
stroke(225, 224, 225);
strokeWeight(2);
line(pray[0], pray[1], virus[0], virus[1]);
line(pray[0], pray[1], maskface[0], maskface[1]);
line(pray[0], pray[1], heart[0], heart[1]);

//from womanintech
stroke(225, 224, 225);
strokeWeight(2);
line(womanintech[0], womanintech[1], fire[0], fire[1]);

//from fire
stroke(225, 224, 225);
strokeWeight(2);
line(fire[0], fire[1], thumb[0], thumb[1]);
line(fire[0], fire[1], stars[0], stars[1]);

//from firework
stroke(225, 224, 225);
strokeWeight(2);
line(firework[0], firework[1], flowers[0], flowers[1]);
line(firework[0], firework[1], thumb[0], thumb[1]);

//from angryface
stroke(225, 224, 225);
strokeWeight(2);
line(angryface[0], angryface[1], virus [0], virus[1]);
line(angryface[0], angryface[1], maskface [0], maskface[1]);

//from eyes
stroke(225, 224, 225);
strokeWeight(2);
line(eyes[0], eyes[1], virus [0], virus[1]);
line(eyes[0], eyes[1], maskface [0], maskface[1]);
line(eyes[0], eyes[1], pray [0], pray[1]);

//from lightbulb
stroke(225, 224, 225);
strokeWeight(2);
line(lightbulb[0], lightbulb[1], star [0], star[1]);
line(lightbulb[0], lightbulb[1], thumb [0], thumb[1]);
line(lightbulb[0], lightbulb[1], fire [0], fire[1]);

//from thumb
stroke(225, 224, 225);
strokeWeight(2);
line(thumb[0], thumb[1], star [0], star[1]);
line(thumb[0], thumb[1], flowers [0], flowers[1]);
line(thumb[0], thumb[1], womanintech [0], womanintech[1]);


//from virus
stroke(225, 224, 225);
strokeWeight(2);
line(virus[0], virus[1], maskface [0], maskface[1]);
line(virus[0], virus[1], cryface [0], cryface[1]);


//from maskface
stroke(225, 224, 225);
strokeWeight(2);
line(maskface[0], maskface[1], cryface [0], cryface[1]);


//from star
stroke(225, 224, 225);
strokeWeight(2);
line(star[0], star[1], flowers [0], flowers[1]);

//from cryface
stroke(225, 224, 225);
strokeWeight(2);
line(cryface[0], cryface[1], hearteyes [0], hearteyes[1]);


//purple lines//purple lines//purple lines//purple lines//purple lines//
//from heart
if(mouseIsPressed && dist(mouseX, mouseY, heart[0], heart[1]) < 50){
print("Heart!");
stroke(225, 125, 236);
strokeWeight(2);
line(heart[0], heart[1], claphand[0], claphand[1]);
line(heart[0], heart[1], heartFace[0], heartFace[1]);
line(heart[0], heart[1], okHand[0], okHand[1]);
line(heart[0], heart[1], fire[0], fire[1]);
line(heart[0], heart[1], stars[0], stars[1]);
}

//from okHand
if(mouseIsPressed && dist(mouseX, mouseY, okHand[0], okHand[1]) < 10){
print("okHand!");
stroke(225, 125, 236);
strokeWeight(2);
line(okHand[0], okHand[1], heart[0], heart[1]);
line(okHand[0], okHand[1], thumb[0], thumb[1]);
}

//from heartface
if(mouseIsPressed && dist(mouseX, mouseY, heartFace[0], heartFace[1]) < 50){
print("heartFace!");
stroke(225, 125, 236);
strokeWeight(2);
line(heartFace[0], heartFace[1], heart[0], heart[1]);
line(heartFace[0], heartFace[1], womanintech[0], womanintech[1]);
line(heartFace[0], heartFace[1], claphand[0], claphand[1]);
line(heartFace[0], heartFace[1], stars[0], stars[1]);
}

//from hearteyes
if(mouseIsPressed && dist(mouseX, mouseY, hearteyes[0], hearteyes[1]) < 50){
print("hearteyes!");
stroke(225, 125, 236);
strokeWeight(2);
line(hearteyes[0], hearteyes[1], claphand[0], claphand[1]);
line(hearteyes[0], hearteyes[1], firework[0], firework[1]);
line(hearteyes[0], hearteyes[1], flowers[0], flowers[1]);
line(hearteyes[0], hearteyes[1], thumb[0], thumb[1]);
line(hearteyes[0], hearteyes[1], fire[0], fire[1]);
line(hearteyes[0], hearteyes[1], cryface[0], cryface[1]);
}

//from claphand
if(mouseIsPressed && dist(mouseX, mouseY, claphand[0], claphand[1]) < 50){
print("claphand!");
stroke(225, 125, 236);
strokeWeight(2);
line(claphand[0], claphand[1], lightbulb[0], lightbulb[1]);
line(claphand[0], claphand[1], thumb[0], thumb[1]);
line(claphand[0], claphand[1], heartFace[0], heartFace[1]);
line(claphand[0], claphand[1], hearteyes[0], hearteyes[1]);
line(claphand[0], claphand[1], heart[0], heart[1]);
}

//from womanintech
if(mouseIsPressed && dist(mouseX, mouseY, womanintech[0], womanintech[1]) < 10){
print("womanintech!");
stroke(225, 125, 236);
strokeWeight(2);
line(womanintech[0], womanintech[1], heartFace[0], heartFace[1]);
line(womanintech[0], womanintech[1], fire[0], fire[1]);
line(womanintech[0], womanintech[1], thumb[0], thumb[1]);

}

//from pray
if(mouseIsPressed && dist(mouseX, mouseY, pray[0], pray[1]) < 15){
print("pray!");
stroke(225, 125, 236);
strokeWeight(2);
line(pray[0], pray[1], virus[0], virus[1]);
line(pray[0], pray[1], maskface[0], maskface[1]);
line(pray[0], pray[1], heart[0], heart[1]);
}

//from stars
if(mouseIsPressed && dist(mouseX, mouseY, stars[0], stars[1]) < 50){
print("stars!");
stroke(225, 125, 236);
strokeWeight(2);
line(stars[0], stars[1], lightbulb[0], lightbulb[1]);
line(stars[0], stars[1], heartFace[0], heartFace[1]);
line(stars[0], stars[1], heart[0], heart[1]);
line(stars[0], stars[1], thumb[0], thumb[1]);
line(stars[0], stars[1], fire[0], fire[1]);
}

//from stars
if(mouseIsPressed && dist(mouseX, mouseY, fire[0], fire[1]) < 50){
print("fire!");
stroke(225, 125, 236);
strokeWeight(2);
line(fire[0], fire[1], stars[0], stars[1]);
line(fire[0], fire[1], hearteyes[0], hearteyes[1]);
line(fire[0], fire[1], heart[0], heart[1]);
line(fire[0], fire[1], thumb[0], thumb[1]);
line(fire[0], fire[1], fire[0], fire[1]);
line(fire[0], fire[1], womanintech[0], womanintech[1]);
}

//from firework
if(mouseIsPressed && dist(mouseX, mouseY, firework[0], firework[1]) < 50){
print("firework!");
stroke(225, 125, 236);
strokeWeight(2);
line(firework[0], firework[1], thumb[0], thumb[1]);
line(firework[0], firework[1], hearteyes[0], hearteyes[1]);
line(firework[0], firework[1], flowers[0], flowers[1]);
}

//from firework
if(mouseIsPressed && dist(mouseX, mouseY, lightbulb[0], lightbulb[1]) < 50){
print("lightbulb!");
stroke(225, 125, 236);
strokeWeight(2);
line(lightbulb[0], lightbulb[1], star[0], star[1]);
line(lightbulb[0], lightbulb[1], thumb[0], thumb[1]);
line(lightbulb[0], lightbulb[1], fire[0], fire[1]);
line(lightbulb[0], lightbulb[1], stars[0], stars[1]);
line(lightbulb[0], lightbulb[1], claphand[0], claphand[1]);
}

//from angryface
if(mouseIsPressed && dist(mouseX, mouseY, angryface[0], angryface[1]) < 10){
print("angryface!");
stroke(225, 125, 236);
strokeWeight(2);
line(angryface[0], angryface[1], virus [0], virus[1]);
line(angryface[0], angryface[1], maskface [0], maskface[1]);
}

//from eyes
if(mouseIsPressed && dist(mouseX, mouseY, eyes[0], eyes[1]) < 30){
print("eyes!");
stroke(225, 125, 236);
strokeWeight(2);
line(eyes[0], eyes[1], virus [0], virus[1]);
line(eyes[0], eyes[1], maskface [0], maskface[1]);
line(eyes[0], eyes[1], pray [0], pray[1]);
}

//from thumb
if(mouseIsPressed && dist(mouseX, mouseY, thumb[0], thumb[1]) < 50){
print("thumb!");
stroke(225, 125, 236);
strokeWeight(2);
line(thumb[0], thumb[1], fire [0], fire[1]);
line(thumb[0], thumb[1], flowers [0], flowers[1]);
line(thumb[0], thumb[1], firework [0], firework[1]);
line(thumb[0], thumb[1], claphand [0], claphand[1]);
line(thumb[0], thumb[1], firework [0], firework[1]);
line(thumb[0], thumb[1], lightbulb [0], lightbulb[1]);
line(thumb[0], thumb[1], star [0], star[1]);
line(thumb[0], thumb[1], hearteyes [0], hearteyes[1]);
line(thumb[0], thumb[1], womanintech [0], womanintech[1]);
}

//from flowers
if(mouseIsPressed && dist(mouseX, mouseY, flowers[0], flowers[1]) < 50){
print("flowers!");
stroke(225, 125, 236);
strokeWeight(2);
line(flowers[0], flowers[1], firework [0], firework[1]);
line(flowers[0], flowers[1], thumb [0], thumb[1]);
line(flowers[0], flowers[1], hearteyes [0], hearteyes[1]);
line(flowers[0], flowers[1], star [0], star[1]);
}

if(mouseIsPressed && dist(mouseX, mouseY, virus[0], virus[1]) < 50){
print("virus!");
stroke(225, 125, 236);
strokeWeight(2);
line(virus[0], virus[1], maskface [0], maskface[1]);
line(virus[0], virus[1], cryface [0], cryface[1]);
line(virus[0], virus[1], eyes [0], eyes[1]);
line(virus[0], virus[1], angryface [0], angryface[1]);
}

if(mouseIsPressed && dist(mouseX, mouseY, maskface[0], maskface[1]) < 50){
print("maskface!");
stroke(225, 125, 236);
strokeWeight(2);
line(maskface[0], maskface[1], virus [0], virus[1]);
line(maskface[0], maskface[1], cryface [0], cryface[1]);
line(maskface[0], maskface[1], eyes [0], eyes[1]);
line(maskface[0], maskface[1], angryface [0], angryface[1]);
line(maskface[0], maskface[1], pray [0], pray[1]);
}

if(mouseIsPressed && dist(mouseX, mouseY, star[0], star[1]) < 50){
print("star!");
stroke(225, 125, 236);
strokeWeight(2);
line(star[0], star[1], lightbulb [0], lightbulb[1]);
line(star[0], star[1], flowers [0], flowers[1]);
line(star[0], star[1], thumb [0], thumb[1]);
}

if(mouseIsPressed && dist(mouseX, mouseY, cryface[0], cryface[1]) < 50){
print("cryface!");
stroke(225, 125, 236);
strokeWeight(2);
line(cryface[0], cryface[1], maskface [0], maskface[1]);
line(cryface[0], cryface[1], virus [0], virus[1]);
line(cryface[0], cryface[1], hearteyes [0], hearteyes[1]);
}


//SHOW TEXT heart text
if(dist(mouseX, mouseY, heart[0], heart[1]) < 30){
textSize (14);
fill(150, 150, 150);
noStroke ();
text('sent 24 times', heart[0], heart[1]-80);
}

//SHOW TEXT claphand text
if(dist(mouseX, mouseY, claphand[0], claphand[1]) < 30){
textSize (14);
fill(150, 150, 150);
noStroke ();
text('sent 12 times', claphand[0]+80, claphand[1]);
}

//SHOW TEXT heartFace text
if(dist(mouseX, mouseY, heartFace[0], heartFace[1]) < 30){
textSize (14);
fill(150, 150, 150);
noStroke ();
text('sent 11 times', heartFace[0]-80, heartFace[1]);
}

//SHOW TEXT okHand text
if(dist(mouseX, mouseY, okHand[0], okHand[1]) < 30){
textSize (14);
fill(150, 150, 150);
noStroke ();
text('sent 4 times', okHand[0]-60, okHand[1]-10);
}

//SHOW TEXT hearteyes text
if(dist(mouseX, mouseY, hearteyes[0], hearteyes[1]) < 30){
textSize (14);
fill(150, 150, 150);
noStroke ();
text('sent 17 times', hearteyes[0]+80, hearteyes[1]);
}

//SHOW TEXT firework text
if(dist(mouseX, mouseY, firework[0], firework[1]) < 30){
textSize (14);
fill(150, 150, 150);
noStroke ();
text('sent 7 times', firework[0]-70, firework[1]);
}

//SHOW TEXT cryface text
if(dist(mouseX, mouseY, cryface[0], cryface[1]) < 30){
textSize (14);
fill(150, 150, 150);
noStroke ();
text('sent 13 times', cryface[0]+80, cryface[1]);
}

//SHOW TEXT maskface text
if(dist(mouseX, mouseY, maskface[0], maskface[1]) < 30){
textSize (14);
fill(150, 150, 150);
noStroke ();
text('sent 18 times', maskface[0]+90, maskface[1]);
}

//SHOW TEXT angryface text
if(dist(mouseX, mouseY, angryface[0], angryface[1]) < 30){
textSize (14);
fill(150, 150, 150);
noStroke ();
text('sent 4 times', angryface[0]-50, angryface[1]-5);
}


//SHOW TEXT pray text
if(dist(mouseX, mouseY, pray[0], pray[1]) < 30){
textSize (14);
fill(150, 150, 150);
noStroke ();
text('sent 5 times', pray[0]-70, pray[1]);
}

//SHOW TEXT stars text
if(dist(mouseX, mouseY, stars[0], stars[1]) < 30){
textSize (14);
fill(150, 150, 150);
noStroke ();
text('sent 12 times', stars[0], stars[1]+40);
}

//SHOW TEXT star text
if(dist(mouseX, mouseY, star[0], star[1]) < 30){
textSize (14);
fill(150, 150, 150);
noStroke ();
text('sent 12 times', star[0]-70, star[1]);
}

//SHOW TEXT fire text
if(dist(mouseX, mouseY, fire[0], fire[1]) < 30){
textSize (14);
fill(150, 150, 150);
noStroke ();
text('sent 10 times', fire[0]-70, fire[1]);
}

//SHOW TEXT womanintech text
if(dist(mouseX, mouseY, womanintech[0], womanintech[1]) < 30){
textSize (14);
fill(150, 150, 150);
noStroke ();
text('sent 5 times', womanintech[0]-70, womanintech[1]-3);
}

//SHOW TEXT flowers text
if(dist(mouseX, mouseY, flowers[0], flowers[1]) < 30){
textSize (14);
fill(150, 150, 150);
noStroke ();
text('sent 11 times', flowers[0]-80, flowers[1]);
}


//SHOW TEXT thumb text
if(dist(mouseX, mouseY, thumb[0], thumb[1]) < 30){
textSize (14);
fill(150, 150, 150);
noStroke ();
text('sent 22 times', thumb[0]+100, thumb[1]);
}

//SHOW TEXT virus text
if(dist(mouseX, mouseY, virus[0], virus[1]) < 30){
textSize (14);
fill(150, 150, 150);
noStroke ();
text('sent 13 times', virus[0]+80, virus[1]);
}

//SHOW TEXT lightbulb text
if(dist(mouseX, mouseY, lightbulb[0], lightbulb[1]) < 30){
textSize (14);
fill(150, 150, 150);
noStroke ();
text('sent 13 times', lightbulb[0]+70, lightbulb[1]);
}

//SHOW TEXT eyes text
if(dist(mouseX, mouseY, eyes[0], eyes[1]) < 30){
textSize (14);
fill(150, 150, 150);
noStroke ();
text('sent 7 times', eyes[0]-70, eyes[1]);
}


//position//position//position//position//position//position
//draw emoji positioning it using the okHand x,y array
textSize(112);
text('❤️', heart[0], heart[1]);

textSize(16);
text('👌', okHand[0], okHand[1]);

textSize(44);
text('🥰', heartFace[0], heartFace[1]);

textSize(48);
text("👏", claphand[0], claphand [1]);

textSize(68);
text('😍', hearteyes[0], hearteyes [1]);

textSize(28);
text('🎉', firework[0], firework [1]);

textSize(52);
text('😭', cryface[0], cryface [1]);

textSize(72);
text('😷', maskface[0], maskface [1]);

textSize(16);
text('🤬', angryface[0], angryface[1]);

textSize(20);
text('🙏', pray[0], pray[1]);

textSize(48);
text('✨', stars [0], stars[1]);

textSize(40);
text('🔥', fire[0], fire[1]);

textSize(20);
text('👩‍💻', womanintech[0], womanintech[1]);

textSize(44);
text('💐', flowers[0], flowers[1]);

textSize(32);
text('⭐', star[0], star[1]);

textSize(88);
text('👍', thumb[0], thumb[1]);

textSize(52);
text('🦠', virus[0], virus[1]);

textSize(52);
text('💡', lightbulb[0], lightbulb[1]);

textSize(28);
text('🥺', eyes[0], eyes[1]);
}

function changeBG() {
  r = (42);
  g = (40);
  b = (38);
}

function newText(){
  textchange.html ("Hey", 200,200)
}

function oldText(){
  textchange.html ("YES!",200,200)
}
