from flask_stripe import app, db
from flask import render_template, request
import stripe
import os

stripe.api_key = os.environ.get('STRIPE_KEY')

@app.route('/',methods=['GET','POST'])
def home():
    return render_template('home.html')