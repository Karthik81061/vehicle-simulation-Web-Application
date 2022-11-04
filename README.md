# vehicle-simulation-tech-Challenge2



<h2>steps to install:</h2>
   1) download the code.</br>
   2) extract the zip file.</br>
   3) Open the folder go to vehicle-simulation-Tech-Challange--2.</br>
   4) you will find the html,css and java files.</br>
   5) right click on any html file and choose open with a web browser.</br>
   6) web application will open and ready to use </br></br>
 <h2> Application Manual:</h2>
 1) As the Application open select the Add Scenario option in the sidebar.</br>
 ![addsc](https://user-images.githubusercontent.com/117280395/199501941-15fe4bd7-0515-4986-9885-038a7e0629d3.png) </br>
 2) you will see Add Scenario Section where you can give scenario name and scenario run time.</br>
 3) Now go to All Scenario window by clicking on sidebar option , You will see the senario details thath you added.</br>
 ![allsc2](https://user-images.githubusercontent.com/117280395/199504389-10300b76-3663-4c44-a865-11782edd397b.png) </br>
 4) Now you can add vechile,by going to Add Vechile Window by selecting option in the side bar or click "add vechile" on top.</br>
 ![addve1](https://user-images.githubusercontent.com/117280395/199503038-231fe0af-e885-4895-8400-49328bf6de92.png)<br>
 5) In Add Vechile Window you can add vehicles in your scenario for simulation.</br>
 6) At first select the scenario name by drop down menu to select the scenario that you want to add vehicles.</br>
 7) Give the shown Vechile Parameters.</br>
 8) Now you see in All Scenarios window under vechile coloumn it represents number of vehicles added to a particular scenario.</br>
 ![allsce2](https://user-images.githubusercontent.com/117280395/199504433-ac9ba891-108a-497a-b91a-f58959c57572.png)</br>
 9) by clicking delet all button you can remove all scenarios.</br>
 10) Now for the simulation go to Home window, there you need to select the scenario name.</br>
 ![home1](https://user-images.githubusercontent.com/117280395/199503585-e18124b1-d33d-4294-85fe-4eef1dbbdad1.png)</br>
 11) Then it will show list of all vehicles are in the scenario with their parameters and their positions in the graph.</br>
 ![home2](https://user-images.githubusercontent.com/117280395/199503604-82b9dd2b-4803-45a1-b85c-bed63cd8b399.png)</br>
 12) now click start simulation to run the simulation.(I apologize Because i didn't get application compelete. Its first time of developing a web application i am a beginner web development. ). 

<h2> Making Process:</h2>
 At the beginning i has created the HTML structure and then stylized CSS.</br>
 I used localStorage for storing the secnario data and its vechile data. This how i did this:</br></br>
 I set key name is my scenario namme and value is scenario data. shown in figure</br>
 ![when scenario addedd](https://user-images.githubusercontent.com/117280395/199530546-08549fd9-7071-499c-89b6-24cf56b638ad.png)</br>
 In localstorage when we add a new scenario it will take secnario name as KEY and VALUE:[id , scenario name, scenario time].</br>
 
 If we add a vehicle in the Scenario then the array will become a 2d array, as shown in below figure.</br>
 ![when vechile added](https://user-images.githubusercontent.com/117280395/199530529-58fbd03a-6687-48a6-8d0a-42194de85168.png)</br>
 </br>
 I thought this is the best way to store data so i can fetch them easily by using two forloops, Now KEY will be same but,</br> the vechile data will become a new array inside the VALUE. Like This
 KEY: Scenario-Name = VALUE:[id, Scenario-Name, Scenario-Time, [Vehicle-Name, Speed, PosX, PosY, Direction]]</br.
 This way i can easily call the vehicle data,(eg: getdata[3][0]) it will get my vehicle name, this way i can get my vehicle data.</br>
 
 
Adding Multiple Scenarios will create multiple KEYS and VALUES in local Storage:</br>
![multiple scenarios](https://user-images.githubusercontent.com/117280395/199530518-a91a6e2b-aa96-41d0-8875-5c9fa6a73be7.png)







