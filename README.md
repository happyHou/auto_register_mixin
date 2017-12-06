#灵感来源
http://www.jianshu.com/p/2906f0abea3e
通过注册送虚拟币
#方案
通过ema666批量申请号码，批量注册薅羊毛
#问题
+++++++++++step2+++++++++++
验证出现{"error":{"status":401,"code":401,"description":"Unauthorized, maybe invalid email or password."}}
理想状态应该是200
#文件说明
autu_xin.py程序

1.auto_xin.py 程序
    
    1.CLASS AUTO_XIN 注册（error现在有问题）
    2.CLASS EMA666 申请手机号码，并读取短信

2./charles-ssl-proxying-certificate.pem charles代理截取https的cert文件
3.auxin.chls charles的截包软件。通过charles->file->import...导入查看
