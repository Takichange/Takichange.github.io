- 前端自动化部署之Linux下部署Jenkins 及 nginx

  ## 1-安装JAVA环境 

```Bash
Ubuntu：
sudo apt-get install openjdk-8-jdk
查看安装是否成功
java -version 有版本信息则为成功否则失败
Centos：
dnf search java-1.8
dnf install java-1.8.0-openjdk.x86_64

```

  ## 2-安装Jenkins

```Bash
Ubuntu：
sudo apt-get install jenkins
如果没有就更新安装包在进行安装
wget -q -O - https://pkg.jenkins.io/debian/jenkins.io.key | sudo apt-key add -
sudo sh -c 'echo deb http://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'
sudo apt-get update
sudo apt-get install jenkins
以上是四条命令，确保每条都执行成功了
Centos：
wget –O /etc/yum.repos.d/jenkins.repo http://pkg.jenkins-ci.org/redhat-stable/jenkins.repo

# 导入GPG密钥以确保您的软件合法
rpm --import https://pkg.jenkins.io/redhat/jenkins.io.key
# 或者
rpm --import http://pkg.jenkins-ci.org/redhat/jenkins-ci.org.key
编辑一下文件/etc/yum.repos.d/jenkins.repo

- 可以通过vim编辑
[jenkins]

name=Jenkins-stable

baseurl=http://pkg.jenkins.io/redhat

gpgcheck=1
安装Jenkins
dnf install jenkins # --nogpgcheck(可以不加)
启动Jenkins的服务：
systemctl start jenkins
systemctl status jenkins
systemctl enable jenkins

```

  ###注意：Jenkins默认使用8080端口提供服务：防火墙打开8080

```Bash
手动部署 Jenkins
1-创建部署目录
cd /home/openailab/
mkdir jenkins
2-下载Jenkins
cd jenkins
wget https://mirrors.tuna.tsinghua.edu.cn/jenkins/war/latest/jenkins.war
3-日志存放目录
mkdir logs
4-启动脚本设置
vim run_jenkins.sh
写入内容：
#!/bin/bash
export JENKINS_HOME=/home/openailab/jenkins
cd $JENKINS_HOME
nohup java -Dhudson.model.DownloadService.noSignatureCheck=true -Xmx2g -jar jenkins.war --httpPort=8080 > logs/jenkins.log 2>&1 &
tail -f logs/jenkins.log
5-创建配置文件
vim hudson.model.UpdateCenter.xml
写入内容：
<?xml version='1.1' encoding='UTF-8'?>
<sites>
  <site>
    <id>default</id>
    <url>https://mirrors.tuna.tsinghua.edu.cn/jenkins/updates/update-center.json</url>
  </site>
</sites>
注意：
1-URl内为镜像源，插件系统连不上可以更换源试试，具体百度
2-换源前结束进程 ps -aux | grep jenkins | grep -v grep   ,  pkill -9 jenkins 或 kill -9 进程号
6-运行Jenkins
sudo chmod 777 run_jenkins.sh
sh run_jenkins.sh

完成上述六步恭喜你就可以开始访问了
直接输入你的主机名或域名后面加上后缀:8080
7- 解锁 Jenkins
cat /home/openailab/jenkins/secrets/initialAdminPassword
把这里面的东西粘上去就行
8- 按提示创建账户就行了
```

  ## 3-安装nginx

```Bash
ubuntu
安装 sudo apt-get install nginx 
  使用：启动 service nginx start
    查看状态 service nginx status
    重启 service nginx restart
Centos
安装 dnf install nginx
  使用：启动 systemctl start nginx
   查看状态 systemctl status nginx
    重启 systemctl enable nginx

```

  ## 4-配置 nginx

```Bash
cd /etc/nginx/nginx.config
user 哪项改成 urer root；

```

```Bash
通过Linux命令创建文件夹和文件：
mkdir /root/mall_cms
cd /root/mall_cms
touch index.html

vi index.html
配置访问目录：
service {
    location / {
    # First attempt to serve request as file, then
    # as directory, then fall back to displaying a 404.
    root /root/mall_cms/dist;
    index index.html;
    try_files $uri $uri/ /index.html;  # 错误重定向
  }

}
```