function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
;
var album1 = make_album("artist1", "title1");
var album2 = make_album("sajida", "urooj");
var album3 = make_album("iqra", "aleena");
console.log(album1);
console.log(album2);
console.log(album3);
