const graphql = require("graphql");
const Comic = require("../models/comic");

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull
} = graphql;

const ComicType = new GraphQLObjectType({
    name: "Comic",
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        number: { type: GraphQLString },
        year: { type: GraphQLString },
        condition: { type: GraphQLString },
        notes: { type: GraphQLString },
        image: { type: GraphQLString }
    })
});

/* ************************** */
/* QUERIES */
/* ************************** */

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        comic: {
            type: ComicType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Comic.findById(args.id);
            }
        },
        comics: {
            type: new GraphQLList(ComicType),
            resolve(parent, args) {
                return Comic.find({});
            }
        }
    }
});

/* ************************** */
/* MUTATIONS */
/* ************************** */
// comment the mutation out once you're done adding comics

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        addComic: {
            type: ComicType,
            args: {
                title: { type: new GraphQLNonNull(GraphQLString) },
                number: { type: new GraphQLNonNull(GraphQLString) },
                year: { type: new GraphQLNonNull(GraphQLString) },
                condition: { type: new GraphQLNonNull(GraphQLString) },
                notes: { type: new GraphQLNonNull(GraphQLString) },
                image: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args) {
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
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});
