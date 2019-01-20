![Comic Uploader](https://res.cloudinary.com/billpliske/image/upload/v1547960660/comic-uploader.jpg)

# Comic Uploader

This seemed like a good time to sell my **comic book collection**, which started (gasp) 44 years ago. Most were purchased between age 9 and 19, and they stayed with me through out many, many moves. Anyway, I figured I'd try to sell them all at once to a local comic book shop. One of their first questions would likely be, "what do you have?"

**So I built this upload tool.**
The server is built with Node, Apollo 2, GraphQL, and Mongo.
The client is built with React, Apollo 2, tyled Components, and GraphQL.

To do your own, you'll want to spin up your own Mongo database. I did mine through mLab, which was free for small, personal projects.

Once you have a path to your own database, you'll open up `server/app.js`, and go to this part of the file:

`mongoose.connect(process.env.DBPATH);`

Simply replace process.env.DBPATH with your own URL, or include your own .env file with teh URl there.
