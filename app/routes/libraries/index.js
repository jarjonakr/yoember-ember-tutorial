import Route from '@ember/routing/route';

export default Route.extend({
    //use this model to retrieve all items from library
  model() {
    return this.store.findAll('library');
  }

});