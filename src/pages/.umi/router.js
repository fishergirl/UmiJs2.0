import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';


let Router = require('dva/router').routerRedux.ConnectedRouter;

let routes = [
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: "layouts__index" */'../../layouts/index.js'), loading: require('D:/深化/umi2.0/src/pageLoading.js').default  }),
    "routes": [
      {
        "path": "/404",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: "p__404" */'../404.js'), loading: require('D:/深化/umi2.0/src/pageLoading.js').default  }),
        "_title": "钢瓶信息查询",
        "_title_default": "钢瓶信息查询"
      },
      {
        "path": "/complaint",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: "p__complaint__index" */'../complaint/index.js'), loading: require('D:/深化/umi2.0/src/pageLoading.js').default  }),
        "_title": "钢瓶信息查询",
        "_title_default": "钢瓶信息查询"
      },
      {
        "path": "/fault",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: "p__fault__index" */'../fault/index.js'), loading: require('D:/深化/umi2.0/src/pageLoading.js').default  }),
        "_title": "钢瓶信息查询",
        "_title_default": "钢瓶信息查询"
      },
      {
        "path": "/",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: "p__index" */'../index.js'), loading: require('D:/深化/umi2.0/src/pageLoading.js').default  }),
        "_title": "钢瓶信息查询",
        "_title_default": "钢瓶信息查询"
      },
      {
        "path": "/main",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: "p__main__index" */'../main/index.js'), loading: require('D:/深化/umi2.0/src/pageLoading.js').default  }),
        "_title": "钢瓶信息查询",
        "_title_default": "钢瓶信息查询"
      },
      {
        "path": "/register",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: "p__register__index" */'../register/index.js'), loading: require('D:/深化/umi2.0/src/pageLoading.js').default  }),
        "_title": "钢瓶信息查询",
        "_title_default": "钢瓶信息查询"
      },
      {
        "component": () => React.createElement(require('D:/深化/umi2.0/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: false }),
        "_title": "钢瓶信息查询",
        "_title_default": "钢瓶信息查询"
      }
    ],
    "Routes": [require('../../routes/PrivateRoute.js').default],
    "_title": "钢瓶信息查询",
    "_title_default": "钢瓶信息查询"
  },
  {
    "component": () => React.createElement(require('D:/深化/umi2.0/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: false }),
    "_title": "钢瓶信息查询",
    "_title_default": "钢瓶信息查询"
  }
];

export default function() {
  return (
<Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
  );
}
