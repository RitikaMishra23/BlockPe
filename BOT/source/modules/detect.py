import cv2
from azure.cognitiveservices.vision.computervision import ComputerVisionClient
from azure.cognitiveservices.vision.computervision.models import OperationStatusCodes
from msrest.authentication import CognitiveServicesCredentials
from azure.core.credentials import AzureKeyCredential
from azure.ai.formrecognizer import FormRecognizerClient

import os
import time

from modules.keys import keys
import modules.speech as speech

engine = speech.Speech()

'''
Describe an Image
'''







def read(cam):
    '''
    OCR: Read File using the Read API, extract text - local
    This example extracts text from a local image, then prints results.
    This API call can also recognize remote image text (shown in next example, Read File - remote).
    '''
    ret, frame = cam.read()
    if ret == None:
        engine.text_to_speech("Not getting any frame. Quitting now...")
    else:
        cv2.imwrite('op.jpg', frame)
    print("===== Read File =====")
    engine.text_to_speech("Reading the intended text")

    # Get image path
    # images_folder = os.path.join (os.path.dirname(os.path.abspath(__file__)), "images")
    # read_image_path = os.path.join (images_folder, "french.jpeg")
    # Open the image
    path = "op.jpg"
    read_image = open(path, "rb")

    # <snippet_client>
    computervision_client = ComputerVisionClient(
        keys['vision_endpoint'], CognitiveServicesCredentials(keys['vision_key']))
    # </snippet_client>

    # Call API with image and raw response (allows you to get the operation location)
    read_response = computervision_client.read_in_stream(read_image, raw=True)
    # Get the operation location (URL with ID as last appendage)
    read_operation_location = read_response.headers["Operation-Location"]
    # Take the ID off and use to get results
    operation_id = read_operation_location.split("/")[-1]

    # Call the "GET" API and wait for the retrieval of the results
    while True:
        read_result = computervision_client.get_read_result(operation_id)
        if read_result.status.lower() not in ['notstarted', 'running']:
            break
        engine.text_to_speech("Waiting for result...")
        time.sleep(10)

    # Print results, line by line
    if read_result.status == OperationStatusCodes.succeeded:
        for text_result in read_result.analyze_result.read_results:
            for line in text_result.lines:
                print(line.text)
                engine.text_to_speech(line.text)
                print(line.bounding_box)
    print()



def analyzeReceipt():

    path_to_sample_forms = os.path.abspath(
        os.path.join(
            os.path.abspath(__file__),
            "..",
            "..",
            "./images/receipt.png",
        )
    )

    endpoint = keys['analyze_receipt_endpoint']
    key = keys['analyze_receipt_key']

    form_recognizer_client = FormRecognizerClient(
        endpoint=endpoint, credential=AzureKeyCredential(key)
    )
    with open(path_to_sample_forms, "rb") as f:
        poller = form_recognizer_client.begin_recognize_receipts(
            receipt=f, locale="en-US")
    receipts = poller.result()

    for idx, receipt in enumerate(receipts):
        print("--------Recognizing receipt #{}--------".format(idx+1))
        engine.text_to_speech("Recognizing receipt")
        receipt_type = receipt.fields.get("ReceiptType")
        if receipt_type:
            print("Receipt Type: {} has confidence: {}".format(
                receipt_type.value, receipt_type.confidence))
            engine.text_to_speech(
                "Receipt Type: {}".format(receipt_type.value))
        merchant_name = receipt.fields.get("MerchantName")
        if merchant_name:
            print("Merchant Name: {} has confidence: {}".format(
                merchant_name.value, merchant_name.confidence))
            engine.text_to_speech(
                "Merchant Name: {}".format(merchant_name.value))
        transaction_date = receipt.fields.get("TransactionDate")
        if transaction_date:
            print("Transaction Date: {} has confidence: {}".format(
                transaction_date.value, transaction_date.confidence))
            engine.text_to_speech(
                "Transaction Date: {}".format(transaction_date.value))

        if receipt.fields.get("Items"):
            print("Receipt items:")
            engine.text_to_speech("The following are the receipt items:")

            for idx, item in enumerate(receipt.fields.get("Items").value):
                print("...Item #{}".format(idx+1))
                engine.text_to_speech("Item Number {}".format(idx + 1))

                item_name = item.value.get("Name")
                if item_name:
                    print("......Item Name: {} has confidence: {}".format(
                        item_name.value, item_name.confidence))
                    engine.text_to_speech(
                        "Item name {}".format(item_name.value))

                item_quantity = item.value.get("Quantity")
                if item_quantity:
                    print("......Item Quantity: {} has confidence: {}".format(
                        item_quantity.value, item_quantity.confidence))
                    engine.text_to_speech(
                        "Item quantity {}".format(item_quantity.value))

                item_price = item.value.get("Price")
                if item_price:
                    print("......Individual Item Price: {} has confidence: {}".format(
                        item_price.value, item_price.confidence))
                    engine.text_to_speech(
                        "Individual item price {}".format(item_price.value))

                item_total_price = item.value.get("TotalPrice")
                if item_total_price:
                    print("......Total Item Price: {} has confidence: {}".format(
                        item_total_price.value, item_total_price.confidence))

                    engine.text_to_speech(
                        "Total item price {}".format(item_total_price.value))
        subtotal = receipt.fields.get("Subtotal")
        if subtotal:
            print("Subtotal: {} has confidence: {}".format(
                subtotal.value, subtotal.confidence))
            engine.text_to_speech("Subtotal {}".format(subtotal.value))

        tax = receipt.fields.get("Tax")
        if tax:
            print("Tax: {} has confidence: {}".format(
                tax.value, tax.confidence))
            engine.text_to_speech("Tax {}".format(tax.value))

        tip = receipt.fields.get("Tip")
        if tip:
            print("Tip: {} has confidence: {}".format(
                tip.value, tip.confidence))
            engine.text_to_speech("Tip {}".format(tip.value))
        total = receipt.fields.get("Total")
        if total:
            print("Total: {} has confidence: {}".format(
                total.value, total.confidence))
            engine.text_to_speech("Total {}".format(total.value))
        print("--------------------------------------")
