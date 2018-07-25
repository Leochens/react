组件生命周期
---

1. 创建 | ComponentWillMount  | 1
2. 渲染 | ComponentRender | 
3. 已挂载 | ComponentDidMount | 1
4. 4态  (props 更新 组件就会发生变化)
    1. 即将接受新的props |  ComponentWillReceiveProps    <--|
    2. 是否需要re render|  ShouldComponentUpdate    true          |
    3. 即将渲染     | ComponentWillupdate -> Render          |
    4. 更新渲染完成 | ComponentDidUpdate         ____________|
5. 销毁 | ComponentWillUnMount | 1

