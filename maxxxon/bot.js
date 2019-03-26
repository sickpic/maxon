const Discord = require("discord.js");
const client = new Discord.Client();
const ytdl = require("ytdl-core");

client.on("ready", () => {
    console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
    // docs refer to as the "ClientUser".
    client.user.setActivity("Warcraft III");

});


var msgAuthor = '';
var maxonExtraShoCount = 0;
var maxonShoUlta = ["ты ебу дал там или как", "тебе уебать?", "ШО", "а если я сейчас встану"];
var maxonShoAgro = ["да что блять", "шо ты хочешь", "че блять", "ШО", "че ты хочешь, заебал", "ну блять"];
var maxonSho = ["а", "шо", "че", "что", "да", "слушаю", "это я"];
var maxonCalled = false;


client.on('message', message => {


    if (!message.guild) return;

    if (message.author == client.user) {
        return
    }
    if (message.content.includes('Максон') || message.content.includes('максон') || maxonCalled) {
        maxonCalled = true;
        if (message.content.includes('зайди') || message.content.includes('заходи')) {
            if (maxonCalled) {
                maxonCalled = false;
                maxonExtraShoCount = 0;
                if (message.member.voiceChannel) {
                    if (message.member.voiceChannel) {
                        message.member.voiceChannel.join()
                            .then(connection => { // Connection is an instance of VoiceConnection
                                dispatcher = connection.playFile('C:/maxxxon/sounds/vlados.mp3');
                            })
                    }
                } else {
                    message.channel.send('так а хули никого нету в войсе');
                }
            }
        }
        if (message.content.includes('пока') || message.content.includes('уходи') || message.content.includes('ливай') || message.content.includes('пиздуй') || message.content.includes('досвид')) {
            if (maxonCalled) {
                maxonExtraShoCount = 0;
                maxonCalled = false;
                if (message.guild.voiceConnection) {
                    message.guild.voiceConnection.disconnect()

                } else {
                    message.channel.send('не понял блять');
                }
            }
        }
        if (message.content.includes('трав') && maxonCalled) {
            // Only try to join the sender's voice channel if they are in one themselves
            maxonExtraShoCount = 0;
            maxonCalled = false;
            if (message.guild.voiceConnection) {
                message.member.voiceChannel.join()
                    .then(connection => {
                        dispatcher = connection.playFile('C:/maxxxon/sounds/trava.mp3');
                    })
            } else {
                message.channel.send('хуета');
            }

        }
        if (message.content.includes('как') && maxonCalled) {
            if (message.content.includes('настроение') || message.content.includes('жизнь') || message.content.includes('дела') || message.content.includes('погода') || message.content.includes('ты')) {
                maxonExtraShoCount = 0;
                maxonCalled = false;
                // Only try to join the sender's voice channel if they are in one themselves
                if (message.member.voiceChannel) {
                    message.member.voiceChannel.join()
                        .then(connection => { // Connection is an instance of VoiceConnection
                            dispatcher = connection.playFile('C:/maxxxon/sounds/huevo.mp3');
                        })
                } else {
                    message.channel.send('так а хули никого нету в войсе');
                }
            }
            if (message.content.includes('говорит') || message.content.includes('звучит') || message.content.includes('разговаривает')) {
                maxonExtraShoCount = 0;
                maxonCalled = false;
                // Only try to join the sender's voice channel if they are in one themselves
                if (message.member.voiceChannel) {
                    message.member.voiceChannel.join()
                        .then(connection => { // Connection is an instance of VoiceConnection
                            dispatcher = connection.playFile('C:/maxxxon/sounds/eto_zvuchit.mp3');
                        })
                } else {
                    message.channel.send('так а хули никого нету в войсе');
                }
            }
            if (message.content.includes('говорит') || message.content.includes('звучит') || message.content.includes('разговаривает')) {
                maxonExtraShoCount = 0;
                maxonCalled = false;
                // Only try to join the sender's voice channel if they are in one themselves
                if (message.member.voiceChannel) {
                    message.member.voiceChannel.join()
                        .then(connection => { // Connection is an instance of VoiceConnection
                            dispatcher = connection.playFile('C:/maxxxon/sounds/eto_zvuchit.mp3');
                        })
                } else {
                    message.channel.send('так а хули никого нету в войсе');
                }
            }
            if (message.content.includes('сосед')) {
                maxonExtraShoCount = 0;
                maxonCalled = false;
                var tempNum = Math.floor(Math.random() * 100)
                // Only try to join the sender's voice channel if they are in one themselves
                if (message.member.voiceChannel) {
                    message.member.voiceChannel.join()
                        .then(connection => { // Connection is an instance of VoiceConnection
                            if (tempNum <= 49) {
                                msgAuthor = message.member.user.username;
                                dispatcher = connection.playFile('C:/maxxxon/sounds/sosed.mp3');
                            }
                            if (tempNum <= 99 && tempNum >= 50) {
                                msgAuthor = message.member.user.username;
                                dispatcher = connection.playFile('C:/maxxxon/sounds/uebal_bi.mp3');
                            }
                        })
                } else {
                    message.channel.send('так а хули никого нету в войсе');
                }
            }

            if (message.content.includes('в кино')) {
                maxonExtraShoCount = 0;
                maxonCalled = false;
                // Only try to join the sender's voice channel if they are in one themselves
                if (message.member.voiceChannel) {
                    message.member.voiceChannel.join()
                        .then(connection => { // Connection is an instance of VoiceConnection
                            dispatcher = connection.playFile('C:/maxxxon/sounds/venom.mp3');
                        })
                } else {
                    message.channel.send('так а хули никого нету в войсе');
                }
            }

            if (message.content.includes('тебе')) {
                maxonExtraShoCount = 0;
                maxonCalled = false;
                var tempNum = Math.floor(Math.random() * 100)
                if (message.member.voiceChannel) {
                    message.member.voiceChannel.join()
                        .then(connection => { // Connection is an instance of VoiceConnection
                            if (tempNum <= 9) {
                                msgAuthor = message.member.user.username;
                                dispatcher = connection.playFile('C:/maxxxon/sounds/prikolno.mp3');
                            }
                            if (tempNum <= 39 && tempNum >= 10) {
                                msgAuthor = message.member.user.username;
                                dispatcher = connection.playFile('C:/maxxxon/sounds/nenavizhu.mp3');
                            }
                            if (tempNum <= 99 && tempNum >= 40) {
                                msgAuthor = message.member.user.username;
                                dispatcher = connection.playFile('C:/maxxxon/sounds/hueta.mp3');
                            }
                        })
                } else {
                    message.channel.send('так а хули никого нету в войсе');
                }


            }
        }

        if (message.content.includes('кто') && maxonCalled) {
            maxonExtraShoCount = 0;
            maxonCalled = false;
            if (message.member.voiceChannel) {
                message.member.voiceChannel.join()
                    .then(connection => { // Connection is an instance of VoiceConnection
                        dispatcher = connection.playFile('C:/maxxxon/sounds/lisye_pidorasi.mp3');
                    })
            } else {
                message.channel.send('так а хули никого нету в войсе');
            }


        }

        if (message.content.includes('ты') && maxonCalled) {
            if (!message.content.includes('?')) {
                maxonExtraShoCount = 0;
                maxonCalled = false;
                var tempNum = Math.floor(Math.random() * 100)
                if (message.member.voiceChannel) {
                    message.member.voiceChannel.join()
                        .then(connection => { // Connection is an instance of VoiceConnection
                            if (tempNum <= 19) {
                                msgAuthor = message.member.user.username;
                                dispatcher = connection.playFile('C:/maxxxon/sounds/RAGE.mp3');
                            }
                            if (tempNum <= 39 && tempNum >= 20) {
                                msgAuthor = message.member.user.username;
                                dispatcher = connection.playFile('C:/maxxxon/sounds/zaebal.mp3');
                            }
                            if (tempNum <= 59 && tempNum >= 40) {
                                msgAuthor = message.member.user.username;
                                dispatcher = connection.playFile('C:/maxxxon/sounds/haha.mp3');
                            }
                            if (tempNum <= 79 && tempNum >= 60) {
                                msgAuthor = message.member.user.username;
                                dispatcher = connection.playFile('C:/maxxxon/sounds/besit.mp3');
                            }
                            if (tempNum <= 99 && tempNum >= 80) {
                                msgAuthor = message.member.user.username;
                                dispatcher = connection.playFile('C:/maxxxon/sounds/uebal_bi.mp3');
                            }
                        })
                } else {
                    message.channel.send('так а хули никого нету в войсе');
                }
            }

        }
        if (message.content.includes('?') && maxonCalled) {
            maxonExtraShoCount = 0;
            maxonCalled = false;
            var tempNum = Math.floor(Math.random() * 100)
            if (message.member.voiceChannel) {
                message.member.voiceChannel.join()
                    .then(connection => { // Connection is an instance of VoiceConnection
                        if (tempNum <= 49) {
                            msgAuthor = message.member.user.username;
                            dispatcher = connection.playFile('C:/maxxxon/sounds/ne.mp3');
                        }
                        if (tempNum <= 99 && tempNum >= 50) {
                            msgAuthor = message.member.user.username;
                            dispatcher = connection.playFile('C:/maxxxon/sounds/net.mp3');
                        }
                    })
            } else {
                message.channel.send('так а хули никого нету в войсе');
            }

        }

        if (message.content.includes('спой') && maxonCalled) {
            maxonExtraShoCount = 0;
            maxonCalled = false;
            if (message.member.voiceChannel) {
                message.member.voiceChannel.join()
                    .then(connection => { // Connection is an instance of VoiceConnection
                        const stream = ytdl('https://www.youtube.com/watch?v=EdH1d1UMKPE', {
                            filter: 'audioonly'
                        });
                        const dispatcher = connection.playStream(stream);
                    })
                    .catch(console.error);
            }
        }
        if (maxonCalled) {
            maxonExtraShoCount = maxonExtraShoCount + 1;
            if (maxonExtraShoCount >= 3) {
                var tempNum = Math.floor(Math.random() * 2)
                if (tempNum == 0) {
                    msgAuthor = message.member.user.username;
                    message.channel.send(msgAuthor);
                } else {
                    message.channel.send(maxonShoUlta[Math.floor(Math.random() * 5)]);
                }
            }
            if (maxonExtraShoCount == 2) {
                message.channel.send(maxonShoAgro[Math.floor(Math.random() * 6)]);
            }
            if (maxonExtraShoCount == 1) {
                message.channel.send(maxonSho[Math.floor(Math.random() * 6)]);
            }
        }
    }
})

client.login('token');
