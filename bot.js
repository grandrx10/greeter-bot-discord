var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, { colorize: true });
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});

function magic8(){
   var magicMessages = ["Yes","No","Maybe","In your dreams.","Yeah right.","Maybe when Minehero can fly.","Go ask the real 8Ball.","Why would you ask me that. That sounds like a Phil Question.","YES! OH MY GOD WHY ARE YOU THIS DUMB!?","No, god no. Never in the history of the Earth, not even when Incomp can get decent one taps, will that be true.","I know you know the answer already.","That's funny to you isn't it?","I don't want to answer anymore of your gay ass questions.","Sure, if you think about it that way.","Yes, sadly, it is true. But I'd rather believe that it is not.","Well, yeah, if you wanna get raped.","Maybe when Kurx sounds like a man."];
   var randNum = Math.floor(Math.random() * Math.floor(magicMessages.length));
   return magicMessages[randNum];
}

function joke(){
   var punchlines = ["What do you call a man with no arms and no legs lying in a pool? Bob","What do you call a man with no arms and no legs lying on your front door? Matt.","What do you call a man with no arms and no legs wrapped around your fence? Barb.","My life","Your social life.","A drunk and a soldier are talking. The soldier says: You know, it sucks out here. It's hot in the morning, it's cold as hell in the night, and you never know when the next attack is going to come. The drunk says: Same thing here. That's why I got a divorce.","Did you know that Incomp could one tap?","A clown opened the door for me. I thought it was a nice jester","Why don't you give Elsa a balloon? Cuz she'll let it go.","2 men are stranded in the desert. One man says: I got good news and I got bad news. Which one do you want? \n The other man says: the bad news \n we have nothing but sand to eat out here. \n The good news? \n LOOK AT HOW MUCH THERE IS TO EAT!",
   "The wedding was great! Even the cake was in tiers",
   "What did the cat say when the mouse got away? You gotta be kitten me.",
   "Communism",
   "Capitalism",
   "Kim Jon Un opens up a new work out gym. Is the only fat man in the country.",
   "EA-Player First company",
   "What do you call a vehicle that likes to drink lots of water, then sneeze? A train; Chuga Chuga CHOO CHOO!"]
   var randNum = Math.floor(Math.random() * Math.floor(punchlines.length));
   return punchlines[randNum];
}

function love(){
   var loveMeter = ["Yeah, it's a good match.","Gods no.","Why in the world would you want to- Nevermind.","GAY!","oooOOooo yeah, good match","You and... No, that's disgusting.","...","I didn't even think about that! That's a good idea!","Sometimes, I just want to end it all when you idoits ask me questions like those. No, its a trash idea.","Are you serious right now.","Yeah! That relationship is gay but perfect!","Wowza! You're really into it! It's a great match!"]
   var randNum = Math.floor(Math.random() * Math.floor(loveMeter.length));
   return loveMeter[randNum];
}

//THIS IS THE DATABASE (UNFORTUNATELY)
const fs = require('fs');
var txtFile = "characters.txt";
var database1 = fs.readFileSync(txtFile,'utf8');
database = JSON.parse(database1);

function createNewChar(username){
  const fs = require('fs');
  //"TheLastHero":{"Stats":{"HP":20,"MP":10},"Weapons":"None"}
  var replacement = database1.slice(0,-1) + ",\"" + username + "\":{\"Stats\":{\"HP\":20,\"MP\":10},\"Weapons\":\"None\"}}"
  fs.writeFile('characters.txt', replacement, function (err) {
    if (err) throw err;
  });
  return "Your character has been created!"
}

//DATABASE ENDS HERE

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
                break;
            case 'hi':
                bot.sendMessage({
                    to: channelID,
                    message: 'Hello!'
                });
                break;
            case 'magic8':
                bot.sendMessage({
                    to: channelID,
                    message: magic8()
                });
                break;
            case 'love':
                bot.sendMessage({
                    to: channelID,
                    message: love()
                });
                break;
            case 'random':
                bot.sendMessage({
                    to: channelID,
                    message: 1+Math.floor(Math.random() * Math.floor(parseInt(args)))
                });
                break;
            case 'joke':
                bot.sendMessage({
                    to: channelID,
                    message: joke()
                })
                break;
            case 'help':
                bot.sendMessage({
                    to: channelID,
                    message: 'Here are the commands: \n !help \n !hi \n !magic8 (insert yes or no question) \n !love (insert name) \n !random (insert number) \n !joke'
                });
            case 'characters':
                bot.sendMessage({
                    to: channelID,
                    message: user + " has " + database[user]["Stats"]["HP"] + " hp right now. Want to smack him?"
                });
            case 'start':
                bot.sendMessage({
                    to: channelID,
                    message: createNewChar(user)
                });


            break;
            // Just add any case commands if you want to..
         }
     }
});
