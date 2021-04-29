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
                    CodeBlockColor: '#000000',
                    CodeBlockColorSelection: '#b3d4fc',
                    CodeBlockColorComment: '#708090',
                    CodeBlockColorPunctuation: '#708090',
                    CodeBlockColorTag: '#905',
                    CodeBlockColorAttribute: '#690',
                    CodeBlockColorNamespace: '#000000B3',
                    CodeBlockColorFunktionName: '#6196cc',
                    CodeBlockColorBool: '#905',
                    CodeBlockColorFunktion: '#DD4A68',
                    CodeBlockColorProperty: '#905',
                    CodeBlockColorClassName: '#DD4A68',
                    CodeBlockColorSelector: '#690',
                    CodeBlockColorImportant: '#e90',
                    CodeBlockColorAtRule: '#07a',
                    CodeBlockColorString: '#690',
                    CodeBlockColorAtrributeValue: '#07a',
                    CodeBlockColorRegex: '#e90',
                    CodeBlockColorOperator: '#9a6e3a',
                    CodeBlockColorInserted: '#690',

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
                    CodeBlockColor: '#ccc',
                    CodeBlockColorSelection: '#4b5763',
                    CodeBlockColorComment: '#999',
                    CodeBlockColorPunctuation: '#ccc',
                    CodeBlockColorTag: '#e2777a',
                    CodeBlockColorAttribute: '#e2777a',
                    CodeBlockColorNamespace: '#e2777a',
                    CodeBlockColorFunktionName: '#6196cc',
                    CodeBlockColorBool: '#f08d49',
                    CodeBlockColorFunktion: '#f08d49',
                    CodeBlockColorProperty: '#f8c555',
                    CodeBlockColorClassName: '#f8c555',
                    CodeBlockColorSelector: '#cc99cd',
                    CodeBlockColorImportant: '#cc99cd',
                    CodeBlockColorAtRule: '#cc99cd',
                    CodeBlockColorString: '#7ec699',
                    CodeBlockColorAtrributeValue: '#7ec699',
                    CodeBlockColorRegex: '#7ec699',
                    CodeBlockColorOperator: '#67cdcc',
                    CodeBlockColorInserted: '#90ee90',
                }
            }
        }
    })
}