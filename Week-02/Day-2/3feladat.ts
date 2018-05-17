'use strict';

export {};

// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!

let url: string = 'https//www.reddit.com/r/nevertellmethebots';

url = url.replace('bots', 'odds');

// url = url.replace('dots', 'odds');
// console.log(url);

// console.log(url.replace('odds' 'bots'));

url = url.replace('s', 's:');


console.log(url);