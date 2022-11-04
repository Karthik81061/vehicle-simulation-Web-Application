
var page = document.body.id;

function deleteLocalStorage(){

    localStorage.clear();
    location.reload();
}


switch(page){
    case 'Add_Scenarios_Page':
        setScenarioData();
        break;
    case 'All_Scenarios_Page':
        getAllSCenarios();
        break;
    case 'Add_Vehicle_Page':
        add_Vehicles();
        break;
    case 'Home_Page':
        home_Page();
        break;

}



function home_Page(){
    console.log('HomePage');

    var canvas = document.querySelector('canvas');
    console.log(canvas);
    var c = canvas.getContext('2d');
      
     //lines  
     var v = 25;
     var h = 25;
     for(let i = 0;i<5;i++){
        c.strokeStyle = "green";
        c.beginPath();
        c.moveTo(0,h);
        c.lineTo(300,h);
        c.lineWidth=   0.5;
        c.stroke();
        h+=25;
     }
     for(let i = 0;i<15;i++){
     c.strokeStyle = "green";
     c.beginPath();
     c.moveTo(v,150);
     c.lineTo(v,0);
     c.lineWidth=   0.5;
     c.stroke();
     v+=25
     }
    //  main axis
    c.strokeStyle = "red";
    c.beginPath();
    c.moveTo(1,0);
    c.lineTo(1,300);
    c.lineWidth=   0.5;
    c.stroke();

    c.strokeStyle = "blue";
    c.beginPath();
    c.moveTo(0,148);
    c.lineTo(300,148);
    c.lineWidth=   0.5;
    c.stroke();


    //Lines ss

    let temp;
    //Adding scenarios to select menu
    
    let home_form = document.querySelector('#Hform');
    let select = home_form.querySelector('#scenarios_name');

    var o = document.getElementById('vehicle');
   

    for(let i =0;i<localStorage.length;i++){

        temp = localStorage.getItem(localStorage.key(i));
        temp = JSON.parse(temp);
        let option = document.createElement('option');
        option.value = temp[1]+''.toLowerCase();
        option.text = temp[1];
        select.add(option,0);

    }
   
 startSBttonBasicConrl();
    


}
var colorpick ='';
////////////////////////========Setting the vechiles tables for scenarios============/////////////
function home_ScenarioSelect(){
    

    
    var selected_Scenerio = document.getElementById('scenarios_name').value;

    var html;

    var vehicles_table = document.getElementById('vehicles_table').getElementsByTagName('tbody')[0];

    for( let i =0;i<localStorage.length;i++){

        if(selected_Scenerio==localStorage.key(i)){
            
 
            
            var getdata = JSON.parse(localStorage.getItem(localStorage.key(i)));
            var get_vehicleData;
            for(let j =3;j<getdata.length;j++){
                

            //-/---------------------------------- Making CRUD-------------------------------------
                     html =`<tr>
                    <td >${j-2}</td>
                    <td>${getdata[j][0]}</td>
                    <td>${getdata[j][2]}</td>
                    <td>${getdata[j][3]}</td>
                    <td>${getdata[j][1]}</td>
                    <td>${getdata[j][4]}</td>
                
                    <td><button class="buttons_icon" onclick="editVehicle(${i})"><i class="fa-solid fa-pen"></i></button></td>
                    <td><button class="buttons_icon" onclick="deleteVehicle(${i})"><i class="fa-solid fa-trash"></i></button></td></tr>`
                    vehicles_table.innerHTML +=html

                    var symbols = '123456789ABCDEF';
                    var color = '#';
                
           

                        for(var m=0;m<6;m++){
                            color += symbols[Math.floor(Math.random()*15)];
                            
                        }
                    var graph = document.querySelector('#graph-card');
                        ///managine values
                    let y_pos=getdata[j][3];;       
                     let x_pos=getdata[j][2];;
                     
                     if(x_pos>50)
                     {
                        x_pos = x_pos-2.5;
                        console.log(x_pos);
                     }
                     if(y_pos>50)
                     {
                        y_pos = y_pos-6;
                        console.log(y_pos);
                     }
                    x_pos =x_pos/2.03;
                    y_pos = y_pos/1.03;
                    
                     console.log('x',x_pos);
                     console.log('y',y_pos);
                    ////////////end managing

                    var vehicle1 = document.createElement('p');
                    vehicle1.textContent = j-2;
                    graph.appendChild(vehicle1);
                    vehicle1.style.setProperty('text-align','center');
                    vehicle1.style.setProperty('position','absolute');
                    vehicle1.style.setProperty('width','20px');
                    vehicle1.style.setProperty('height','20px');
                    vehicle1.style.setProperty('border-radius','10px');
                    vehicle1.style.setProperty('top',y_pos+'%');
                    vehicle1.style.setProperty('left',x_pos+'%');

                    vehicle1.style.background = color;
                    colorpick = color;



            }

            
            
            

        }//else{vehicles_table.deleteRow(1);}
           
     }

     startSBttonBasicConrl();

}
function startSBttonBasicConrl(){
    var selected_Scenerio = document.getElementById('scenarios_name').value;
    var sbutton = document.getElementById('start-simulation');
    if(selected_Scenerio =='Select a Scenario'){
       
       sbutton.disabled = true;
       sbutton.style.opacity = 0.5;
    }
    else{

        sbutton.disabled = false;
        sbutton.style.opacity = 1;
       }
}


