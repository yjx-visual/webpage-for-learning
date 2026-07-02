# 部署问题

## GitHub Pages

```bash
pnpm docs:build

# .vitepress/config.ts 设置 base
export default defineConfig({
  base: '/my-repo/',
})
```

## 常见问题

- 路径 404：检查 `base` 配置
- 资源加载失败：确保 `public/` 下的文件用绝对路径

> 待补充...
