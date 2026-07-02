# Git 分支操作

## 创建和切换

```bash
git branch feature-xxx       # 创建分支
git checkout feature-xxx     # 切换分支
git checkout -b feature-xxx  # 创建 + 切换
```

## 合并

```bash
git checkout main
git merge feature-xxx        # 合并到 main
```

## 删除

```bash
git branch -d feature-xxx             # 删除本地分支
git push origin --delete feature-xxx  # 删除远程分支
```

## 常用工作流

```bash
# 1. 从 main 拉最新
git checkout main
git pull

# 2. 开新分支开发
git checkout -b feat/my-feature

# 3. 提交
git add -A
git commit -m "feat: add xxx"

# 4. 推送
git push -u origin feat/my-feature
```
