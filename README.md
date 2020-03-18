# Click-A-Rama - A React Memory Game
[Click-A-Rama Live Deployment](https://jhaarla.github.io/click-a-rama/)
![Click-A-Rama screenshot](https://github.com/JHaarla/click-a-rama/blob/master/public/images/Click-A-Rama.png)

Click-A-Rama is a fun memory game created with React. The game begins when the user clicks an image. The goal is to NOT click the same image twice. The twist: the images get shuffled after every click. It's a lot tougher than it sounds. See how far you can get... Can you get all 12?

## Under the Hood
This app uses React.js to render and update the DOM via state changes. When an image is clicked, it is flagged as clicked (not visible to the player). The images get shuffled. If the player clicks another not previously clicked image, their score increases. The app keeps a track of the player's current score and the high score and updates each via React state changes. If the player clicks every picture without any doubles, they win with a perfect score! Once the player clicks on an image that has already been clicked, the game is over...
[Click-A-Rama Live Deployment](https://jhaarla.github.io/click-a-rama/)
