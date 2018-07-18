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

var attacker;
var defender;

function magic8(){
   var magicMessages = ["Yes","No","Maybe","In your dreams.","Yeah right.","Maybe when Minehero can fly.","Go ask the real 8Ball.","Why would you ask me that. That sounds like a Phil Question.","YES! OH MY GOD WHY ARE YOU THIS DUMB!?","No, god no. Never in the history of the Earth, not even when Incomp can get decent one taps, will that be true.","I know you know the answer already.","That's funny to you isn't it?","I don't want to answer anymore of your gay ass questions.","Sure, if you think about it that way.","Yes, sadly, it is true. But I'd rather believe that it is not.","Well, yeah, if you wanna get raped.","Maybe when Kurx sounds like a man.",
   "Yes, that is indeed true.",
   "By the asses of Frisk, that is so false.",
   "Why would you even ask that question- I'm not a wizard you know.",
   "This does not compute. I have no idea!",
   "Nien, Shviendhund."];
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
   var loveMeter = ["Yeah, it's a good match.","Gods no.","Why in the world would you want to- Nevermind.","GAY!","oooOOooo yeah, good match","You and... No, that's disgusting.","...","I didn't even think about that! That's a good idea!","Sometimes, I just want to end it all when you idoits ask me questions like those. No, its a trash idea.","Are you serious right now.","Yeah! That relationship is gay but perfect!","Wowza! You're really into it! It's a great match!", "Let me ask you a question instead: Do Lady Ga Ga and Justin Bieber make a good match?",
   "You wish it would work, but no, it doesnt."]
   var randNum = Math.floor(Math.random() * Math.floor(loveMeter.length));
   return loveMeter[randNum];
}

function cbrogun(){
  var randomgun = ["P2000/USP-S/Glock 18","Dual Berretas","P250","Five-Seven/Tec-9","Desert Eagle","Nova","XM1014","Mag-7/Sawed-Off","M249","Negev","Mac-10/MP9","MP7","UMP-45","P90","PP-Bizon",
  "Famas/Galil","AK-47/M4A4/M4A1-S","Scout","SG553/AUG","AWP","Scar-20/G3","Knife","Smoke Grenade","Flashbang","HE Grenade"]
  var randNum = Math.floor(Math.random() * Math.floor(randomgun.length));
  return "You have been given the weapon: " + randomgun[randNum];
}

//DATABASE ACCESS CODE

const fs = require('fs');
var txtFile = "characters.txt";
var database1 = fs.readFileSync(txtFile,'utf8');
database = JSON.parse(database1);

function createNewChar(username){
  const fs = require('fs');
  //"TheLastHero":{"Stats":{"HP":20,"MP":10},"Weapons":"None"}
  console.log(database1)
  console.log(database1.substr(0,database1.length-3))
  var replacement = database1.substr(0,database1.length-3) + ",\"" + username + "\":{\"Stats\":{\"HP\":20,\"MP\":10},\"Weapons\":\"None\",\"Armour\":\"None\",\"MagicAbilities\":\"None\"}}"
  fs.writeFile('characters.txt', replacement, function (err) {
    if (err) throw err;
  });
  return "Your character has been created!"
}

const fs = require('fs');
var txtFile = "weapons.txt";
var weaponsData1 = fs.readFileSync(txtFile,'utf8');
weaponsData = JSON.parse(weaponsData1);
//DATABASE CODE ENDS HERE

