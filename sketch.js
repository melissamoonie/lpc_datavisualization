var USmap, statePops;
var data = [];
var dataIndex = 0;
var circles = [];


function stateData (name, twoten, twoeleven, twotwelve, twothirteen, twofourteen, twofifteen) {
  this.name = name;
  this.tte = twoten;
  this.tel = twoeleven;
  this.ttw = twotwelve;
  this.tth = twothirteen;
  this.tfo = twofourteen;
  this.tfi = twofifteen;
}

function circle(x, y, name) {
  this.x = x;
  this.y = y;
  this.name = name;
  this.lineX = 0;
  this.lineY = 0;
}

function preload() {
  statePops = loadTable("meldata.csv");
  USmap = loadImage("USmap.png");
}

function setup() {
  createCanvas(1250, 1000);
  image(USmap, 0, 0, 1200, 975);
  for (var r = 2; r < statePops.getRowCount(); r++) {
      var name, tte, tel, ttw, tth, tfo, tfi;
      name = statePops.getString(r, 0).substring(1);
      tte = (statePops.getString(r, 1));
      tel = (statePops.getString(r, 2));
      ttw = (statePops.getString(r, 3));
      tth = (statePops.getString(r, 4));
      tfo = (statePops.getString(r, 5));
      tfi = (statePops.getString(r, 6));
      data[dataIndex] = new stateData(name,tte,tel,ttw,tth,tfo,tfi);
      dataIndex++;
  }
  circles[0] = new circle(125,75,"Washington");
  circles[1] = new circle(100,150,"Oregon");
  circles[2] = new circle(75,350,"California");
  circles[3] = new circle(150,300,"Nevada");
  circles[4] = new circle(225,175,"Idaho");
  circles[5] = new circle(275,325,"Utah");
  circles[6] = new circle(250,450,"Arizona");
  circles[7] = new circle(350,125,"Montana");
  circles[8] = new circle(375,225,"Wyoming");
  circles[9] = new circle(400,350,"Colorado");
  circles[10] = new circle(375,475,"New Mexico");
  circles[11] = new circle(525,125,"North Dakota");
  circles[12] = new circle(525,200,"South Dakota");
  circles[13] = new circle(550,300,"Nebraska");
  circles[14] = new circle(575,375,"Kansas");
  circles[15] = new circle(575,475,"Oklahoma");
  circles[16] = new circle(525,575,"Texas");
  circles[17] = new circle(650,150,"Minnesota");
  circles[18] = new circle(675,275,"Iowa");
  circles[19] = new circle(700,375,"Missouri");
  circles[20] = new circle(700,475,"Arkansas");
  circles[21] = new circle(700,575,"Louisiana");
  circles[22] = new circle(750,200,"Wisconsin");
  circles[23] = new circle(750,325,"Illinois");
  circles[24] = new circle(775,525,"Mississippi");
  circles[25] = new circle(850,225,"Michigan");
  circles[26] = new circle(825,325,"Indiana");
  circles[27] = new circle(875,375,"Kentucky");
  circles[28] = new circle(850,435,"Tennessee");
  circles[29] = new circle(850,525,"Alabama");
  circles[30] = new circle(900,300,"Ohio");
  circles[31] = new circle(925,525,"Georgia");
  circles[32] = new circle(1000,675,"Florida");
  circles[33] = new circle(975,475,"South Carolina");
  circles[34] = new circle(1000,425,"North Carolina");
  circles[35] = new circle(1025,360,"Virginia");
  circles[36] = new circle(950,350,"West Virginia");
  circles[37] = new circle(1000,275,"Pennsylvania");
  circles[38] = new circle(1050,200,"New York");
  circles[39] = new circle(1150,400,"Maryland");
  circles[39].lineX = 1035;
  circles[39].lineY = 315;
  circles[40] = new circle(1150,300,"New Jersey");
  circles[40].lineX = 1080;
  circles[40].lineY = 265;
  circles[41] = new circle(1150,125,"Maine");
  circles[42] = new circle(1200,350,"Delaware");
  circles[42].lineX = 1070;
  circles[42].lineY = 320;
  circles[43] = new circle(1200,175,"Massachusetts");
  circles[43].lineX = 1125;
  circles[43].lineY = 205;
  circles[44] = new circle(1100,75,"New Hampshire");
  circles[44].lineX = 1125;
  circles[44].lineY = 175;
  circles[45] = new circle(1050,100,"Vermont");
  circles[45].lineX = 1100;
  circles[45].lineY = 175;
  circles[46] = new circle(1200,275,"Connecticut");
  circles[46].lineX = 1110;
  circles[46].lineY = 225;
  circles[47] = new circle(1225,225,"Rhode Island");
  circles[47].lineX = 1135;
  circles[47].lineY = 220;
  circles[48] = new circle(300,750,"Alaska");
  circles[49] = new circle(140,625,"Hawaii");
}

