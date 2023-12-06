// SPDX-License-Identifier: MIT
// MUSIC CONTRACT
pragma solidity ^0.8.19;

contract MusicContract {
    struct Song {
        string title;
        string artist;
        string albumImageHash;
    }

    mapping(uint256 => Song) public songs;
    uint256 public songCount;

    event SongAdded(uint256 indexed id, string title, string artist, string albumImageHash);

    function addSong(string memory _title, string memory _artist, string memory _albumImageHash) public {
        songCount++;
        songs[songCount] = Song(_title, _artist, _albumImageHash);
        emit SongAdded(songCount, _title, _artist, _albumImageHash);
    }

    function setAlbumImageHash(uint256 _songId, string memory _albumImageHash) public {
        require(_songId <= songCount, "Invalid song ID");
        songs[_songId].albumImageHash = _albumImageHash;
        emit SongAdded(_songId, songs[_songId].title, songs[_songId].artist, _albumImageHash);
    }

    function getAlbumImageHash(uint256 _songId) public view returns (string memory) {
        require(_songId <= songCount, "Invalid song ID");
        return songs[_songId].albumImageHash;
    }
}
