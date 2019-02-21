import Controller from '@ember/controller';
import { match, not } from '@ember/object/computed';

export default Controller.extend({

  emailAddress: '',

  isValid: match('emailAddress', /^.+@.+\..+$/),
  isDisabled: not('isValid')

});