import { Component } from 'react';
import dva from 'dva';
import createLoading from 'dva-loading';

let app = dva({
  history: window.g_history,
  ...((require('D:/深化/umi2.0/src/dva.js').config || (() => ({})))()),
});

window.g_app = app;
app.use(createLoading());

app.model({ namespace: 'global', ...(require('D:/深化/umi2.0/src/models/global.js').default) });
app.model({ namespace: 'index', ...(require('D:/深化/umi2.0/src/pages/main/models/index.js').default) });
app.model({ namespace: 'index', ...(require('D:/深化/umi2.0/src/pages/register/models/index.js').default) });

class DvaContainer extends Component {
  render() {
    app.router(() => this.props.children);
    return app.start()();
  }
}

export default DvaContainer;
