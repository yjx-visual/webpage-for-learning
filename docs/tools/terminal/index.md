# 终端命令

## Windows (PowerShell)

```powershell
ls                # 列出文件
cd <path>         # 进入目录
cd ..             # 返回上级
mkdir <name>      # 创建目录
Remove-Item -Recurse -Force <path>  # 删除
ni <file>         # 新建文件
```

## 常用操作

```powershell
# 端口占用
netstat -ano | findstr :5173

# 环境变量
$env:NODE_ENV = "development"
echo $env:NODE_ENV
```
