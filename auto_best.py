# -*- coding: utf-8 -*-

import bs4
import requests, pickle
import requests.packages.urllib3

requests.packages.urllib3.disable_warnings()
import re
import time
import json

import argparse
import sys

reload(sys)
sys.setdefaultencoding('utf-8')

"""ema666"""
userName = ""
passWord = ""
ItemId = ""
"""代理"""
tid = ""
haha=""


class AUTO_XIN(object):
    def __init__(self, userId=None):
        self.sendSMSUrl = 'http://in.ibeechat.org/enroll/sendCode'
        self.setCodeUrl = 'http://in.ibeechat.org/enroll/register'
        self.setUserNameUrl = 'http://in.ibeechat.org/enroll/updateName'
        self.getUserInfoUrl = 'http://in.ibeechat.org/enroll/me'

        self.proxies = {
            "http": "127.0.0.1:8888",
            "https": "127.0.0.1:8888",
        }

        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.89 Safari/537.36',
            'ContentType': 'text/html; charset=utf-8',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
            'Connection': 'keep-alive',
        }

        self.cookies = {
            "inviteCode": options.invitationCode,
        }
        self.predata = {

        }

        self.sess = requests.Session()
        # self.sess.verify = './charles-ssl-proxying-certificate.pem'
        # self.sess.proxies = self.proxies
        self.sess.timeout = 10

    def set_proxies(self, options):
        self.proxies = {
            "http": options.proxy_str,
            "https": options.proxy_str,
        }

        self.sess.proxies = self.proxies

    def send_sms(self, options):
        payload = {
            'phone': options.phone,
            'countryCode': '86'
        }
        resp = self.sess.get(
            self.sendSMSUrl,
            headers=self.headers,
            params=payload,
            cookies=self.cookies,
        )
        rs = json.loads(resp.text)
        if rs['code'] is 0:
            return True
        else:
            return False

    def set_code(self, options):
        payload = {
            'uid': "86" + options.phone,
            'code': options.code
        }
        resp = self.sess.get(
            self.setCodeUrl,
            headers=self.headers,
            params=payload,
            cookies=self.cookies,
        )

    def set_user_name(self, options):
        payload = {
            "name": options.name
        }

        resp = self.sess.post(
            self.setUserNameUrl,
            params=payload,
            headers=self.headers
        )

    def get_user_info(self, options):
        resp = self.sess.get(
            self.getUserInfoUrl,
        )

        rs = json.loads(resp.text)
        return rs['data']['name']


class EMA666(object):
    def __init__(self):

        self.loginUrl = 'http://api.ema666.com/Api/userLogin'
        self.getItemUrl = 'http://api.ema666.com/Api/userGetItems'
        self.getPhoneUrl = 'http://api.ema666.com/Api/userGetPhone'
        self.getMessageUrl = 'http://api.ema666.com/Api/userSingleGetMessage'
        self.releaseAllPhoen = 'http://api.ema666.com/Api/userReleaseAllPhone'

        self.proxies = {
            "http": "127.0.0.1:8888",
            "https": "127.0.0.1:8888",
        }
        self.sess = requests.Session()
        # self.sess.proxies = self.proxies
        self.token = {}

    def login(self):
        payload = {'uName': userName,
                   'pWord': passWord,
                   'Code': 'UTF8'
                   }
        resp = self.sess.get(
            self.loginUrl,
            params=payload)
        rs = resp.text.split('&')
        self.token = rs[0]

        print u'账户余额：{0}'.format(rs[1])

    def get_phone_number(self):
        payload = {'token': self.token,
                   'ItemId': ItemId,
                   'Code': 'UTF8'
                   }
        resp = self.sess.get(
            self.getPhoneUrl,
            params=payload
        )
        return resp.text[0:-1]

        # 'False:没有短信，请5秒后再试'
        # 'MSG&Mixin code 1415 [PIN]

    def getMessage(self, options):
        payload = {'token': self.token,
                   'itemId': ItemId,
                   'phone': options.phone
                   }
        resp = self.sess.get(
            self.getMessageUrl,
            params=payload
        )
        rs = resp.text
        if rs.startswith('False'):
            return False
        else:
            matchObj = re.search(r'(\d{4})', rs)
            if matchObj:
                options.code = matchObj.group()
                return True
            return True

    def releaseAllPhone(self):
        payload = {'token': self.token}
        resp = self.sess.get(
            self.releaseAllPhoen,
            params=payload
        )


class PROXY(object):
    def __init__(self):
        self.getProxyUrl = 'http://pvt.daxiangdaili.com/ip/'
        self.proxyConfig = {
            'tid': tid,
            'num': '1',
            'protocol': 'https',
        }

    def get_proxy(self):
        resp = requests.get(
            self.getProxyUrl,
            params=self.proxyConfig

        )

        log_utils('proxy:' + resp.text)
        return resp.text


def go_go_money(options):
    count = 1
    xin = AUTO_XIN()
    ema666 = EMA666()
    xin.set_proxies(options)
    ema666.login()
    ema666.releaseAllPhone()
    options.phone = ema666.get_phone_number()
    print "手机号码为：" + options.phone
    log_utils('phoneNumber:' + options.phone)
    if xin.send_sms(options):
        print "发送短信成功"
        pass
    else:
        print "该ip请求次数超限,获取新代理"
        time.sleep(options.wait)
        get_new_proxy(options)
        return

    while True:
        print '开始轮训:' + str(count)
        count += 1
        if count > options.tryCount:
            return
        time.sleep(options.wait)
        if ema666.getMessage(options):
            print "验证码为：" + options.code
            log_utils('code:' + options.code)
            xin.set_code(options)
            xin.set_user_name(options)
            user_name = xin.get_user_info(options)
            print "设置的用户名"+userName
            log_utils('name:' + user_name)
            break


def log_utils(log_str):
    with open('log.txt', 'a') as f:
        f.write(log_str + '\n')


def get_new_proxy(options):
    proxy = PROXY()
    options.proxy_str = proxy.get_proxy()
    print "使用代理：" + options.proxy_str


def main(options):
    get_new_proxy(options)
    while True:
        try:
            go_go_money(options)
        except:
            get_new_proxy(options)
            print "Unexpected error:", sys.exc_info()[0]


def set_config(options):
    with open('config.json', 'r') as f:
        config = json.load(f)

    options.invitationCode = config['DEFAULT']['base']['invitationCode']
    options.tryCount = config['DEFAULT']['base']['tryCount']
    options.name = config['DEFAULT']['base']['registerName']

    global userName
    global passWord
    global ItemId
    global tid
    userName = config['DEFAULT']['SMS']['userName']
    passWord = config['DEFAULT']['SMS']['passWord']
    ItemId = config['DEFAULT']['SMS']['ItemId']

    tid = config['DEFAULT']['proxy']['tid']


if __name__ == '__main__':
    parser = argparse.ArgumentParser(
        description='这仅仅是一个demo')
    options = parser.parse_args()
    options.invitationCode = '2702148'
    options.phone = '17075339183'
    # 验证码
    options.code = '0904'
    options.name = 'random99'
    # 等待5s后请求短信内容
    options.wait = 5
    # 最做重试次数
    options.tryCount = 10

    set_config(options)

    main(options)
