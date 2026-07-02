# Vue 响应式原理

## ref vs reactive

```js
import { ref, reactive } from 'vue'

// ref — 基本类型，.value 访问
const count = ref(0)
count.value++

// reactive — 对象类型，直接访问
const state = reactive({ count: 0 })
state.count++
```

## computed

```js
import { computed, ref } from 'vue'

const count = ref(1)
const doubled = computed(() => count.value * 2)
// doubled 自动跟随 count 变化
```

## watch

```js
import { watch, ref } from 'vue'

const keyword = ref('')

// 监听变化
watch(keyword, (newVal, oldVal) => {
  console.log(`从 "${oldVal}" 变为 "${newVal}"`)
})
```

## 选择建议

| 场景 | 用 |
|------|-----|
| 基本类型 | `ref` |
| 对象/数组 | `reactive` |
| 依赖计算 | `computed` |
| 副作用 | `watch` |
