window.onload = function () {
    console.log("started the application >>>");
    // setInterval(smartPodUpdate,5000); 
    // setInterval(ControlPanelThread,10000);
    // setInterval(smartcollatorUpdate,5000);
}


/* Author : Sai Krishna */
document.addEventListener("DOMContentLoaded", function(e) {
  var acc = document.querySelectorAll('a');
  console.log("a",acc)
var i;
// console.log("Lenght of Accordion-->",acc,acc.length)
for (i = 0; i < acc.length; i++){
  // console.log(acc[i])
  acc[i].addEventListener('click',function(){
    console.log("-->",acc)
    acc.forEach(a=>a.classList.remove('active'))
    this.classList.add('active')
  });
}
});


const EvtCollate = () => {
    console.log("Hello")
    var divContainer = document.getElementById("iframe");
    divContainer.style.width="100%"

    var divContainer = document.getElementById("smartcollator");
    divContainer.style.display="none"

    var SmartPod=document.getElementById("SmartPod")
    SmartPod.style.display="none"

    var ConfiguarbleModels = document.getElementById("ConfiguarbleModels");
    ConfiguarbleModels.style.display="none"

    var divContainer = document.getElementById("historicaldataupload");
    divContainer.style.display="none"

    var ResolveErrors = document.getElementById("ResolveErrors");
    ResolveErrors.style.display="none"

    var divContainer = document.getElementById("showCollateData");

    fetch("http://localhost:3000/EvtCollate", {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
    })
      .then((response) => {
        console.log("Calling EvtCollate API");
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log("EvtCollate Data  -->",data)
        var col=[]
        for (var i = 0; i < data.length; i++) {
            for (var key in data[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }
       // CREATE DYNAMIC TABLE.
       var table = document.createElement("table");
       // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.
       var tr = table.insertRow(-1);                   // TABLE ROW.
      for (var i = 0; i < col.length; i++) {
          var th = document.createElement("th");      // TABLE HEADER.
          th.innerHTML = col[i];
          tr.appendChild(th);
      }
      // ADD JSON DATA TO THE TABLE AS ROWS.
      for (var i = 0; i < data.length; i++) {
          tr = table.insertRow(-1);
          for (var j = 0; j < col.length; j++) {
              var tabCell = tr.insertCell(-1);
              tabCell.innerHTML = data[i][col[j]];
          }
      }
      // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
      // var divContainer = document.getElementById("showCollateData");
      var divContainer =document.getElementById("overlay")
      divContainer.style.display = "block";
      divContainer.innerHTML = "";
      divContainer.appendChild(table);
      })
      .catch((err) => {
        console.log(err);
      });
    };
    const smartcollatorUpdate=()=>{
      fetch("http://localhost:3000/EvtCollate", {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
      })
        .then((response) => {
          console.log("Calling EvtCollate API");
          console.log(response);
          return response.json();
        })
        .then((data) => {
          console.log("EvtCollate Data  -->",data)
          var col=[]
          for (var i = 0; i < data.length; i++) {
              for (var key in data[i]) {
                  if (col.indexOf(key) === -1) {
                      col.push(key);
                  }
              }
          }
         // CREATE DYNAMIC TABLE.
         var table = document.createElement("table");
         // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.
         var tr = table.insertRow(-1);                   // TABLE ROW.
        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }
        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < data.length; i++) {
            tr = table.insertRow(-1);
            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = data[i][col[j]];
            }
        }
        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        // var divContainer = document.getElementById("showCollateData");
        var divContainer =document.getElementById("overlay")
        divContainer.style.display = "block";
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const EvtEvent = () => {
        var divContainer = document.getElementById("iframe");
        divContainer.style.width="100%"

        var h=document.getElementById("SmartPod")
        h.style.display="none"

        var smartcollator = document.getElementById("smartcollator");
        smartcollator.style.display="none"

        var ConfiguarbleModels = document.getElementById("ConfiguarbleModels");
        ConfiguarbleModels.style.display="none"
        
        var divContainer = document.getElementById("historicaldataupload");
        divContainer.style.display="none"

        var ResolveErrors = document.getElementById("ResolveErrors");
        ResolveErrors.style.display="none"

        fetch("http://localhost:3000/EvtEvent", {
          method: "GET", // *GET, POST, PUT, DELETE, etc.
        })
          .then((response) => {
            console.log("Calling EvtEvent API");
            console.log(response);
            return response.json();
          })
          .then((data) => {
            console.log("EvtEvent Data  -->",data)
            var col=[]
            for (var i = 0; i < data.length; i++) {
                for (var key in data[i]) {
                    if (col.indexOf(key) === -1) {
                        col.push(key);
                    }
                }
            }
            
           // CREATE DYNAMIC TABLE.
           var table = document.createElement("table");
           // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.
           var tr = table.insertRow(-1);                   // TABLE ROW.
          for (var i = 0; i < col.length; i++) {
              var th = document.createElement("th");      // TABLE HEADER.
              th.innerHTML = col[i];
              tr.appendChild(th);
          }
          // ADD JSON DATA TO THE TABLE AS ROWS.
          for (var i = 0; i < data.length; i++) {
              tr = table.insertRow(-1);
              for (var j = 0; j < col.length; j++) {
                  var tabCell = tr.insertCell(-1);
                  tabCell.innerHTML = data[i][col[j]];
              }
          }
          // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
          // var divContainer = document.getElementById("showData");
          var divContainer =document.getElementById("overlay")
          divContainer.style.display = "block";
          divContainer.innerHTML = "";
          divContainer.appendChild(table);
          })
          .catch((err) => {
            console.log(err);
          });
        };
  const smartPodUpdate=()=>{
    fetch("http://localhost:3000/EvtEvent", {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
          })
            .then((response) => {
              console.log("Calling EvtEvent API");
              console.log(response);
              return response.json();
            })
            .then((data) => {
              console.log("EvtEvent Data  -->",data)
              var col=[]
              for (var i = 0; i < data.length; i++) {
                  for (var key in data[i]) {
                      if (col.indexOf(key) === -1) {
                          col.push(key);
                      }
                  }
              }
              
              // CREATE DYNAMIC TABLE.
              var table = document.createElement("table");
              // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.
              var tr = table.insertRow(-1);                   // TABLE ROW.
            for (var i = 0; i < col.length; i++) {
                var th = document.createElement("th");      // TABLE HEADER.
                th.innerHTML = col[i];
                tr.appendChild(th);
            }
            // ADD JSON DATA TO THE TABLE AS ROWS.
            for (var i = 0; i < data.length; i++) {
                tr = table.insertRow(-1);
                for (var j = 0; j < col.length; j++) {
                    var tabCell = tr.insertCell(-1);
                    tabCell.innerHTML = data[i][col[j]];
                }
            }
            // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
            var divContainer =document.getElementById("overlay")
            divContainer.style.display = "block";
            divContainer.innerHTML = "";
            divContainer.appendChild(table);
            })
            .catch((err) => {
              console.log(err);
            });
  };

    function ConfigurableModels(){

        var divContainer = document.getElementById("iframe");
        divContainer.style.width="70.5%"

        var ConfiguarbleModels = document.getElementById("ConfiguarbleModels");
        ConfiguarbleModels.style.display="block"
        
        var divContainer = document.getElementById("historicaldataupload");
        divContainer.style.display="none"

        var smartcollator = document.getElementById("smartcollator");
        smartcollator.style.display="none"

        var SmartPod=document.getElementById("SmartPod")
        SmartPod.style.display="none"

        var ResolveErrors = document.getElementById("ResolveErrors");
        ResolveErrors.style.display="none"
        
    }


    function historicalDataUpload () {

        var divContainer = document.getElementById("iframe");
        divContainer.style.width="71.5%"

        var historicaldataupload = document.getElementById("historicaldataupload");
        historicaldataupload.style.display="block"
        historicaldataupload.style.marginLeft="72%"

        var smartcollator = document.getElementById("smartcollator");
        smartcollator.style.display="none"

        var ConfiguarbleModels = document.getElementById("ConfiguarbleModels");
        ConfiguarbleModels.style.display="none"

        var SmartPod=document.getElementById("SmartPod")
        SmartPod.style.display="none"

        var ResolveErrors = document.getElementById("ResolveErrors");
        ResolveErrors.style.display="none"
    }

    function resolveErrors () {
        var divContainer = document.getElementById("iframe");
        divContainer.style.width="70%"

        var ResolveErrors = document.getElementById("ResolveErrors");
        ResolveErrors.style.display="block"

        var smartcollator = document.getElementById("smartcollator");
        smartcollator.style.display="none"

        var ConfiguarbleModels = document.getElementById("ConfiguarbleModels");
        ConfiguarbleModels.style.display="none"

        var SmartPod=document.getElementById("SmartPod")
        SmartPod.style.display="none"

        var historicaldataupload = document.getElementById("historicaldataupload");
        historicaldataupload.style.display="none"
    }

    function closebtn(){
        var iframe = document.getElementById("iframe");
        iframe.style.width="100%"

        var smartcollator = document.getElementById("smartcollator");
        smartcollator.style.display="none"

        var SmartPod=document.getElementById("SmartPod")
        SmartPod.style.display="none"

        var ConfiguarbleModels = document.getElementById("ConfiguarbleModels");
        ConfiguarbleModels.style.display="none"

        var historicaldataupload = document.getElementById("historicaldataupload");
        historicaldataupload.style.display="none"

        var ResolveErrors = document.getElementById("ResolveErrors");
        ResolveErrors.style.display="none"

        var ResolveErrors = document.getElementById("overlay");
        ResolveErrors.style.display="none"

        var acc = document.querySelectorAll('a');
        acc.forEach(a=>a.classList.remove('active'))
    }



  function openFTD(dialog){
    console.log("smartPDOverlay")
    document.getElementById("modalSP").style.display = "block";
    var bod=document.getElementById('modal-bodySP')
    // bod.style.marginLeft='58%';
    if (dialog=='SmartPod'){
      bod.style.marginLeft='1%';
      bod.style.marginTop='1%';
      bod.innerHTML='<img src="https://drive.google.com/thumbnail?id=18PX8pEx1fV1xXrLSh8c74UAGOc6h7WAd&sz=w2560-h1080" alt="Fault Tree Diagram of SmartPod">';
      bod.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
      })
    }
    else if(dialog=='SmartCollator'){
        // bod.style.marginLeft='10%';
        bod.innerHTML='<img src="https://drive.google.com/thumbnail?id=1rSFPsAyA7n6FvCWIZEBrExGXR-snlOcs&sz=w2560-h1080" alt="Fault Tree Diagram of SmartPod">';
        bod.scrollIntoView({
          block: 'start',
          behavior: 'smooth'
        })
      }
    }

    function closebtnSP(){
        var modal = document.getElementById("modalSP");
        modal.style.display = "none";
      }

      document.addEventListener("DOMContentLoaded", function(e) {
        var acc = document.getElementsByClassName('accordion');
      var i;
      // console.log("Lenght of Accordion-->",acc,acc.length)
      for (i = 0; i < acc.length; i++){
        // console.log(acc[i])
        acc[i].addEventListener('click',function(){
          console.log(acc)
          this.classList.toggle('active');
          var panel=this.nextElementSibling;
          if (panel.style.display === "block") {
              panel.style.display = "none";
            } else {
              panel.style.display = "block";
            }
        });
      }
      });

      const ControlPanelThread = () => {
        fetch("http://localhost:3000/ControlPanel", {
          method: "GET", // *GET, POST, PUT, DELETE, etc.
        })
          .then((response) => {
            console.log("Calling ControlPanel API");
            console.log(response);
            return response.json();
          })
          .then((data) => {
            console.log(data)
            // console.log(data[0].ErrDesc + " at " + data[0].ErrorDtTm);
            /* Outer Buttons */
            var CPSmartPod = document.getElementById("CPSmartPod");
            var CPSmartCollator = document.getElementById("CPSmartCollator");
    
    
            /* Inner Buttons */
            var CappingError = document.getElementById("CE");
            var RobotFillingError = document.getElementById("RFE");
            var VialDeliverySystemFault = document.getElementById("VDSF");
            var UnableProduceLargeVial = document.getElementById("UPLV");
            var UnableReleaseVialTube = document.getElementById("URVT");
            var RobotFailedPickBottle = document.getElementById("RFPB");
    
    
            var FaultDiverter = document.getElementById("FD");
            var CollatorImbalance = document.getElementById("CI");
            var WrongNumberVialsTote = document.getElementById("WNVT");
            var FailureMoveHomePosition = document.getElementById("FMHP");
            var FailureReleaseBottleScanner = document.getElementById("FRBS");
    
            
            CPSmartPod.style.color="#444";
            CPSmartCollator.style.color="#444";
    
            CappingError.style.backgroundColor="white";
            RobotFillingError.style.backgroundColor="white";
            VialDeliverySystemFault.style.backgroundColor="white";
            FailureMoveHomePosition.style.backgroundColor="white";
            UnableReleaseVialTube.style.backgroundColor="white";
            RobotFailedPickBottle.style.backgroundColor="white";
    
            FaultDiverter.style.backgroundColor="white";
            CollatorImbalance.style.backgroundColor="white";
            WrongNumberVialsTote.style.backgroundColor="white";
            FailureMoveHomePosition.style.backgroundColor="white";
            FailureReleaseBottleScanner.style.backgroundColor="white";
            
    
            data.forEach(function(item){
    
              if(item.Source.includes("SmartPod")){
                CPSmartPod.style.color="red";
                if(item.Event.includes("Capping Error")){
                  CappingError.style.backgroundColor="red";
                }
                else if(item.Event.includes("Robot filling error")){
                  RobotFillingError.style.backgroundColor="red";
                }
                else if(item.Event.includes("Vial delivery system fault")){
                  VialDeliverySystemFault.style.backgroundColor="red";
                }
                else if(item.Event.includes("Unable to Produce Large Vial")){
                  UnableProduceLargeVial.style.backgroundColor="red";
                }
                else if(item.Event.includes("Unable to Release Vial from Tube")){
                  UnableReleaseVialTube.style.backgroundColor="red";
                }
                else if(item.Event.includes("Robot Failed to Pick Bottle")){
                  RobotFailedPickBottle.style.backgroundColor="red";
                }
                else{
                  CPSmartPod.style.color="#444";
                  CappingError.style.backgroundColor="white";
                  RobotFillingError.style.backgroundColor="white";
                  VialDeliverySystemFault.style.backgroundColor="white";
                  FailureMoveHomePosition.style.backgroundColor="white";
                  UnableReleaseVialTube.style.backgroundColor="white";
                  RobotFailedPickBottle.style.backgroundColor="white";
                }
              }
              else if(item.Source.includes("SmartCollator")){
                CPSmartCollator.style.color="red";
                if(item.Event.includes("Fault at Diverter")){
                  FaultDiverter.style.backgroundColor="red";
                }
                else if(item.Event.includes("Collator Imbalance")){
                  CollatorImbalance.style.backgroundColor="red";
                }
                else if(item.Event.includes("Wrong number of vials in tote")){
                  WrongNumberVialsTote.style.backgroundColor="red";
                }
                else if(item.Event.includes("Failure to move from home position")){
                  FailureMoveHomePosition.style.backgroundColor="red";
                }
                else if(item.Event.includes("Failure to release bottle from scanner")){
                  FailureReleaseBottleScanner.style.backgroundColor="red";
                }
                else{
                  CPSmartCollator.style.color="#444";
                  FaultDiverter.style.backgroundColor="white";
                  CollatorImbalance.style.backgroundColor="white";
                  WrongNumberVialsTote.style.backgroundColor="white";
                  FailureMoveHomePosition.style.backgroundColor="white";
                  FailureReleaseBottleScanner.style.backgroundColor="white";
                }
              }
              else{
                CPSmartPod.style.color="#444";
                CPSmartCollator.style.color="#444";
    
                CappingError.style.backgroundColor="white";
                RobotFillingError.style.backgroundColor="white";
                VialDeliverySystemFault.style.backgroundColor="white";
                FailureMoveHomePosition.style.backgroundColor="white";
                UnableReleaseVialTube.style.backgroundColor="white";
                RobotFailedPickBottle.style.backgroundColor="white";
    
                FaultDiverter.style.backgroundColor="white";
                CollatorImbalance.style.backgroundColor="white";
                WrongNumberVialsTote.style.backgroundColor="white";
                FailureMoveHomePosition.style.backgroundColor="white";
                FailureReleaseBottleScanner.style.backgroundColor="white";
    
              }
              console.log('ErrorId: ' + item.ErrorId);
              console.log('Event: ' + item.Event);
              console.log('ErrDesc: ' + item.ErrDesc);
              console.log('Source: ' + item.Source);
              console.log('Recovery: ' + item.Recovery);
            });
          })
          .catch((err) => {
            console.log(err);
          });
        };
    
        function CPErrorFix(ErrCode){
          fetch("http://localhost:3000/GetError/"+ErrCode, {
              method: "GET", // *GET, POST, PUT, DELETE, etc.
            })
            .then((response) => {
              console.log("Calling delEvtError API");
              console.log(response);
              return response.json();
            })
            .then((data) => {
              
              Alert.render(
                          "ErrorId : "+data[0].ErrorId+"\n"+
                          "Error Code : "+data[0].ErrCode+"\n"+
                          "Error Description : "+data[0].ErrDesc+"\n"+
                          "Error Time : "+data[0].ErrorDtTm+"\n"
                          // "Recovery Status : "+data[0].Recovery
                          );
              // Alert.render(data[0].ErrDesc + " at " + data[0].ErrorDtTm +"\n"+"ErrorId --> "+data[0].ErrorId+"\n"+"Event--> "+data[0].Event);
              console.log(data);
              let eid=data[0].ErrorId
              console.log("--->"+eid)
              /* DOUBT --> This is used to change */
              document.getElementById('modal-foot').innerHTML = '<button onClick="Alert.OkayCP(\'' + eid + '\')">Resolve</button>';
              var CPSmartPod = document.getElementById("CPSmartPod");
              var CPSmartPodErrorButton = document.getElementById("CPSmartPodErrorButton");
    
              /* Change color of these two elements */
              CPSmartPod.style.color="#444";
              CPSmartPodErrorButton.style.backgroundColor="white";
    
            })
            .catch((err) => {
              console.log(err);
            });
    }


    /* Function is used for Custom Alert Pop up */
    function CustomAlert(){
        this.render = function(dialog){
            var dialogoverlay = document.getElementById('modal');
            dialogoverlay.style.display = "block";
            document.getElementById('modal-header').innerHTML = "Sample Alert";
            document.getElementById('modal-body').innerHTML = dialog;
            document.getElementById('modal-foot').innerHTML = '<button onClick="Alert.ok()">OK</button>';
            
            
            var overlay=document.getElementById('overlay');
            overlay.style.visibility="visible";
            
        }
        this.ok = function(){
          console.log("Close Button Clicked")
          document.getElementById('modal').style.display = "none";
          overlay.style.visibility="hidden";
          fetch("http://localhost:3000/delEvtError", {
              method: "GET", // *GET, POST, PUT, DELETE, etc.
            })
            .then((response) => {
              console.log("Calling delEvtError API");
              console.log(response);
              return response.json();
            })
            .then((data) => {
              console.log(data);
            })
            .catch((err) => {
              console.log(err);
            });
        }
        this.OkayCP = function(data){
    
          /* Change funtionality based on the requirement for controlpanel pop up okay button
          Change Recovery to Completed in EvtError table and close the alert pop up */
          console.log("Close Button Clicked",data)
          document.getElementById('modal').style.display = "none";
          overlay.style.visibility="hidden";
          fetch("http://localhost:3000/FixError/"+data, {
              method: "GET", // *GET, POST, PUT, DELETE, etc.
            })
            .then((response) => {
              console.log("Calling FixError API");
              console.log(response);
              return response.json();
            })
            .then((data) => {
              console.log(data);
            })
            .catch((err) => {
              console.log(err);
            });
    }
}

