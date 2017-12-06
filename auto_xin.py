# -*- coding: utf-8 -*-

import bs4
import requests, pickle
import requests.packages.urllib3

requests.packages.urllib3.disable_warnings()

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
        self.registerUrl = 'https://mixin.one/enroll/'
        self.sendSMSUrl = 'https://api.mixin.one/verifications'
        self.setUserNameUrl = 'https://api.mixin.one/me'

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

        }
        self.predata = {

        }

        self.sess = requests.Session()
        self.sess.verify = './charles-ssl-proxying-certificate.pem'
        self.sess.proxies = self.proxies

    # get __cfduid
    def getCookie(self, options):
        print '+++++++++++setp1+++++++++++'
        print '+++++++++++_cfduid begin+++++++++++'
        url = self.registerUrl + options.invitationCode
        resp = self.sess.get(
            url,
            headers=self.headers,
        )
        print resp.cookies

        print '+++++++++++_cfduid end+++++++++++'

    def sendSMS(self, options):
        print '+++++++++++step2+++++++++++'
        print '+++++++++++send SMS begin+++++++++++'
        payload = {'phone': options.phone, 'purpose': 'SESSION'}
        # self.headers['Referer'] = self.registerUrl + options.invitationCode
        # self.headers['Origin'] = 'https://mixin.one'
        # self.headers['Authorization'] = 'Bearer'
        resp = self.sess.post(
            self.sendSMSUrl,
            headers=self.headers,
            json=payload
        )
        print resp.text
        rs = json.loads(resp.text)
        self.predata['type'] = rs['data']['type']
        self.predata['id'] = rs['data']['id']
        print self.predata['type']
        print self.predata['id']

        print '+++++++++++send SMS end+++++++++++'

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

        print '+++++++++++input Verification code end+++++++++++'

    def setUserName(self, options):
        print '+++++++++++step4+++++++++++'
        private_key = self.predata['token']
        palyload = {
            'sub': self.predata['uid'],
            'jti': self.predata['sid'],
            'exp': str(int(time.time() + 300))
        }
        authentication = 'Bearer ' + jwt.encode(palyload,
                                                private_key,
                                                algorithm='RS512')

        palyload = {
            'full_name': options.name
        }
        headers = {'authorization': authentication}
        resp = self.sess.post(
            self.setUserNameUrl,
            json=palyload,
            headers=headers
        )
        if resp.status_code == requests.codes.OK:
            print 'success'
            print resp.text
        else:
            print 'error'

    def demoHttps(self):
        resp = self.sess.get(
            'https://www.baidu.com'
        )
        print resp.text


class EMA666(object):
    def __init__(self):
        self.user = {
            'userName': 'chg999',
            'passWord': '123456',
            'ItemId': '58012',
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
        self.sess.proxies = self.proxies
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

    # 暂时用不到
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
        return '+86' + resp.text[0: -1], resp.text[0:-1]

        # 'False:没有短信，请5秒后再试'
        # 'MSG&Mixin code 1415 [PIN]

    def getMessage(self, options):
        payload = {'token': self.token,
                   'itemId': self.user['ItemId'],
                   'phone': options.truePhone
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
            options.code = rs.split(' ')[2]
            print options.code
            return True

    def releaseAllPhone(self):
        payload = {'token': self.token}
        resp = self.sess.get(
            self.releaseAllPhoen,
            params=payload
        )


def main(options):
    count = 1
    xin = AUTO_XIN()
    # xin.demoHttps()
    ema666 = EMA666()
    ema666.login()
    ema666.releaseAllPhone()
    phone_arr = ema666.getPhone()
    options.phone = phone_arr[0]
    options.truePhone = phone_arr[1]
    xin.getCookie(options)
    xin.sendSMS(options)

    while True:
        print '开始轮训:' + str(count)
        count += 1
        time.sleep(options.wait)
        if ema666.getMessage(options):
            print '轮训end'
            xin.verifications(options)
            xin.setUserName(options)
            break


if __name__ == '__main__':
    parser = argparse.ArgumentParser(
        description='Simulate to login Jing Dong, and buy sepecified good')
    options = parser.parse_args()
    options.invitationCode = '802847'
    options.phone = '+8615020978071'
    # 验证码
    options.code = '0904'
    options.name = 'random99'
    # 等待5s后请求短信内容
    options.wait = 5
    # 最做重试次数
    options.tryCount = 10

    while True:
        main(options)
