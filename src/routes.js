import MainLayout from './App/layout/mainLayout';
import Home from './App/pages/home/home';
import Login from './App/pages/login/login';
import Register from './App/pages/register/register';
import PersonalCenter from './App/pages/personalCenter/personalCenter';
import Write from './App/pages/write/write';
import SettingContent from './App/components/nSetting/settingContent/settingContent';
import SettingName from './App/components/nSetting/settingName/settingName';
import SettingEdit from './App/components/nSetting/settingEdit/settingEdit';
let routes = [
    {
        path:'/write',
        exact:true,
        component:Write
    },
    {
        path:'/',
        component:MainLayout,
        routes:[
            {
                path:'/',
                exact:true,
                component:Home
            },
            {
                path:'/login',
                exact:true,
                component:Login
            },
            {
                path:'/register',
                exact:true,
                component:Register
            },
            {
                path:'/u',
                component:PersonalCenter,
                routes:[
                    {
                        path:'/u',
                        exact:true,
                        component:SettingContent
                    },
                    {
                        path:'/u/editNick',
                        exact:true,
                        component:SettingName
                    },
                    {
                        path:'/u/editInfo',
                        exact:true,
                        component:SettingEdit
                    },
                ]
            }

        ]
    }
]
export default routes;