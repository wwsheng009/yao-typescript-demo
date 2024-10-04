# readme

这是一些typescript for yao 的测试


首先需要使用测试版本的yao程序，与官方版本不同，包含个人测试用的一些功能。

下载地址：https://github.com/wwsheng009/yao/releases

然后执行`yao start`进行项目配置。

在yao中使用typescript开发的过程跟在nodejs中差不多。

项目已经自带一些typescript配置。

在最新版本中，可以在yao应用中安装npm开发包，这是一项比较新的功能特性。

安装npm开发包，执行命令`npm i`，请不要使用pnpm。

有一些yao应用使用npm兼容性的测试与说明，请查看文档：https://github.com/wwsheng009/yao-docs/blob/main/docs/YaoDSL/v8go/%E4%BD%BF%E7%94%A8npm%E5%BA%93.md

## 使用Docker测试

```sh

git clone https://github.com/wwsheng009/yao-typescript-demo

cd yao-typescript-demo

# 构建docker
docker build --build-arg ARCH=amd64 --build-arg VERSION=0.10.5 --tag yao-ts-demo .
# docker run -d --restart unless-stopped --name yao-ts-demo -p 5099:5099 yao-ts-demo

# 进入docker
docker run -it --rm -p 5099:5099 yao-ts-demo sh

#配置数据库
yao start

# ctrl-c 退出web服务

# 测试
yao run scripts.tests.lodash.main

yao run scripts.tests.crossfilter.main

yao run scripts.tests.underscore.main

yao run scripts.tests.math.test

yao run scripts.tests.others.test

```