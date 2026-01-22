
// var sounds = {
//     KeyA: new Audio('./30.mp3'),
//     KeyS: new Audio('./31.mp3'),
//     KeyD: new Audio('./32.mp3'),
//     KeyF: new Audio('./33.mp3'),
//     KeyG: new Audio('./34.mp3'),
//     KeyH: new Audio('./35.mp3'),
//     KeyJ: new Audio('./36.mp3'),
//     KeyK: new Audio('./37.mp3'),
//     KeyL: new Audio('./38.mp3'),
//     KeyZ: new Audio('./39.mp3'),
//     KeyX: new Audio('./40.mp3'),
//     KeyC: new Audio('./41.mp3'),
//     KeyV: new Audio('./42.mp3'),
//     KeyB: new Audio('./43.mp3'),
//     KeyN: new Audio('./44.mp3'),
//     KeyM: new Audio('./45.mp3'),
//     KeyQ: new Audio('./46.mp3'),
//     KeyW: new Audio('./47.mp3'),
//     KeyE: new Audio('./48.mp3'),
//     KeyR: new Audio('./49.mp3'),
//     KeyT: new Audio('./50.mp3'),
//     KeyY: new Audio('./51.mp3'),
//     KeyU: new Audio('./52.mp3'),
//     KeyI: new Audio('./53.mp3'),
//     KeyO: new Audio('./54.mp3'),
//     KeyP: new Audio('./55.mp3'),
 
// }

// document.body.addEventListener('keydown', function(e) {
//     if (sounds[e.code]) {
//         sounds[e.code].currentTime = 0
//         sounds[e.code].play()
//     }
// })

              //CODE MODIFICATION
var sounds = {}

var keys = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

keys.split("").forEach((key, index) => {
    sounds["Key" + key] = new Audio(`./${30 + index}.mp3`)
})

document.body.addEventListener("keydown", function(e) {
    var sound = sounds[e.code]
    if (sound) {
        sound.currentTime = 0
        sound.play()
    }
})



