
POST    /auth/signup           	 -  creates a new user\
POST    /auth/signin          	 -  login a user (return jwt token)\

GET     /playlist    		         -  gets logged user playlists\
GET     /playlist/followed 		   -  gets followed playlists\
GET     /playlist/public   		   -  gets publlic playlists avaible to follow
POST    /playlist   		         -  creates a playlist\
POST    /playlist/follow/:id     -  follow selected playlist (if its public)\
POST    /playlist/unfollow/:id	 -  unfollow selected playlist in condition it hasn't been followed before\
PATCH   /playlist/edit/:id       -  edit selected playlist (if owned)\
DELETE  /playlist/delete/:id     -  delete selected playlist (if owned)\
GET     /playlist/info/:id       -  get one selected playlist information\

POST    /video/add/:idPlaylisty             -  add video to the database and asignit to the selected playlist \
DELERE /video/remove/:idPlaylist/:idVideo   - usuwa video z playlist, nie usuwa video z bazy danych\
