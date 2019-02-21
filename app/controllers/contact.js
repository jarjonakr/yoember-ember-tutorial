import Controller from '@ember/controller';
import { match, and, gte, not } from '@ember/object/computed';

export default Controller.extend({


    emailAddress: '',
    messageArea: '',

    isValid: match('emailAddress', /^.+@.+\..+$/),
    

    isLongEnough: gte("messageArea.length", 5),

    isBothTrue: and('isValid', 'isLongEnough'),

    isDisabled: not('isBothTrue'),

    actions: {

        sendMessage() {
          // alert(`Your email: ${this.get('emailAddress')}
          //       Your Message: ${this.get('messageArea')}`);
          // this.set('responseMessage', `We got your message and we’ll get in touch soon with you at ${this.get('emailAddress')}`);
          // this.set('emailAddress', '');

          const email = this.get('emailAddress');
          const message = this.get('messageArea')


          const newMessage = this.store.createRecord('contact', {email, message});

          newMessage.save().then(response => {
            this.set('responseMessage', `We got your message and we’ll get in touch soon with you soon. Your message id---> ${response.get('id')}`);
            this.set('emailAddress', '');
            this.set('messageArea', '');
          })

        } 

      }

      //used to guide me a bit
      //   saveInvitation() {
      //     const email = this.get('emailAddress');
    
      //     const newInvitation = this.store.createRecord('invitation', { email });
    
      //     newInvitation.save().then(response => {
      //       this.set('responseMessage', `Thank you! We saved your email address with the following id: ${response.get('id')}`);
      //       this.set('emailAddress', '');
      //     });
    
      //   }
      // }




});