var m= 0;

function startSimulation(){

    if(page=='Home_Page'){
        var graph = document.querySelector('#graph-card');
        }
    var stop_button = document.getElementById('stop_simulation');
   var selected_Scenerio = document.getElementById('scenarios_name').value;
   var getdata;
        console.log('started');
  
   for( let i =0;i<localStorage.length;i++){

    if(selected_Scenerio==localStorage.key(i)){
        m+=1;
  
        
        getdata = JSON.parse(localStorage.getItem(localStorage.key(i)));
        var cot =3
        for(let j =cot;j<getdata.length;j++){

          
            var symbols = '0123456789ABCDEF';
            var color = '#';
            
           

            for(var m=0;m<6;m++){
                color += symbols[Math.floor(Math.random()*16)];
                
            }
            let y_pos=getdata[j][3];;       
            let x_pos=getdata[j][2];;
            
            if(x_pos>50)
            {
               x_pos = x_pos-2.5;
               console.log(x_pos);
            }
            if(y_pos>50)
            {
               y_pos = y_pos-6;
               console.log(y_pos);
            }
           x_pos =x_pos/2.03;
           y_pos = y_pos/1.03;
           
            let time = getdata[2];
           
            
            var vehicle1 = document.createElement('p');
            vehicle1.textContent = j-2;
            graph.appendChild(vehicle1);
            vehicle1.style.setProperty('text-align','center');
            vehicle1.style.setProperty('position','absolute');
            vehicle1.style.setProperty('width','20px');
            vehicle1.style.setProperty('height','20px');
            vehicle1.style.setProperty('border-radius','10px');
            vehicle1.style.background = colorpick;
            vehicle1.style.setProperty('top',y_pos+'%');
            vehicle1.style.setProperty('left',x_pos+'%');

            ////extracting data from list

            

            var direction = getdata[j][4];
           
            var margin_store='';
            if(direction=='upward'){
                
                margin_store = 'bottom';
            }
            if(direction=='downward'){
               
                margin_store = '=top';
            }
            if(direction == 'forward'){
                
                margin_store = 'left';
            }if(direction=='backward'){
                margin_store = 'right';
                
            }
         
           
             var startTime = new Date().getTime();

            var interval = setInterval(function run(){
                     if(new Date().getTime() - startTime >time*1000){
                            m=0;
                  
                             clearInterval(interval);
                         
                            return;
                         }
                         let stbutton = document.getElementById('stop-simulation')
                         stbutton.addEventListener('click',function(e){
                          e.preventDefault()
                          clearInterval(interval);
                         })
                         m+=1;
                         
                //do
                var direction = getdata[j][4];
              
               
                if(direction=='upward'){
                    if((y_pos-m)<0){
                        
                       m=0;

                     }
                    
                    vehicle1.style.setProperty('top',(y_pos-m)+'%');
                }
                if(direction=='downward'){
                    if((y_pos+m)>94){
                        
                        m=0;
                     
                     }
                  vehicle1.style.setProperty('top',(y_pos+m)+'%');
                }

                if(direction == 'forward'){
                    if((x_pos+m)>98){
                       
                       m=0;
   
                     }
                   
                    vehicle1.style.setProperty('left',(x_pos+m)+'%');}
                if(direction=='backward'){
                    if((x_pos-m)<0){
                       m=0;
                       
                      
                     }
                    console.log(direction)
                    vehicle1.style.setProperty('left',(x_pos-m)+'%');
      
                }
               
                     },300/getdata[j][1]); 

               // vehicle1.style.setProperty('opacity' , '0');
               
               
           
        }}}

////This will disable the startbutton/////
    var sbutton = document.getElementById('start-simulation');
    sbutton.disabled = true;
    sbutton.style.opacity = 0.5;
   //clearInterval(interval);

}