function draw() {
  image(USmap, 0, 0, 1200, 975);
  text("Where do I spent my days?", 500, 500);
  for (var i = 0; i < circles.length; i++) {
    for (var h = 0; h < data.length; h++) {
        if (data[h].name == circles[i].name) {
              noStroke();
              if(data[h].tfi.replaceAll(",","") ==0) {
                fill(13,184,255);
                break;
              }
              if (data[h].tfi.replaceAll(",","") <= 1) {
                 fill(10,149,207);
                break;
              }
              if (data[h].tfi.replaceAll(",","") < 2) {
                fill(7, 103, 143);
                break;
              }
              if (data[h].tfi.replaceAll(",","") < 3) {
                fill(4,64,89);
                break;
              }
              if (data[h].tfi.replaceAll(",","") < 5) {
                fill(3,37,51);
                break;
              }
              if (data[h].tfi.replaceAll(",","") < 10) {
                fill(165,0,80);
                break;
              }
              if (data[h].tfi.replaceAll(",","") < 50) {
                fill(200,0,45);
                break;
              }
              if(data[h].tfi.replaceAll(",","") < 100) {
                fill(225,0,10);
                break;
              }
              if (data[h].tfi.replaceAll(",","") > 200) {
                fill(255,0,0);
                break;
              }
        }
      }
      ellipse(circles[i].x, circles[i].y, 20, 20);
    if (circles[i].lineX !== 0) {
      stroke(0);
      line(circles[i].lineX, circles[i].lineY, circles[i].x, circles[i].y);
    }
    rectMode(CORNER);
    noStroke();
    fill(13,184,255);
    rect(1100,500,25,25);
    fill(10,149,207);
    rect(1100,525,25,25);
    fill(7, 103, 143);
    rect(1100,550,25,25);
    fill(4,64,89);
    rect(1100,575,25,25);
    fill(3,37,51);
    rect(1100,600,25,25);
    fill(165,0,80);
    rect(1100,625,25,25);
    fill(200,0,45);
    rect(1100,650,25,25);
    fill(225,0,10);
    rect(1100,675,25,25);
    fill(255,0,0);
    rect(1100,700,25,25);
    textAlign(LEFT);
    stroke(0);
    fill(0);
    textSize(17);
    text("< 1 days", 1130, 515);
    text("< 2 days", 1130, 540);
    text("< 3 days", 1130, 565);
    text("< 5 days", 1130, 590);
    text("< 10 days", 1130, 615);
    text("< 50 days", 1130, 640);
    text("< 100 days", 1130, 665);
    text("< 200 days", 1130, 690);
    text("> 201 days", 1130, 715);
  }
  for (var j = 0; j < circles.length; j++) {
    if (mouseX > circles[j].x - 10 && mouseX < circles[j].x + 10 && mouseY < circles[j].y + 10 && mouseY > circles[j].y - 10) {
      for (var k = 0; k < data.length; k++) {
        if (data[k].name == circles[j].name) {
          rectMode(CENTER);
          stroke(0);
          fill(255);
          rect(width/2, 100, width/2, 150);
          textAlign(CENTER);
          fill(0);
          textSize(30);
          text(circles[j].name, width/2, 75);
          textSize(17);
          print(circles[j].tte);
          text("2012:   " + data[k].tte, width/2 - 200, 115);
          text("2013:   " + data[k].tel, width/2, 115);
          text("2014:   " + data[k].ttw, width/2 + 200, 115);
          text("2015:   " + data[k].tth, width/2 - 200, 150);
          text("2016:   " + data[k].tfo, width/2, 150);
          text("2017:   " + data[k].tfi, width/2 + 200, 150);
        }
      }
    }
  }
}

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};