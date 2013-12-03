Template.newsletter.helpers({
  vote: function() {
    return Session.get('sessionVote');
    Session.set('sessionVote', true);
  },
  message: function() {
    return Session.get('sessionMessage');
    Session.set('sessionMessage', true);
  },
  

});



Template.newsletter.events({
  'click .case10': function(e) {
    e.preventDefault();
    
    Posts.insert({title: 'initStratOui'});
    Session.set('sessionVote', false);
  },
  'click .case20': function(e) {
    e.preventDefault();
    
    Posts.insert({title: 'initStratNon'});
    Session.set('sessionVote', false);
  },
  'submit form': function(e) {
    e.preventDefault();
    var post = {
      
      title: 'Messages',
      content: $(e.target).find('[name=message]').val()
    }
    Posts.insert(post);
    Session.set('sessionMessage', false);
  }
});