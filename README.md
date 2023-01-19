# News Product Server

A <a href="http://docs.feedland.org/newsProducts.opml">news product</a> is a one-page website you create with FeedLand for people outside of FeedLand to read.

### What is this? 

This is the News Product server, which is a Node.js application. 

It is tied to a single instance of FeedLand server.

Installing it is optional. If you install it you will be able to implement news products with your server. 

### How to setup

1. Download the folder.

2. Move the files into the folder you're going to serve the site from.

3. npm install

4. Edit config.json. A <a href="https://github.com/scripting/newsProductServer/blob/main/config.json">template</a> is provided in the folder. Following this section is a list of values you must change in config.json.  

5. Launch the newsproduct.js app.

6. In your FeedLand install, in its config.json file add a "urlNewsProducts" element with the web address of this server and relaunch it.

### What to change in config.json

urlFeedlandServer: the web address of your FeedLand server. 

port: the port your newsProductServer should run on.

myDomain: the web address of your newsProductServer.

database: the same setup you used for your FeedLand instance. The newsProductServer app directly accesses the database. 

