import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('authStore')
@observer
class App extends React.Component {
  render() {
    const { isLoggedIn } = this.props.authStore.values;

    if (!isLoggedIn) {
      this.props.history.push('/login');
    }

    return ''
  }
}

export default App;
