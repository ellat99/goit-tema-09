/**Aici se importă funcția throttle din biblioteca lodash.throttle. Funcția throttle este utilizată pentru a limita numărul de apeluri ale unei funcții, astfel încât să nu fie apelată în mod excesiv. */
const iframe = document.querySelector('iframe');
const player = newPlayer(iframe);
/**Această instanță player va permite să controlați videoclipul Vimeo. */
const savedVideo = localStorage.getItem('video-current');
/**se recupereze timpul salvat din localStorage utilizând cheia 'videoplayer-current-time'. Acest timp salvat reprezintă ultimul timp la care s-a oprit videoclipul. */
let currentTime = 0;
//urmareste timpul curent de redare al videoclipului.
console.log('savedTime=', savedTime);
if (savedTime > 0) {
  currentTime = savedTime;
}
player.on(
  'timeupdate',
  throttle(() => {
    player
      .getCurrentTime()
      .then(function (seconds) {
        currentTime = seconds;
      })
      .catch(function (error) {
        console.log(error + 'occurred');
      });
    localStorage.setItem('video-current', currentTime.toString());
  }, 1000)
);
