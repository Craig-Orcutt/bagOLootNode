You have an acquaintance whose job is to, once a year, deliver presents to the best kids around the world. They have a problem, though. There are so many good boys and girls in the world now, that their old paper accounting systems just don't cut it anymore. They want you to write a program that will let them do the following tasks.

Add a toy to the bag o' loot, and label it with the child's name who will receive it.

node lootbag.js add kite suzy
node lootbag.js add baseball michael
Remove a toy from the bag o' loot in case a child's status changes before delivery starts.

node lootbag.js remove suzy kite
node lootbag.js remove michael baseball
Produce a list of children currently receiving presents.

node lootbag.js ls
List toys in the bag o' loot for a specific child.

node lootbag.js ls suzy
Specify when a child's toys have been delivered.

node lootbag.js delivered suzy
Requirements
Write a test before you write implementation code

Items can be added to bag.
Items can be removed from bag, per child only. Removing ball from the bag should not be allowed. A child's name must be specified.
Must be able to list all children who are getting a toy.
Must be able to list all toys for a given child's name.
Must be able to set the delivered property of a child, which defaults to false to true.
Bonus Features
Write a help response that lists all of the possible arguments, and what they do.
Create a shortcut combination of arguments that can remove all toys from the bag for a child who has been deemed naughty.
