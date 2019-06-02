import { observable, action } from 'mobx';

class AuthStore {
    @observable inProgress = false;
    @observable errors = undefined;
  
    @observable values = {
      email: '',
      password: '',
      isLoggedIn: false
    };

    @action setEmail(email) {
      this.values.email = email;
    }
    
    @action setPassword(password) {
      this.values.password = password;
    }

    @action reset() {
      this.values.email = '';
      this.values.password = '';
    }
    
    @action async login() {
      this.inProgress = true;
      this.errors = undefined;

      try {
        const res = await fetch('http://localhost:8080/mongo');

        if (res.status === 200) {
          this.isLoggedIn = true;
  
          return true;
        }
        
        return false;
      } catch(error) {
        return false;
      }
      
    }
}

export default new AuthStore();