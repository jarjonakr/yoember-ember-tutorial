import Controller from '@ember/controller';
import { match, not } from '@ember/object/computed';

export default Controller.extend({

	headerMessage: 'wOw CoMInG sOoN',
  emailAddress: '',

  isValid: match('emailAddress', /^.+@.+\..+$/),
  isDisabled: not('isValid'),

  actions: {

    saveInvitation() {
      // alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
      // this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
			// this.set('emailAddress', '');
			
			const email = this.get('emailAddress');

			const newInvitation = this.store.createRecord('invitation', { email: email });
			newInvitation.save();

			this.set('responseMessage', `Thank you! We have just saved your email address: ${this.get('emailAddress')}`);
      this.set('emailAddress', ''); 


    }
  }

});