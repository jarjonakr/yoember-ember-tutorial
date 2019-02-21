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
          alert(`Your email: ${this.get('emailAddress')}
                Your Message: ${this.get('messageArea')}`);
          this.set('responseMessage', `We got your message and we’ll get in touch soon with you at ${this.get('emailAddress')}`);
          this.set('emailAddress', '');
        }

      }




});
