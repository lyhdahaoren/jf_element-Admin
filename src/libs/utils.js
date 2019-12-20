export const hasChild = (item) => {
    return item.children && item.children.length !== 0
}
/**
* @param {Array} list 通过路由列表得到菜单列表
* @returns {Array}
*/
export const getMenuByRouter = (list, access) => {
    let res = []
    list.forEach(item => {
        if (!item.meta || (item.meta && !item.meta.hideMenu)) {
            let obj = {
                icon: (item.meta && item.meta.icon) || '',
                name: item.name,
                meta: item.meta
            }
            if (hasChild(item)) {
                obj.children = getMenuByRouter(item.children, access)
            }
            if (item.meta && item.meta.href) obj.href = item.meta.href
            res.push(obj)
        }
    })
    return res
}
