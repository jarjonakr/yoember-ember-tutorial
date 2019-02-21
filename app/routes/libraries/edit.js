import Route from '@ember/routing/route';

export default Route.extend({
    //params is the url paramater that contains id
  model(params) {
      //this returns us the single record in library that matches the id in the param
    return this.store.findRecord('library', params.library_id);
  },

  actions: {

    saveLibrary(library) {
        //being redirected with transitionTo
      library.save().then(() => this.transitionTo('libraries'));
    },

    willTransition(transition) {

      let model = this.controller.get('model');
        //if model attributes  have changed but havent been saved pop up a confirmation window if they try to go through
        //this is done with ember models hasDirtyAttributes
      if (model.get('hasDirtyAttributes')) {
        let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");


        //depending on what user decides, you stay on page with transition abort, or if he does want to leave the page
        //rollbackattributes goes back and lets user go back with prev settings
        if (confirmation) {
          model.rollbackAttributes();
        } else {
          transition.abort();
        }
      }
    }
  }
});