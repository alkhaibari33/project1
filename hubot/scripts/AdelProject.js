'use strict'

// Description:
//   Example scripts for you to examine and try out.
//
// Notes:
//   They are commented out by default, because most of them are pretty silly and
//   wouldn't be useful and amusing enough for day to day huboting.
//   Uncomment the ones you want to try and experiment with.
//
//   These are from the scripting documentation: https://github.com/github/hubot/blob/master/docs/scripting.md

module.exports = (robot) => {

  robot.hear(/Hello/, function(res) {
    let responses = ["Hello!", "Hi!","yeb yeb Hi", "ASLAME ALIEKUM MY FRIEND :)", "Welcome to you my Friend :)" ]
    let rand = Math.floor(Math.random() * responses.length)
    return res.send(`${responses[rand]}`);
  });
  robot.hear(/badger/i, (res) => {
    res.send("Badgers? BADGERS? YES WE DON'T NEED NO STINKIN ")
  })
  //
  robot.respond(/open the (.*) doors (.*)/i, (res) => {
    const doorType = res.match[1]
    const doorType2 = res.match[2]
  
    // if (doorType === 'pod bay') {
    //   res.reply('I'm afraid I can't let you do that.')
    //   return
    // }
    // if(doorType2 === "hmm"){
    //   res.reply('hmmm... what?')
    //   return
    // }
  
    res.reply(`Closing ${doorType} doors ${doorType2}`)
  })
  
  robot.hear(/I like Apple/i, (res) => {
    res.emote('makes a good Apple')
  })
  
  const lulz = ['lol', 'rofl', 'lmao']
  
  robot.respond(`/${lulz.join('|')}/i`, (res) => {
    res.send(res.random(lulz))
  })
  
  //robot.respond (/I don 't like Ali-I-am/i, (res) => {
  //room =  'joemanager'
   //robot.messageRoom (room,'Someone does not like Dr. Seus')
  //res.reply  ('That Ali-I-am\nThat Ali-I-am\nI do not like\nthat Ali-I-am')

  //robot.hear (/Sam-I-am/i, (res) =>
   // room =  res.envelope.user.name
   // robot.messageRoom (room, 'That Sam-I-am\nThat Sam-I-am\nI do not like\nthat Sam-I-am')
  //)
  // const lulz = ['lol', 'rofl', 'lmao']
  //
  // robot.respond(`/${lulz.join('|')}/i`, (res) => {
  //   res.send(res.random(lulz))
  // })
  //
  // robot.topic((res) => {
  //   res.send(`${res.message.text}? That’s a Paddlin`)
  // })
  //
  // const enterReplies = ['Hi', 'Target Acquired', 'Firing', 'Hello friend.', 'Gotcha', 'I see you']
  // const leaveReplies = ['Are you still there?', 'Target lost', 'Searching']
  //
  // robot.enter((res) => {
  //   res.send(res.random(enterReplies))
  // })
  // robot.leave((res) => {
  //   res.send(res.random(leaveReplies))
  // })
  //
  // const answer = process.env.HUBOT_ANSWER_TO_THE_ULTIMATE_QUESTION_OF_LIFE_THE_UNIVERSE_AND_EVERYTHING
  //
  // robot.respond(/what is the answer to the ultimate question of life/, (res) => {
  //   if (answer) {
  //     res.send(`${answer}, but what is the question?`)
  //     return
  //   }
  //
  //   res.send('Missing HUBOT_ANSWER_TO_THE_ULTIMATE_QUESTION_OF_LIFE_THE_UNIVERSE_AND_EVERYTHING in environment: please set and try again')
  // })
  //
  // robot.respond(/you are a little slow/, (res) => {
  //   setTimeout(() => res.send('Who you calling "slow"?'), 60 * 1000)
  // })
  //
  // let annoyIntervalId = null
  //
  // robot.respond(/annoy me/, (res) => {
  //   if (annoyIntervalId) {
  //     res.send('AAAAAAAAAAAEEEEEEEEEEEEEEEEEEEEEEEEIIIIIIIIHHHHHHHHHH')
  //     return
  //   }
  //
  //   res.send('Hey, want to hear the most annoying sound in the world?')
  //   annoyIntervalId = setInterval(() => res.send('AAAAAAAAAAAEEEEEEEEEEEEEEEEEEEEEEEEIIIIIIIIHHHHHHHHHH'), 1000)
  // })
  //
  // robot.respond(/unannoy me/, (res) => {
  //   if (!annoyIntervalId) {
  //     res.send('Not annoying you right now, am I?')
  //     return
  //   }
  //
  //   res.send('OKAY, OKAY, OKAY!')
  //   clearInterval(annoyIntervalId)
  //   annoyIntervalId = null
  // })
  //
  //
  // robot.router.post('/hubot/chatsecrets/:room', (req, res) => {
  //   const room = req.params.room
  //   const data = JSON.parse(req.body.payload)
  //   const secret = data.secret
  //
  //   robot.messageRoom(room, `I have a secret: ${secret}`)
  //
  //   res.send('OK')
  // })
  //
  // robot.error((error, response) => {
  //   const message = `DOES NOT COMPUTE: ${error.toString()}`
  //   robot.logger.error(message)
  //
  //   if (response) {
  //     response.reply(message)
  //   }
  // })
  //
  // robot.respond(/have a soda/i, (response) => {
  //   // Get number of sodas had (coerced to a number).
  //   const sodasHad = +robot.brain.get('totalSodas') || 0
  //
  //   if (sodasHad > 4) {
  //     response.reply('I’m too fizzy…')
  //     return
  //   }
  //
  //   response.reply('Sure!')
  //   robot.brain.set('totalSodas', sodasHad + 1)
  // })
  //
  // robot.respond(/sleep it off/i, (res) => {
  //   robot.brain.set('totalSodas', 0)
  //   res.reply('zzzzz')
  // })
  }
