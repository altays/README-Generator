const axios = require("axios");

function getUser(username) {
    const queryUrl = `https://api.github.com/users/${username}/events/public`;
    
    let pushEvent;
    let pushEventEmail;
    let pushEventAvatar;
    let pushArray;
    
    axios.get(queryUrl).then(function(response) {
      const responseData = response.data;
      // console.log(responseData)
      // loop - pull first one with PushEvent


      for (entry of responseData) {
        if (entry.type === "PushEvent") {
          pushEvent = entry;
        }
      }
      
      pushEventEmail = pushEvent.payload.commits[0].author.email;
      pushEventAvatar = pushEvent.actor.avatar_url;
      
      pushArray = [pushEventEmail, pushEventAvatar];
      // console.log(pushArray)
     
    }

   
  );
  return pushArray;
}

// figure out how to return the push array
// console.log(getUser("altays"));



module.exports = {
  getUser:getUser
}
