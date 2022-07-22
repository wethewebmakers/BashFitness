from django.urls import path
from . import views

urlpatterns = [
    path('',views.homePage, name="homepage"),
    path('about', views.aboutPage, name="aboutpage"),
    path('gallery', views.galleryPage, name="gallerypage"),
    path('joinus', views.formPage, name="formpage"),
    path('contact', views.contactPage, name="contactPage"),
    path('submitform', views.newUser, name="newuser"),
    path('admin', views.authLogin, name="authlogin"),
    path('logout', views.authLogout, name="authlogout"),
    path('dashboard', views.adminDashboard, name="admindashboard"),
    path('pendingenquiries', views.pendingEnquiries, name="pendingenquiries"),
    path('joinedmembers', views.joinedMembers, name="joinedmembers"),
    path('makemember', views.makeMember, name="makemember"),
    path('pendingenquiries/<int:uid>', views.enquiryDetail, name='enquirydetail'),
    path('joinedmembers/<int:uid>', views.memberDetail, name='memberdetail'),
    path('deleteenquiry', views.deleteEnquiry, name="deleteenquiry"),
    path('deletemember', views.deleteMember, name="deletemember"),
    path('renewmember', views.renewMember, name="renewmember"),
    path('editpersonaldetails', views.editPersonalDetails, name="editpersonaldetails"),
    path('editfitnessdetails', views.editFitnessDetails, name="editfitnessdetails"),
    path('workouts', views.workouts, name="workouts"),
    path('searchmember', views.searchMember, name="searchMember"),
    path('addmember', views.addMember, name="addmember"),
    path('addpackage', views.addPackage, name="addpackage"),
    path('deletepackage', views.deletePackage, name="deletepackage"),
]