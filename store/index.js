import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        title:{
            学习:{
              文档:[
                  {name:'教程',router:''},
                  {name:'API',router:''},
                  {name:'风格指南',router:''},
                  {name:'事例',router:''}
              ],
              视频教程:[
                  {name:'Vue master',router:''},
                  {name:'Vue School',router:''}
              ]
              
            },
            生态系统:{
                帮助:[
                    {name:'论坛',router:''},
                    {name:'聊天室',router:''},
                    {name:'聚会',router:''},
                ],
                工具:[
                    {name:'devtools',router:''},
                    {name:'Vue CLI', router:''},
                ],
                核心插件:[
                    {name:'vue router',router:''},
                ],
             },
            团队:{},
            资源列表:{ 
                key:[
                    {name:'合作伙伴',router:''},
                    {name:'awesome Vue',router:''}
                ]
            },
            支持Vue:{ },
            多语言:{ },
            参与翻译:{ }
        } 
    },
    mutations:{

    },
    actions:{

    }
})

export default store