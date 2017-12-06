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
        self.sendSMSUrl = 'https://api.mixin.one/verifications/'
        self.setUserNameUrl = 'https://api.mixin.one/me'

        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.89 Safari/537.36',
            'ContentType': 'text/html; charset=utf-8',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
            'Connection': 'keep-alive',
        }
        self.proxyDict = {
            "http": 'http://127.0.0.1:8888',
            "https": 'https://127.0.0.1:8888',
        }
        self.generation = {
            "alg": "RS512",
            "typ": "JWT"
        }

        self.sess = requests.Session()
        self.sess.proxies.update(self.proxyDict)
        self.sess.headers.update(self.headers)
        self.sess.verify = "./charles-ssl-proxying-certificate.pem"

        self.cookies = {

        }
        self.predata = {

        }

    # get __cfduid
    def getCookie(self, options):
        print '+++++++++++setp1+++++++++++'
        print '+++++++++++_cfduid begin+++++++++++'
        url = self.registerUrl + options.invitationCode
        resp = self.sess.get(
            url
        )
        print resp.cookies

        print '+++++++++++_cfduid end+++++++++++'

    def sendSMS(self, options):
        print '+++++++++++step2+++++++++++'
        print '+++++++++++send SMS begin+++++++++++'
        payload = {'phone': options.phone, 'purpose': 'SESSION'}
        header = self.headers
        header['ContentType'] = 'application/json'
        header['Accept'] = '*/*'
        header['Origin'] = 'https://mixin.one'
        header['Authorization'] = 'Bearer'
        header['Referer'] = 'https://mixin.one/enroll/' + options.invitationCode
        resp = self.sess.post(
            self.sendSMSUrl,
            data=json.dumps(payload),
            headers=header
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
        url = self.sendSMSUrl + self.predata['id']
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
        rs = json.loads(resp.text)
        self.predata['uid'] = rs['data']['user_id']
        self.predata['sid'] = rs['data']['session_id']
        self.predata['token'] = rs['data']['authentication_token']
        print resp.text

        print '+++++++++++input Verification code end+++++++++++'

    def setUserName(self, options):
        print '+++++++++++step4+++++++++++'
        private_key = self.predata['token']
        palyload = {
            'sub': self.predata['uid'],
            'jti': self.predata['jti'],
            'exp': str(int(time.time() + 300))
        }
        authentication = 'Bearer ' + base64.b64encode(
            json.dumps(self.generation)) + '.' + jwt.encode(palyload,
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
        if resp.status_code != requests.codes.OK:
            print 'success'
            print resp.text
        else:
            print 'error'

    def demoHttps(self):
        resp = self.sess.get(
            'https://www.baidu.com'
        )
        print resp.text


def main(options):
    xin = AUTO_XIN()
    # xin.getCookie(options)
    # xin.sendSMS(options)
    # xin.verifications(options)
    # xin.setUserName(options)
    xin.demoHttps()


if __name__ == '__main__':
    parser = argparse.ArgumentParser(
        description='Simulate to login Jing Dong, and buy sepecified good')
    options = parser.parse_args()
    options.invitationCode = '802847'
    options.phone = '+8613466334619'
    options.code = '0904'
    options.name = 'random99'

    main(options)
