const axios = require("axios");

function getUser(username) {
  const queryUrl = `https://api.github.com/users/${username}/events/public`;

    let pushEvent;
    let pushEventEmail;
    let pushEventAvatar;

    return axios.get(queryUrl)
      .then(function(response){

        const responseData = response.data;
        for (entry of responseData) {
          if (entry.type === "PushEvent") {
            pushEvent = entry;
          }
        }
    
        pushEventEmail = pushEvent.payload.commits[0].author.email;
        pushEventAvatar = pushEvent.actor.avatar_url;
        
        // returning data as an object
        return {email: pushEventEmail, avatar: pushEventAvatar}
      }).catch(error => {
        console.log(error)
      });
  };

module.exports = {
  getUser
}