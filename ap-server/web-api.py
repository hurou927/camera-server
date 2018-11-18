#!/usr/bin/python3
# -*- coding: utf-8 -*-
from flask import Flask, jsonify, abort, make_response
from flask_cors import CORS
import sys
import os
import cv2
import base64

api = Flask(__name__)
CORS(api)


width = 640
height = 480

cap = cv2.VideoCapture(1)
cap.set(cv2.CAP_PROP_FRAME_WIDTH, width)
cap.set(cv2.CAP_PROP_FRAME_HEIGHT, height)
print(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
print(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))



@api.route('/camera', methods=['GET'])
def get():
    ret, frame = cap.read()
    #jpegstring = cv2.imencode('.jpeg',frame)[1].tostring()
    buffer = cv2.imencode('.jpeg',frame)[1]
    imageData = base64.b64encode(buffer).decode('utf-8')
    result = {
        'success': True,
        'image': imageData,
        'imageSize' : len(imageData)
    }
    return make_response(jsonify(result))   


@api.errorhandler(404)
def not_found(error):
    print(error)
    return make_response(
        jsonify({
            'success':False,
            'error': {
                'message': 'error'
            }
         }), 404)


if __name__ == '__main__':
    api.run(host='0.0.0.0', port=8002)
    
