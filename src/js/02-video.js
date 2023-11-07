import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Vimeo('vimeo-player', {
});

const STORAGE_KEY = 'videoplayer-current-time';

const savedTime = localStorage.getItem(STORAGE_KEY);

if (savedTime) {
  player.setCurrentTime(parseFloat(savedTime));
}

player.on('timeupdate', throttle(event => {
  const currentTime = event.seconds;
  localStorage.setItem(STORAGE_KEY, currentTime.toString());
}, 1000));
