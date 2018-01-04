var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool guy/; botRegexSalt = /^\/salt/;botRegexJoe = /^\/cry joe/;
      botRegexAd=/^\/advance/;botRegexMI = /^\/offseason/; botRegexBye = /^\/bye/; botDuck = /^\/duck/;
      botRegexTw = /^\/twitch/i; botRegexTrade = /^\/trades/; botRegexSh = /^\/oh/; botRegexCC = /^\/guidelines/; botRegexSr = /^\/trash/; botRegexSt = /^\/haha/; botRegexQu = /^\/stfu/;
      botRegexCryNeema=/^\/cry neema/; botRegexLuck = /^\/luck/; botRegexFumble = /^\/fumble/; botRegexL = /^\/L/;  botRegexCryingg = /^\/cry/;  botRegexRuless = /^\/rules/; botRegexFour = /^\/4th/; botRegexBleach = /^\/bleach/;  botRegexCommands = /^\/commands/; botRegexEat = /^\/eat/; botRegexCheese = /^\/cheese/
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
    postMessage("https://i.groupme.com/480x374.gif.ff4b7c47fe184675a8418304fcd32e91");
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
    postMessage("");
    this.res.end();
  } 
  else if(request.text && botRegexTw.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.twitch.tv/"+request.text.substring(8,request.text.length));
    this.res.end();
  } 
  else if(request.text && botRegexTrade.test(request.text)) {
    this.res.writeHead(200);
    postMessage("");
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
    postMessage("https://i.groupme.com/598x864.png.f4a6779abda24f71b847008b5157cff0");
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
postMessage("https://i.groupme.com/599x844.png.549ab0e1797d4c94a58526161d1c0c3c.large");
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