function addWeapon(username) {
  var weapons = ["T1 Dagger \n https://static.drips.pw/rotmg/wiki/Weapons/Daggers/T4%20Silver%20Dagger.png","T1 Spear \n https://static.drips.pw/rotmg/wiki/Weapons/Staves/T1%20Firebrand%20Staff.png","T1 Sword \n https://static.drips.pw/rotmg/wiki/Weapons/Swords/T6%20Glass%20Sword.png",
  "T1 Bow \n https://static.drips.pw/rotmg/wiki/Weapons/Bows/T4%20Ironwood%20Bow.png","T1 Dagger \n https://static.drips.pw/rotmg/wiki/Weapons/Daggers/T4%20Silver%20Dagger.png","T1 Spear \n https://static.drips.pw/rotmg/wiki/Weapons/Staves/T1%20Firebrand%20Staff.png","T1 Sword \n https://static.drips.pw/rotmg/wiki/Weapons/Swords/T6%20Glass%20Sword.png",
  "T1 Bow \n https://static.drips.pw/rotmg/wiki/Weapons/Bows/T4%20Ironwood%20Bow.png","T1 Dagger \n https://static.drips.pw/rotmg/wiki/Weapons/Daggers/T4%20Silver%20Dagger.png","T1 Spear \n https://static.drips.pw/rotmg/wiki/Weapons/Staves/T1%20Firebrand%20Staff.png","T1 Sword \n https://static.drips.pw/rotmg/wiki/Weapons/Swords/T6%20Glass%20Sword.png",
  "T1 Bow \n https://static.drips.pw/rotmg/wiki/Weapons/Bows/T4%20Ironwood%20Bow.png","T1 Dagger \n https://static.drips.pw/rotmg/wiki/Weapons/Daggers/T4%20Silver%20Dagger.png","T1 Spear \n https://static.drips.pw/rotmg/wiki/Weapons/Staves/T1%20Firebrand%20Staff.png","T1 Sword \n https://static.drips.pw/rotmg/wiki/Weapons/Swords/T6%20Glass%20Sword.png",
  "T1 Bow \n https://static.drips.pw/rotmg/wiki/Weapons/Bows/T4%20Ironwood%20Bow.png","T2 Dagger \n https://static.drips.pw/rotmg/wiki/Weapons/Daggers/T7%20Mithril%20Dagger.png","T2 Spear \n https://static.drips.pw/rotmg/wiki/Weapons/Staves/T0%20Energy%20Staff.png","T2 Sword \n https://static.drips.pw/rotmg/wiki/Weapons/Swords/T8%20Ravenheart%20Sword.png",
  "T2 Bow \n https://static.drips.pw/rotmg/wiki/Weapons/Bows/T8%20Golden%20Bow.png","T2 Dagger \n https://static.drips.pw/rotmg/wiki/Weapons/Daggers/T7%20Mithril%20Dagger.png","T2 Spear \n https://static.drips.pw/rotmg/wiki/Weapons/Staves/T0%20Energy%20Staff.png","T2 Sword \n https://static.drips.pw/rotmg/wiki/Weapons/Swords/T8%20Ravenheart%20Sword.png",
  "T2 Bow \n https://static.drips.pw/rotmg/wiki/Weapons/Bows/T8%20Golden%20Bow.png","T3 Dagger \n https://static.drips.pw/rotmg/wiki/Weapons/Daggers/T12%20Dagger%20of%20Foul%20Malevolence.png","T3 Spear \n https://static.drips.pw/rotmg/wiki/Weapons/Staves/T12%20Staff%20of%20the%20Cosmic%20Whole.png",
  "T3 Sword \n https://static.drips.pw/rotmg/wiki/Weapons/Swords/T11%20Skysplitter%20Sword.png","T3 Bow \n https://static.drips.pw/rotmg/wiki/Weapons/Bows/T12%20Bow%20of%20Covert%20Havens.png",
  "UT Excalibur \n https://i.imgur.com/Klyve1D.png"];
  //var weapons = ["a test https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/600px-Cat03.jpg"];
  var randNum = Math.floor(Math.random() * Math.floor(weapons.length));
  database[username]["Weapons"] = weapons[randNum];
  fs.writeFile('characters.txt',JSON.stringify(database), function(err){
    if (err) throw err;
  });
  return username + " has obtained " + weapons[randNum];
}

