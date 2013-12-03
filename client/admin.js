Template.admin.helpers({
  posts: function() {
    return Posts.find();
  }
});

Template.admin.helpers({
  commentsCount1: function() {
    return Posts.find({title: 'initStratOui'}).count();
  },
  commentsCount2: function() {
    return Posts.find({title: 'initStratNon'}).count();
  },
  messageContent: function() {
    return Posts.find({title: 'Messages'});
  },
  
});
