import os

from flask import Flask, request
from flask_mysqldb import MySQL
from flask_hashing import Hashing
import uuid
from flask_cors import cross_origin

# create the flask app
app = Flask(__name__)

hashing = Hashing(app) # hashing object

# database configuration
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'library_managemement_system'
mysql = MySQL(app)


salt = "780593a5-5be5-474b-a6e0-4f20e56de7b6"  # salt is a secret string used to hash the password
