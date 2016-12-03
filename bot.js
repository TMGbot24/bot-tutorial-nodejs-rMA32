var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool guy/; botRegexSalt = /^\/salt/;botRegexJoe = /^\/cry joe/;
      botRegexAd=/^\/advance/;botRegexMI = /^\/mike/; botRegexBye = /^\/bye/; botDuck = /^\/duck/;
      botRegexTw = /^\/twitch/i; botRegexTrade = /^\/trades/; botRegexSh = /^\/oh/; botRegexCC = /^\/respek/; botRegexSr = /^\/trash/; botRegexSt = /^\/haha/; botRegexQu = /^\/stfu/;
      botRegexCryNeema=/^\/cry neema/; botRegexLuck = /^\/luck/; botRegexFumble = /^\/fumble/; botRegexL = /^\/L/;  botRegexCryingg = /^\/cry/;  botRegexRuless = /^\/rules/; botRegexFour = /^\/4th/; botRegexBleach = /^\/bleach/;  botRegexCommands = /^\/commands/; botRegexEat = /^\/eat/; botRegexWeek1 = /^\/week1 /; botRegexWeek2 = /^\/week 2/;botRegexWeek3 = /^\/week 3/; botRegexWeek4 = /^\/week 4/; botRegexWeek5 = /^\/week 5/; botRegexWeek6 = /^\/week 6/; botRegexWeek7 = /^\/week 7/; botRegexWeek8 = /^\/week 8/; botRegexWeek9 = /^\/week 9/; botRegexWeek10 = /^\/week 10/; botRegexWeek11 = /^\/week 11/;botRegexWeek12 = /^\/week 12/; botRegexWeek13 = /^\/week 13/; botRegexWeek14 = /^\/week 14/; botRegexWeek15 = /^\/week 15/; botRegexWeek16 = /^\/week 16/; botRegexWeek17 = /^\/week 17/; botRegexCheese = /^\/cheese/
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
    postMessage("https://i.kinja-img.com/gawker-media/image/upload/mjvi0ol0s5i3c6ikolql.jpg");
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
postMessage("https://i.groupme.com/492x900.png.c30b51cb33504fb58ab8070273489e30");
this.res.end();
}
        else if(request.text && botRegexWeek2.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/487x901.png.988429a0fa81464ba5c4f3661869bad2");
this.res.end();
}
        else if(request.text && botRegexWeek3.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/493x903.png.d8e4c5763c7c487f8c65a87d4e0c2b60");
this.res.end();
}
        else if(request.text && botRegexWeek4.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/498x790.png.bd2dc9be25c7492e837a600b7ccaa90a");
this.res.end();
}
        else if(request.text && botRegexWeek5.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/501x783.png.b4b2d20ecd0d430595614c73be600557");
this.res.end();
}
        else if(request.text && botRegexWeek6.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/492x791.png.695d5f65c4f3486cba80a8eee8d0a50d");
this.res.end();
}
        else if(request.text && botRegexWeek7.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/491x784.png.06fd8e70689c49b2976cd652024a1b84");
this.res.end();
}
        else if(request.text && botRegexWeek8.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/490x734.png.a72cfda24e9743118a8c8bda4e402d0e");
this.res.end();
}
        else if(request.text && botRegexWeek9.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/486x735.png.376926503af54ee6861a34c677d05edf");
this.res.end();
}
        else if(request.text && botRegexWeek10.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/489x798.png.26b564f5a315478aa0011a2c59079df5");
this.res.end();
}
        else if(request.text && botRegexWeek11.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/480x892.png.9ccea8d9b3c34c538c0e7b568f7e47b7");
this.res.end();
}
        else if(request.text && botRegexWeek12.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/498x903.png.372e73dd987849398ab62a1c611649ea");
this.res.end();
}
        else if(request.text && botRegexWeek13.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/485x909.png.50150509828245559086639d4e5f0a9a");
this.res.end();
}
        else if(request.text && botRegexWeek14.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/487x904.png.12177ea5447a4392afcbbb238be890ba");
this.res.end();
}
        else if(request.text && botRegexWeek15.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/483x901.png.1786d6b0880a475d85364946572776a2");
this.res.end();
}
        else if(request.text && botRegexWeek16.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/498x894.png.5b1b8034655340299df7a67bead40b75");
this.res.end();
}
        else if(request.text && botRegexWeek17.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/486x893.png.ff200e85793d48958cfd2166cde9cabb");
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
