function make_album(artist_name:string , album_title:string , tracks?: number){
    let album:{
        artist: string, 
        title: string,
        tracks?: number;
    }={
        artist: artist_name,
        title: album_title,
    };


    if(tracks !== undefined){
        album.tracks=tracks
    }

    return album
};

//calling 3 function with different arguments and storing in variables

let album1 = make_album("artist1" , "title1" ,);
let album2 = make_album("sajida" , "title2" ,);
let album3 = make_album("iqra" , "title2" ,);


//printing the variables
console.log(album1);

console.log(album2);

console.log(album3);
