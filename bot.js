var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool guy/; botRegexSalt = /^\/salt/;botRegexJoe = /^\/cry joe/;
      botRegexAd=/^\/advance/;botRegexMI = /^\/offseason/; botRegexBye = /^\/bye/; botDuck = /^\/duck/;
      botRegexTw = /^\/twitch/i; botRegexTrade = /^\/trades/; botRegexSh = /^\/oh/; botRegexCC = /^\/respek/; botRegexSr = /^\/trash/; botRegexSt = /^\/haha/; botRegexQu = /^\/stfu/;
      botRegexCryNeema=/^\/cry neema/; botRegexLuck = /^\/luck/; botRegexFumble = /^\/fumble/; botRegexL = /^\/L/;  botRegexCryingg = /^\/cry/;  botRegexRuless = /^\/rules/; botRegexFour = /^\/4th/; botRegexBleach = /^\/bleach/;  botRegexCommands = /^\/commands/; botRegexEat = /^\/eat/; botRegexWeek1 = /^\/week1/; botRegexWeek2 = /^\/week 2/;botRegexWeek3 = /^\/week 3/; botRegexWeek4 = /^\/week 4/; botRegexWeek5 = /^\/week 5/; botRegexWeek6 = /^\/week 6/; botRegexWeek7 = /^\/week 7/; botRegexWeek8 = /^\/week 8/; botRegexWeek9 = /^\/week 9/; botRegexWeek10 = /^\/week 10/; botRegexWeek11 = /^\/week 11/;botRegexWeek12 = /^\/week 12/; botRegexWeek13 = /^\/week 13/; botRegexWeek14 = /^\/week 14/; botRegexWeek15 = /^\/week 15/; botRegexWeek16 = /^\/week 16/; botRegexWeek17 = /^\/week 17/; botRegexCheese = /^\/cheese/
      cheese1 = 'https://pbs.twimg.com/profile_images/494330891/cheese_oh_cheese_400x400.jpg'; cheese2 = 'https://i.ytimg.com/vi/efLRmlILC2I/maxresdefault.jpg'
      cheese3 = 'http://www.packerpalace.com/palace02/maddenwcheese.gif';
  var teamAb = ["NE","NO","ARI","PHI","CLE","TEN","OAK","DAL","IND","SEA","CIN","PIT","JAC"
                ,"BAL","SD","DEN","MIN","ATL","KC","NYG","GB","DET","HOU","STL","CHI","CAR",
                "MIA","BUF","SF","WAS","NYJ","TB"]
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  } 
  else if(request.text && botRegexSalt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/600x600.jpeg.abf553e8c766444ca32cd06ffb450d8c");
    this.res.end();
  } 
  else if(request.text && botRegexAd.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgflip.com/xgtsl.jpg");
    this.res.end();
  }
  else if(request.text && botRegexJoe.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/1620x2160.jpeg.f8db8bc8222e404d9813750ca22a1d0f");
    this.res.end();
  } 
  else if(request.text && botRegexMI.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/960x791.png.99204bd73720488aa68271a777c4b760");
    this.res.end();
  } 
  else if(request.text && botRegexTw.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.twitch.tv/"+request.text.substring(8,request.text.length));
    this.res.end();
  } 
  else if(request.text && botRegexTrade.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/document/d/13-rlkR9j5dUhR8qekpITrsM4GFyDpUy8tdfJh3asRIA/mobilebasic");
    this.res.end();
  } 
  else if(request.text && botRegexSh.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.quickmeme.com/img/fe/fe9126fe4327f1b37f06c8c00c051bf8f37c1580b6c3d16da8b4dcb8607b60b2.jpg");
    this.res.end();
  } 
   else if(request.text && botRegexBye.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/648x708.jpeg.3f368f610c6c412e9ced402ab4cc90ea");
    this.res.end();
  } 
  else if(request.text && botDuck.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://media3.giphy.com/media/YCseTHF2I6CCA/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexCC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/400x400.jpeg.9e7bea369900400fb3edb99093bdac91");
    this.res.end();
  }
    else if(request.text && botRegexSr.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/78jbQMz.jpg");
    this.res.end();
  }  
    else if(request.text && botRegexSt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://cdn.meme.am/instances/54668610.jpg");
    this.res.end();
  }  
    else if(request.text && botRegexQu.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media.giphy.com/media/IHaQCbfUJ26wE/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexCryNeema.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/750x706.jpeg.3331bbcbd639415295a9eb64c42cb1c5.large");
this.res.end();
}
  else if(request.text && botRegexLuck.test(request.text)) {
this.res.writeHead(200);
postMessage("http://memecrunch.com/meme/IAWU/you-don-t-always-beat-me-at-madden/image.jpg");
this.res.end();
}
  else if(request.text && botRegexFumble.test(request.text)) {
this.res.writeHead(200);
postMessage("http://s2.quickmeme.com/img/c5/c5e2527ff84089b25e6cd56810125c38dc008985077b3cf18207be27ae4b232d.jpg");
this.res.end();
}
  else if(request.text && botRegexL.test(request.text)) {
this.res.writeHead(200);
postMessage("https://pbs.twimg.com/media/CLNho0mUcAAZ5KC.jpg");
this.res.end();
}
  else if(request.text && botRegexRuless.test(request.text)) {
this.res.writeHead(200);
postMessage("https://docs.google.com/document/d/1YQTYkbC8SUn7ecj915PNpUiNYmagKNp-zsImKW8u0NI/edit?usp=sharing");
this.res.end();
}
  else if(request.text && botRegexFour.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/540x906.jpeg.5d1de5afddce4fac880e0abe459547ca");
this.res.end();
}
  else if(request.text && botRegexBleach.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/540x401.png.0816b855551a43cdbe64525bc1c2bc6c");
this.res.end();
}
  else if(request.text && botRegexCommands.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/826x1720.png.0292eefb0394403aaf2aab6d338955b8");
this.res.end();
}
  else if(request.text && botRegexCryingg.test(request.text)) {
this.res.writeHead(200);
postMessage("http://cdn3.sbnation.com/imported_assets/1945573/MORENO-TEARS.gif");
this.res.end();
}
  else if(request.text && botRegexEat.test(request.text)) {
this.res.writeHead(200);
postMessage("http://im.ezgif.com/tmp/ezgif.com-51851eddf8.gif");
this.res.end();
}
       else if(request.text && botRegexWeek1.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/488x895.png.efa13d4738de46d7889680088649eb00.large");
this.res.end();
}
        else if(request.text && botRegexWeek2.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/456x842.png.e989d311553e4600828466c9b5305443.large");
this.res.end();
}
        else if(request.text && botRegexWeek3.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/463x851.png.f84914b18c74479ebd025e4246d39595.large");
this.res.end();
}
        else if(request.text && botRegexWeek4.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/466x749.png.a0bb840d820e4663aaa0eb1ba3b02386.large");
this.res.end();
}
        else if(request.text && botRegexWeek5.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/458x748.png.70ac6198e9244e83b77f70a891d4de22.large");
this.res.end();
}
        else if(request.text && botRegexWeek6.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/457x740.png.4d2bdef854d546e3a20ca23804ea6eae.large");
this.res.end();
}
        else if(request.text && botRegexWeek7.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/461x744.png.5afb5c46ce15483083b6298dc32ec11d.large");
this.res.end();
}
        else if(request.text && botRegexWeek8.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/458x682.png.5e6967903e9d4bac80c780de720329c3.large");
this.res.end();
}
        else if(request.text && botRegexWeek9.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/457x694.png.aff19e52beb84b6d98ab9057591c783e.large");
this.res.end();
}
        else if(request.text && botRegexWeek10.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/458x741.png.ef3eaa22ce154dc291df2f82a86ef043.large");
this.res.end();
}
        else if(request.text && botRegexWeek11.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/465x849.png.9a950b969c04477eb3966645474d5713.large");
this.res.end();
}
        else if(request.text && botRegexWeek12.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/465x848.png.ae7925a3c7cb46d8ae60f706da1b8e2a.large");
this.res.end();
}
        else if(request.text && botRegexWeek13.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/460x840.png.35c4d76902134e8ea7485b39c273589b.large");
this.res.end();
}
        else if(request.text && botRegexWeek14.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/451x838.png.d301dc8f28f44027a6f4946ef62ff6cc.large");
this.res.end();
}
        else if(request.text && botRegexWeek15.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/456x856.png.6fecc05c80934e26b6571f8922a66b55.large");
this.res.end();
}
        else if(request.text && botRegexWeek16.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/454x843.png.095c69ad1e1645758ad5861df19354a2.large");
this.res.end();
}
        else if(request.text && botRegexWeek17.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/457x831.png.7e73fa729a78472fb9a44099a3d3635d.large");
this.res.end();
}          
  else if(request.text && botRegexCheese.test(request.text)) {
    this.res.writeHead(200);
    if(0.6 >= Math.random() > 0.3)
      postMessage(cheese1);
    else if(Math.random() >0.6)
      postMessage(cheese3)
    else
      postMessage(cheese2);
    this.res.end();
  }
  
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(response) {
  var botResponse,options, body, botReq;

  botResponse = response

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


exports.respond = respond;
