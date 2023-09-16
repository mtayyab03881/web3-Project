function make_album(artist: string, title: string, tracks?: number): { artist: string; title: string; tracks?: number } {
    let album = {
      artist: artist,
      title: title,
    };
  
    if (tracks !== undefined) {
      album.tracks = tracks;
    }
  
    return album;
  }
  
  // Creating album dictionaries
  const album1 = make_album("Artist 1", "Album Title 1");
  const album2 = make_album("Artist 2", "Album Title 2", 12);
  const album3 = make_album("Artist 3", "Album Title 3", 8);
  
  // Printing album information
  console.log(album1);
  console.log(album2);
  console.log(album3);
  