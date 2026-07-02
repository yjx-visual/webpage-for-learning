# Git 基础操作

## 配置

```bash
git config --global user.name "your-name"
git config --global user.email "your@email.com"
git config --global http.proxy http://127.0.0.1:10808
```

## 日常流程

```bash
git status              # 查看状态
git add -A              # 暂存所有
git commit -m "msg"     # 提交
git push                # 推送到远程
git pull                # 拉取更新
```

## 查看历史

```bash
git log --oneline       # 简洁日志
git log --graph --oneline  # 分支图
git diff                # 查看改动
```

## 撤销

```bash
git restore <file>      # 撤销工作区改动
git restore --staged <file>  # 取消暂存
git reset --soft HEAD~1 # 撤销 commit，保留改动
git stash               # 临时暂存
git stash pop           # 恢复暂存
```

## 远程仓库

```bash
git remote -v                        # 查看远程地址
git remote add origin <url>          # 关联远程
git remote set-url origin <new-url>  # 修改远程地址
```
