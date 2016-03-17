'use strict';

console.log('server is running');

var Firebase = require('firebase'); //include firebase.

/* - - - uncomment this block to test - - -
var ref = new Firebase('https://crackling-torch-879.firebaseio.com/');
var getref = new Firebase('https://crackling-torch-879.firebaseio.com/posts');

var usersRef = ref.child("users");

var postsRef = ref.child("posts");
var newPostRef = postsRef.push();
*/

/* - - - set v1 - - -
usersRef.set({
  bob: {
    dob: "03/05/2001",
    full_name: "Bobby Bob"
  },
  grace: {
    dob: "02/29/2000",
    full_name: "gracy grac"
  }
});
*/

/* - - - set v2 - - -
usersRef.child("bobv1").set({
  dob: "03/05/2000",
  full_name: "bobbin v1 UPDATED"
});

usersRef.child("gracev1").set({
  dob: "02/29/1999",
  full_name: "graceyv1 UPDATED"
});
*/

/* - - - single update - - -
var updateRef = usersRef.child('bobv1');
updateRef.update({
  "nickname": "Bobby Bobbin"
});
*/

/* - - - Multi Update - - -
usersRef.update({
  "bob/nickname": "THIS IS BOB",
  "gracev1/nickname": "THIS IS GRACE",
})
*/

/* - - - inserting callback error function - - - only pass error back.
usersRef.child("error_test_V2").set({
  dob: "00/00/0000",
  full_name: "0ERROR0"
}, function(error){
  if(error){
    console.log("Data cannot be saved", error);
  } else{
    console.log("Data saved success!");
  }
});
*/

/*  - - - push to get unique ID - - -
newPostRef.set({          //same as below.
  author: "Harry Potter",
  title: "The Sorcerer Stone and I"
});
postsRef.push().set({     //same as above.
  author: "Harmione",
  title: "Diary of a nerd."
});
postsRef.push({           //same as above.
author: "Voldemort",
title: "the life of V",
});
*/

/* - - -  tested callback data? - - -
newPostRef.set({    //Tested with call back on data. Received null.
  author: "Harry Potter",
  title: "Voldemort and I"
}, function(data){
  console.log(data);
});
*/

// var postID = newPostRef.key();

/* - - - tested for unique ID - - -
newPostRef.set({    //Tested with call back on data. Received null.
  author: "Donkey",
  title: "Shrek and I"
}, () => {
  console.log(postID);
});
*/

/* - - - this resulted in nested inner of a new child insted of one at a time. - - -
newPostRef.push({    //Tested with call back on data. Received null.
  author: "Fiona",
  title: "Shrek vs Prince Charming"
}, () => {
  console.log(postID);
});
newPostRef.push({    //Tested with call back on data. Received null.
  author: "Cat in the hat 2",
  title: "Return of the Hat"
}, () => {
  console.log(postID);
});
*/

/* - - - This will return all obj - - -
getref.on('value', function(snapshot){
  console.log(snapshot.val())   //snapshot.val().author or snapshot.val().title will return undefined.
}, (errorObject) => {
  console.log(errorObject.code);
});
*/

/* - - - child_added: retrieved only the data on each post - - -
getref.on("child_added", (snapshot, prevChildKey) => {
  var newPost = snapshot.val();
  console.log("Author: " + newPost.author);
  console.log("Title: " + newPost.title);
  console.log("Previous Post ID: " + prevChildKey);
});
*/

// need to get object key before child_changed or child_removed can function.
// getref.on("child_changed", (snapshot) => {
//   var changedPost = snapshot.val();
//   console.log("Updated: " + changedPost.title);
// })
// var updateRef = postsRef.child('bobv1');
// updateRef.update({
//   "nickname": "Bobby Bobbin"
// });

/* - - - get count and object key for all. - - -
var count = 0;
getref.on("child_added", function(snap) {
  count++;
  console.log("added", snap.key());
});
// length will always equal count, since snap.val() will include every child_added event
// triggered before this point
getref.once("value", function(snap) {
  console.log("initial data loaded!", Object.keys(snap.val()).length === count);
  console.log(count)
});
*/

/* - - - QUERIES - - - */
/*
getref.orderByChild("title").on("child_added", (snapshot) => {
  console.log(snapshot.key() + ' ' + snapshot.val().title);
})
*/

/*
// Tracking two-way relationships between users and groups
  {
    "users": {
      "mchen": {
        "name": "Mary Chen",
        // index Mary's groups in her profile
        "groups": {
           // the value here doesn't matter, just that the key exists
           "alpha": true,
           "charlie": true
        }
      },
      ...
    },
    "groups": {
      "alpha": {
        "name": "Alpha Group",
        "members": {
          "mchen": true,
          "hmadi": true
        }
      },
      ...
    }
  }
*/
/* see if Mary is in the 'alpha' group
var ref = new Firebase("https://docs-examples.firebaseio.com/web/org/users/mchen/groups/alpha");
ref.once('value', function(snap) {
  var result = snap.val() === null? 'is not' : 'is';
  console.log('Mary ' + result + ' a member of alpha group');
});
*/

//----------------------------------
