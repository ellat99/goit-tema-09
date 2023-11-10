import Vimeo from '@vimeo/player';
import throttle from 'lodash/throttle';

const player = new Vimeo(document.getElementById('vimeo-player'));

const storageKey = 'videoplayer-current-time';

player.on('timeupdate', throttle(updateLocalStorage, 1000));

function updateLocalStorage(data) {
  const currentTime = data.seconds;
  localStorage.setItem(storageKey, currentTime);
}

const savedTime = localStorage.getItem(storageKey);

if (savedTime) {
  player.setCurrentTime(parseFloat(savedTime));
}
