# -*- coding: utf-8 -*-

import bs4
import requests, pickle
import requests.packages.urllib3

requests.packages.urllib3.disable_warnings()
import re
import os
import time
import json
import random

import argparse
# from selenium import webdriver
import jwt
import base64
import sys

reload(sys)
sys.setdefaultencoding('utf-8')


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
        self.generation = {
            "alg": "RS512",
            "typ": "JWT"
        }

        self.cookies = {
            "inviteCode": options.invitationCode,
        }
        self.predata = {

        }

        self.sess = requests.Session()
        # self.sess.verify = './charles-ssl-proxying-certificate.pem'
        # self.sess.proxies = self.proxies
        self.sess.timeout = 20

    def set_proxies(self, proxy_str):
        self.proxies = {
            "http": proxy_str,
            "https": proxy_str,
        }

        self.sess.proxies = self.proxies

    def send_sms(self, options):
        print '+++++++++++send SMS begin+++++++++++'
        print options.phone
        print self.sendSMSUrl
        print options.phone
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
        print resp.text

        rs = json.loads(resp.text)
        if rs['code'] is 0:
            print 'code =0'
            return True
        else:
            print 'code =52'
            return False
        print '+++++++++++send SMS end+++++++++++'

    def set_code(self, options):
        print options.phone
        print options.code
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
        print resp.text

    def verifications(self, options):
        print '+++++++++++step3+++++++++++'
        print '+++++++++++input Verification code begin+++++++++++'
        url = self.sendSMSUrl + '/' + self.predata['id']
        payload = {
            'code': options.code,
            'phone': '+8613466334619',
            'invitation_code': options.invitationCode,
            'verification_id': self.predata['id'],
            'purpose': 'SESSION',
            'platform': 'Web'
        }
        resp = self.sess.post(
            url,
            json=payload
        )

        print resp.text
        rs = json.loads(resp.text)
        self.predata['uid'] = rs['data']['user_id']
        self.predata['sid'] = rs['data']['session_id']
        self.predata['token'] = rs['data']['authentication_token']

        with open('user_lists', 'a') as f:
            f.write(rs['data']['full_name'] + '\n')

        print '+++++++++++input Verification code end+++++++++++'

    def setUserName(self, options):
        print '+++++++++++step4+++++++++++'
        palyload = {
            "name": options.name
        }

        resp = self.sess.post(
            self.setUserNameUrl,
            params=palyload,
            headers=self.headers
        )
        if resp.status_code == requests.codes.OK:
            print 'success'
            for item in resp.headers:
                print item
            print resp.text
        else:
            print 'error'

    def get_user_info(self, options):
        resp = self.sess.get(
            self.getUserInfoUrl,
        )
        print resp.headers
        print resp.text

    def getUserName(self, options):
        print '+++++++++++step5+++++++++++'
        private_key = self.predata['token']

        palyload = {
            'sub': self.predata['uid'],
            'jti': self.predata['sid'],
            'exp': str(int(time.time() + 300))
        }
        authentication = 'Bearer ' + jwt.encode(palyload,
                                                private_key,
                                                algorithm='RS512')

        headers = {'authorization': authentication}
        resp = self.sess.get(
            self.setUserNameUrl,
            headers=headers
        )

        print resp.text

    def demoHttps(self):
        resp = self.sess.get(
            'https://www.baidu.com'
        )
        print resp.text


class EMA666(object):
    def __init__(self):
        self.user = {
            'userName': 'xixihou',
            'passWord': '6TJ1ym6J1Z',
            'ItemId': '58390',
        }
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
        payload = {'uName': self.user['userName'],
                   'pWord': self.user['passWord'],
                   'Code': 'UTF8'
                   }
        resp = self.sess.get(
            self.loginUrl,
            params=payload)
        rs = resp.text.split('&')
        self.token = rs[0]

        print u'token：{0}'.format(rs[0])
        print u'账户余额：{0}'.format(rs[1])
        print u'最大登录客户端：{0}'.format(rs[2])
        print u'最多获取号码数：{0}'.format(rs[3])
        print u'单个客户端最多获取号码数：{0}'.format(rs[4])
        print u'折扣：{0}'.format(rs[5])

    """暂时用不到"""

    def getItems(self):
        payload = {'token': self.token,
                   'tp': 'ut',
                   'Code': 'UTF8'
                   }
        resp = self.sess.get(
            self.getItemUrl,
            params=payload
        )
        print resp.text

    def getPhone(self):
        payload = {'token': self.token,
                   'ItemId': self.user['ItemId'],
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
                   'itemId': self.user['ItemId'],
                   'phone': options.phone
                   }
        resp = self.sess.get(
            self.getMessageUrl,
            params=payload
        )
        rs = resp.text
        print rs
        if rs.startswith('False'):
            return False
        else:
            matchObj = re.search(r'(\d{4})', rs)
            if matchObj:
                options.code = matchObj.group()
                print options.code
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
            'tid': '558544056549863',
            'num': '1',
            'protocol': 'https',
        }

    def getProxy(self):
        resp = requests.get(
            self.getProxyUrl,
            params=self.proxyConfig

        )
        return resp.text


def main(options):
    count = 1
    xin = AUTO_XIN()
    # xin.demoHttps()
    ema666 = EMA666()
    proxy = PROXY()
    proxyStr = proxy.getProxy()
    print proxyStr
    xin.set_proxies(proxyStr)
    ema666.login()
    ema666.releaseAllPhone()
    options.phone = ema666.getPhone()
    if xin.send_sms(options):
        print 'ok'
    else:
        print 'not ok'
        return

    print '>>>>>'

    while True:
        print '开始轮训:' + str(count)
        count += 1
        if count > options.tryCount:
            return
        time.sleep(options.wait)
        if ema666.getMessage(options):
            xin.set_code(options)
            xin.setUserName(options)
            xin.get_user_info(options)
            break


def test(options):
    xin = AUTO_XIN()
    xin.send_sms(options)
    xin.set_code(options)
    xin.setUserName(options)
    xin.get_user_info(options)


if __name__ == '__main__':
    parser = argparse.ArgumentParser(
        description='demo')
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

    while True:
        try:
            main(options)
        except:
            print "Unexpected error:", sys.exc_info()[0]
