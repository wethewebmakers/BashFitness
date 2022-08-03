from calendar import month
from tracemalloc import start
from django.shortcuts import render
from .models import *
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
import datetime
from dateutil.relativedelta import relativedelta
from scheduler_jobs import GetDetails
from datetime import datetime, date
from dateutil.relativedelta import relativedelta
from django.db.models import Count
from django.db.models.functions import ExtractMonth

# Create your views here.

@csrf_exempt
def homePage(request):
    return render(request, 'index.html')

@csrf_exempt
def aboutPage(request):
    return render(request, 'about.html')

@csrf_exempt
def galleryPage(request):
    return render(request, 'gallery.html')

@csrf_exempt
def formPage(request):
    return render(request, 'form.html')

@csrf_exempt
def contactPage(request):
    return render(request, 'contact.html')

@csrf_exempt
def newUser(request):
    try:
        user_name = request.POST['user_name']
        user_email = request.POST['user_email']
        birthday = request.POST['birthday']
        contact = request.POST['contact']
        gender = request.POST['gender']
        address = request.POST['address']
        city = request.POST['city']
        state = request.POST['state']
        pincode = request.POST['pincode']
        occupation = request.POST['occupation']
        working_hours = request.POST['working_hours']
        blood_group = request.POST['blood_group']
        sleeping_time = request.POST['sleeping_time']
        emergency = request.POST['emergency']
        mode = request.POST['mode']
        height = request.POST['height']
        weight = request.POST['weight']
        BMI = request.POST['BMI']
        attended_gym = request.POST['attended_gym']
        BP_check = request.POST['BP_check']
        question1 = request.POST['question1']
        question2 = request.POST['question2']
        question3 = request.POST['question3']
        smoking_habit = request.POST['smoking_habit']
        question4 = request.POST['question4']
        question5 = request.POST['question5']
        physical_activity = request.POST['physical_activity']
        exercise_frequency = request.POST['exercise_frequency']
        exercise_duration = request.POST['exercise_duration']
        question6 = request.POST['question6']
        fitness_goal = request.POST['fitness_goal']
        try:
            profile = request.FILES['profile']
        except Exception as e:
            profile = None
        
        UserInfo.objects.create(userName=user_name, userEmail=user_email, birthday=birthday, contact=contact, gender=gender, address=address, city=city, state=state, pincode=pincode, occupation=occupation, workingHours=working_hours, 
        bloodGroup=blood_group, sleepingTime=sleeping_time, emergencyContact=emergency, trainingMode=mode, isMember=False, height=height, weight=weight, attendedGym=attended_gym, BPCheck=BP_check, question1=question1, question2=question2,
        question3=question3, smokingHabit=smoking_habit, question4=question4, question5=question5, physicalActivity=physical_activity, exerciseFrequency=exercise_frequency, exerciseDuration=exercise_duration, question6=question6, 
        fitnessGoal=fitness_goal, memberId=None, package=None, startDate=None, endDate=None, fees=0, BMI=BMI, profileImage=profile)
        
        return JsonResponse({"status":"success","message":"user created"})
    except Exception as e:
            return JsonResponse({"status":"failed","message": str(e)})

