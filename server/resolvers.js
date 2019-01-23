const Comic = require("./models/comic");

const Query = {
    comics: (parent, args) => {
        return Comic.find({}).sort({});
        // return Comic.find({}).sort({ title: -1, number: -1 });
    },
    comic: (parent, args) => {
        const title = args.title;
        const number = args.number;
        const year = args.year;
        if (title) {
            return Comic.find({ title: new RegExp(title, "i") }).sort({
                title: 1,
                number: 1
            });
        } else if (number) {
            console.log(number);
            return Comic.find({ number }).sort({
                title: 1,
                number: 1
            });
        } else if (year) {
            return Comic.find({ year }).sort({
                title: 1,
                number: 1
            });
        } else {
            return Comic.find({}).sort({ title: 1, number: 1 });
        }
    }
};

const Mutation = {
    addComic: (parent, args) => {
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
