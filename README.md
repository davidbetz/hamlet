Lorem Ipsum is the devil. It messes with us who are students of Latin; Cicero is hard enough without people throwing randomized Cicero in our faces. It's better to use something that isn't part of a linguistic insurgency.

This project gives you random text from Shakespeare's Hamlet.

It also gives you data from **Beowulf**. It turns out that this is actually *better*. I'm tempted to completely rename this project. Beowulf's Old English gives text that one might think of as complete sentences, whereas Hamlet is obviously just random words. Also, Beowulf has non-alphanumeric characters to help with Unicode testing.

So, Beowulf is better than ipsum lorem.

Recommendation: Hamlet for titles and for easily searchable data. Beowulf for content.

Hamlet sample:

> returneth quietus borrower waxes duppd exclaim giving like drinks swaddlingclouts object lookd lenten therein damon host danish qualifies perchance sister dogs pictures patient mattering graves breathes six endure appeard longermarried infusion lover count digged abridgement dread profoundest betoken woodcocks pressures argal till translate weaker perfections hearers comest pitied redeliver insolence

Beowulf sample:

> þanc sædne forbærst ageaf ecþeowes orleghwila wynleasne geswearc gesægde blæd rasod eorlgewædum offan scel hatost weorode ealgearo cyninge gelyfan leofum beahhordes dogora heofenum ronde geatas læfde galdre sægon leafum geræhte sæmannum iofore sesse heaþoswate eorlgestreona gylden begylpan gefered hrinde geregnad monðwærust modes scoc wilfingum ðyssum widfloga folccyning leton dranc lifige wearp unrim beaduwe bædde feþe geþencean soðlice dryhtmaðma greote gehealdan sorgian astah wyrda wrecca ecgðiowes ansyne bædon morgenlongne sealdest swæslice hringdena ryht socne siðes nænigra wongstede usic 

You can also use this project to generate rich objects. This is helpful for generating mass data for things like MongoDB.

MongoDB (similar to JSON) Hamlet sample:

    {
        "_id" : "9780606620376",
        "title" : "richer benetted lose flame howling",
        "authors" : [ 
            "ape wannd", 
            "senseless grapple"
        ],
        "metadata" : {
            "pages" : 261,
            "genre" : [ 
                "imaginations", 
                "part"
            ],
            "summary" : "pleased father bevy overcome affection toils monsters assurance toys drains figure please drum fay demonstrated hurt overlooked lands torrent freefooted breathing companies givers inclination ask fitted quality obedience ears chiefest jealousy built offend idle ruin redeliver talkd husbands lady desert stockings month justly murderd enactures feeds churlish revengeful pelican fit offerd saw considered machine scape dumbshows gaming tinct auspicious reform captains five year five join imperfections unfledged unsinewd quarterd without break onyou fifty enlarged all goodly across accidents pretty idol tale priams drown task lungs galls lights cherub vast qualifies scrimers questionable positively denies wicked pronouncing yea forced pays cozend having brevity ostentation awork idle offend agreeing manner exhort extremity twas enough tells kneels revenge accepts sweet unwatchd aside whiff everlasting trophies profound endure revengeful fingerd weasel perdition hangers coldly cannons appear reconcilement kingdom queen delight flaming strewments prickd gentlemen whiff oerrule respects knocking wipe gore contracted theyll sweep army waving moving loins grave elsinore seat sift bodies strife flatterd unto fetters havet hoist bawd chapel violence propose sweat whether retiring mows imitated were flushing ourself illbreeding duties deep compound model reechy concernings fit deceived goodness hearing hecuba wandering secret respect"
        },
        "published" : ISODate("1980-05-06T00:00:00.000Z")
    }

You can use the various scripts here to mass-generate data for a variety of systems (e.g. Node.js, MongoDB, etc...)

Feel free to offer other languages, platforms, or databases.
