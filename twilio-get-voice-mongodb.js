exports.handler = function(context, event, callback) {
  // Use the Twilio Node.js SDK to build an XML response
  const twiml = new Twilio.twiml.VoiceResponse();

  twiml.pause({length: 5});
  // Use the <Gather> verb to collect user input
    twiml.gather({
        input: 'speech',
        action: 'https://maize-insect-8138.twil.io/gather-intro',
        hints: "please, tell, me, if, you, are, a, party's, five, digit, extension, member, group, leader, agent, provider, prospective member, welcome to Select Account",
        speechTimeout: '2'
    });

  console.log(Date() + "   going to /gather-intro");
  // Render the response as XML in reply to the webhook request
  callback(null, twiml)

};
