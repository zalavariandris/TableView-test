collection = new Meteor.Collection('test-collection');
if (Meteor.isClient) {
  Template.body.collection = function() {
    return collection.find( {} );
  };
  
  Template.TableView.events({
    'click [name=remove]': function(event, template) {
      var cursor = template.data;
      cursor.collection.remove( this );
    },
    'click [name=add]': function(event, template) {
      var cursor = template.data;
      cursor.collection.insert( {name: '-name-'} );
    }
  });
}

if(Meteor.isServer){
  Meteor.methods({
    'testServerConnection':function(){
      console.log("ANDRIS ********** connection server test: ", "CALLED");
    }
  });
}