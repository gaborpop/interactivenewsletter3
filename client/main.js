Meteor.subscribe('posts');

Meteor.startup(function () {
    Session.set('sessionVote', true);
  Session.set('sessionMessage', true);
  });

