# Vue 组件通信

## 父传子：props

```vue
<!-- 父组件 -->
<Child :msg="message" />

<!-- 子组件 -->
<script setup>
const props = defineProps({
  msg: String
})
</script>
```

## 子传父：emit

```vue
<!-- 子组件 -->
<script setup>
const emit = defineEmits(['update'])
emit('update', value)
</script>

<!-- 父组件 -->
<Child @update="handleUpdate" />
```

## 跨层级：provide / inject

```vue
<!-- 祖先组件 -->
<script setup>
provide('key', value)
</script>

<!-- 后代组件 -->
<script setup>
const value = inject('key')
</script>
```

## 全局状态：Pinia

```js
// stores/counter.js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  function increment() { count.value++ }
  return { count, increment }
})
```
