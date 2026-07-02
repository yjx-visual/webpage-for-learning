# Flex 布局

## 容器属性

```css
.container {
  display: flex;
  flex-direction: row;        /* 主轴方向 */
  justify-content: center;    /* 主轴对齐 */
  align-items: center;        /* 交叉轴对齐 */
  flex-wrap: wrap;            /* 是否换行 */
  gap: 16px;                  /* 间距 */
}
```

## 项目属性

```css
.item {
  flex: 1;          /* 占一份 */
  flex-grow: 1;     /* 放大比例 */
  flex-shrink: 0;   /* 不缩小 */
  align-self: center;
}
```

## 常见布局

### 水平居中

```css
.container {
  display: flex;
  justify-content: center;
}
```

### 两端对齐

```css
.container {
  display: flex;
  justify-content: space-between;
}
```

### 圣杯布局

```css
.container {
  display: flex;
}
.left { width: 200px; }
.center { flex: 1; }
.right { width: 200px; }
```
