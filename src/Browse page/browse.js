import "./browse.scss";
import { Component } from 'react';

const songColors = {
    "jazz": "light-blue",
    "pop": "pink",
    "metal": "dark-grey",
    "rock": "grey",
    "electronic": "yellow",
    "classical": "gold",
    "trap": "green",
    "dubstep": "blue",
    "drum-and-bass": "magenta",
    "edm": "white"
};

class Browse extends Component{
    createCard(_whatType, _name, _genre){
        /// Temporary variables (eventually will use a database)
        const tempImg = document.createElement("img");
        tempImg.src = require("./covers/no_title.jpg");
        tempImg.className = "image-song";
        const tempImgAlbum = document.createElement("img");
        tempImgAlbum.src = require("./covers/no_title+.jpg");
        tempImgAlbum.className = "image-album";
        const tempAudio = new Audio("https://upload.wikimedia.org/wikipedia/commons/1/15/Bicycle-bell.wav");
        const tempSongs = {
            "No title": {
                "album": "No title+",
                "image": tempImg,
                "artist": "Reol",
                "duration": "4:12",
                "price": "0.01",
                "genre": "pop",
                "owners": "1",
                "audio": tempAudio
            }
        };
        const tempAlbums = {
            "No title+": {
                "image": tempImgAlbum,
                "artist": "Reol",
                "duration": "25:38",
                "songs": {
                    "Hibikase": "4:11",
                    "Ooedo Ranvu": "3:01",
                    "drop pop candy": "3:45",
                    "No title": "4:04",
                    "Echo": "3:33",
                    "Asymmetry": "4:16",
                    "Gigantic O.T.N": "3:28"
                },
                "price": "0.07",
                "genre": "pop"
            }
        };

        const divCard = document.createElement("div");
        const divCardFront = document.createElement("div");
        const divCardBack = document.createElement("div");
        /// If the card is an album or song
        switch(_whatType){
            case "album":
                divCard.className = "card";
                divCardFront.className = "card-album " + songColors[_genre];
                divCardBack.className = "card-album back " + songColors[_genre];
                const divSideBar = document.createElement("div");
                divSideBar.className = "card-album-side-bar";
                divSideBar.innerHTML += `
                    <em>${tempAlbums[_name].artist}</em>
                    <p>${_name}</p>
                `;
                divCardFront.appendChild(divSideBar);
                divCardFront.appendChild(tempAlbums[_name].image);
                divCard.appendChild(divCardFront);
                const divCardBackSongList = document.createElement("div");
                divCardBackSongList.className = "card-album-song-list";
                for(const i in tempAlbums[_name].songs){
                    const divTemp = document.createElement("div");
                    divTemp.className = "space-evenly";
                    divTemp.innerHTML = `
                        <p>${i}</p>
                        <p>${tempAlbums[_name].songs[i]}</p>
                    `;
                    divCardBackSongList.appendChild(divTemp);
                };
                divCardBack.appendChild(divCardBackSongList);
                const label = document.createElement("p");
                label.className = "label-total-duration";
                label.innerHTML = tempAlbums[_name].duration;
                divCardBack.appendChild(label);
                divCard.appendChild(divCardBack);
                divCard.onclick = () => {
                    divCard.classList.toggle("flipped");
                };
                document.getElementById("catalog-albums").appendChild(divCard);
                break;
            case "song":
                divCard.className = "card";
                divCardFront.className = "card-song " + songColors[_genre];
                divCardBack.className = "card-song back " + songColors[_genre];
                const iconPlayPause = document.createElement("img");
                iconPlayPause.src = require("./icons/play.png");
                iconPlayPause.className = "icon-song";
                iconPlayPause.onclick = (e) => {
                    e.stopPropagation();
                    const audio = tempSongs[_name].audio;
                    if(audio){
                        if(audio.paused){
                            iconPlayPause.src = require("./icons/pause.png");
                            audio.play();
                        }else{
                            iconPlayPause.src = require("./icons/play.png");
                            audio.pause();   
                        };
                    };
                };
                divCardFront.appendChild(tempSongs[_name].image);
                divCardFront.innerHTML += `
                    <p>${_name}</p>
                    <em>${tempSongs[_name].artist}</em>
                    <p>${tempSongs[_name].duration}</p>
                `;
                divCardFront.appendChild(iconPlayPause);
                divCard.appendChild(divCardFront);
                divCardBack.innerHTML = `
                    <p>Album: ${tempSongs[_name].album}</p>
                    <p>Price: ${tempSongs[_name].price} ETH</p>
                    <p>Owners: ${tempSongs[_name].owners}</p>
                `;
                divCard.appendChild(divCardBack);
                divCard.onclick = () => {
                    divCard.classList.toggle("flipped");
                };
                document.getElementById("catalog-songs").appendChild(divCard);
                break;
            default:
                break;
        };
    };
    componentDidMount(){
        for(const i in songColors){
            this.createCard("song", "No title", i);
            this.createCard("album", "No title+", i);
        };
    };
    render(){
        return(
            <div className="catalog">
                <div id="panel-featured"></div>
                <h1 className="label-section">Albums</h1>
                <div id="catalog-albums"></div>
                <h1 className="label-section">Songs</h1>
                <div id="catalog-songs"></div>
            </div>
        );
    };
};

export default Browse;