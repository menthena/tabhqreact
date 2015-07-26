db.categories.drop();

db.categories.save({
	              title: 'Cat 1',
	              order: 1,
								sections: [ {
									            _id: ObjectId(),
									            title: 'My title',
									            order: 1
								            },
								            {
									            _id: ObjectId(),
									            title: 'My title 2',
									            order: 2
								            }
								]
              });