/* Author : Sai Krishna */
var Alert = new CustomAlert();

function downloadReport() {
  let date = document.getElementById('date1').value
  console.log(date)
  console.log("http://localhost:3000/AllEvtError/"+date);
    fetch("http://localhost:3000/AllEvtError/"+date, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
    })
    .then((response) => {
      console.log("Calling AllEvtError API");
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log("Data For Excel",data);
      convertJSONtoExcel(data,date, 'Evt Error Log')
      
    })
    .catch((err) => {
      console.log(err);
    });
}

function convertJSONtoExcel(data,date, title) {
    var arrData = typeof data != 'object' ? JSON.parse(data) : data;

    var CSV = '';
    //Set Report title in first row or line

    CSV += title+" at "+date + '\r\n';
    // CSV += new Date() + '\n\n'

    //This condition will generate the Label/Header
    var row = "";

    //This loop will extract the label from 1st index of on array
    for (var index in arrData[0]) {

        //Now convert each value to string and comma-seprated
        row += index + ',';
    }

    row = row.slice(0, -1);

    //append Label row with line break
    CSV += row + '\r\n';

    //1st loop is to extract each row
    for (var i = 0; i < arrData.length; i++) {
        var row = "";

        //2nd loop will extract each column and convert it in string comma-seprated
        for (var index in arrData[i]) {
            row += '"' + arrData[i][index] + '",';
        }

        row.slice(0, row.length - 1);

        //add a line break after each row
        CSV += row + '\r\n';
    }

    if (CSV == '') {
        alert("Invalid data");
        return;
    }

    //Generate a file name
    var fileName = "";
    //this will remove the blank-spaces from the title and replace it with an underscore
    fileName += title.replace(/ /g, "_");
    fileName+="_"+new Date();

    //Initialize file format you want csv or xls
    var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);

    // Now the little tricky part.
    // you can use either>> window.open(uri);
    // but this will not work in some browsers
    // or you will not get the correct file extension    

    //this trick will generate a temp <a /> tag
    var link = document.createElement("a");
    link.href = uri;

    //set the visibility hidden so it will not effect on your web-layout
    link.style = "visibility:hidden";
    link.download = fileName + ".csv";

    //this part will append the anchor tag and remove it after automatic click
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function on() {
    document.getElementById("overlay").style.display = "block";
    // console.log("EvtEvent Data  -->", data)

    var col = []
    var data = [{
            "Group_ID": "689",
            "NDC": "12122296977",
            "Event_Date_Time": "2021-06-23T06:01:10.000Z",
            "Notes": "SmartPod",
            "Status": "Completed"
        },
        {
            "Group_ID": "318",
            "NDC": "98215939036",
            "Event_Date_Time": "2021-06-23T06:01:42.000Z",
            "Notes": "SmartPod",
            "Status": "Completed"
        },
        {
            "Group_ID": "10997",
            "NDC": "8698340582",
            "Event_Date_Time": "2021-06-23T06:02:13.000Z",
            "Notes": "SmartPod",
            "Status": "Completed"
        },
        {
            "Group_ID": "1087",
            "NDC": "95205617122",
            "Event_Date_Time": "2021-06-23T06:02:45.000Z",
            "Notes": "SmartPod",
            "Status": "Completed"
        },
        {
            "Group_ID": "952",
            "NDC": "24128133796",
            "Event_Date_Time": "2021-06-23T06:03:16.000Z",
            "Notes": "SmartPod",
            "Status": "Completed"
        }
    ]
    console.log("EvtEvent Data  -->", data)

    // for (var i = 0; i < data.length; i++) {
    //     for (var key in data[i]) {
    //         if (col.indexOf(key) === -1) {
    //             col.push(key);
    //         }
    //     }
    // }

    // // CREATE DYNAMIC TABLE.
    // var table = document.createElement("table");
    // // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.
    // var tr = table.insertRow(-1); // TABLE ROW.
    // for (var i = 0; i < col.length; i++) {
    //     var th = document.createElement("th"); // TABLE HEADER.
    //     th.style['background-color'] = '#66b3cc'
    //     th.innerHTML = col[i];
    //     tr.appendChild(th);
    // }
    // // ADD JSON DATA TO THE TABLE AS ROWS.
    // for (var i = 0; i < data.length; i++) {
    //     tr = table.insertRow(-1);
    //     for (var j = 0; j < col.length; j++) {
    //         var tabCell = tr.insertCell(-1);
    //         tabCell.innerHTML = data[i][col[j]];
    //     }
    // }
    // console.log(table)
    //     // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    // var divContainer = document.getElementById("overlay");
    // divContainer.innerHTML = "";
    // divContainer.appendChild(table);


}