function addMagic(username) {
  var magicAbilities = ["T1 Heal Spell \n https://static.drips.pw/rotmg/wiki/Abilities/Tomes/T0%20Healing%20Tome.png","T1 Explosive Spell \n https://static.drips.pw/rotmg/wiki/Abilities/Spells/T1%20Flame%20Burst%20Spell.png","T1 Weaken Spell \n https://static.drips.pw/rotmg/wiki/Abilities/Orbs/T0%20Stasis%20Orb.png",
  "T1 Heal Spell \n https://static.drips.pw/rotmg/wiki/Abilities/Tomes/T0%20Healing%20Tome.png","T1 Explosive Spell \n https://static.drips.pw/rotmg/wiki/Abilities/Spells/T1%20Flame%20Burst%20Spell.png","T1 Weaken Spell \n https://static.drips.pw/rotmg/wiki/Abilities/Orbs/T0%20Stasis%20Orb.png",
  "T1 Heal Spell \n https://static.drips.pw/rotmg/wiki/Abilities/Tomes/T0%20Healing%20Tome.png","T1 Explosive Spell \n https://static.drips.pw/rotmg/wiki/Abilities/Spells/T1%20Flame%20Burst%20Spell.png","T1 Weaken Spell \n https://static.drips.pw/rotmg/wiki/Abilities/Orbs/T0%20Stasis%20Orb.png",
  "T2 Heal Spell \n https://static.drips.pw/rotmg/wiki/Abilities/Tomes/T5%20Tome%20of%20Divine%20Favor.png","T2 Explosive Spell \n https://static.drips.pw/rotmg/wiki/Abilities/Spells/T5%20Magic%20Nova%20Spell.png","T2 Weaken Spell \n https://static.drips.pw/rotmg/wiki/Abilities/Orbs/T5%20Banishment%20Orb.png",
  "T2 Heal Spell \n https://static.drips.pw/rotmg/wiki/Abilities/Tomes/T5%20Tome%20of%20Divine%20Favor.png","T2 Explosive Spell \n https://static.drips.pw/rotmg/wiki/Abilities/Spells/T5%20Magic%20Nova%20Spell.png","T2 Weaken Spell \n https://static.drips.pw/rotmg/wiki/Abilities/Orbs/T5%20Banishment%20Orb.png",
  "T3 Heal Spell \n https://static.drips.pw/rotmg/wiki/Abilities/Tomes/T6%20Tome%20of%20Holy%20Guidance.png","T3 Explosive Spell \n https://static.drips.pw/rotmg/wiki/Abilities/Spells/T6%20Elemental%20Detonation%20Spell.png","T3 Weaken Spell \n https://static.drips.pw/rotmg/wiki/Untiered/Orb%20of%20Conflict.png",
  "UT Seal of the Fallen Champion \n https://static.drips.pw/rotmg/wiki/Abilities/Seals/T6%20Seal%20of%20the%20Blessed%20Champion.png"]
  var randNum = Math.floor(Math.random() * Math.floor(magicAbilities.length));
  database[username]["MagicAbilities"] = magicAbilities[randNum];
  fs.writeFile('characters.txt',JSON.stringify(database), function(err){
    if (err) throw err;
  });
  return username + " has obtained " + magicAbilities[randNum];
}



function addArmour(username) {
  var armours = ["T1 Leather Armour \n https://static.drips.pw/rotmg/wiki/Armor/Leather%20Armor/T4%20Bearskin%20Armor.png","T1 Heavy Armour \n https://static.drips.pw/rotmg/wiki/Armor/Heavy%20Armor/T3%20Silver%20Chainmail.png","T1 Robe \n https://static.drips.pw/rotmg/wiki/Armor/Robes/T4%20Robe%20of%20the%20Conjurer.png",
  "T1 Leather Armour \n https://static.drips.pw/rotmg/wiki/Armor/Leather%20Armor/T4%20Bearskin%20Armor.png","T1 Heavy Armour \n https://static.drips.pw/rotmg/wiki/Armor/Heavy%20Armor/T3%20Silver%20Chainmail.png","T1 Robe \n https://static.drips.pw/rotmg/wiki/Armor/Robes/T4%20Robe%20of%20the%20Conjurer.png",
  "T1 Leather Armour \n https://static.drips.pw/rotmg/wiki/Armor/Leather%20Armor/T4%20Bearskin%20Armor.png","T1 Heavy Armour \n https://static.drips.pw/rotmg/wiki/Armor/Heavy%20Armor/T3%20Silver%20Chainmail.png","T1 Robe \n https://static.drips.pw/rotmg/wiki/Armor/Robes/T4%20Robe%20of%20the%20Conjurer.png",
  "T2 Leather Armour \n https://static.drips.pw/rotmg/wiki/Armor/Leather%20Armor/T7%20Studded%20Leather%20Armor.png","T2 Heavy Armour \n https://static.drips.pw/rotmg/wiki/Armor/Heavy%20Armor/T6%20Mithril%20Chainmail.png","T2 Robe \n https://static.drips.pw/rotmg/wiki/Armor/Robes/T10%20Robe%20of%20the%20Moon%20Wizard.png",
  "T2 Leather Armour \n https://static.drips.pw/rotmg/wiki/Armor/Leather%20Armor/T7%20Studded%20Leather%20Armor.png","T2 Heavy Armour \n https://static.drips.pw/rotmg/wiki/Armor/Heavy%20Armor/T6%20Mithril%20Chainmail.png","T2 Robe \n https://static.drips.pw/rotmg/wiki/Armor/Robes/T10%20Robe%20of%20the%20Moon%20Wizard.png",
  "T3 Leather Armour \n https://i.imgur.com/Wvu0LU7.png","T3 Heavy Armour \n https://static.drips.pw/rotmg/wiki/Armor/Heavy%20Armor/T12%20Acropolis%20Armor.png","T3 Robe \n https://static.drips.pw/rotmg/wiki/Armor/Robes/T12%20Robe%20of%20the%20Grand%20Sorcerer.png",
  "UT Obsidian Armour \n https://static.drips.pw/rotmg/wiki/Untiered/Almandine%20Armor%20of%20Anger.png"];
  var randNum = Math.floor(Math.random() * Math.floor(armours.length));
  database[username]["Armour"] = armours[randNum];
  fs.writeFile('characters.txt',JSON.stringify(database), function(err){
    if (err) throw err;
  });
  return username + " has obtained " + armours[randNum];
}

