import waterSound from './waterSound.mp3'
import errorSound from './errorSound.mp3'
import FacebockLikeSound from './facebook-like-sound-effect-prosounds-128-kbps_avrdZVPN.mp3'
import likeSound from './likeSound.mp3'
import doneSound from './doneSound.mp3'
import hover from './hover.m4a'
export let WaterPlay=()=>{
    new Audio(waterSound).play()
}
export let ErrorPlay=()=>{
    new Audio(errorSound).play()
}
export let LikePlay=()=>{
    new Audio(FacebockLikeSound).play()
}
export let DonePlay=()=>{
    new Audio(doneSound).play()
}
export let Like2Play=()=>{
    new Audio(likeSound).play()
}
export let HoverPlay=()=>{
    new Audio(hover).play()
}