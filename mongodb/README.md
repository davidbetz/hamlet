The MongoDB version of Hamlet/Beowulf is particularly helpful, given that MongoDB is all about extremely large amounts of data.

# Strings

The `string.js` script exists more as a component than anything else. `object.js` is more directly useful.

# Objects

To run this:

    mongo 127.0.0.1/mydbname < object.js 

# Subdocuments

You can also use `subdocument.js` to generate a ton of documents with subdocuments.

    mongo 127.0.0.1/mydbname < subdocument.js 

Just adjust the following:

    run(100000, 100)

The first parameter is the number of documents; the second parameter is the max number of random subdocuments to add.

Check the number of subdocuments with something like the following:

    db.users.aggregate([{
        $project: { count: { $size: "$books" } }
    }])