function challenge(challenger,challenged,channelID){
  attacker = challenger;
  defender = challenged;
  bot.sendMessage({
      to: channelID,
      message: challenger + " has challenged " + challenged + "." + challenged + ", do you accept this honorable duel? If yes, type '!duel', if no, type '!noduel'."
  });
}

function duel(challenger,challenged,channelID){
  bot.sendMessage({
      to: channelID,
      message: "The duel will now commence. " + challenger + ", what would you like to do? Choose between '!attack' and '!magic'."
  });
}

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
            case 'mission':
                bot.sendMessage({
                    to: channelID,
                    message: cbrogun()
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
                    message: 'Here are the commands: \n !help \n !hi \n !magic8 (insert yes or no question) \n !love (insert name) \n !random (insert number) \n !joke \n !start (to start your adventure!) \n !inventory (to check your inventory) \n !scavenge (to get a random weapon!) \n !mission (to get a random cbro gun)'
                });
                break;
            case 'inventory':
                bot.sendMessage({
                    to: channelID,
                    message: user + " has " + database[user]["Stats"]["HP"] + " hp right now. " + user + " has \n" + database[user]["Weapons"] + "\n and \n" + database[user]["Armour"] + "\n and \n" + database[user]["MagicAbilities"] + "."
                });
                break;
            case 'start':
                bot.sendMessage({
                    to: channelID,
                    message: createNewChar(user)
                });
                break;
            case 'infoT1Dagger':
                bot.sendMessage({
                    to: channelID,
                    message: "T1 Dagger \n https://static.drips.pw/rotmg/wiki/Weapons/Daggers/T4%20Silver%20Dagger.png \n DMG: 10-20 \n SPD: 3 \n This dagger is very standard for thieves to carry, as it is very cheap."
                });
                break;
            case 'infoT1Spear':
                bot.sendMessage({
                    to: channelID,
                    message: "T1 Spear \n https://static.drips.pw/rotmg/wiki/Weapons/Staves/T1%20Firebrand%20Staff.png \n DMG: 40-60 \n SPD: 1 \n This spear is badly balanced and is used by only the militia."
                });
                break;
            case 'infoT1Sword':
                bot.sendMessage({
                    to: channelID,
                    message: "T1 Sword \n https://static.drips.pw/rotmg/wiki/Weapons/Swords/T6%20Glass%20Sword.png \n DMG: 20-40 \n SPD: 2 \n Swords like this are mass produced for the armies of Oryx."
                });
                break;
            case 'infoT1Bow':
                bot.sendMessage({
                    to: channelID,
                    message: "T1 Bow \n https://static.drips.pw/rotmg/wiki/Weapons/Bows/T4%20Ironwood%20Bow.png \n DMG: 45 \n SPD: 1 \n Bows were orriginally invented by the Elves but like all inventions were copied and then worse versions like this were created in its place."
                });
                break;
            case 'infoT1HeavyArmour':
            bot.sendMessage({
                to: channelID,
                message: "T1 Heavy Armour \n https://static.drips.pw/rotmg/wiki/Armor/Heavy%20Armor/T3%20Silver%20Chainmail.png \n HP: 50 \n SPD: 0 \n Armour like this was mass produced and issued to militia everywhere."
              });
              break;
            case 'scavenge':
                bot.sendMessage({
                    to: channelID,
                    message: addWeapon(user)
                });
            case 'scavenge':
                bot.sendMessage({
                    to: channelID,
                    message: addArmour(user)
                });
            case 'scavenge':
                bot.sendMessage({
                    to: channelID,
                    message: addMagic(user)
                });
                break;
            case 'challenge':
                challenge(user,args,channelID)
            break;
            case 'noduel':
                bot.sendMessage({
                    to: channelID,
                    message: "OK YOU COWARD!"
                });
            break;
            case 'duel':
                duel(user,args,channelID)
            break;
            case 'attack':
                if (user == attacker){
                  //modify the defender
                }
            break;
            // Just add any case commands if you want to..
         }
     }
});
