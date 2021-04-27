// register vuetify as a global plugin with vuepress
// .vuepress/enhanceApp.js
//import Vuetify from 'vuetify'

import Vuetify from "vuetify";
import 'vuetify/dist/vuetify.css'
import '@mdi/font/css/materialdesignicons.css'

export default ({
    Vue,      // the version of Vue being used in the VuePress app
    options,  // the options for the root Vue instance
    router,   // the router instance for the app
    siteData  // site metadata
}) => {
    Vue.use(Vuetify)
    options.vuetify = new Vuetify({
        theme: {
            dark: true,
            options: { customProperties: true },
            themes: {
                light: {
                    bgcolor: '#F3F7F9',
                    bgcontentcolor: '#fff',
                    bgcode : '#fffbf3',
                    bordercolor:  '#000000',
                    bodycolor: '#444',
                    titlecolor: '#111',
                    linkcolor: '#3eaf7c',
                    VssueThemeColor: '#F3F7F9',
                    VssueTextColor: '#2c3e50',
                    VssueTextLightColor: '#a3aab1',
                    VssueBorderColor: '#eaecef',
                    VssueProgressColor: '#3eaf7c',
                    VssueLinkColor: '#3eaf7c',

                },
                dark: {
                    bgcolor: '#0D2538',
                    bgcontentcolor: '#0f2d44',
                    bgcode : '#000000',
                    bordercolor:  '#ffffff',
                    bodycolor: '#ced8de',
                    titlecolor: '#fff',
                    linkcolor: '#3eaf7c',
                    VssueThemeColor: '#0D2538',
                    VssueTextColor: '#fff',
                    VssueTextLightColor: '#fff',
                    VssueBorderColor: '#fff',
                    VssueProgressColor: '#3eaf7c',
                    VssueLinkColor: '#3eaf7c',
                }
            }
        }
    })
}