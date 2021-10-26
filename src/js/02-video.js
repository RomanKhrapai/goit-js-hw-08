import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player', {
    id: "vimeo-player",
    width: 640
});



const onTimeUpDate = function(data){
    localStorage.setItem("videoplayer-current-time", data.seconds);
}


player.on('timeupdate', throttle (onTimeUpDate ,  1000 ));

player.setCurrentTime(localStorage.getItem("videoplayer-current-time"))
.then().catch(
    function(error) {
    switch (error.name) {
        case 'RangeError':
           console.log('error-time')
            break;

        default:
            console.log('error')
        
            break;
    }
});