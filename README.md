This is my frontend of the web app where you can store list of your friends and its made using Angular express and sql
To get the backend code for this repo visit :git@github.com:Msuf123/crud-angular-app-backend.git 
Then you can run your frontend server but there are few things you need to configure like 
in the file /app/components/login.components.ts line no 47 you need to enter your own github client id and you can generate it using following steps:
1.
After you are done with the frontend for github refer to backend readme for the setup .
You also need to update line no 48 in same file (login.components.ts) You need to enter your google client id by following setps:
1.
Note: in case of google make sure your redirect url matches