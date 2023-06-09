function updateValues(buttonIndex) {
      var data = [
        // Array of data for each button
        { altitude1: "0.4", mach1: "0.1", zxn1: "1", daqOutput1: "500", deckOutput1: "495", verdict1: "Satisfied",
         altitude2: "0.8", mach2: "0.2", zxn2: "2", daqOutput2: "512", deckOutput2: "500", verdict2: "Not Satisfied",
          altitude3: "1.2", mach3: "0.3", zxn3: "3", daqOutput3: "534", deckOutput3: "510", verdict3: "Not Satisfied",
          altitude4: "1.6", mach4: "0.4", zxn4: "4", daqOutput4: "567", deckOutput4: "565", verdict4: "Satisfied",
          altitude5: "2", mach5: "0.5", zxn5: "5", daqOutput5: "569", deckOutput5: "570", verdict5: "Satisfied",
          altitude6: "2.4", mach6: "0.6", zxn6: "6", daqOutput6: "570", deckOutput6: "573", verdict6: "Not Satisfied",
          altitude7: "2.8", mach7: "0.7", zxn7: "7", daqOutput7: "580", deckOutput7: "583", verdict7: "Not Satisfied",
          altitude8: "3.2", mach8: "0.8", zxn8: "8", daqOutput8: "600", deckOutput8: "603", verdict8: "Not Satisfied",
         tolerence:"5",
         report:"EGT ",
         irl:"./egt-impact-analysis/src/App.js"
         
        },
        { altitude1: "0.4", mach1: "0.1", zxn1: "1", daqOutput1: "110", deckOutput1: "109", verdict1: "Satisfied",
         altitude2: "0.8", mach2: "0.2", zxn2: "2", daqOutput2: "150", deckOutput2: "145", verdict2: "Not Satisfied",
          altitude3: "1.2", mach3: "0.3", zxn3: "3", daqOutput3: "180", deckOutput3: "175", verdict3: "Not Satisfied",
          altitude4: "1.6", mach4: "0.4", zxn4: "4", daqOutput4: "190", deckOutput4: "190", verdict4: "Satisfied",
          altitude5: "2", mach5: "0.5", zxn5: "5", daqOutput5: "195", deckOutput5: "195", verdict5: "Satisfied",
          altitude6: "2.4", mach6: "0.6", zxn6: "6", daqOutput6: "200", deckOutput6: "200", verdict6: "Satisfied",
          altitude7: "2.8", mach7: "0.7", zxn7: "7", daqOutput7: "210", deckOutput7: "210", verdict7: "Satisfied",
          altitude8: "3.2", mach8: "0.8", zxn8: "8", daqOutput8: "215", deckOutput8: "215", verdict8: "Satisfied",
         tolerence:"2",
         report:"P2 ",
         irl:"/p2-impact-analysis/src/App.js"
         
        },
        { altitude1: "0.4", mach1: "0.1", zxn1: "1", daqOutput1: "410", deckOutput1: "410", verdict1: "Satisfied",
         altitude2: "0.8", mach2: "0.2", zxn2: "2", daqOutput2: "420", deckOutput2: "422", verdict2: "Satisfied",
          altitude3: "1.2", mach3: "0.3", zxn3: "3", daqOutput3: "430", deckOutput3: "433", verdict3: "Not Satisfied",
          altitude4: "1.6", mach4: "0.4", zxn4: "4", daqOutput4: "445", deckOutput4: "444", verdict4: "Satisfied",
          altitude5: "2", mach5: "0.5", zxn5: "5", daqOutput5: "450", deckOutput5: "455", verdict5: "Not Satisfied",
          altitude6: "2.4", mach6: "0.6", zxn6: "6", daqOutput6: "463", deckOutput6: "467", verdict6: "Not Satisfied",
          altitude7: "2.8", mach7: "0.7", zxn7: "7", daqOutput7: "477", deckOutput7: "476", verdict7: "Satisfied",
          altitude8: "3.2", mach8: "0.8", zxn8: "8", daqOutput8: "489", deckOutput8: "490", verdict8: "Satisfied",
         tolerence:"2",
         report:"P3 ",
         irl:"/p3-impact-analysis/src/App.js"
         
        },
         { altitude1: "0.4", mach1: "0.1", zxn1: "1", daqOutput1: "400", deckOutput1: "403", verdict1: "Satisfied",
         altitude2: "0.8", mach2: "0.2", zxn2: "2", daqOutput2: "427", deckOutput2: "428", verdict2: "Satisfied",
          altitude3: "1.2", mach3: "0.3", zxn3: "3", daqOutput3: "463", deckOutput3: "467", verdict3: "Satisfied",
          altitude4: "1.6", mach4: "0.4", zxn4: "4", daqOutput4: "500", deckOutput4: "510", verdict4: "Not Satisfied",
          altitude5: "2", mach5: "0.5", zxn5: "5", daqOutput5: "564", deckOutput5: "570", verdict5: "Not Satisfied",
          altitude6: "2.4", mach6: "0.6", zxn6: "6", daqOutput6: "580", deckOutput6: "582", verdict6: "Satisfied",
          altitude7: "2.8", mach7: "0.7", zxn7: "7", daqOutput7: "590", deckOutput7: "593", verdict7: "Satisfied",
          altitude8: "3.2", mach8: "0.8", zxn8: "8", daqOutput8: "603", deckOutput8: "600", verdict8: "Satisfied",
         tolerence:"5",
         report:"T2 ",
         irl:"/t2-impact-analysis/src/App.js"
         
         
        },
       
       { altitude1: "0.4", mach1: "0.1", zxn1: "1", daqOutput1: "800", deckOutput1: "803", verdict1: "Satisfied",
         altitude2: "0.8", mach2: "0.2", zxn2: "2", daqOutput2: "854", deckOutput2: "862", verdict2: "Not Satisfied",
          altitude3: "1.2", mach3: "0.3", zxn3: "3", daqOutput3: "890", deckOutput3: "892", verdict3: "Satisfied",
          altitude4: "1.6", mach4: "0.4", zxn4: "4", daqOutput4: "900", deckOutput4: "904", verdict4: "Satisfied",
          altitude5: "2", mach5: "0.5", zxn5: "5", daqOutput5: "932", deckOutput5: "930", verdict5: "Satisfied",
          altitude6: "2.4", mach6: "0.6", zxn6: "6", daqOutput6: "987", deckOutput6: "988", verdict6: "Satisfied",
          altitude7: "2.8", mach7: "0.7", zxn7: "7", daqOutput7: "999", deckOutput7: "996", verdict7: "Satisfied",
          altitude8: "3.2", mach8: "0.8", zxn8: "8", daqOutput8: "1001", deckOutput8: "999", verdict8: "Satisfied",
         tolerence:"5",
         report:"T3 ",
         irl:"/t3-impact-analysis/src/App.js"
         
         
        }
        
        ,
           { altitude1: "0.4", mach1: "0.1", zxn1: "1", daqOutput1: "0.49", deckOutput1: "0.5", verdict1: "Satisfied",
         altitude2: "0.8", mach2: "0.2", zxn2: "2", daqOutput2: "0.53", deckOutput2: "0.52", verdict2: "Satisfied",
          altitude3: "1.2", mach3: "0.3", zxn3: "3", daqOutput3: "0.55", deckOutput3: "0.54", verdict3: "Satisfied",
          altitude4: "1.6", mach4: "0.4", zxn4: "4", daqOutput4: "0.59", deckOutput4: "0.6", verdict4: "Satisfied",
          altitude5: "2", mach5: "0.5", zxn5: "5", daqOutput5: "0.61", deckOutput5: "0.61", verdict5: "Satisfied",
          altitude6: "2.4", mach6: "0.6", zxn6: "6", daqOutput6: "0.63", deckOutput6: "0.66", verdict6: "Not Satisfied",
          altitude7: "2.8", mach7: "0.7", zxn7: "7", daqOutput7: "0.66", deckOutput7: "0.67", verdict7: "Satisfied",
          altitude8: "3.2", mach8: "0.8", zxn8: "8", daqOutput8: "0.68", deckOutput8: "0.68", verdict8: "Satisfied",
         tolerence:"0.01",
         report:"WF ",
         irl:"/egt-impact-analysis/src/App.js"
         
         
        }
      ];

      // Get the table cells by their IDs
      var altitudeCell1 = document.getElementById("altitude1");
      var machCell1 = document.getElementById("mach1");
      var zxnCell1 = document.getElementById("zxn1");
      var daqOutputCell1 = document.getElementById("daqOutput1");
      var deckOutputCell1 = document.getElementById("deckOutput1");
      var verdictCell1 = document.getElementById("verdict1");
    
    
    
    
     var altitudeCell2 = document.getElementById("altitude2");
      var machCell2 = document.getElementById("mach2");
      var zxnCell2 = document.getElementById("zxn2");
      var daqOutputCell2 = document.getElementById("daqOutput2");
      var deckOutputCell2 = document.getElementById("deckOutput2");
      var verdictCell2 = document.getElementById("verdict2");

    var altitudeCell3 = document.getElementById("altitude3");
      var machCell3 = document.getElementById("mach3");
      var zxnCell3 = document.getElementById("zxn3");
      var daqOutputCell3 = document.getElementById("daqOutput3");
      var deckOutputCell3 = document.getElementById("deckOutput3");
      var verdictCell3 = document.getElementById("verdict3");
    
    
     var altitudeCell4 = document.getElementById("altitude4");
      var machCell4 = document.getElementById("mach4");
      var zxnCell4 = document.getElementById("zxn4");
      var daqOutputCell4 = document.getElementById("daqOutput4");
      var deckOutputCell4 = document.getElementById("deckOutput4");
      var verdictCell4 = document.getElementById("verdict4");

    
    
     var altitudeCell5 = document.getElementById("altitude5");
      var machCell5 = document.getElementById("mach5");
      var zxnCell5 = document.getElementById("zxn5");
      var daqOutputCell5 = document.getElementById("daqOutput5");
      var deckOutputCell5 = document.getElementById("deckOutput5");
      var verdictCell5 = document.getElementById("verdict5");

    
    
     var altitudeCell6 = document.getElementById("altitude6");
      var machCell6 = document.getElementById("mach6");
      var zxnCell6 = document.getElementById("zxn6");
      var daqOutputCell6 = document.getElementById("daqOutput6");
      var deckOutputCell6 = document.getElementById("deckOutput6");
      var verdictCell6 = document.getElementById("verdict6");

    
    
     var altitudeCell7 = document.getElementById("altitude7");
      var machCell7 = document.getElementById("mach7");
      var zxnCell7 = document.getElementById("zxn7");
      var daqOutputCell7 = document.getElementById("daqOutput7");
      var deckOutputCell7 = document.getElementById("deckOutput7");
      var verdictCell7 = document.getElementById("verdict7");

    
    
   

    
    
     var altitudeCell8 = document.getElementById("altitude8");
      var machCell8 = document.getElementById("mach8");
      var zxnCell8 = document.getElementById("zxn8");
      var daqOutputCell8 = document.getElementById("daqOutput8");
      var deckOutputCell8 = document.getElementById("deckOutput8");
      var verdictCell8 = document.getElementById("verdict8");
    
    var reportCell = document.getElementById("report");
    var tCell = document.getElementById("tolerence");
    
    
 document.getElementById('myIframe').src = data[buttonIndex].irl;

      // Update the cell values based on the button index
      altitudeCell1.textContent = data[buttonIndex].altitude1;
      machCell1.textContent = data[buttonIndex].mach1;
      zxnCell1.textContent = data[buttonIndex].zxn1;
      daqOutputCell1.textContent = data[buttonIndex].daqOutput1;
      deckOutputCell1.textContent = data[buttonIndex].deckOutput1;
      verdictCell1.textContent = data[buttonIndex].verdict1;
    
    altitudeCell2.textContent = data[buttonIndex].altitude2;
      machCell2.textContent = data[buttonIndex].mach2;
      zxnCell2.textContent = data[buttonIndex].zxn2;
      daqOutputCell2.textContent = data[buttonIndex].daqOutput2;
      deckOutputCell2.textContent = data[buttonIndex].deckOutput2;
      verdictCell2.textContent = data[buttonIndex].verdict2;
    

 altitudeCell3.textContent = data[buttonIndex].altitude3;
      machCell3.textContent = data[buttonIndex].mach3;
      zxnCell3.textContent = data[buttonIndex].zxn3;
      daqOutputCell3.textContent = data[buttonIndex].daqOutput3;
      deckOutputCell3.textContent = data[buttonIndex].deckOutput3;
      verdictCell3.textContent = data[buttonIndex].verdict3;
   
    altitudeCell4.textContent = data[buttonIndex].altitude4;
      machCell4.textContent = data[buttonIndex].mach4;
      zxnCell4.textContent = data[buttonIndex].zxn4;
      daqOutputCell4.textContent = data[buttonIndex].daqOutput4;
      deckOutputCell4.textContent = data[buttonIndex].deckOutput4;
      verdictCell4.textContent = data[buttonIndex].verdict4;
    
    altitudeCell5.textContent = data[buttonIndex].altitude5;
      machCell5.textContent = data[buttonIndex].mach5;
      zxnCell5.textContent = data[buttonIndex].zxn5;
      daqOutputCell5.textContent = data[buttonIndex].daqOutput5;
      deckOutputCell5.textContent = data[buttonIndex].deckOutput5;
      verdictCell5.textContent = data[buttonIndex].verdict5;
    
    altitudeCell6.textContent = data[buttonIndex].altitude6;
      machCell6.textContent = data[buttonIndex].mach6;
      zxnCell6.textContent = data[buttonIndex].zxn6;
      daqOutputCell6.textContent = data[buttonIndex].daqOutput6;
      deckOutputCell6.textContent = data[buttonIndex].deckOutput6;
      verdictCell6.textContent = data[buttonIndex].verdict6;
    
    altitudeCell7.textContent = data[buttonIndex].altitude7;
      machCell7.textContent = data[buttonIndex].mach7;
      zxnCell7.textContent = data[buttonIndex].zxn7;
      daqOutputCell7.textContent = data[buttonIndex].daqOutput7;
      deckOutputCell7.textContent = data[buttonIndex].deckOutput7;
      verdictCell7.textContent = data[buttonIndex].verdict7;
    
    altitudeCell8.textContent = data[buttonIndex].altitude8;
      machCell8.textContent = data[buttonIndex].mach8;
      zxnCell3.textContent = data[buttonIndex].zxn8;
      daqOutputCell8.textContent = data[buttonIndex].daqOutput8;
      deckOutputCell8.textContent = data[buttonIndex].deckOutput8;
      verdictCell8.textContent = data[buttonIndex].verdict8;
    
  

reportCell.textContent = data[buttonIndex].report;
    tCell.textContent = data[buttonIndex].tolerence;
 
  
  }