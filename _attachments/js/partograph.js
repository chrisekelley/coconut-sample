// get the dateVisit value on partograph form

var time_object = new timestamp_class(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

function getDateVisit() {
    var dateVisit = document.getElementById("field1");
    dateVisitValue = dateVisit.value;
    return dateVisitValue;
}

function isClosed() {
    //var isClosedElement = document.getElementById("is_closed");
    //    if (isClosedElement.checked == true) {
    //    return true
    //    }
    return false;
}

function replyPrevValue(clazz, newRow, column) {
    if (clazz == "fetalHeartRate") {
        var items= new Array(190,180,160,150,140,130,120,110,100,90,80,70,60);
        for ( i=0; i < items.length; i++ )
        {
            row = items[i];
            if (row != newRow) {
                replyDeleteFHR(row + "=" + column)
            }
        }
    } else if (clazz == "cervix") {
        if (startCervix != "") {
            var cerVals = startCervix.split(",");
            var type = cerVals[0];
            var row = cerVals[1];
            var columnCervix = cerVals[2];
            if (column <= columnCervix)
                window.location.reload(true);
        } else if (startCervix == "" & row >= 4) {
            startCervix = "cervix" + "," + row + "," + column;
            createAlertRow("cervix", row, column);
            createAlertRow("descent", row, column);
        }
        var items= new Array(10,9,8,7,6,5,4,3,2,1,0);
        for ( i=0; i < items.length; i++ )
        {
            row = items[i];
            if (row != newRow) {
            replyDeleteCervix(row + "=" + column)
            }
        }

    } else if (clazz == "descent") {
        var items= new Array(10,9,8,7,6,5,4,3,2,1,0);
        for ( i=0; i < items.length; i++ )
        {
            row = items[i];
            if (row != newRow) {
            replyDeleteDescent(row + "=" + column)
            }
        }
    } else if (clazz == "contractions") {
        var items= new Array(5,4,3,2,1);
        for ( i=0; i < items.length; i++ )
        {
            row = items[i];
            if (row != newRow) {
            replyDeleteContractions(row + "=" + column)
            }
        }
    } else if (clazz == "systolic") {
        var items= new Array(200,190,180,170,160,150,140,130,120,110,100,90,80,70,60);
        for ( i=0; i < items.length; i++ )
        {
            row = items[i];
            if (row != newRow) {
            replyDeleteSystolic(row + "=" + column)
            }
        }
    } else if (clazz == "diastolic") {
        var items= new Array(200,190,180,170,160,150,140,130,120,110,100,90,80,70,60);
        for ( i=0; i < items.length; i++ )
        {
            row = items[i];
            if (row != newRow) {
            replyDeleteDiastolic(row + "=" + column)
            }
        }
    } else if (clazz == "pulse") {
        var items= new Array(200,190,180,170,160,150,140,130,120,110,100,90,80,70,60);
        for ( i=0; i < items.length; i++ )
        {
            row = items[i];
            if (row != newRow) {
            replyDeletePulse(row + "=" + column)
            }
        }
    }
}

var timeDisplay = document.getElementById("timeDisplay");
// kudos: http://www.computationalneuralsystems.com/JavaScripts/index.html
function timestamp_class(this_current_time, this_start_time, this_time_difference, this_time_slice_hour, this_time_slice_half, this_time_slice_start, cervixDil, cervixTime, correctHourCol, correctHalfCol, origHourCol, origHalfCol) {
    this.this_current_time = this_current_time;
    this.this_start_time = this_start_time;
    this.this_time_difference = this_time_difference;
    this.this_time_slice_hour = this_time_slice_hour;
    this.this_time_slice_half = this_time_slice_half;
    this.this_time_slice_start = this_time_slice_start;
    this.cervixDil = cervixDil;
    this.cervixTime = cervixTime;
    this.correctHourCol = correctHourCol;
    this.correctHalfCol = correctHalfCol;
    this.origHourCol = origHourCol;
    this.origHalfCol = origHalfCol;
    this.GetCurrentTime = GetCurrentTime;
    this.StartTiming = StartTiming;
    this.UpdateTiming = UpdateTiming;
}

//Get current time from date timestamp
function GetCurrentTime() {
    var my_current_timestamp;
    my_current_timestamp = new Date();
    //stamp current date & time
    return my_current_timestamp.getTime();
}

//Stamp current time as start time and reset display textbox
function StartTiming() {
    time_object.this_start_time = GetCurrentTime();
    //timer loop
    setTimeout("UpdateTiming()",1000);
}

var fhrA = new Array(190, 180, 170, 160, 150, 140, 130, 120, 110, 100, 90, 80, 70, 60);
var liquorCellA = new Array("liquorCell");
var mouldingCellA = new Array("mouldingCell");
var cervixA = new Array("cervixCell10", "cervixCell9", "cervixCell8", "cervixCell7", "cervixCell6", "cervixCell5", "cervixCell4", "cervixCell3", "cervixCell2", "cervixCell1", "cervixCell0");
var descentA = new Array("descentCell10", "descentCell9", "descentCell8", "descentCell7", "descentCell6", "descentCell5", "descentCell4", "descentCell3", "descentCell2", "descentCell1", "descentCell0");
var contractionsA= new Array("contractionsCell5","contractionsCell4","contractionsCell3","contractionsCell2","contractionsCell1");
var oxytocinCellA = new Array("oxytocinCell");
var oxytocinCellDpmA = new Array("oxytocinCell");
var systolicCellA= new Array("systolicCell200","systolicCell190","systolicCell180","systolicCell170","systolicCell160","systolicCell150","systolicCell140","systolicCell130","systolicCell120","systolicCell110","systolicCell100","systolicCell90","systolicCell80","systolicCell70","systolicCell60");
var diastolicCellA= new Array("diastolicCell200","diastolicCell190","diastolicCell180","diastolicCell170","diastolicCell160","diastolicCell150","diastolicCell140","diastolicCell130","diastolicCell120","diastolicCell110","diastolicCell100","diastolicCell90","diastolicCell80","diastolicCell70","diastolicCell60");
var pulseCellA= new Array("pulseCell200","pulseCell190","pulseCell180","pulseCell170","pulseCell160","pulseCell150","pulseCell140","pulseCell130","pulseCell120","pulseCell110","pulseCell100","pulseCell90","pulseCell80","pulseCell70","pulseCell60");
var temperatureCellA = new Array("temperatureCell");
var respirationCellA = new Array("respirationCell");
var urineAmountCellA = new Array("urineAmountCell");
var urinalysisProteinCellA = new Array("urinalysisProteinCell");
var urinalysisAcetoneCellA = new Array("urinalysisAcetoneCell");
var urinalysisGlucoseCellA = new Array("urinalysisGlucoseCell");
var items = new Array(fhrA, liquorCellA, mouldingCellA, cervixA, descentA, contractionsA, oxytocinCellA, oxytocinCellDpmA,
        systolicCellA, diastolicCellA, pulseCellA, temperatureCellA, respirationCellA, urineAmountCellA, urinalysisProteinCellA,
        urinalysisAcetoneCellA, urinalysisGlucoseCellA);


function resetTiming(interval, column) {    
    // First capture the current values for the 30 and 60 minute columns
    var prevTimeHalfSlice = time_object.correctHalfCol;
    var prevTimeHourSlice = time_object.correctHourCol;
    time_object.origHalfCol = prevTimeHalfSlice;
    time_object.origHourCol = prevTimeHourSlice;
    // initiliase the timer
    time_object.StartTiming();

    // initiliase the time slice
    time_object.this_time_slice_start = column -1;
    // Calculate the current values for the 30 and 60 minute columns
    if (time_object.this_time_slice_half == 0) {
        time_object.correctHalfCol = time_object.this_time_slice_start;
        //time_object.correctHourCol = Math.round((time_object.this_time_slice_start) / 2);
        time_object.correctHourCol =  Math.ceil((column) / 2);
       // alert("half hour correction - " + " time_object.correctHourCol: " + time_object.correctHourCol + " time_object.correctHalfCol: " + time_object.correctHalfCol);
    } else {
        // time_object.correctHalfCol = time_object.this_time_slice_half + time_object.this_time_slice_start - 1;
        // time_object.correctHourCol = Math.floor((time_object.this_time_slice_hour + time_object.this_time_slice_start) / 2);
        time_object.correctHourCol = Math.ceil(column / 2);
        // alert("hour correction - " + " time_object.correctHourCol: " + time_object.correctHourCol + " time_object.correctHalfCol: " + time_object.correctHalfCol);

    }
    // alert("column: " + column +  " Math.ceil(column / 2): " + Math.ceil(column / 2) +  " correctHourCol: " + time_object.correctHourCol);
    // re-initiliase the cervix timer
    if (time_object.cervixTime != 0) {
        time_object.cervixTime = GetCurrentTime();
    }
    // special care for 60 minute columns
    if (interval == 60) {
        time_object.correctHalfCol = ((time_object.this_time_slice_half + time_object.this_time_slice_start - 1) * 2) -1;
        time_object.correctHourCol = time_object.this_time_slice_start;
        time_object.this_time_slice_start = (column * 2) -1;
        // time_object.this_time_slice_hour = time_object.correctHourCol;
        // time_object.origHourCol = time_object.correctHourCol;
    } else if (interval == 31) {
        time_object.this_time_slice_start = time_object.this_time_slice_start - 48;
        var correctCol = time_object.this_time_slice_half + time_object.this_time_slice_start;
        time_object.correctHalfCol = correctCol;
        time_object.correctHourCol = Math.ceil(correctCol / 2);
        // alert("half slice: " + time_object.this_time_slice_half + " start: " + time_object.this_time_slice_start + " full slice: " + time_object.this_time_slice_hour + " correctHalfCol: " + time_object.correctHalfCol + " column: " + column + " interval: " + interval);
    }
    // drawTimeSlice (items, prevTimeHalfSlice, currentHalfSlice, prevTimeHourSlice, currentHourSlice);
    // time_object.UpdateTiming();
    //var currentSlice =  time_object.correctHalfCol;
    //drawTimeSlice (items, currentTimeHalfSlice, currentSlice, currentTimeHourSlice);
    // alert("half slice: " + time_object.this_time_slice_half + " start: " + time_object.this_time_slice_start + " full slice: " + time_object.this_time_slice_hour + " correctHalfCol: " + time_object.correctHalfCol + " correctHourCol: " + time_object.correctHourCol + " column: " + column + " interval: " + interval);
}

//Stamp current time as stop time, compute elapsed time difference and display in textbox
// kudos for time parsing code: http://codepunk.hardwar.org.uk/ajs08.htm
// force: force re-draw of timing
function UpdateTiming(force) {
    timeDisplay = document.getElementById("timeDisplay");
    time_object.this_current_time = GetCurrentTime();
    time_object.this_time_difference = (Math.abs(time_object.this_current_time - time_object.this_start_time)) / 1000;
    var prevTimeHalfSlice = time_object.origHalfCol;
    if (force == 1) {
        prevTimeHalfSlice = prevTimeHalfSlice-1;
    }
    var prevTimeHourSlice = time_object.origHourCol;
    // alert("currentTimeHalfSlice: " + currentTimeHalfSlice);
    var timeDiff = time_object.this_time_difference;
    var divisor_for_hours = timeDiff % (3600);
    var divisor_for_minutes = divisor_for_hours % (60 * 60);
    var divisor_for_seconds = divisor_for_minutes % 60;
    var hours = Math.floor(timeDiff / 3600);
    if (hours < 25) {   // don't display if elapsed time > 24 hours.
        var minutes = Math.floor(divisor_for_minutes / 60);
        var seconds = Math.floor(divisor_for_seconds);
        var halfSlice = Math.ceil(timeDiff / 1800);
        time_object.this_time_slice_half = halfSlice
        if (hours >= 1) {
            time_object.this_time_slice_hour = hours + 1;
        } else {
            time_object.this_time_slice_hour = 1;
        }
        time_object.correctHalfCol = time_object.this_time_slice_half + time_object.this_time_slice_start;
        time_object.correctHourCol = Math.floor(time_object.this_time_slice_hour + Math.ceil(time_object.this_time_slice_start / 2));
        // time_object.correctHourCol = Math.floor((time_object.this_time_slice_hour));
        var currentHour = "\n<br/>Current Hour: " + time_object.correctHourCol;
        var currentHalfHour = "\n<br/>Current Half Hour: " + time_object.correctHalfCol;
        minutes = ((minutes < 10) ? "0" : "") + minutes;
        seconds = ((seconds < 10) ? "0" : "") + seconds;
        //var elapsedTime = hours + ":" + minutes + ":" + seconds + currentHour + currentHalfHour;
        var elapsedTime = "Elapsed Time: " + hours + ":" + minutes + ":" + seconds;
        var currentHalfSlice = time_object.correctHalfCol;
        var currentHourSlice = time_object.correctHourCol;
        time_object.origHalfCol = currentHalfSlice;
        time_object.origHourCol = currentHourSlice;
        // alert("half slice: " + time_object.this_time_slice_half + " start: " + time_object.this_time_slice_start + " full slice: " + time_object.this_time_slice_hour + " correctHalfCol: " + time_object.correctHalfCol + " correctHourCol: " + time_object.correctHourCol + " column: " + column + " interval: " + interval);
        drawTimeSlice(items, prevTimeHalfSlice, currentHalfSlice, prevTimeHourSlice, currentHourSlice);
        if (time_object.cervixTime != 0) {
            var cervixTimediff = (time_object.this_current_time - time_object.cervixTime) / 1000;
            var Cdivisor_for_hours = cervixTimediff % (3600);
            var Cdivisor_for_minutes = Cdivisor_for_hours % (60 * 60);
            var Cdivisor_for_seconds = Cdivisor_for_minutes % 60;
            var cerHours = Math.floor(cervixTimediff / 3600);
            var cerMins = Math.floor(Cdivisor_for_minutes / 60);
            var cerSex = Math.floor(Cdivisor_for_seconds % 60);
            var niceCerMins = cerMins;
            var cerMinDisplay = ((niceCerMins < 10) ? "0" : "") + niceCerMins;
            var cerSexDisplay = ((cerSex < 10) ? "0" : "") + cerSex;
            var cervixTimeMessage = cerHours + ":" + cerMinDisplay + ":" + cerSexDisplay;
            var cervixAlert = "";
            if (cervixTimediff != 0) {
                if (cervixTimediff >= 3600) {
                    cervixAlert = " \n<br/>Check cervix dilatation."
                }
                timeDisplay.innerHTML = elapsedTime + "\n<br/>Cervix Elapsed: " + cervixTimeMessage + cervixAlert;
            } else {
                timeDisplay.innerHTML = elapsedTime;
            }
        } else {
            timeDisplay.innerHTML = elapsedTime;
        }
        setTimeout("UpdateTiming()", 1000);
        // var partoTiming = DWRUtil.getValue("partoTiming1");
    }
}

function drawTimeSlice(items, prevTimeSlice, newTimeSlice, prevTimeHourSlice, currentHourSlice) {
    // alert("prevTimeSlice: " + prevTimeSlice + " newTimeSlice: " + newTimeSlice + " currentHourSlice" + currentHourSlice);
    if (prevTimeSlice != newTimeSlice) {
         for (j = 0; j < items.length; j++) {
            var thisItem = items[j];
            // reset old time slice
            for (i = 0; i < thisItem.length; i++) {
                var item = thisItem[i];
                var itemStr = new String(item);
                var oldColName= item + "." + prevTimeSlice;
                var newColName = item + "." + newTimeSlice;
                if (j==3 || j==4 || j==5 || j==11 || j==12 || j==13 || j==14 || j==15 || j==16 ) {
                     oldColName = item + "." + prevTimeHourSlice;
                     newColName = item + "." + currentHourSlice;
                } else if (j==7) {
                    var prevTimeSliceNum = new Number(prevTimeSlice) + 48;
                    var newTimeSliceNum = new Number(newTimeSlice) + 48;
                    oldColName= item + "." + prevTimeSliceNum;
                    newColName = item + "." + newTimeSliceNum;
                    // alert("oldColName" + oldColName + "newColName" + newColName);
                } else {
                    oldColName= item + "." + prevTimeSlice;
                    newColName = item + "." + newTimeSlice;
                }
                var oldColElement = document.getElementById(oldColName);
                var newColElement = document.getElementById(newColName);
                if (oldColElement) {
                    if (oldColElement.className != "cervixAction" && oldColElement.className != "cervixAlert" ) {
                       oldColElement.className = "defaultTimeslice";
                    }

                }
                if (newColElement) {
                    if (newColElement.className != "cervixAction" && newColElement.className != "cervixAlert" ) {
                       newColElement.className = "currentTimeslice";
                    }
                }
            }
        }
    }
}

function checkCervix(row) {
    var message;
    if (time_object.cervixDil != null) {
        var diff = row - time_object.cervixDil;
        if (diff < 1) {
            message = "Abnormal labour progress: Cervix Dilatation has not progressed at least 1 cm the past hour."
        }
    }
    return message;
}

var interval = 30;
function partTimer(interval, column) {
    timeDisplay = document.getElementById("timeDisplay");
    var timeSliceCheck = null;
    if (timeDisplay.innerHTML == "") {
         //Initializing Time display
        timeDisplay.innerHTML = "Initializing Time.";
        var firstPartoElement = $("partoTiming1");
        if (firstPartoElement) {
            var partoHours = new Date().getHours();
            var partoMinutes = new Date().getMinutes();
            for (i = 0; i < 8; i++)
            {
                var thisHours = partoHours + i;
                if (thisHours > 23) {
                    thisHours = thisHours - 24;
                }
                var thisTime = thisHours + ":" + partoMinutes;
                var thisSlice = i + 1;
                DWRUtil.setValue("partoTiming" + thisSlice, thisTime);
            }
        }
        resetTiming(interval, column);
    } else {
        // alert("correctHourCol: " + time_object.correctHourCol + " this_time_slice_hour: " + time_object.this_time_slice_hour + "  this_time_slice_start: " + time_object.this_time_slice_start);
        if (interval == 30) {
            if (column > time_object.correctHalfCol) {
                //alert("half slice: " + time_object.this_time_slice_half + " full slice: " + time_object.this_time_slice_hour + " column: " + column + " interval: " + interval);
                timeSliceCheck = confirm("You are entering data too fast - it should be every 30 minutes for this element. Continue?")
                if (timeSliceCheck == true) {
                   // resetTiming(interval, column);
                }
            }
        } else if (interval == 60) {
            // correctCol = time_object.this_time_slice_hour + time_object.this_time_slice_start - 1;
            if (column > time_object.correctHourCol) {
                // alert("correctHourCol: " + time_object.correctHourCol + " column: " + column + " interval: " + interval);
                timeSliceCheck = confirm("You are entering data too fast - it should be every 60 minutes for this element. Continue?")
                if (timeSliceCheck == true) {
                   // resetTiming(interval, column);
                }
            }
        } else if (interval == 31) {   // oxytocin special case
            var correctCol = time_object.this_time_slice_half + time_object.this_time_slice_start + 48;
            if (column > correctCol) {
                 // alert("half slice: " + time_object.this_time_slice_half + " full slice: " + time_object.this_time_slice_hour + " column: " + column + " interval: " + interval + " correctCol: " + correctCol);
                timeSliceCheck = confirm("You are entering data too fast - it should be every 30 minutes for this element. Continue?")
                if (timeSliceCheck == true) {
                  //  resetTiming(interval, column);
                }
            }
        }
    }
    if (timeSliceCheck == null) {
        timeSliceCheck = true;
    }
    // alert("half slice: " + time_object.this_time_slice_half + " full slice: " + time_object.this_time_slice_hour + " column: " + column + " interval: " + interval + " correctCol: " + correctCol);
    return timeSliceCheck;
}

function reOpenPartograph() {
    partographClosed = false;
    var partoClosedElement = document.getElementById("partoClosed");
    alert("Partograph is re-opened. You may edit or enter new data. The partograph will be closed automatically when you leave or reload this page.")
    partoClosedElement.innerHTML = "Partograph is re-opened.";
}


// These are remote calls to Partograph class, wich uses DWR libs to update the partograph record.

function insertFHR(row, column, patientId, pregnancyId, user, siteId, jsessionid) {
    interval = 30;
    if (partographClosed == true) {
        var reOpen = confirm("Partograph is closed. Re-open?");
        if (reOpen == true) {
            reOpenPartograph();
        }
    } else {
        var dateVisitValue = getDateVisit();
        var field = row + "." + column;
        var item = document.getElementById(field);
        if (item.innerHTML != "&nbsp;") {
            // alert("item: " + item.innerHTML);
            var agree = confirm('Delete this entry?');
            if (agree) {
                Partograph.deleteValue(replyDeleteFHR, row, column, "FetalHeartRate", "fetalHeartRate", patientId, pregnancyId, user, siteId, dateVisitValue, jsessionid);
            } else {
                return false;
            }
        } else {
            var timeSliceCheck = partTimer(interval, column);
            if (timeSliceCheck == true) {
                Partograph.insertValue(replyFHR, row, column, "FetalHeartRate", "fetalHeartRate", patientId, pregnancyId, user, siteId, dateVisitValue, jsessionid);
                replyPrevValue("fetalHeartRate", row, column);
            }
        }
    }
}

function insertLiquor(column, field, patientId, pregnancyId, user, siteId) {
    interval = 30;
    if (partographClosed == true) {
        var reOpen = confirm("Partograph is closed. Re-open?");
        if (reOpen == true) {
            reOpenPartograph();
        }
    } else {
        var dateVisitValue = getDateVisit();
        var item = document.getElementById(field);
        itemValue = item[item.selectedIndex].value;
        if (itemValue == "delete") {
            var agree = confirm('Delete this entry?');
            if (agree) {
                Partograph.deleteValue(replyDeleteLiquor, row, column, "Liquor", "liquor", patientId, pregnancyId, user, siteId, dateVisitValue, jsessionid);
            } else {
                return false;
            }
        } else {
            var timeSliceCheck = partTimer(interval, column);
            if (timeSliceCheck == true) {
            Partograph.insertValue(replyLiquor, itemValue, column, "Liquor", "liquor", patientId, pregnancyId, user, siteId, dateVisitValue, jsessionid);
                }
        }
    }
}

function insertMoulding(column, field, patientId, pregnancyId, user, siteId) {
    interval = 30;
    if (partographClosed == true) {
        var reOpen = confirm("Partograph is closed. Re-open?");
        if (reOpen == true) {
            reOpenPartograph();
        }
    } else {
        var dateVisitValue = getDateVisit();
        var item = document.getElementById(field);
        itemValue = item[item.selectedIndex].value;
        if (itemValue == "delete") {
            var agree = confirm('Delete this entry?');
            if (agree) {
                Partograph.deleteValue(replyDeleteMoulding, field, column, "Moulding", "moulding", patientId, pregnancyId, user, siteId, dateVisitValue, jsessionid);
            } else {
                return false;
            }
        } else {
            var timeSliceCheck = partTimer(interval, column);
            if (timeSliceCheck == true) {
                Partograph.insertValue(replyMoulding, itemValue, column, "Moulding", "moulding", patientId, pregnancyId, user, siteId, dateVisitValue, jsessionid);
            }
        }
    }
}

function insertCervix(field, column, patientId, pregnancyId, user, siteId) {
    interval = 60;
    if (partographClosed == true) {
        var reOpen = confirm("Partograph is closed. Re-open?");
        if (reOpen == true) {
            reOpenPartograph();
        }
    } else {
        var dateVisitValue = getDateVisit();
        var item = document.getElementById("cervixCellDiv" + field + "." + column);
        var img = document.getElementById("CervixImg" + field + "." + column);
        if (img) {
            var agree = confirm('Delete this entry?');
            if (agree) {
                Partograph.deleteValue(replyDeleteCervix, field, column, "Cervix", "cervix", patientId, pregnancyId, user, siteId, dateVisitValue, jsessionid);
            } else {
                return false;
            }
        } else {
            var timeSliceCheck = partTimer(interval, column);
            if (timeSliceCheck == true) {
                Partograph.insertValueTime(replyCervix, field, column, "Cervix", "cervix", patientId, pregnancyId, user, siteId, dateVisitValue, jsessionid);
                replyPrevValue("cervix", field, column);
            }
        }
    }
}




function insertDescent(field, column, patientId, pregnancyId, user, siteId) {
    interval = 60;
    if (partographClosed == true) {
        var reOpen = confirm("Partograph is closed. Re-open?");
        if (reOpen == true) {
            reOpenPartograph();
        }
    } else {
        var dateVisitValue = getDateVisit();
        var img = document.getElementById("DescentImg" + field + "." + column);
        if (img) {
            var agree = confirm('Delete this entry?');
            if (agree) {
                Partograph.deleteValue(replyDeleteDescent, field, column, "Descent", "descent", patientId, pregnancyId, user, siteId, dateVisitValue, jsessionid);
            } else {
                return false;
            }
        } else {
            var timeSliceCheck = partTimer(interval, column);
            if (timeSliceCheck == true) {
                Partograph.insertValueTime(replyDescent, field, column, "Descent", "descent", patientId, pregnancyId, user, siteId, dateVisitValue, jsessionid);
                replyPrevValue("descent", field, column);
            }
        }
    }
}

function insertContractions(column, row, patientId, pregnancyId, user, siteId) {
    interval = 60;
    if (partographClosed == true) {
        var reOpen = confirm("Partograph is closed. Re-open?");
        if (reOpen == true) {
            reOpenPartograph();
        }
    } else {
        var dateVisitValue = getDateVisit();
        // var img = document.getElementById("DescentImg" + row + "." + column);
        var id = "contractionsField" + row + "." + column;
        // var item = document.getElementById(id);
        // alert("id: "+id);
        var item = document.getElementById(id);
        var itemValue = row + "/" + item[item.selectedIndex].value;
        //item.innerHTML = row;
        //item.className = "chartFilled";
        if (item[item.selectedIndex].value == "delete") {
            var agree = confirm('Delete this entry?');
            if (agree) {
                Partograph.deleteValue(replyDeleteContractions, row, column, "Contractions", "contractions", patientId, pregnancyId, user, siteId, dateVisitValue, jsessionid);
            } else {
                return false;
            }
        } else {
            var timeSliceCheck = partTimer(interval, column);
            if (timeSliceCheck == true) {
                Partograph.insertValue(replyContractions, itemValue, column, "Contractions", "contractions", patientId, pregnancyId, user, siteId, dateVisitValue, jsessionid);
                replyPrevValue("contractions", row, column);
            }
            // Partograph.insertValueTime(replyDescent, field, column, "Descent", "descent", patientId, pregnancyId, user, siteId, dateVisitValue, jsessionid);
        }
    }
}

function insertOxytocin(column, field, patientId, pregnancyId, user, siteId) {
    if (column <= 48) {
        interval = 30;
    } else {
        interval = 31;
    }
    if (partographClosed == true) {
        var reOpen = confirm("Partograph is closed. Re-open?");
        if (reOpen == true) {
            reOpenPartograph();
        }
    } else {
        var dateVisitValue = getDateVisit();
        var item = document.getElementById(field);
        itemValue = item.value;
        var timeSliceCheck = partTimer(interval, column);
        if (timeSliceCheck == true) {
            if (column >= 49) {
                Partograph.insertValue(replyOxytocin, itemValue, column, "Oxytocin", "oxytocinDrops", patientId, pregnancyId, user, siteId, dateVisitValue);
                } else {
                Partograph.insertValue(replyOxytocin, itemValue, column, "Oxytocin", "oxytocin", patientId, pregnancyId, user, siteId, dateVisitValue);
            }
            item.value = "";
            item.style.visibility = "hidden";
        }
    }
}


function insertDrugsDispensed(column, field, partoClass, property, target, patientId, pregnancyId, user, siteId) {
    if (partographClosed == true) {
        var reOpen = confirm("Partograph is closed. Re-open?");
        if (reOpen == true) {
            reOpenPartograph();
        }
    } else {
        var dateVisitValue = getDateVisit();
        var item = document.getElementById(field);
        itemValue = item.value;
        var timeSliceCheck = partTimer(interval, column);
        if (timeSliceCheck == true) {
            Partograph.insertValueTime(target, itemValue, column, partoClass, property, patientId, pregnancyId, user, siteId, dateVisitValue);
        }
    }
}

function insertSystolic(field, column, patientId, pregnancyId, user, siteId) {
    interval = 30;
    if (partographClosed == true) {
        var reOpen = confirm("Partograph is closed. Re-open?");
        if (reOpen == true) {
            reOpenPartograph();
        }
    } else {
        var dateVisitValue = getDateVisit();
        var item = document.getElementById("systolicDiv" + field + "." + column);
        var img = document.getElementById("systolicImg" + field + "." + column);
        // if (item.innerHTML != "&nbsp;") {
        //if (item.firstChild != null) {
        // alert("eq - item: " + item.firstChild + " cervixCellDiv" + field + "." + column);
            if (img) {
                var agree = confirm('Delete this entry?');
                if (agree) {
                    Partograph.deleteValue(replyDeleteSystolic, field, column, "BloodPressure", "systolic", patientId, pregnancyId, user, siteId, dateVisitValue, jsessionid);
                } else {
                    return false;
                }
            } else

            diastolicValue = getBPvalue("diastolic", column);
        if (diastolicValue >= field) {
            if (diastolicValue == 0) {
                // it's ok
            } else {
                alert("Systolic <= Diastolic. Please re-enter value.")
            }
        } else {
            var timeSliceCheck = partTimer(interval, column);
            if (timeSliceCheck == true) {
                Partograph.insertValue(replySystolic, field, column, "BloodPressure", "systolic", patientId, pregnancyId, user, siteId, dateVisitValue, jsessionid);
                replyPrevValue("systolic", field, column);
            }
        }
    }
}

function insertDiastolic(field, column, patientId, pregnancyId, user, siteId) {
    interval = 30;
    if (partographClosed == true) {
        var reOpen = confirm("Partograph is closed. Re-open?");
        if (reOpen == true) {
            reOpenPartograph();
        }
    } else {
        var dateVisitValue = getDateVisit();
        var item = document.getElementById("diastolicDiv" + field + "." + column);
        var img = document.getElementById("diastolicImg" + field + "." + column);
            if (img) {
                var agree = confirm('Delete this entry?');
                if (agree) {
                    Partograph.deleteValue(replyDeleteDiastolic, field, column, "BloodPressure", "diastolic", patientId, pregnancyId, user, siteId, dateVisitValue, jsessionid);
                } else {
                    return false;
                }
            } else
        systolicValue = getBPvalue("systolic", column);
        if (systolicValue <= field) {
            if (systolicValue == 0) {
                alert("Must enter Systolic value first.")
            } else {
                alert("Systolic <= Diastolic. Please re-enter value.")
            }
        } else {
            var timeSliceCheck = partTimer(interval, column);
            if (timeSliceCheck == true) {
                Partograph.insertValue(replyDiastolic, field, column, "BloodPressure", "diastolic", patientId, pregnancyId, user, siteId, dateVisitValue, jsessionid);
                replyPrevValue("diastolic", field, column);
            }
        }

    }
}

function getBPvalue(type, column) {
    var bpValue = 0;
    for ( i=60; i <= 200; i = i + 10 ) {
        bpValue = i;
        element = document.getElementById(type + "Img" + bpValue + "." + column);
        if (element) {
            return bpValue;
        }
    }
    return 0;
}

function insertPulse(field, column, patientId, pregnancyId, user, siteId) {
    interval = 30;
    if (partographClosed == true) {
        var reOpen = confirm("Partograph is closed. Re-open?");
        if (reOpen == true) {
            reOpenPartograph();
        }
    } else {
        var dateVisitValue = getDateVisit();
        var item = document.getElementById("pulseDiv" + field + "." + column);
        var img = document.getElementById("pulseImg" + field + "." + column);
        if (img) {
            var agree = confirm('Delete this entry?');
            if (agree) {
                Partograph.deleteValue(replyDeletePulse, field, column, "Pulse", "pulse", patientId, pregnancyId, user, siteId, dateVisitValue, jsessionid);
            } else {
                return false;
            }
        } else {
            var timeSliceCheck = partTimer(interval, column);
            if (timeSliceCheck == true) {
                Partograph.insertValue(replyPulse, field, column, "Pulse", "pulse", patientId, pregnancyId, user, siteId, dateVisitValue, jsessionid);
                replyPrevValue("pulse", field, column);
            }
        }
    }
}

function insertTemperature(column, field, patientId, pregnancyId, user, siteId) {
    interval = 60;
    if (partographClosed == true) {
        var reOpen = confirm("Partograph is closed. Re-open?");
        if (reOpen == true) {
            reOpenPartograph();
        }
    } else {
        var dateVisitValue = getDateVisit();
        var item = document.getElementById(field);
        itemValue = item.value;
        var timeSliceCheck = partTimer(interval, column);
        if (timeSliceCheck == true) {
            Partograph.insertValue(replyTemperature, itemValue, column, "Temperature", "temperature", patientId, pregnancyId, user, siteId, dateVisitValue)
            item.value = "";
            item.style.visibility = "hidden";
        }
    }
}

function insertRespiration(column, field, patientId, pregnancyId, user, siteId) {
    interval = 60;
    if (partographClosed == true) {
        var reOpen = confirm("Partograph is closed. Re-open?");
        if (reOpen == true) {
            reOpenPartograph();
        }
    } else {
        var dateVisitValue = getDateVisit();
        var item = document.getElementById(field);
        itemValue = item.value;
        var timeSliceCheck = partTimer(interval, column);
        if (timeSliceCheck == true) {
            Partograph.insertValue(replyRespiration, itemValue, column, "Respiration", "respiration", patientId, pregnancyId, user, siteId, dateVisitValue)
            item.value = "";
            item.style.visibility = "hidden";
        }
    }
}

function insertUrineAmount(column, field, patientId, pregnancyId, user, siteId) {
    interval = 60;
    if (partographClosed == true) {
        var reOpen = confirm("Partograph is closed. Re-open?");
        if (reOpen == true) {
            reOpenPartograph();
        }
    } else {
        var dateVisitValue = getDateVisit();
        var item = document.getElementById(field);
        itemValue = item.value;
        var timeSliceCheck = partTimer(interval, column);
        if (timeSliceCheck == true) {
            Partograph.insertValue(replyUrineAmount, itemValue, column, "UrineAmount", "urineAmount", patientId, pregnancyId, user, siteId, dateVisitValue)
            item.value = "";
            item.style.visibility = "hidden";
        }
    }
}

function insertUrinalysisProtein(column, field, patientId, pregnancyId, user, siteId) {
    interval = 60;
    if (partographClosed == true) {
        var reOpen = confirm("Partograph is closed. Re-open?");
        if (reOpen == true) {
            reOpenPartograph();
        }
    } else {
        var dateVisitValue = getDateVisit();
        var item = document.getElementById(field);
        itemValue = item[item.selectedIndex].value
        if (itemValue == "delete") {
            var agree = confirm('Delete this entry?');
            if (agree) {
                Partograph.deleteValue(replyDeleteUrinalysisProtein, field, column, "UrinalysisProtein", "urinalysisProtein", patientId, pregnancyId, user, siteId, dateVisitValue, jsessionid);
            } else {
                return false;
            }
        } else {
            var timeSliceCheck = partTimer(interval, column);
            if (timeSliceCheck == true) {
                Partograph.insertValue(replyUrinalysisProtein, itemValue, column, "UrinalysisProtein", "urinalysisProtein", patientId, pregnancyId, user, siteId, dateVisitValue, jsessionid);
            }
        }
    }
}

function insertUrinalysisAcetone(column, field, patientId, pregnancyId, user, siteId) {
    interval = 60;
    if (partographClosed == true) {
        var reOpen = confirm("Partograph is closed. Re-open?");
        if (reOpen == true) {
            reOpenPartograph();
        }
    } else {
        var dateVisitValue = getDateVisit();
        var item = document.getElementById(field);
        itemValue = item[item.selectedIndex].value
        if (itemValue == "delete") {
            var agree = confirm('Delete this entry?');
            if (agree) {
                Partograph.deleteValue(replyDeleteUrinalysisAcetone, field, column, "UrinalysisAcetone", "urinalysisAcetone", patientId, pregnancyId, user, siteId, dateVisitValue, jsessionid);
            } else {
                return false;
            }
        } else {
            var timeSliceCheck = partTimer(interval, column);
            if (timeSliceCheck == true) {
                Partograph.insertValue(replyUrinalysisAcetone, itemValue, column, "UrinalysisAcetone", "urinalysisAcetone", patientId, pregnancyId, user, siteId, dateVisitValue, jsessionid)
            }
        }
    }
}

function insertUrinalysisGlucose(column, field, patientId, pregnancyId, user, siteId) {
    interval = 60;
    if (partographClosed == true) {
        var reOpen = confirm("Partograph is closed. Re-open?");
        if (reOpen == true) {
            reOpenPartograph();
        }
    } else {
        var dateVisitValue = getDateVisit();
        var item = document.getElementById(field);
        itemValue = item[item.selectedIndex].value
        if (itemValue == "delete") {
            var agree = confirm('Delete this entry?');
            if (agree) {
                Partograph.deleteValue(replyDeleteUrinalysisGlucose, field, column, "UrinalysisGlucose", "urinalysisGlucose", patientId, pregnancyId, user, siteId, dateVisitValue, jsessionid);
            } else {
                return false;
            }
        } else {
            var timeSliceCheck = partTimer(interval, column);
            if (timeSliceCheck == true) {
                Partograph.insertValue(replyUrinalysisGlucose, itemValue, column, "UrinalysisGlucose", "urinalysisGlucose", patientId, pregnancyId, user, siteId, dateVisitValue, jsessionid)
            }
        }
    }
}

function insertClosePartograph(column, field, patientId, pregnancyId, user, siteId) {
    var isClosed = document.getElementById("is_closed");
    closedValue = isClosed.value;
    if (closedValue == "on") {
        var item = document.getElementById(field);
        itemValue = item.value;
        Partograph.updatePartographStatus(replyClosePartograph, itemValue, column, "PartographStatus", "field1551", patientId, pregnancyId, user, siteId)
    }
}

function insertOpenPartograph(column, field, patientId, pregnancyId, user, siteId) {
    var isOpen = document.getElementById("is_open");
    openValue = isOpen.value;
    var item = document.getElementById(field);
    itemValue = item.value;
    Partograph.updatePartographStatus(replyOpenPartograph, itemValue, column, "PartographStatus", "field1551", patientId, pregnancyId, user, siteId)
    var isClosed = document.getElementById("is_closed");
    closedValue = "off";
}

function insertVaginalExam(column, field, partoClass, property, target, patientId, pregnancyId, user, siteId) {
    if (partographClosed == true) {
        var reOpen = confirm("Partograph is closed. Re-open?");
        if (reOpen == true) {
            reOpenPartograph();
        }
    } else {
        var dateVisitValue = getDateVisit();
        var item = document.getElementById(field);
        if (property == "timeObservation") {
            itemValue = item.value
        } else {
            itemValue = item[item.selectedIndex].value
        }
        Partograph.insertValueTime(target, itemValue, column, partoClass, property, patientId, pregnancyId, user, siteId, dateVisitValue)
    }
}

function createAlertRow(type, row, column) {
    var plotClass = type + "Cell";
    var endRow = startRow + 8;
    if (row >=4) {
        alertCol = new Number(trim(column));
        actionCol = new Number(trim(column)) + 4;
        // alert("alertCol" + alertCol + " row: " + row + " column: " + column);
        rowNum = new Number(trim(row));
        for ( i=rowNum; i < 11; i++ )
       //  for (i = rowNum; i < endRow; i++)
        {
            // if (alertCol <= 8) {
            // Create the blue alert rows
            var id = i + "." + alertCol;
            var alertItem = document.getElementById(plotClass + id);
            if (alertItem) {
                alertItem.className = "cervixAlert";
            }

            alertCol = alertCol + 1;
            // now fill out the red action row
            //   if (actionCol <= 8) {
            var idAction = i + "." + actionCol;
            var actionItem = document.getElementById(plotClass + idAction);
            if (actionItem) {
                actionItem.className = "cervixAction";
            }
            // Fill out the Action Zone items
            for (j = actionCol + 1; j < endRow+1; j++) {
                var idActionZone = i + "." + j;
                //alert("idActionZone"+ idActionZone)
                var actionItemZone = document.getElementById(plotClass + idActionZone);
                if (actionItemZone) {
                    actionItemZone.className = "cervixActionZone";
                }
            }
            actionCol = actionCol + 1;
            //   }
        }
    }
}


function deleteAlertRows() {
    if (startCervix!="") {
    var cerVals = startCervix.split(",");
    var type = cerVals[0];
    var row = cerVals[1];
    var column =cerVals[2];
    var plotClass = type + "Cell";
    if (row >=4) {
        alertCol = new Number(trim(column));
        actionCol = new Number(trim(column)) + 4;
        // alert("alertCol" + alertCol);
        rowNum = new Number(trim(row));
        for ( i=rowNum; i < 11; i++ )
        {
            if (alertCol <= 8) {
                // Change the alert rows
                var id = i + "." + alertCol;
                var alertItem = document.getElementById(plotClass + id);
                alertItem.className = "";
                alertCol = alertCol+1;
                // now fill out the action row
                if (actionCol <= 8) {
                    var idAction = i + "." + actionCol;
                    var actionItem = document.getElementById(plotClass + idAction);
                    actionItem.className = "";
                    // Fill out the Action Zone items
                    for ( j=actionCol+1; j < 9; j++ ) {
                        var idActionZone = i + "." + j;
                        var actionItemZone = document.getElementById(plotClass + idActionZone);
                        actionItemZone.className = "";
                    }
                    actionCol = actionCol+1;
                }
            }
        }
    }
}
        }


var replyCervix = function(data) {
    var dvals = data.split("=");
    var row = dvals[0];
    var column =dvals[1];
    rowNum = new Number(trim(row));
    var id = rowNum + "." + column;
    // alert("data: " + data + " id: " + id);
    var citem = document.getElementById("cervixCellDiv" + id);
    var ditem = document.getElementById("descentCellDiv" + id);
    citemImage = document.createElement('img');
    citemImage.src = '/zeprs/images/dot_red.gif';
    citemImage.id = 'CervixImg' + id;
    ditemImage = document.createElement('img');
    ditemImage.src = '/zeprs/images/dot.gif';
    ditemImage.id = 'CervixImgB' + id;
    citem.appendChild(citemImage);
    ditem.appendChild(ditemImage);
    //item.className = "chartFilled";
    var cCell = document.getElementById("cervixCell" + id);
    // cervixCell7
    if (uthSite) {
        var newEntry = confirm("Reset the action lines with this entry?");
        if (newEntry) { // reset the action lines.
            updateActionLineValues(row, column);
        }
    }
    if (startCervix=="" & row >=4) {
        startCervix="cervix" + ","  + row + "," + column;
        createAlertRow("cervix", row, column);
        createAlertRow("descent", row, column);
        createActionLineValues(row, column);        
    } else {
     // alert("Current startCervix: " + startCervix);
        if (cCell.className == "cervixAction") {
            alert("Action line has been crossed - please consider intervention.");
        } else if (cCell.className == "cervixActionZone") {
            alert("Action line has been crossed - please consider intervention.");
        }
    }
    var timeKey = "cervixTime" + dvals[1];
    var timeElement = document.getElementById(timeKey);
    var timeValue =dvals[2];
    timeElement.innerHTML = timeValue;
    var cervixAlert = checkCervix(rowNum);
    if (cervixAlert != null) {
        alert(cervixAlert);
    }
    currentCervix = rowNum;
    time_object.cervixDil = rowNum;
    time_object.cervixTime = GetCurrentTime();

    if (currentStation == "5/5" && currentCervix >=3) {
      alert("No descent of baby. Station: " + currentStation + " and Cervix: " + currentCervix + "; Refer to UTH.");
    }
}

var replyUpdateActionLines = function(data) {
    var dvals = data.split("=");
    var row = trim(dvals[0]);
    var column =trim(dvals[1]);
    deleteAlertRows();
    startCervix = "cervix" + "," + row + "," + column;
    createAlertRow("cervix", row, column);
    createAlertRow("descent", row, column);
    UpdateTiming(1);
}

var replyDeleteCervix = function(data)
{

    var dvals = data.split("=");
    var row = trim(dvals[0]);
    var column =trim(dvals[1]);

    var id =  "cervixCellDiv" + row + "." + column;
    var descId =  "descentCellDiv" + row + "." + column;
    var img = "CervixImg" + row + "." + column;
    var descImg = "CervixImgB" + row + "." + column;
    // don't use createElement
    var space = document.createTextNode("&#160;");
    divObj = document.getElementById(id);
    descDivObj = document.getElementById(descId);
    imgObject = document.getElementById(img);
    descImgObject = document.getElementById(descImg);
    if (imgObject) {
    imgObject.parentNode.removeChild(imgObject);
    }
    if (descImgObject) {
    descImgObject.parentNode.removeChild(descImgObject);
    }
    if (divObj.firstChild == null) {
    divObj.appendChild(space);
    //    alert("row: " + row + " column: " + column)
    } else {
   //    alert("divObj.firstChild != null- row: " + row + " column: " + column);
    }
    if (descDivObj.firstChild == null) {
    descDivObj.appendChild(space);
    }
    var timeKey = "cervixTime" + column;
    var timeElement = document.getElementById(timeKey);
    timeElement.innerHTML = "";
}