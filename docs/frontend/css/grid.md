# Grid 布局

## 基础用法

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;  /* 三列等宽 */
  grid-template-rows: auto;
  gap: 16px;
}
```

## 常用模式

### 响应式网格

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}
```

### 两栏布局

```css
.container {
  display: grid;
  grid-template-columns: 250px 1fr;
}
```

## Grid vs Flex

| Flex | Grid |
|------|------|
| 一维布局 | 二维布局 |
| 内容优先 | 布局优先 |
| 适合组件内部 | 适合页面布局 |
