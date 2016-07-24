function myFunction() {
    /* 
      Visit http://console.developers.google.com/ and create a "Browser key" for the maps api
      and add it to the following variable between the double quotes.
    */
    var googlemapskey = "<add your google maps api key here>";

    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    var canvas2 = document.getElementById('profileimage');
    var context2 = canvas2.getContext('2d');

    var bkg = new Image();
    background = document.getElementById("backgroundimg");
    bkg.src = background.value;

    var white = new Image();
    white.src = "images/white-650-1200.png";

    var profile = new Image();
    profileimg = document.getElementById("profileimg");
    profile.src = profileimg.value;

    context2.drawImage(profile, 0, 0);
    //draw a circle
    //context2.beginPath();
    //context2.arc(75, 75, 10, 0, Math.PI * 2, true);
    //context2.closePath();
    //context2.fill();

    ctx.drawImage(bkg, 0, 0);
    ctx.drawImage(white, 10, 300, 630, 1200);
    ctx.drawImage(canvas2, 225, 150);

    var cp = document.getElementById("cpnumber").value;
    var name = document.getElementById("name").value;
    var hpstring = document.getElementById("hpstring").value;

    var field1value = document.getElementById("field1value").value;
    var field1name = document.getElementById("field1name").value;
    var field2value = document.getElementById("field2value").value;
    var field2name = document.getElementById("field2name").value;
    var field3value = document.getElementById("field3value").value;
    var field3name = document.getElementById("field3name").value;

    var stardust = document.getElementById("stardustnumber").value;
    var candyname = document.getElementById("candyname").value;
    var candynumber = document.getElementById("candynumber").value;

    ctx.textAlign="left";
    ctx.fillStyle = "white";
    ctx.font = "40px Lota";
    ctx.fillText("CP", 240, 65);
    ctx.textAlign="right";
    ctx.font = "55px Lota";
    ctx.fillText(cp, 400, 65);

    ctx.font = "35px Lota";
    ctx.fillStyle = "#3e4844";
    ctx.textAlign="center";
    ctx.fillText(name, 325, 400);

    ctx.beginPath();
    ctx.moveTo(150, 425);
    ctx.lineTo(500, 425);
    ctx.lineWidth = 7;
    ctx.strokeStyle = '#6dedb7';
    ctx.stroke();

    ctx.font = "20px Lota";
    ctx.fillText(hpstring, 325, 460);

    ctx.font = "30px Lota";
    ctx.fillText(field1value, 125, 550);
    ctx.fillText(field2value, 325, 550);
    ctx.fillText(field3value, 525, 550);

    ctx.font = "18px Lota";
    ctx.fillText(field1name, 125, 580);
    ctx.fillText(field2name, 325, 580);
    ctx.fillText(field3name, 525, 580);

    ctx.beginPath();
    ctx.moveTo(225, 525);
    ctx.lineTo(225, 600);
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#cccccc';
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(425, 525);
    ctx.lineTo(425, 600);
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#cccccc';
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(35, 630);
    ctx.lineTo(615, 630);
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#cccccc';
    ctx.stroke();

    //draw a circle
    ctx.beginPath();
    ctx.arc(420, 690, 14, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();

    ctx.font = "30px Lota";
    ctx.fillText(stardust, 200, 700);
    ctx.fillText(candynumber, 460, 700);

    ctx.font = "16px Lota";
    ctx.fillText("STARDUST", 200, 725);
    ctx.fillText(candyname.toUpperCase(), 460, 725);

    ctx.beginPath();
    ctx.moveTo(35, 760);
    ctx.lineTo(615, 760);
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#cccccc';
    ctx.stroke();

    var skill1name = document.getElementById("skill1name").value;
    var skill1value = document.getElementById("skill1value").value;
    var skill1desc = document.getElementById("skill1desc").value;
    var skill2name = document.getElementById("skill2name").value;
    var skill2value = document.getElementById("skill2value").value;
    var skill2desc = document.getElementById("skill2desc").value;

    ctx.font = "30px Lota";
    ctx.textAlign="left";
    ctx.fillText(skill1name, 35, 820);
    ctx.fillStyle = "#cccccc";
    ctx.fillText(skill1desc, 35, 855);
    ctx.textAlign="right";
    ctx.fillStyle = "black";
    ctx.fillText(skill1value, 615, 820);

    ctx.font = "30px Lota";
    ctx.textAlign="left";
    ctx.fillText(skill2name, 35, 910);
    ctx.fillStyle = "#cccccc";
    ctx.fillText(skill2desc, 35, 945);
    ctx.textAlign="right";
    ctx.fillStyle = "black";
    ctx.fillText(skill2value, 615, 910);

    ctx.beginPath();
    ctx.moveTo(35, 990);
    ctx.lineTo(615, 990);
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#cccccc';
    ctx.stroke();

    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth()+1;
    var year = date.getFullYear();
    var today = month+"/"+day+"/"+year;
    ctx.font = "18px Lota";
    ctx.textAlign="center";
    ctx.fillStyle = "black";
    ctx.fillText(today, 325, 1020);

    var maploc = encodeURIComponent(document.getElementById("maplocation").value);
    var map = new Image();
    var googlemapskey = "<add your google maps api key here>"
    map.src = "https://maps.googleapis.com/maps/api/staticmap?center="+maploc+"&size=580x375&zoom=12&key="+googlemapskey;
    ctx.drawImage(map, 35, 1035);

    ctx.font = "14px Lota";
    ctx.textAlign="center";
    ctx.fillStyle = "white";
    ctx.fillText("(c) pokemongo.bizzartech.com", 325, 1590);
}
