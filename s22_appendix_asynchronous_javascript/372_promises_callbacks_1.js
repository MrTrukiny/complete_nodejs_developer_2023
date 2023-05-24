// Callback Hell Example

grabTweets('twitter/andreineagoei', (error, andreiTweets) => {
  if (error) {
    throw error;
  }
  displayTweets(andreiTweets);
  grabTweets('twitter/elonmusk', (error, elonTweets) => {
    if (error) {
      throw error;
    }
    displayTweets(elonTweets);
    grabTweets('twitter/vitalikbuterin', (error, vitalikTweets) => {
      if (error) {
        throw error;
      }
      displayTweets(vitalikTweets);
    });
  });
});