const ErrorLog = () => {
  console.log("Hello")
  var divContainer = document.getElementById("iframe");
  divContainer.style.width="100%"

  var divContainer = document.getElementById("smartcollator");
  divContainer.style.display="none"

  var SmartPod=document.getElementById("SmartPod")
  SmartPod.style.display="none"

  var ConfiguarbleModels = document.getElementById("ConfiguarbleModels");
  ConfiguarbleModels.style.display="none"

  var divContainer = document.getElementById("historicaldataupload");
  divContainer.style.display="none"

  var ResolveErrors = document.getElementById("ResolveErrors");
  ResolveErrors.style.display="none"

  var divContainer = document.getElementById("showCollateData");

  fetch("http://localhost:3000/AllEvtError", {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
  })
    .then((response) => {
      console.log("Calling AllEvtError API");
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log("AllEvtError Data  -->",data)
      var col=[]
      for (var i = 0; i < data.length; i++) {
          for (var key in data[i]) {
              if (col.indexOf(key) === -1) {
                  col.push(key);
              }
          }
      }
     // CREATE DYNAMIC TABLE.
     var table = document.createElement("table");
     // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.
     var tr = table.insertRow(-1);                   // TABLE ROW.
    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");      // TABLE HEADER.
        th.innerHTML = col[i];
        tr.appendChild(th);
    }
    // ADD JSON DATA TO THE TABLE AS ROWS.
    for (var i = 0; i < data.length; i++) {
        tr = table.insertRow(-1);
        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = data[i][col[j]];
        }
    }
    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    // var divContainer = document.getElementById("showCollateData");
    var divContainer =document.getElementById("overlay")
    divContainer.style.display = "block";
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
    })
    .catch((err) => {
      console.log(err);
    });
  };


  function errorlogReportDownload() {
    var divContainer = document.getElementById("iframe");
    divContainer.style.width="72%"

    var ResolveErrors = document.getElementById("ResolveErrors");
    ResolveErrors.style.display="block"

    var smartcollator = document.getElementById("smartcollator");
    smartcollator.style.display="none"

    var ConfiguarbleModels = document.getElementById("ConfiguarbleModels");
    ConfiguarbleModels.style.display="none"

    var SmartPod=document.getElementById("SmartPod")
    SmartPod.style.display="none"

    var historicaldataupload = document.getElementById("historicaldataupload");
    historicaldataupload.style.display="none"
}

