from datetime import datetime, date
from responses import activate
from fitnessapp.models import *
from dateutil.relativedelta import relativedelta
import clicksend_client
from clicksend_client import SmsMessage
from clicksend_client.rest import ApiException

def sendSMS(mobile, subject):
	# Configure HTTP basic authorization: BasicAuth
	configuration = clicksend_client.Configuration()
	configuration.username = '1704006ece@cit.edu.in'
	configuration.password = '1F75BD68-9D4D-9482-258F-9D3C10D5D69D'

	# create an instance of the API class
	api_instance = clicksend_client.SMSApi(clicksend_client.ApiClient(configuration))

	# If you want to explictly set from, add the key _from to the message.
	if subject=='expiryText':
		sms_message = SmsMessage(source="bash",
							body="Hi there!, This is a reminder that your membership with Bash Fitness expires in 3 days. Please contact gym to renew your plan. Ignore if already paid. Have a nice day. -BASH FITNESS",
							to=mobile)
	elif subject=='birthdayText':
		sms_message = SmsMessage(source="bash",
							body="Hi there!, Bash Fitness wishes you a very Happy Birthday!! Have a wonderful year ahead. -BASH FITNESS",
							to=mobile)
			
	sms_messages = clicksend_client.SmsMessageCollection(messages=[sms_message])

	try:
		# Send sms message(s)
		api_response = api_instance.sms_send_post(sms_messages)
	except ApiException as e:
		print("Exception when calling SMSApi->sms_send_post: %s\n" % e)


def GetDetails():
	
	# print("I am executed..!")

	userDetails = UserInfo.objects.all().filter(isMember=True)
	user_expiry_today = UserInfo.objects.all().filter(endDate=date.today())

	user_expiry_this_week = UserInfo.objects.all().filter(endDate__range=[date.today(), date.today() + relativedelta(days=+7)])
	
	birthday = [int(entry.contact) for entry in userDetails if entry.birthday!=None and entry.birthday.day==date.today().day and entry.birthday.month==date.today().month]

	contact = [int(entry.contact) for entry in userDetails if entry.endDate==date.today() + relativedelta(days=+3)]
	return user_expiry_today, user_expiry_this_week, birthday, contact

def FirstCronTest():
	
	expiryToday, expiryThisweek, birthday, contact = GetDetails()
	
	for item in contact:
		mobile = '+91' + str(item)
		sendSMS(mobile, 'expiryText')

	for item in birthday:
		mobile = '+91' + str(item)
		sendSMS(mobile, 'birthdayText')
