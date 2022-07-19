window.onload = function () {
    console.log("started the application >>>");
    // setInterval(EvtEvent,4000); 
    // setInterval(ControlPanelThread,10000);
    // setInterval(EvtCollate,50000);
}


const EvtCollate = () => {
    console.log("Hello")
    var divContainer = document.getElementById("iframe");
    divContainer.style.width="60%"

    var divContainer = document.getElementById("smartcollator");
    divContainer.style.display="block"

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
      var divContainer = document.getElementById("showCollateData");
      divContainer.innerHTML = "";
      divContainer.appendChild(table);
      })
      .catch((err) => {
        console.log(err);
      });
    };

    const EvtEvent = () => {
        var divContainer = document.getElementById("iframe");
        divContainer.style.width="60%"

        var h=document.getElementById("SmartPod")
        h.style.display="block"

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
          var divContainer = document.getElementById("showData");
          divContainer.innerHTML = "";
          divContainer.appendChild(table);
          })
          .catch((err) => {
            console.log(err);
          });
        };


    function ConfigurableModels(){

        var divContainer = document.getElementById("iframe");
        divContainer.style.width="70%"

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
        divContainer.style.width="70%"

        var divContainer = document.getElementById("historicaldataupload");
        divContainer.style.display="block"

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

        var divContainer = document.getElementById("ResolveErrors");
        divContainer.style.display="block"

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
        var divContainer = document.getElementById("iframe");
        divContainer.style.width="100%"

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
    