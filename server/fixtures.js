if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'initStratOui'
    
  });

  Posts.insert({
    title: 'initStratNon'
    
  });
    
  Posts.insert({
    title: 'Messages',
    content: "This is a first message"
    
  });
  Posts.insert({
    title: 'Messages',
    content: "This is a second message"
    
  });

  
}