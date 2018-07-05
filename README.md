# recursion

> this is a recursion menu

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

用到的技术：axios、vuex、v-router、font-awesome、scss、promise、递归组件、原生js

具体过程：
    1、整体布局（layout.vue），分左边菜单、导航和内容区。
    2、安装预测要用到的scss、vuex、axios、font-awesome等。
    3、配置路由。这里使用layout.vue作为路由模板，嵌套两层路由。
    4、编写mock.json，制作一个模拟json，数据格式为tree，层级我这里写了三层，可自定义，然后使用axios模拟后台请求mock.json。
    5、layout.vue拿到json数据之后，将数据通过props将folderDate传递给menus，menus解析第一层数据，然后将children传给menua，menua也是解析一层，然后将folderDate传递给menus,循环往复，一直将tree结构给解析渲染完毕。（这里的两个组件menus和menua必须是全局组件，不然会报错）。
    6、设置全局路由钩子，将当前路由name存到本地，在刷新浏览器时候获取，然后打开相应的目录。
    7、后期优化，加一些transition，keep-alive等。
