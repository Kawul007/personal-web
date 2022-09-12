// deploy.js

// 根据路径修改routes
const routes = [
    'blugPage',
    'bugPage',
 
]

// 给每个route都新建一个文件夹，把index.html拷贝进去
import { copySync } from 'fs-extra'
import { join } from 'path'
routes.forEach((route) => {
    copySync(join('build', 'index.html'), join('build', route, 'index.html'))
})
