import TabNav from './TabNav';
import searchPage from './pages/subpages/searchPage';

/*
    ----路由配置----
    所有组件都必须在这里注册
*/

 const RouteConfig = {
    TabNav: {
        screen: TabNav,
    },
     //navigationOptions: ({navigation}) => ({header: null})
     searchPage: {
        screen: searchPage,
     }

 };


 export default RouteConfig;