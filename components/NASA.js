'use strict';

const request = require('request');

module.exports = {
  metadata: () => ({
    name: 'NASA',
    properties: {
      transition: { type: 'string' },
    },
  }),
  invoke: (conversation, done) => {
    const api_url = "https://api.nasa.gov/planetary/apod?api_key=j3FEfpjWIy0TjfDt6vBNh0aWcbbNHpytL9rnYahB";
    // const { transition } = conversation.properties();
    request(api_url, (error, response, body)=>{
      if(error) {
        conversation
        .reply('An error occurred.')
        .reply(error);
        done();
      }
      const { date, explanation, title, url, hdurl } = JSON.parse(body);
      conversation
        .reply(`Date: ${date}`)
        .reply(`Title: ${title}`);
      done();
    });
  }
};
