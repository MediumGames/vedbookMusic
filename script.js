let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume = document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');

let timer;
let autoplay = 0;

let index_no = 0;
let playing_song = false;

// create an audio element
let track = document.createElement('audio');

// ALL SONGS
let All_songs = [
  {
      name: "Fearless",
      path: "music/Song1.mp3",
      img: "media/img8.jpg",
      singer: "singer"
  },
  {
    name: "Fearless 2",
    path: "music/Song1.mp3",
    img: "media/img8.jpg",
    singer: "singer2"
}   
];

// all functions


// load function ttps
function load_track(index_no){
    track.src = All_songs[index_no].path;
    title.innerHTML = All_songs[index_no].name;
    track_image.src = All_songs[index_no].img;
    artist.innerHTML = All_songs[index_no].singer;
    track.load();


    total.innerHTML = All_songs.length;
    present.innerHTML = index_no + 1;
    timer = setInterval(range_slider , 1000);
}
load_track(index_no);


//checking the song plays or not
function justplay(){
    if(playing_song==false){
        playsong();
    }else{
        pausesong();
    }
}


//play song
function playsong(){
    track.play();
    playing_song = true;
    play.innerHTML = '<i class="fa fa-pause"></i>';
}


//pause song
function pausesong(){
    track.pause();
    playing_song = false;
    play.innerHTML = '<i class="fa fa-play"></i>';
}


//next song
function next_song(){
    if (index_no < All_songs.length - 1){
        index_no += 1;
        load_track(index_no);
        playsong();
    }else{
        index_no = 0;
        load_track(index_no);
        playsong();
    }
}


//previous song
function previous_song(){
    if (index_no > 0){
        index_no -= 1;
        load_track(index_no);
        playsong();
    }else{
        index_no = All_songs.length;
        load_track(index_no);
        playsong();
    }
}




// volume bar
function volume_change(){
    volume_show.innerHTML = recent_volume.value
    track.volume = recent_volume.value / 100;
}


// change duration pos
function change_duration(){
    slider_position = track.duration * (slider.value / 100);
    track.currentTime = slider_position;
}


function range_slider(){
     let position = 0;

     // update slider
     if(!isNaN(track.duration)){
         position = track.currentTime * (100 / track.duration);
         slider.value = position;
     }
}