@csrf_exempt
def authLogin(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        
        user = authenticate(username=username, password=password)
        
        if user is not None:
            if user.is_active:
                login(request, user)
                return redirect('/dashboard')
            else:
                return redirect('/admin')
        else:
            message = 'Invalid Credentials! Please try again!!'
            return render(request, 'login.html', {'message': message})
    else:
        return render(request, 'login.html')

@csrf_exempt
def authLogout(request):
    logout(request)
    return redirect('/')

def get_last_months(start_date, months):
    for i in range(months):
        yield (start_date.month,start_date.year)
        start_date += relativedelta(months = -1)

@csrf_exempt
def adminDashboard(request):
    if request.user.is_authenticated:
        userDetails = UserInfo.objects.all()
        pendingCount = UserInfo.objects.all().filter(isMember=False).count()
        memberCount = UserInfo.objects.all().filter(isMember=True).count()
        enquiry_last_month = UserInfo.objects.all().filter(createdDate__range=[date.today() + relativedelta(days=-30), date.today()]).count()
        members_last_month = UserInfo.objects.all().filter(createdDate__range=[date.today() + relativedelta(days=-30), date.today()], isMember=True).count()
        enquiry_last2last_month = UserInfo.objects.all().filter(createdDate__range=[date.today() + relativedelta(days=-60), date.today() + relativedelta(days=-31)]).count()
        members_last2last_month = UserInfo.objects.all().filter(createdDate__range=[date.today() + relativedelta(days=-60), date.today() + relativedelta(days=-31)], isMember=True).count()
        enquiry_3last_month = UserInfo.objects.all().filter(createdDate__range=[date.today() + relativedelta(days=-90), date.today() + relativedelta(days=-61)]).count()
        enquiry_4last_month = UserInfo.objects.all().filter(createdDate__range=[date.today() + relativedelta(days=-120), date.today() + relativedelta(days=-91)]).count()
        enquiry_5last_month = UserInfo.objects.all().filter(createdDate__range=[date.today() + relativedelta(days=-150), date.today() + relativedelta(days=-121)]).count()
        enquiry_6last_month = UserInfo.objects.all().filter(createdDate__range=[date.today() + relativedelta(days=-180), date.today() + relativedelta(days=-151)]).count()
    
        count_list = [enquiry_6last_month, enquiry_5last_month, enquiry_4last_month, enquiry_3last_month, enquiry_last2last_month, enquiry_last_month]
        
        month_list = [list(i) for i in get_last_months(datetime.today(), 6)]
        
        packages = PackageInfo.objects.all()

        members_up, enquiry_up = False, False
        if members_last2last_month<members_last_month:
            members_up = True
        if enquiry_last2last_month<enquiry_last_month:
            enquiry_up = True
        memberId = [[entry.memberId, entry.userId] for entry in userDetails if entry.memberId!=None]
        expiry_today, expiry_thisweek, birthday, contact = GetDetails()
        
        return render(request, 'admindashboard.html', {'memberId': memberId, 'expiryToday': expiry_today, 'expiryThisweek': expiry_thisweek, 'pendingCount': pendingCount, 'memberCount': memberCount, 'enquiry_last_month': enquiry_last_month, 'members_last_month': members_last_month, 'members_up': members_up, 'enquiry_up': enquiry_up, 'count_list': count_list, 'month_list': month_list[::-1], 'packages': packages})
    else:
        return redirect('/')

@csrf_exempt
def pendingEnquiries(request):
    if request.user.is_authenticated:
        if request.method=="GET":
            enquiries = UserInfo.objects.all().filter(isMember=False)
            return render(request, 'pendingenquiries.html', {'enquiries': enquiries})
    else:
        return redirect('/')

@csrf_exempt
def makeMember(request):
    if request.method=="POST":
        user_id = request.POST['userId']
        memid = request.POST.get('memid')
        package = request.POST.get('package')
        relativestartdate = request.POST.get('startdate')
        fees = request.POST.get('fees')
        datetimeobj = datetime.strptime(relativestartdate, "%Y-%m-%d")
        
        packages = PackageInfo.objects.all().filter(package=package)
        month = list(packages)[0].month
        relativeenddate = datetimeobj + relativedelta(months=+month)
        
        startdate = datetimeobj.strftime('%Y-%m-%d')
        enddate = relativeenddate.strftime('%Y-%m-%d')

        member = UserInfo.objects.filter(userId=user_id).update(memberId=memid, isMember=True, package=package, startDate=startdate, endDate=enddate, fees=fees)
        return JsonResponse({"status":"success", "message": "Member joined"})
        

@csrf_exempt
def joinedMembers(request):
    if request.user.is_authenticated:
        if request.method=="GET":
            members = UserInfo.objects.all().filter(isMember=True)
            return render(request, 'joinedmembers.html', {'members': members})
    else:
        return redirect('/')

@csrf_exempt
def enquiryDetail(request, uid):
    if request.user.is_authenticated:
        enquiry = UserInfo.objects.get(userId = uid)
        packages = PackageInfo.objects.all()
        return render(request, 'enquirydetail.html', {'enquiry': enquiry, 'packages': packages})
    else:
        return redirect('/')

@csrf_exempt
def memberDetail(request, uid):
    if request.user.is_authenticated:
        member = UserInfo.objects.get(userId = uid)
        packages = PackageInfo.objects.all()
        return render(request, 'memberdetail.html', {'member': member, 'packages': packages})
    else:
        return redirect('/')

@csrf_exempt
def deleteEnquiry(request):
    try:
        if request.method=="POST":
            user_id = request.POST['userId']
            UserInfo.objects.filter(userId=user_id).delete()
            return JsonResponse({"status":"success", "message": "Deleted successfully !!"})
    except Exception as e:
        return JsonResponse({"status":"failed", "message": e})

@csrf_exempt
def deleteMember(request):
    try:
        if request.method=="POST":
            user_id = request.POST['userId']
            UserInfo.objects.filter(userId=user_id).delete()
            return JsonResponse({"status":"success", "message": "Deactivated successfully !!"})
    except Exception as e:
        return JsonResponse({"status":"failed", "message": e})

@csrf_exempt
def renewMember(request):
    try:
        if request.method=="POST":
            user_id = request.POST['userId']
            package = request.POST.get('package')
            relativestartdate = request.POST.get('startdate')
            fees = request.POST.get('fees')
            datetimeobj = datetime.strptime(relativestartdate, "%Y-%m-%d")
            packages = PackageInfo.objects.all().filter(package=package)
            month = list(packages)[0].month
            relativeenddate = datetimeobj + relativedelta(months=+month)
            
            startdate = datetimeobj.strftime('%Y-%m-%d')
            enddate = relativeenddate.strftime('%Y-%m-%d')
            
            UserInfo.objects.filter(userId=user_id).update(package=package, startDate=startdate, endDate=enddate, fees=fees)
            return JsonResponse({"status":"success", "message": "Membership renewal completed"})
    except Exception as e:
        return JsonResponse({"status":"failed", "message": e})

@csrf_exempt
def editPersonalDetails(request):
    try:
        user_id = request.POST['user_id']
        user_name = request.POST['user_name']
        user_email = request.POST['user_email']
        age = request.POST['age']
        contact = request.POST['contact']
        gender = request.POST['gender']
        address = request.POST['address']
        city = request.POST['city']
        state = request.POST['state']
        pincode = request.POST['pincode']
        occupation = request.POST['occupation']
        working_hours = request.POST['working_hours']
        blood_group = request.POST['blood_group']
        sleeping_time = request.POST['sleeping_time']
        emergency = request.POST['emergency']
        mode = request.POST['mode']
       
        UserInfo.objects.filter(userId=user_id).update(userName=user_name, userEmail=user_email, age=age, contact=contact, gender=gender, address=address, city=city, state=state, pincode=pincode, occupation=occupation, workingHours=working_hours, bloodGroup=blood_group, sleepingTime=sleeping_time, emergencyContact=emergency, trainingMode=mode)
        return JsonResponse({"status":"success","message":"Profile updated !"})
    except Exception as e:
            return JsonResponse({"status":"failed","message": str(e)})

@csrf_exempt
def editFitnessDetails(request):
    try:
        user_id = request.POST['user_id']
        height = request.POST['height']
        weight = request.POST['weight']
        BMI = request.POST['BMI']
        attended_gym = request.POST['attendedGym']
        bp_check = request.POST['BPCheck']
        question1 = request.POST['question1']
        question2 = request.POST['question2']
        question3 = request.POST['question3']
        smoking_habit = request.POST['smokingHabit']
        question4 = request.POST['question4']
        question5 = request.POST['question5']
        physical_activity = request.POST['physicalActivity']
        exercise_frequency = request.POST['exerciseFrequency']
        exercise_duration = request.POST['exerciseDuration']
        question6 = request.POST['question6']
        fitness_goal = request.POST['fitnessGoal']
        
        UserInfo.objects.filter(userId=user_id).update(height=height, weight=weight, attendedGym=attended_gym, BPCheck=bp_check, question1=question1, question2=question2,
        question3=question3, smokingHabit=smoking_habit, question4=question4, question5=question5, physicalActivity=physical_activity, exerciseFrequency=exercise_frequency, exerciseDuration=exercise_duration, question6=question6, 
        fitnessGoal=fitness_goal, BMI=BMI)
        return JsonResponse({"status":"success","message":"Profile updated !"})
    except Exception as e:
            return JsonResponse({"status":"failed","message": str(e)})

@csrf_exempt
def workouts(request):
    if request.user.is_authenticated:
        return render(request, 'workouts.html')
    else:
        return redirect('/')

@csrf_exempt
def searchMember(request):
    if request.method=="POST":
        memberid = request.POST['search']
        userDetails = UserInfo.objects.filter(memberId=memberid)
        userid = userDetails[0].userId
        return memberDetail(request, userid)

@csrf_exempt
def addMember(request):

    return render(request, 'addmemberform.html')  

@csrf_exempt
def addPackage(request):
    if request.method=="POST":
        try:
            package = request.POST['package']
            month = request.POST['month']
            PackageInfo.objects.create(package=package, month=month)
            return JsonResponse({"status":"success","message":"Package added"})
        except Exception as e:
                return JsonResponse({"status":"failed","message": str(e)})

@csrf_exempt
def deletePackage(request):
    try:
        package_name = request.POST['package']
        PackageInfo.objects.filter(package=package_name).delete()
        return JsonResponse({"status":"success", "message": "Package deleted successfully !!"})
    except Exception as e:
        return JsonResponse({"status":"failed", "message": e})
