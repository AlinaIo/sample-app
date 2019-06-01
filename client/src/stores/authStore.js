import { observable, action } from 'mobx';

class AuthStore {
    @observable inProgress = false;
    @observable errors = undefined;
  
    @observable values = {
      email: '',
      password: '',
    };

    @action setEmail(email) {
      this.values.email = email;
    }
    
    @action setPassword(password) {
      this.values.password = password;
    }

    @action reset() {
      this.values.username = '';
      this.values.email = '';
      this.values.password = '';
    }
    
    @action login() {
      this.inProgress = true;
      this.errors = undefined;
      return true;
    }
}

export default new AuthStore();