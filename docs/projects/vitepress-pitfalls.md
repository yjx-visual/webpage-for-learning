# VitePress 踩坑记录

## Vite + VitePress 版本兼容

- VitePress 1.x 只兼容 Vite 5.x
- `@vitejs/plugin-vue` 版本要匹配 Vite 版本

```bash
pnpm add -D vite@^5.4.0 @vitejs/plugin-vue@^5.0.0
```

## 双重 Vue 插件冲突

如果你的项目有 `vite.config.ts` 里注册了 `vue()` 插件，VitePress 内部也会加载，导致冲突。

**解决**：如果只是写文档，删掉或改名 `vite.config.ts`。

## 代理配置

```bash
git config --global http.proxy http://127.0.0.1:10808
npm config set proxy http://127.0.0.1:10808
```
