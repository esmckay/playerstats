# playerstats

Site is hosted at: playerstats.esmckay.com

This is a barebones NBA Player Card react-app containing an active players' current season averages as well as their game log. The data is being pulled from balldontlie api. The data is fetched, returned in Json format and then displayed for an easy to use customer experience. When you load the website up, the player whose information is shown is Stephen Curry's. There are 3 different sets of information provided: player info: team, height, weight, position, season averages for the main statistical categories for basketball and a game log with the date and opponent followed by the relevant game stats.

There is a search feature that allows you to search for players that were on a team roster for the 2021-2022 season. Search results are displayed as cards on the screen. If you click on the players name, the search results will go away and the player you clicked on will become the active player for the site. If a player was listed on the roster and is in the database but did not play in a game, the page will show that there are now stats and will ask you to search for a different player. 

It is written in a way that it is compatible with both desktops and mobile using a media query. The main features that change on mobile is that the tables will be scrollable instead of shrinking in size and instead of displaying search results horizontally, they are displayed vertically on mobile devices.

There is a spinning basketball gif that is displayed as the website is loading up for the first time or if the page is refreshed.

This project was an undertaking. I found myself staying up into the early hours of the morning many nights in a row figuring out different peices of the code. It was addicting. There was one night I laid down in bed at 2 AM only to get up and go back to my computer 5 minutes later because I had a new idea. I loved doing this are there are so many other features and ideas I want to implement but I can only do so much in a limited amount of time with the limited skills I have. Next steps I want to take with it are to implement team data with player rosters. Then look at how teams do defensively against different position groups and track how many points, rebounds, assists, steals, blocks and turnovers they give up/force that are above a players average at any given position. I think this would be an insightful real world problem solver as opposed to a get my feet wet learning experience.  
