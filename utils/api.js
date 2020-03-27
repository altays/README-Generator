const axios = require("axios");

// function getUser(username) {
//   axios
//     .get("https://api.github.com/users/"+username)
//     .then(response => 
//       // let userImg = response.data.avatarURL;
//       console.log(response.data.avatar_url + " " + "response.data");
//       console.log(response))}

function getUser(username) {
    const queryUrl = `https://api.github.com/users/${username}/events/public`;

    axios.get(queryUrl).then(function(response) {
      const responseData = response.data;
      // console.log(responseData)
      // loop - pull first one with PushEvent
      let pushEvent;
      let pushEventEmail;
      let pushEventAvatar;
      let pushArray = [];

      for (entry of responseData) {
        if (entry.type === "PushEvent") {
          pushEvent = entry;
        }
      }
      
      pushEventEmail = pushEvent.payload.commits[0].author.email;
      pushEventAvatar = pushEvent.actor.avatar_url;
      pushArray = [pushEventEmail, pushEventAvatar];
      // console.log(pushArray);
      return pushArray;

  });

}

// figure out how to return the push array

// console.log(getUser("altays"));


// what am I exporting? review syntax
module.exports = {
  getUser:getUser
}
