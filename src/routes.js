import MainLayout from './App/layout/mainLayout';
import Home from './App/pages/home/home';
import Login from './App/pages/login/login';
import Register from './App/pages/register/register';
import PersonalCenter from './App/pages/personalCenter/personalCenter';
import Write from './App/pages/write/write';
import Release from './App/pages/release/release';
import Page404 from './App/pages/page404/page404';
import SettingContent from './App/components/nSetting/settingContent/settingContent';
import SettingName from './App/components/nSetting/settingName/settingName';
import SettingEdit from './App/components/nSetting/settingEdit/settingEdit';
let routes = [
    {
        path: '/write',
        exact: true,
        component: Write
    },
    {
        path: '/release/:anthologyId/:articleId',
        exact: true,
        component: Release
    },
    {
        path: '/',
        component: MainLayout,
        routes: [
            {
                path: '/',
                exact: true,
                component: Home
            },
            {
                path: '/login',
                exact: true,
                component: Login
            },
            {
                path: '/register',
                exact: true,
                component: Register
            },
            {
                path: '/u',
                exact: true,
                component: PersonalCenter,
                routes: [
                    {
                        path: '/u',
                        exact: true,
                        component: SettingContent
                    },
                    {
                        path: '/u/editNick',
                        exact: true,
                        component: SettingName
                    },
                    {
                        path: '/u/editInfo',
                        exact: true,
                        component: SettingEdit
                    },
                ]
            }
        ]
    },
    {
        path:'*',
        component: Page404
    }
]
export default routes;