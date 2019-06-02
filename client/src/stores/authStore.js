import { observable, action } from 'mobx';

class AuthStore {
  
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
      try {
        const res = await fetch('http://localhost:8080/mongo');

        if (res.status === 200) {
          this.values.isLoggedIn = true;
  
          return true;
        }
        
        return false;
      } catch(error) {
        return false;
      }
      
    }
}

export default new AuthStore();