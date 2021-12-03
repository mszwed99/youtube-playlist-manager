
POST    /auth/signup           	 -  tworzy nowego użytkownika\
POST    /auth/signin          	 -  loguje użytkownika ( zwraca token )\

GET     /playlist    		    	   -  zwraca listę playlist użytkownika\
GET     /playlist/followed 		   -  zwraca listę obserowanych playlist\
GET     /playlist/public   		   -  zwraca listę publicznych playlist\
POST    /playlist/create   		   -  tworzy playliste ( name: string, isPublic:bool )\
POST    /playlist/follow/:id		 -  obserwuje playliste ( pod warunkiem, że jest publiczna )\
POST    /playlist/unfollow/:id	 -  przestaje obserować playliste ( pod warunkiem, że była wcześniej obserwowana )\
PATCH   /playlist/edit/:id       -  edytuje playlist o podanym id ( name: string, isPublic: bool , tylko wtedy kiedy użytkownik jest jej wlascicielem )\
DELETE  /playlist/delete/:id     -  ususwa playliste od danym id ( tylko wtedy kiedy użytkownik jest jej wlascicielem )\
GET     /playlist/:id             -  zwraca informacje o playliscie

POST    /video/add/:idPlaylisty    - dodaje video do bazy danych, a następnie przypisuje je do playlisty ( videoId, title, channelTitle, description, publishTime, thumbnail )
