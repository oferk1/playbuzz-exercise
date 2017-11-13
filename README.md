Video Feed - Playbuzz front-end exercise

**********

Set up:
*************
1. npm install
2. npm run server
3. npm start


Scope:
******
Build a basic product that displays video items feed from various sources
Potential sources are: Youtube, Facebook and a given URL.
To get feed items use the following live feed-service endpoint:
https://cdn.playbuzz.com/content/feed/items

UI
***
Simple nav-bar with ‘VIDEO FEED’ title
Each feed item contains 3 elements: item-title, item-views, video
When a certain item is missing data, show the relevant errors instead of the video:
‘Youtube video is missing’, ‘Facebook video post is missing’,..
Server
Instead of the static items feed file, build a node.js service that will return the feed items, and will allow filtering by type.
Add to the UI the option to filter by source.

Technologies
Javascript, prefered AngularJS
Node