//excel to json from uploaded fill
function Upload() {
  var elem = document.getElementById("myBar");  
  elem.style.display="block" ;
  var width = 20;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
    }
  }
  //Reference the FileUpload element.
  var fileUpload = document.getElementById("fileUpload");

  //Validate whether File is valid Excel file.
  var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.xls|.xlsx)$/;
  if (regex.test(fileUpload.value.toLowerCase())) {
    if (typeof (FileReader) != "undefined") {
      var reader = new FileReader();

      //For Browsers other than IE.
      if (reader.readAsBinaryString) {
        reader.onload = function (e) {
          //console.log(e.target.result);
          ProcessExcel(e.target.result);
        };
        reader.readAsBinaryString(fileUpload.files[0]);
      } else {
        //For IE Browser.
        reader.onload = function (e) {
          var data = "";
          var bytes = new Uint8Array(e.target.result);
          for (var i = 0; i < bytes.byteLength; i++) {
            data += String.fromCharCode(bytes[i]);
          }
          ProcessExcel(data);
        };
        reader.readAsArrayBuffer(fileUpload.files[0]);
      }
    } else {
      alert("This browser does not support HTML5.");
    }
  } else {
    alert("Please upload a valid Excel file.");
  }
};
function ProcessExcel(data) {
  //Read the Excel File data.
  var workbook = XLSX.read(data, {
    type: 'binary'
  });

  //Fetch the name of First Sheet.
  var firstSheet = workbook.SheetNames[0];

  //Read all rows from First Sheet into an JSON array.
  var excelRows = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[firstSheet]);

  //Create a HTML Table element.
  var table = document.createElement("table");
  table.border = "1";

  //Add the header row.
  var row = table.insertRow(-1);

  //Add the header cells.
  var headerCell = document.createElement("TH");
  headerCell.innerHTML = "OrderType";
  row.appendChild(headerCell);

  headerCell = document.createElement("TH");
  headerCell.innerHTML = "Count of Orders";
  row.appendChild(headerCell);



  //Add the data rows from Excel file.
  for (var i = 0; i < excelRows.length; i++) {
    //Add the data row.
    //var row = table.insertRow(-1);
    // <input type="text" id="mix_count" />
    //                 <input type="text" id="autocol_count" />
    //                 <input type="text" id="autosingle_count" />
    //                 <input type="text" id="automanual_count" />
    //                 <input type="text" id="autopouch_count" />
    //Add the data cells.
    //var cell = row.insertCell(-1);
    // cell.innerHTML = excelRows[i].OrderType;
    console.log(excelRows[i].OrderType);
    console.log(excelRows[i].Count);
    if (excelRows[i].OrderType === "Mix") {
      document.getElementById("mix_count").value = excelRows[i].Count;
    }
    else if (excelRows[i].OrderType === "AutoCol") {
      document.getElementById("autocol_count").value = excelRows[i].Count;
    }
    else if (excelRows[i].OrderType === "AutoSingle") {
      document.getElementById("autosingle_count").value = excelRows[i].Count;
    }
    else if (excelRows[i].OrderType === "AutoManual") {
      document.getElementById("automanual_count").value = excelRows[i].Count;
    }
    else if (excelRows[i].OrderType === "AutoPouch") {
      document.getElementById("autopouch_count").value = excelRows[i].Count;
    }

    // cell = row.insertCell(-1);
    // cell.innerHTML = excelRows[i].Count;

  }
  console.log(table);
  //var dvExcel = document.getElementById("dvExcel");
  //dvExcel.innerHTML = "";
  // dvExcel.appendChild(table);
};
