import cv2
import numpy as np
import os
import modules.speech as speech
import time
import datetime
from json import loads
from requests import get
from pyowm.owm import OWM
from modules.keys import keys
import webbrowser


engine = speech.Speech()






def get_time():
    currentDT = datetime.datetime.now()

    engine.text_to_speech("The time is {} hours and {} minutes".format(
        currentDT.hour, currentDT.minute))

    return



def go_to_page(url):
  webbrowser.open(url)


def go_user_profile():
    engine.text_to_speech("1. Visit the user profile page")
    go_to_page("www.google.com")
def go_to_transaction():
    engine.text_to_speech("1. Visit the transaction page")
    go_to_page("https://www.youtube.com/")