function stopSimulation(){
    time = 0;
    var sbutton = document.getElementById('start-simulation');
    sbutton.disabled = false;
    sbutton.style.opacity = 1;
   

    return false;
}
//-------------------------------------------------END------------------------------------------//
// -------------------------------Add Scenarios Page Code:----------------------------------------------------------
function setScenarioData(){

    

    console.log('Add Scenario Page');
    var form = document.querySelector('#ASform');
    const scenarioName = document.getElementById('scenarioName');
    const runTime = document.getElementById('runTime');
    var sCount=0;
    var getsr;
    
   
    if(localStorage.length==null){
        sCount=0;
    }

    for(let i =0; i<localStorage.length;i++){
        var v_dataholder=[];
        var s_holder=[]
        var name =[];
        var temp = JSON.parse(localStorage.getItem(localStorage.key(i)));
        
        if(temp[temp.length-1]==1){
            sCount+=1
            
            temp.pop();
            localStorage.setItem(temp[1],JSON.stringify(temp));
          
            scenarioName.value = temp[1];
            runTime.value = temp[2];
           
            for(let j =3; j<temp.length;j++){

               v_dataholder.push(temp[j]);
                   
                  
              }
                localStorage.removeItem(temp[1]);

            


                
            }

            
    }

    form.addEventListener('submit',function (e){
        e.preventDefault();
      
        sCount= new Date().getUTCMilliseconds();
        let scenario_Name = scenarioName.value;

        let array = [sCount,scenarioName.value.trim(),''+runTime.value.trim()];
     
        localStorage.setItem(scenario_Name,JSON.stringify(array));

        getsr =JSON.parse( localStorage.getItem(scenario_Name));

     
        
        form.reset();


        // Return Skey
    })



}
var index;
// ----------------------------------------All Scenarios Page Code----------------------------------------------
function getAllSCenarios(){
    console.log('All Scenarios page');

    var table = document.getElementById('table').getElementsByTagName('tbody')[0];

    
    for( let i =0;i<localStorage.length;i++){

       var tempstorage =[];
        tempstorage = JSON.parse(localStorage.getItem(localStorage.key(i)));

        var count = 0; // Counting number of vechiles added to a particular scenario and addind at front
        for(let j=3;j<tempstorage.length;j++){
            
            count+=1;
            
        }
        //-/---------------------------------- Making CRUD-------------------------------------

        var html =`<tr>
        <td>${i+1}</td>
        <td>${tempstorage[1]}</td>
        <td>${tempstorage[2]}</td>
        <td>${count}</td>
        <td><button class="buttons_icon" onclick="addVehicle(${i})"><i class="fa-solid fa-circle-plus"></i></button></td>
        <td><button class="buttons_icon" onclick="editScenario(${i})"><i class="fa-solid fa-pen"></i></button></td>
        <td><button class="buttons_icon" onclick="deleteScenario(${i})"><i class="fa-solid fa-trash"></i></button></td></tr>`
        table.innerHTML +=html
       
        index = i;
        updateLocalStorageId(i);
    }

    

}

///--------------------------------- handle the Scenarios Index-----------------------------------------------------------------------------
function updateLocalStorageId(index){
    let temp = JSON.parse(localStorage.getItem(localStorage.key(index)));
    
    localStorage.setItem(temp[1],JSON.stringify(temp));
    temp = JSON.parse(localStorage.getItem(localStorage.key(index)));
    
  
}
//<-------------------------------------------------------------------------------------->
function editScenario(index){
    
    let sign = 1;
    let temp = JSON.parse(localStorage.getItem(localStorage.key(index)));
    temp.push(sign);
    localStorage.setItem(temp[1],JSON.stringify(temp));
    let text = 'the vehicle data will be lost if you edit the scenario.\n Are you confirm to edit?';
    
    if(confirm(text)==true){
    window.location.href = "Add_Scenario.html";
    }
    
}

function addVehicle(index){
    let ts = JSON.parse(localStorage.getItem(localStorage.key(index)));
    window.location.href = 'Add_vehicles.html'
   // window.location.href = "Add_vehicles.html"

}


//delete
function deleteScenario(index){
    let text = '! Are you sure to delete this scenario permanently?'
    if(confirm(text)==true){
    localStorage.removeItem(localStorage.key(index));
    if(index=localStorage.length){
        localStorage.removeItem(localStorage.key(localStorage.length));
    }
    location.reload();
    }
}







// --------------------------------------------Add Vehicles Page Code-------------------------------------------------
function add_Vehicles(){
    console.log('Add Vechile page');
    let temp;
    //Adding scenarios to select menu
    let select = document.querySelector('#add_vehicles');

    for(let i =0;i<localStorage.length;i++){

        temp = localStorage.getItem(localStorage.key(i));
        temp = JSON.parse(temp);
        let option = document.createElement('option');
        option.value = temp[1]+''.toLowerCase();
        option.text = temp[1];
        select.add(option,0);

    }


    // get data
    var aVform = document.querySelector('#AVform');
    const direction = document.getElementById('direction');
    const vechile_Name = document.getElementById('vehicle_name');
    const speed = document.getElementById('speed');
    const posX = document.getElementById('posX');
    const posY = document.getElementById('posY');



    var button = aVform.addEventListener('submit', function(e){
        e.preventDefault();

        let vdata = [vechile_Name.value,speed.value,posX.value,posY.value,direction.value];

        var lsdata = JSON.parse(localStorage.getItem(select.value));
        var s_hold=[];


        aVform.reset();
        for(let i=0 ;i<localStorage.length;i++){

            s_hold = JSON.parse(localStorage.getItem(localStorage.key(i)));

            var tempArray = [];
            if(lsdata[0]==s_hold[0]){

                //makin Multi D Array for individual

                 for(let j=0;j<vdata.length;j++){
                    tempArray.push(vdata[j]);
                }

            s_hold.push(tempArray);

             localStorage.setItem(s_hold[1],JSON.stringify(s_hold));
            // var k = JSON.parse(localStorage.getItem(s_hold[1]));

            }
        }
        //document.getElementById('add_vehicles').getElementsByTagName('select').selected = 'Select a Scenario'
    })
}