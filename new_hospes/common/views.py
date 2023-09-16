from django.shortcuts import render
from django.contrib.auth.models import User
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import Group 


def login_user (request):
    error_message = ''
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user) 
            if user.groups.filter(name='Master').exists():
                return redirect('master')
            elif user.groups.filter(name='Client').exists():
                return redirect('client') 
        else:
            error_message = "Invalid Username or Password, Please Try Again"
            # messages.error(request, "Invalid Username or Password, Please Try Again")
            # render(request,"login.html",{'error_message': error_message})   

    return render(request,"login.html",{'error_message': error_message})



def signup_user (request):
    error_message = ''
    if request.method == 'POST':
        # Get user input from POST data
        username = request.POST['username']
        password = request.POST['password']
        confirm_password = request.POST.get('confirm_password', '')
        first_name = request.POST.get('fname', '')
        last_name = request.POST.get('lname', '')
        # user_company_name = request.POST['password']
        email = request.POST.get('email', '')
        user_type = request.POST.get('user_type', '' )
        
        # Check if password and confirm_password match
        if password != confirm_password:
            error_message = "Passwords do not match"
            return render(request, 'signup.html', {'error_message': error_message})
        
        # Create a new User object with additional fields
        user = User(username=username, email=email, first_name=first_name, last_name = last_name)
        user.set_password(password)
        user.save()
        
        #Add the user to the appropriate group based on user_type
        if user_type == 'client':
            group = Group.objects.get(name='Client')
        elif user_type == 'master':
            group = Group.objects.get(name='Master')
        user.groups.add(group)

        # Display success message
        # messages.success(request, "Account created successfully")
        return redirect('login_user')
    
    return render(request, 'signup.html')
