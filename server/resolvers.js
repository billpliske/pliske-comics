const Comic = require("./models/comic");

const Query = {
    comics(parent, args) {
        return Comic.find({});
    }
};

const Mutation = {
    addComic(parent, args) {
        let comic = new Comic({
            title: args.title,
            number: args.number,
            year: args.year,
            condition: args.condition,
            notes: args.notes,
            image: args.image
        });
        return comic.save();
    }
};

module.exports = { Query, Mutation };
