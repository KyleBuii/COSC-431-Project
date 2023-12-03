import "./browse.scss";
import { Component } from 'react';
import { IconContext } from 'react-icons';
import { FaQuestionCircle } from "react-icons/fa";

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

const collections = {
    "0xf201894ae8b9fa32cdA417389A87095EA134E8c5": "wvrps-by-warpsound",
    "0x63A934da457E9D19Cdc4a6016961b6D571944818": "fvck-avatar-essence"
};

class Browse extends Component{
    constructor(props){
        super(props);
        this.state = {
            songsPopup: false
        };
        this.handlePopup = this.handlePopup.bind(this);
    };
    createCard(_whatType, _item, _genre){
        const divCard = document.createElement("div");
        const divCardFront = document.createElement("div");
        const divCardBack = document.createElement("div");
        const divCardBackList = document.createElement("div");
        const img = document.createElement("img");
        /// If the card is an album or song
        switch(_whatType){
            case "album":
                divCard.className = "card";
                divCardFront.className = "card-album " + songColors[_genre];
                divCardBack.className = "card-album back " + songColors[_genre];
                const divSideBar = document.createElement("div");
                divSideBar.className = "card-album-side-bar";
                const pAlbumName = document.createElement("p");
                if(_item["collection"].name.length >= 26){
                    pAlbumName.innerHTML = _item["collection"].name.slice(0, 26) + "...";
                }else{
                    pAlbumName.innerHTML = _item["collection"].name;   
                };
                divSideBar.appendChild(pAlbumName);
                divCardFront.appendChild(divSideBar);
                img.src = _item["collection"].image_url;
                img.className = "image-album";        
                divCardFront.appendChild(img);
                divCard.appendChild(divCardFront);
                divCardBackList.className = "card-album-list";
                divCardBackList.innerHTML = `
                    <p>Total volume: ${Math.round(_item["collection"]["stats"].total_volume)} ETH</p>
                    <p>Owners: ${_item["collection"]["stats"].num_owners}</p>
                    <p>Floor price: ${Math.round(_item["collection"]["stats"].floor_price * 10000)/10000} ETH</p>
                `;
                divCardBack.appendChild(divCardBackList);
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
                const audio = new Audio(_item.animation_url);
                audio.preload = "metadata";
                audio.addEventListener("ended", function(){
                    iconPlayPause.src = iconPlayPause.src = require("./icons/play.png");
                    var minutes = Math.floor(audio.duration / 60);
                    var seconds = Math.floor(audio.duration % 60);
                    if(minutes < 10){
                        minutes = "0" + minutes;
                    };
                    if(seconds < 10){
                        seconds = "0" + seconds;
                    };
                    pAudioDuration.innerHTML = minutes + ":" + seconds;
                });
                iconPlayPause.onclick = (e) => {
                    e.stopPropagation();
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
                img.src = _item.image_url;
                img.className = "image-song";        
                divCardFront.appendChild(img);
                divCardFront.innerHTML += `
                    <p>${_item.name}</p>
                `;
                for(const i in _item["traits"]){
                    if(_item["traits"][i].trait_type === "Artist"){
                        divCardFront.innerHTML += `
                            <em>${_item["traits"][i].value}</em>
                        `;
                    };
                };
                const pAudioDuration = document.createElement("p");
                audio.onloadedmetadata = () => {
                    var minutes = Math.floor(audio.duration / 60);
                    var seconds = Math.floor(audio.duration % 60);
                    if(minutes < 10){
                        minutes = "0" + minutes;
                    };
                    if(seconds < 10){
                        seconds = "0" + seconds;
                    };
                    pAudioDuration.innerHTML = minutes + ":" + seconds;
                };
                audio.addEventListener("timeupdate", function(){
                    const timeLeft = audio.duration - audio.currentTime;
                    var minutes = Math.floor(timeLeft / 60);
                    var seconds = Math.floor(timeLeft % 60);
                    if(minutes < 10){
                        minutes = "0" + minutes;
                    };
                    if(seconds < 10){
                        seconds = "0" + seconds;
                    };
                    pAudioDuration.innerHTML = minutes + ":" + seconds;
                });
                divCardFront.appendChild(pAudioDuration);
                divCardFront.appendChild(iconPlayPause);
                divCard.appendChild(divCardFront);
                divCardBackList.className = "card-song-list";
                divCardBackList.innerHTML = `
                    <p>Album: ${_item["collection"].name}</p>
                    <p>Creator: ${_item["creator"]["user"].username}</p>
                `;
                divCardBack.appendChild(divCardBackList);
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
    handlePopup(){
        this.setState(prevState => ({
            songsPopup: !prevState.songsPopup
        }), () => {
            const popup = document.getElementById("songs-help-popup");
            if(this.state.songsPopup === false){
                popup.style.visibility = "hidden";
            }else{
                popup.style.visibility = "visible";
            };
        });
    };
    async componentDidMount(){
        /// Get random NFTs
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'X-API-KEY': process.env.REACT_APP_OPEN_SEA_API_KEY}
        };
        try{
            for(const i in collections){
                const responseCollection = await fetch("https://api.opensea.io/api/v1/collection/" + collections[i], options);
                const resultCollection = await responseCollection.json();
                this.createCard("album", resultCollection, "jazz");
                const responseSong = await fetch("https://api.opensea.io/api/v1/assets?owner=" + i + "&collection=" + collections[i] + "&limit=20&include_orders=false", options);
                const resultSong = await responseSong.json();
                const songColorKeys = Object.keys(songColors);
                for(const i in resultSong["assets"]){
                    this.createCard("song", resultSong["assets"][i], songColorKeys[Math.floor(Math.random()*songColorKeys.length)]);
                };
            };
        }catch(err){
            console.error(err);
        };
        /// Create songs help popup
        const e = document.getElementById("songs-help-popup");
        e.onclick = () => {
            this.setState({
                songsPopup: false
            }, () => {
                e.style.visibility = "hidden";     
            });
        };
        for(const i in songColors){
            const containerGenre = document.createElement("div");
            containerGenre.className = "container-genre";
            /// Genre name
            const genre = document.createElement("p");
            genre.innerHTML = i.slice(0, 1).toUpperCase() + i.slice(1);
            /// Genre color
            const genreColor = document.createElement("div");
            genreColor.className = "square-colored " + songColors[i];
            containerGenre.appendChild(genre);
            containerGenre.appendChild(genreColor);
            e.appendChild(containerGenre);
        };
    };
    render(){
        return(
            <div className="catalog">
                <div id="panel-featured"></div>
                <h1 className="label-section">Albums</h1>
                <div id="catalog-albums"></div>
                <div className="label-section with-button">
                    <h1>Songs</h1>
                    <button className="button-help"
                        onClick={this.handlePopup}>
                        <IconContext.Provider value={{ size: "1rem", className: "global-class-name" }}>
                            <FaQuestionCircle/>
                        </IconContext.Provider>
                    </button>
                </div>
                <div id="songs-help-popup"></div>
                <div id="catalog-songs"></div>
            </div>
        );
    };
};

export default Browse;