var asteroidList = document.querySelector('ul.asteroids');
    var newAsteroid = document.createElement('li');
    newAsteroid.id = 'b555';
    newAsteroid.textContent = 'The Green Fox';
    asteroidList.appendChild(newAsteroid);
    var businessAsteroid = document.querySelector('.b328');
    asteroidList.removeChild(businessAsteroid);