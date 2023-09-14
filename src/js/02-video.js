import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


const localStorageKey = 'videoplayer-current-time';


const onPlay = function(data) {
    localStorage.setItem(localStorageKey, data.seconds.toString());
};

player.on('timeupdate', throttle(onPlay, 1000));

const currentTime = Number(localStorage.getItem(localStorageKey));

player.setCurrentTime(currentTime).then(function (seconds) {
   
}).catch(function (error) {
    switch (error.name) {
        case 'RangeError':
           
        default:
           
            break;
    }
});
