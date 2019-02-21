import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.store.createRecord('library');
  },

  actions: {
      
    //we send the application back to the Libraries home page with transitionTo.
    saveLibrary(newLibrary) {
      newLibrary.save().then(() => this.transitionTo('libraries'));
    },

    //There is a built-in Ember.js action (event) called willTransition that is called when you 
    //leave a page (route). In our case, we use this action to reset the model if we haven’t saved 
    //it in the database yet.
    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});