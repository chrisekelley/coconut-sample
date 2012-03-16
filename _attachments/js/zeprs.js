/**
* Multiselect widget
**/

function addShared(listField, destList, summaryField) {
   if ( listField.length == -1) {  // If the list is empty
      alert("There are no values which can be moved!");
   } else {
      var selected = listField.selectedIndex;
      if (selected == -1) {
         alert("You must select an entry to be moved!");
      } else {  // Something is selected
         destList[destList.length] = new Option(listField[selected].text,listField[selected].value);
         syncHiddenField(destList, summaryField);
      }  // Ends the check for there being something selected
   }  // Ends the check for there being none in the list
   syncHiddenField(destList, summaryField);
}

// function addItem(listField, destList, numFields) {
function addItem(fieldId, numFields, formName) {
	var listField = document.getElementById("_allitems"+fieldId);
	var destList = document.getElementById("_items"+fieldId);
   if ( listField.length == -1) {  // If the list is empty
      alert("There are no values which can be moved!");
   } else {
      var selected = listField.selectedIndex;
      if (selected == -1) {
         alert("You must select an entry to be moved!");
      } else {  // Something is selected
        if (destList.length>numFields-1) {
        alert("You may choose only" + numFields + " items." );
        } else {
         destList[destList.length] = new Option(listField[selected].text,listField[selected].value);
         } // Ends the check for  destList.length>numFields-1
      }  // Ends the check for there being something selected
   }  // Ends the check for there being none in the list
   //syncHiddenFields(destList, numFields);
   syncHiddenFields(fieldId, numFields, formName);
}


function syncHiddenField(listField, summaryField)
{
    var order = "";
    var first = true;
	for ( i=0; i < listField.length; i++ )
    {
        if ( !first )
        {
            order += ",";
        }
        else
        {
            first = false;
        }
        order += listField[i].value;
    }
    summaryField.value = order;
}

//function syncHiddenFields(listField, numFields)
function syncHiddenFields(fieldId, numFields, formName)
{
	var listField = document.getElementById("_items"+fieldId);
	var selectionList = document.getElementById("selectionList"+fieldId);
	//var selectionList = eval(getLabel("selectionList"+fieldId));
    // first delete all of the current values.
    for (i = 0; i < numFields; i++)
    {
        if (formName == "currentMed") {
			itemid = "item" + i;
		} else {
			itemid = "item" + fieldId + "." + i;
		}
        itemfield = document.getElementById(itemid);
        if (itemfield) {
           itemfield.value = "";
        }
    }
    for (i = 0; i < listField.length; i++)
    {
        if (i > numFields - 1) {
            alert("You may choose only" + numFields + " items.");
        } else {
			if (formName == "currentMed") {
				itemid = "item" + i;
			} else {
				itemid = "item" + fieldId + "." + i;
			}
            itemfield = eval(getLabel(itemid));
            var listFieldValue = listField[i].value;
            if (itemfield) {
                 itemfield.value = listFieldValue;
            } else {
                if (selectionList) {
					//alert("selectionList listFieldValue " + listFieldValue);
                    if (i==0) {
                         selectionList.value = listFieldValue;
                    } else {
                        selectionList.value = selectionList.value + "," + listFieldValue;
                    }
                }
            }
        }
    }
}

//function removeField(listField, destList, summaryField) {
function removeField(listField, destList, summaryField) {
    if (listField.length == -1) {  // If the list is empty
        alert("There are no values which can be moved!");
    } else {
        var selected = listField.selectedIndex;
        if (selected == -1) {
            alert("You must select an entry to be moved!");
        } else {  // Something is selected
            if (listField.length == 1) {
                listField.options[selected] = null;
            } else {
                listField.options[selected] = null;
            }
            syncHiddenField(listField, summaryField);
        }
        // Ends the check for there being something selected
    }
    // Ends the check for there being none in the list
    syncHiddenField(listField, summaryField);
}

//function removeItem(listField, destList, numFields) {
function removeItem(fieldId, numFields, formName) {
	var destList = document.getElementById("_allitems"+fieldId);
	var listField = document.getElementById("_items"+fieldId);
    if (listField.length == -1) {  // If the list is empty
        alert("There are no values which can be moved!");
    } else {
        var selected = listField.selectedIndex;
        if (selected == -1) {
            alert("You must select an entry to be moved!");
        } else {  // Something is selected
            if (listField.length == 1) {
                listField.options[selected] = null;
            } else {
                listField.options[selected] = null;
            }
        }
        // Ends the check for there being something selected
    }
    // Ends the check for there being none in the list
    //syncHiddenFields(listField, numFields);
	syncHiddenFields(fieldId, numFields, formName);
}

/*
	tableruler()
	written by Chris Heilmann for alistapart.
	enables a rollover of rows for each table with the classname "hlrows"
*/

function tableruler()
{
    if (document.getElementById && document.createTextNode)
    {
        var tables = document.getElementsByTagName('table');

        for (i = 0; i < tables.length; i++)
        {
            if (tables[i].className == 'ruler')
            {
                var trs = tables[i].getElementsByTagName('tr');
                for (var j = 0; j < trs.length; j++)
                {
                    if (trs[j].parentNode.nodeName == 'TBODY')
                    {
                        trs[j].onmouseover = function() {
                            this.className = 'ruled';
                            return false
                        }
                        trs[j].onmouseout = function() {
                            this.className = '';
                            return false
                        }
                    }
                }
            }
        }
    }
}

function toggleOld(theDiv){
    var el = document.getElementById(theDiv);
    if ( el != null )
    {
    	el.style.display = (el.style.display == "none")?"":"none";
    }
}

function toggle(div1) {

    var el = document.getElementById(div1);

    if (el != "visible")
    {
        el.style.visibility = "visible";
        el.style.display = "";
    }
}

function toggle2(div1) {
    var el = document.getElementById(div1);
    if (el.style.display != "")
    {
        el.style.display = "";
    } else {
        el.style.display = "none";
    }
}

function justReveal(div1) {
    var el = document.getElementById(div1);
    if (el) {
        if (el.style.visibility != "visible")
        {
            el.style.visibility = "visible";
            el.style.display = "";
        }
    }
}

function hide_toggles() {
	var el = document.getElementById('adminHelp');
    el.style.display = (el.style.display == "none")?"":"none";
}

var images = new Array();
images[0] = new Image();
images[1] = new Image();
images[0].src = "images/plus.gif";
images[1].src = "images/minus.gif";

function toggleField(theField, visibleEnumIdTrigger, visibleDependency, fieldid) {
	var cellType = "";
    if (theField == "dropdown")
    {
        var master = document.getElementById("selectfield" + fieldid);
        if (!master) {
            master = document.getElementById("field" + fieldid);
        }

        masterValue = master[master.selectedIndex].value
    }
    else if (theField == "Yes/No")
    {
        var master = document.getElementsByName("field" + fieldid);
        if (master[0].checked == true) {
            masterValue = master[0].value
        } else {
            masterValue = master[1].value
        }

    }
    else if (theField == "radio")
    {
        var master = document.getElementById("field" + fieldid);
        masterValue = master.value
    }
    else if (theField == "collapsing-display-header-begin")
    {
        var master = document.getElementById("field" + fieldid);
        masterValue = master.value
    }

    var lvals = visibleDependency.split(",");
    for (i = 0; i < lvals.length; i++)
    {
        var thisDependency = lvals[i];
        if (theField == "link")
        {
            var child = document.getElementById("tbl" + thisDependency);
            var parent = child.parentNode;
            var buttonEl = "plusminus" + fieldid;
            var button = document.getElementById(buttonEl);
            if (button) {
                button.src = (button.src == images[0].src)?images[1].src:images[0].src;
            }
            child.style.display = (child.style.display == "none")?"":"none";
            child.className = "defaultCell";
        } else if (theField == "Yes/No Table") {
            var child = document.getElementById("tbl" + thisDependency);
            var parent = child.parentNode;
            child.style.display = (child.style.display == "none")?"":"none";
            child.className = "defaultCell";
        } else if (theField == "Yes/No") {
            var child = document.getElementById("cell" + thisDependency);
            if (! child) {
                child = document.getElementById("field" + thisDependency);
            }
            if (! child) {
                child = document.getElementById("tbl" + thisDependency);
            }
			if (! child) {
                child = document.getElementById("field" + thisDependency + "Cell0");
				cellType = "chart";
            }
            var testValue;

            if ((masterValue == 'true') || (masterValue == '1')) {
                testValue = 1;
            } else {
                testValue = 0;
            }
            if (testValue == visibleEnumIdTrigger)
            {
                if (cellType == "chart") {
					child.style.visibility = "visible";
				} else {
					child.style.display = "";
                	child.className = "defaultCell";
				}
            }
            else
            {
                if (cellType == "chart") {
					child.style.visibility = "hidden";
				} else {
					child.style.display = "none";
                	child.className = "defaultCell";
				}
            }
        } else {
            var child = document.getElementById("cell" + thisDependency);
            if (! child) {
                child = document.getElementById("tbl" + thisDependency);
            }
            if (! child) {
                child = document.getElementById("field" + thisDependency);
            }
			if (! child) {
                child = document.getElementById("field" + thisDependency + "Cell0");
				cellType = "chart";
            }
			//alert("child: " + child);
            if (masterValue == visibleEnumIdTrigger)
            {
                if (cellType == "chart") {
					child.style.visibility = "visible";
				} else {
					child.style.display = (child.style.display == "none")?"":"none";
                	child.className = "defaultCell"
				}
            }
            else
            {
                if (cellType == "chart") {
					child.style.visibility = "hidden";
				} else {
					child.style.display = "none";
            		child.className = "defaultCell";
				}
            }
        }
    }
}


function toggleField2Deps(theField,visibleEnumIdTrigger,visibleDependency,fieldid) {
    // only for radios at this point
    if (theField == "radio")
    {
     var master = document.getElementById("field"+fieldid);
     masterValue = master.value
    }

    var lvals1 = visibleDependency.split(",");
    for ( i=0; i < lvals1.length; i++ )
    {
        var thisDependency =lvals1[i];
        toggleDeps(theField,thisDependency,masterValue,visibleEnumIdTrigger)
    }
}

function toggleField2DepsChoice(theField,visibleEnumIdTrigger1,visibleDependency1, visibleEnumIdTrigger2,visibleDependency2, fieldid) {
    // only for selects and radio's  at this point
    // if selected values is neither equal to visibleEnumIdTrigger1 nor visibleEnumIdTrigger2, hide values for visibleDependency1
    if (theField == "dropdown")
    {
        var master = document.getElementById("selectfield"+fieldid);
        if (!master) {
            master = document.getElementById("field"+fieldid);
         }
        masterValue = master[master.selectedIndex].value
    } else if (theField == "radio")
    {
         var master = document.getElementById("field"+fieldid);
         masterValue = master.value
    }
    var lvals1 = visibleDependency1.split(",");
    var lvals2 = visibleDependency2.split(",");
    if (masterValue == visibleEnumIdTrigger1) {
     // reveal the fields we want
        for ( i=0; i < lvals1.length; i++ )
        {
            var thisDependency =lvals1[i];
            var child = document.getElementById("field"+thisDependency);
            if (! child) {
                child = document.getElementById("tbl"+thisDependency);
            }
            child.style.display = "";
            child.className = "defaultCell";
        }
        // now hide the fields we don't want
        // var lvals1 = visibleDependency2.split(",");
        // first loop through the fields we want to see
        // if it doesn't match the field, hide it
        for (i = 0; i < lvals1.length; i++)
        {
            var keepDisplayed = lvals1[i];
            for (j = 0; j < lvals2.length; j++)
            {
                var thisDependency = lvals2[j];
                if (keepDisplayed != thisDependency) {
                    var child = document.getElementById("field" + thisDependency);
                    if (! child) {
                        child = document.getElementById("tbl" + thisDependency);
                    }
                    child.style.display = "none";
                    child.className = "defaultCell";
                }
            }
        }

    } else if (masterValue == visibleEnumIdTrigger2) {
    // reveal the fields we want
        for ( i=0; i < lvals2.length; i++ )
        {
            var thisDependency =lvals2[i];
            var child = document.getElementById("field"+thisDependency);
            if (! child) {
            child = document.getElementById("tbl"+thisDependency);
            }
            child.style.display = "";
            child.className = "defaultCell";
        }

        // now hide the fields we don't want
        // var lvals1 = visibleDependency2.split(",");
        // first loop through the fields we want to see
        // if it doesn't match the field, hide it
        for (i = 0; i < lvals2.length; i++)
        {
            var keepDisplayed = lvals2[i];
            for (j = 0; j < lvals1.length; j++)
            {
                var thisDependency = lvals1[j];
				if (keepDisplayed != thisDependency) {
                    var child = document.getElementById("field" + thisDependency);
                    if (! child) {
                        child = document.getElementById("tbl" + thisDependency);
                    }
					//if (typeof child !="undefined") {} {
					child.style.display = "none";
                	child.className = "defaultCell";
					//}
            	}
            }
        }

   } else {
        for ( i=0; i < lvals1.length; i++ )
        {
            var thisDependency =lvals1[i];
            var child = document.getElementById("field"+thisDependency);
            if (! child) {
             child = document.getElementById("tbl"+thisDependency);
            }
            child.style.display = "none";
            child.className = "defaultCell";
        }
        for ( i=0; i < lvals2.length; i++ )
        {
            var thisDependency =lvals2[i];
            var child = document.getElementById("field"+thisDependency);
            if (! child) {
                child = document.getElementById("tbl" + thisDependency);
            }
            child.style.display = "none";
            child.className = "defaultCell";
        }
   }
}

function toggleField2DepsChoiceRadio(theField,visibleEnumIdTrigger1,visibleDependency1, visibleEnumIdTrigger2,visibleDependency2, fieldid) {
    // only for selects at this point
    // if selected values is neither equal to visibleEnumIdTrigger1 nor visibleEnumIdTrigger2, hide values for visibleDependency1
    if (theField == "dropdown")
    {
     var master = document.getElementById("selectfield"+fieldid);
     if (!master) {
        master = document.getElementById("field"+fieldid);
     }
     masterValue = master[master.selectedIndex].value
    }

    if (masterValue == visibleEnumIdTrigger1) {
     // reveal the fields we want
        var lvals1 = visibleDependency1.split(",");
        for ( i=0; i < lvals1.length; i++ )
        {
            var thisDependency =lvals1[i];
            var child = document.getElementById("field"+thisDependency);
            if (! child) {
                child = document.getElementById("tbl" + thisDependency);
            }
            child.style.display = (child.style.display == "none")?"":"none";
            child.className = "defaultCell";
        }
        // now hide the fields we don't want
        var lvals1 = visibleDependency2.split(",");
        for ( i=0; i < lvals1.length; i++ )
        {
            var thisDependency =lvals1[i];
            var child = document.getElementById("field"+thisDependency);
            if (! child) {
                child = document.getElementById("tbl"+thisDependency);
            }
            child.style.display = "none";
            child.className = "defaultCell";
        }
    } else if (masterValue == visibleEnumIdTrigger2) {
    // reveal the fields we want
        var lvals1 = visibleDependency2.split(",");
        for ( i=0; i < lvals1.length; i++ )
        {
            var thisDependency =lvals1[i];
            var child = document.getElementById("field"+thisDependency);
            if (! child) {
                child = document.getElementById("tbl"+thisDependency);
            }
            child.style.display = (child.style.display == "none")?"":"none";
            child.className = "defaultCell";
        }
     // now hide the fields we don't want
     var lvals1 = visibleDependency1.split(",");
        for ( i=0; i < lvals1.length; i++ )
        {
            var thisDependency =lvals1[i];
            var child = document.getElementById("field"+thisDependency);
            if (! child) {
                child = document.getElementById("tbl"+thisDependency);
            }
            child.style.display = "none";
            child.className = "defaultCell";
        }
   } else {
        var lvals1 = visibleDependency1.split(",");
        for ( i=0; i < lvals1.length; i++ )
        {
            var thisDependency =lvals1[i];
            var child = document.getElementById("field"+thisDependency);
            if (! child) {
                child = document.getElementById("tbl"+thisDependency);
            }
            child.style.display = "none";
            child.className = "defaultCell";
        }
        var lvals1 = visibleDependency2.split(",");
        for ( i=0; i < lvals1.length; i++ )
        {
            var thisDependency =lvals1[i];
            var child = document.getElementById("field"+thisDependency);
            if (! child) {
                child = document.getElementById("tbl"+thisDependency);
            }
            child.style.display = "none";
            child.className = "defaultCell";
        }
   }
}

function toggleField3DepsChoice(theField,visibleEnumIdTrigger1,visibleDependency1, visibleEnumIdTrigger2,visibleDependency2, visibleEnumIdTrigger3,visibleDependency3, fieldid) {
    // only for selects and radio's  at this point
    // if selected values is neither equal to visibleEnumIdTrigger1 nor visibleEnumIdTrigger2, hide values for visibleDependency1
    if (theField == "dropdown")
    {
        var master = document.getElementById("selectfield"+fieldid);
        if (!master) {
            master = document.getElementById("field"+fieldid);
         }
        masterValue = master[master.selectedIndex].value
    } else if (theField == "radio")
    {
         var master = document.getElementById("field"+fieldid);
         masterValue = master.value
    }

    if (masterValue == visibleEnumIdTrigger1) {
     // reveal the fields we want
        var lvals1 = visibleDependency1.split(",");
        revealDepFields(lvals1)
        // now hide the fields we don't want
        var hide = visibleDependency2.split(",");
        hideDepFields(hide)
        hide = visibleDependency3.split(",");
        hideDepFields(hide)
    } else if (masterValue == visibleEnumIdTrigger2) {
        // reveal the fields we want
        lvals1 = visibleDependency2.split(",");
        revealDepFields(lvals1)
        // now hide the fields we don't want
        hide = visibleDependency1.split(",");
        hideDepFields(hide);
        hide = visibleDependency3.split(",");
        hideDepFields(hide);
   }  else if (masterValue == visibleEnumIdTrigger3) {
    // reveal the fields we want
        lvals1 = visibleDependency3.split(",");
        revealDepFields(lvals1)
        // now hide the fields we don't want
        lvals = visibleDependency1.split(",");
        hideDepFields(lvals);
        lvals = visibleDependency2.split(",");
        hideDepFields(lvals);
   } else {
        var lvals1 = visibleDependency1.split(",");
        for ( i=0; i < lvals1.length; i++ )
        {
            var thisDependency =lvals1[i];
            var child = document.getElementById("field"+thisDependency);
            if (! child) {
             child = document.getElementById("tbl"+thisDependency);
            }
            child.style.display = "none";
            child.className = "defaultCell";
        }
        var lvals1 = visibleDependency2.split(",");
        for ( i=0; i < lvals1.length; i++ )
        {
            var thisDependency =lvals1[i];
            var child = document.getElementById("field"+thisDependency);
            if (! child) {
             child = document.getElementById("tbl"+thisDependency);
            }
            child.style.display = "none";
            child.className = "defaultCell";
        }
   }
}

function hideDepFields(lvals1) {
    for (i = 0; i < lvals1.length; i++)
    {
        var thisDependency = lvals1[i];
        var child = document.getElementById("field" + thisDependency);
        if (! child) {
            child = document.getElementById("tbl" + thisDependency);
        }
        child.style.display = "none";
        child.className = "defaultCell";
    }
}

function revealDepFields(lvals1) {
    for (i = 0; i < lvals1.length; i++)
    {
        var thisDependency = lvals1[i];
        var child = document.getElementById("field" + thisDependency);
        if (! child) {
            child = document.getElementById("tbl" + thisDependency);
        }
        child.style.display = "";
        child.className = "defaultCell";
    }
}

function toggleFieldSafeMotherhood(theField,visibleEnumIdTrigger1,visibleDependency1, visibleEnumIdTrigger2,visibleDependency2, fieldid) {
    // special version for Safe Motherhood...
    // only for selects at this point
    // if selected values is neither equal to visibleEnumIdTrigger1 nor visibleEnumIdTrigger2, hide values for visibleDependency1
    if (theField == "dropdown")
    {
     var master = document.getElementById("selectfield"+fieldid);
     if (!master) {
        master = document.getElementById("field"+fieldid);
     }
     masterValue = master[master.selectedIndex].value
    }
    if (masterValue == visibleEnumIdTrigger1) {
     // reveal the fields we want
        var lvals1 = visibleDependency1.split(",");
        for ( i=0; i < lvals1.length; i++ )
        {
            var thisDependency =lvals1[i];
            var child = document.getElementById("field"+thisDependency);
            if (! child) {
                child = document.getElementById("tbl"+thisDependency);
            }
            child.style.display = (child.style.display == "none")?"":"none";
            child.className = "defaultCell";
        }
        // now hide the fields we don't want
        var lvals1 = visibleDependency2.split(",");
        for ( i=0; i < lvals1.length; i++ )
        {
            var thisDependency =lvals1[i];
            var child = document.getElementById("field"+thisDependency);
            if (! child) {
                child = document.getElementById("tbl"+thisDependency);
            }
            child.style.display = "none";
            child.className = "defaultCell";
        }
    } else if (masterValue == visibleEnumIdTrigger2) {
    // reveal the fields we want
        var lvals1 = visibleDependency2.split(",");
        for ( i=0; i < lvals1.length; i++ )
        {
            var thisDependency =lvals1[i];
            var child = document.getElementById("field"+thisDependency);
            if (! child) {
                child = document.getElementById("tbl"+thisDependency);
            }
            child.style.display = (child.style.display == "none")?"":"none";
            child.className = "defaultCell";
        }
     // now hide the fields we don't want
     var lvals1 = visibleDependency1.split(",");
        for ( i=0; i < lvals1.length; i++ )
        {
            var thisDependency =lvals1[i];
            var child = document.getElementById("field"+thisDependency);
            if (! child) {
                child = document.getElementById("tbl"+thisDependency);
            }
            child.style.display = "none";
            child.className = "defaultCell";
        }
   } else if (masterValue == 2823) {
     // reveal the fields we want
        var lvals1 = visibleDependency1.split(",");
        for ( i=0; i < lvals1.length; i++ )
        {
            var thisDependency =lvals1[i];
            var child = document.getElementById("field"+thisDependency);
            if (! child) {
                child = document.getElementById("tbl"+thisDependency);
            }
            child.style.display = (child.style.display == "none")?"":"none";
            child.className = "defaultCell";
        }
        // now hide the fields we don't want
        var lvals1 = visibleDependency2.split(",");
        for ( i=0; i < lvals1.length; i++ )
        {
            var thisDependency =lvals1[i];
            var child = document.getElementById("field"+thisDependency);
            if (! child) {
                child = document.getElementById("tbl"+thisDependency);
            }
            child.style.display = "none";
            child.className = "defaultCell";
        }
    } else {
        var lvals1 = visibleDependency1.split(",");
        for ( i=0; i < lvals1.length; i++ )
        {
            var thisDependency =lvals1[i];
            // toggleDeps2(theField,thisDependency,masterValue,visibleEnumIdTrigger1)
            var child = document.getElementById("field"+thisDependency);
            if (! child) {
                child = document.getElementById("tbl"+thisDependency);
            }
            child.style.display = "none";
            child.className = "defaultCell";
        }
        var lvals1 = visibleDependency2.split(",");
        for ( i=0; i < lvals1.length; i++ )
        {
            var thisDependency =lvals1[i];
            var child = document.getElementById("field"+thisDependency);
            if (! child) {
                child = document.getElementById("tbl"+thisDependency);
            }
            child.style.display = "none";
            child.className = "defaultCell";
        }
   }
}

function toggleDeps(theField,thisDependency,masterValue,visibleEnumIdTrigger) {
    if (theField == "link")
    {
        var child = document.getElementById("tbl"+thisDependency);
        var parent =child.parentNode;
        child.style.display = (child.style.display == "none")?"":"none";
        child.className = "defaultCell";
    }
    else {
         var child = document.getElementById("field"+thisDependency);
            if (! child) {
                child = document.getElementById("tbl"+thisDependency);
            }

        if (masterValue == visibleEnumIdTrigger)
        {
            child.style.display = (child.style.display == "none")?"":"none";
            child.className = "defaultCell";
        }
        else
        {
            child.style.display = "none";
            child.className = "defaultCell";
        }
    }
}

function toggleDeps2(theField,thisDependency,masterValue,visibleEnumIdTrigger) {
    if (theField == "link")
    {
        var child = document.getElementById("tbl"+thisDependency);
        var parent =child.parentNode;
        child.style.display = (child.style.display == "none")?"":"none";
        child.className = "defaultCell";
    }
    else {
            var child = document.getElementById("field"+thisDependency);
            if (! child) {
                child = document.getElementById("tbl"+thisDependency);
            }
            child.style.display = (child.style.display == "none")?"":"none";
            child.className = "defaultCell";
    }
}

// checks if items are hidden. Reveals the first hidden field.
function revealItem(visibleDependencies) {
    var lvals = visibleDependencies.split(",");
    for ( i=0; i < lvals.length; i++ )
    {
        var thisDependency =lvals[i];
        var child = document.getElementById("field"+thisDependency);
        if (! child) {
        var child = document.getElementById("tbl"+thisDependency);
        }

        if (child.style.display == "none") {
        child.style.display = "";
        child.className = "defaultCell";
        break;
        }
    }
}

function toggle3divs(theDiv,div2,div3){
    var el = document.getElementById(theDiv);
    var el2 = document.getElementById(div2);
    var el3 = document.getElementById(div3);
    if ( el != null )
    {
    	el.style.display = "";
    	el2.style.display = "none";
    	el3.style.display = "none";
    }
}


function hide_patient_summary(div1,div2,div3,div4,div5,div6,div7,div8,div9,div10, div11) {
	var el = document.getElementById(div1);
    var el2 = document.getElementById(div2);
    var el3 = document.getElementById(div3);
    var el4 = document.getElementById(div4);
    var el5 = document.getElementById(div5);
    var el6 = document.getElementById(div6);
    var el7 = document.getElementById(div7);
    var el8 = document.getElementById(div8);
    var el9 = document.getElementById(div9);
    var el10 = document.getElementById(div10);
    var el11 = document.getElementById(div11);
    el2.style.display = (el2.style.display == "none")?"":"none";
    el3.style.display = (el3.style.display == "none")?"":"none";
    el4.style.display = (el4.style.display == "none")?"":"none";
    el5.style.display = (el5.style.display == "none")?"":"none";
    el6.style.display = (el6.style.display == "none")?"":"none";
    el7.style.display = (el7.style.display == "none")?"":"none";
    el8.style.display = (el8.style.display == "none")?"":"none";
    el9.style.display = (el9.style.display == "none")?"":"none";
    el10.style.display = (el10.style.display == "none")?"":"none";
    el11.style.display = (el11.style.display == "none")?"":"none";
}

function toggle_patient_summary(div1){
    var eToggle = document.getElementById(div1);
    var el2 = document.getElementById('chartSum');
    var el3 = document.getElementById('drugSum');
    var el4 = document.getElementById('labSum');
    var el5 = document.getElementById('histSum');
    var el6 = document.getElementById('anteSum');
    var el7 = document.getElementById('intraSum');
    var el8 = document.getElementById('postSum');
    var el9 = document.getElementById('nicuSum');
    var el10 = document.getElementById('gynSum');

    if ( eToggle != null )
    {
    	eToggle.style.display = "";
        if (eToggle != el2) {el2.style.display = "none";}
    	if (eToggle != el3) {el3.style.display = "none";}
    	if (eToggle != el4) {el4.style.display = "none";}
    	if (eToggle != el5) {el5.style.display = "none";}
    	if (eToggle != el6) {el6.style.display = "none";}
    	if (eToggle != el7) {el7.style.display = "none";}
    	if (eToggle != el8) {el8.style.display = "none";}
    	if (eToggle != el9) {el9.style.display = "none";}
    	if (eToggle != el10) {el10.style.display = "none";}
    }
}

function toggleProblemForms(div1, div2) {
    var el = document.getElementById(div1);
    var el2 = document.getElementById(div2);
    if (el != "visible")
    {
        el.style.visibility = "visible";
        el.style.display = "";
        el2.style.visibility = "hidden";
        el2.style.display = "none";
    }
}


function hideDiv(div1) {
	var el = document.getElementById(div1);
    el.style.display = "none";
    // need the next line for lab test
    el.style.visibility = "hidden"
}


// used for the position diagram, form 15
function highlightImg(imageId) {
    //first clear out any current borders
    for ( i=1; i < 9; i++ ) {
    var img = "pos" +i
    document.getElementById(img).style.border='transparent';
    }
    document.getElementById(imageId).style.border='1px solid gray';
}

var timer = null
function startClock()
{
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    minutes=((minutes < 10) ? "0" : "") + minutes;
    var seconds = time.getSeconds();
    seconds=((seconds < 10) ? "0" : "") + seconds;
    //var clock = hours + ":" + minutes + ":" + seconds;
    //document.getElementById("pcTime").value = clock ;
    timer = setTimeout("startClock()",1000);
}

function savePCtime()
{
    var servertime = new Date();
    var pcTimeMillis = servertime.getTime();
    document.getElementById("pcTime").value = pcTimeMillis;
}

function toggleStyle(div,divstyle) {
var thediv = document.getElementById(div);
thediv.className=divstyle;
}

function toggleStyleCookie(div,divstyle) {
var thediv = document.getElementById(div);
thediv.className=divstyle;
createCookie(div, divstyle);
}

// kudos to http://plonetarium.objectis.net/howto/hidecolumns/document_view

function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else expires = "";
  document.cookie = name+"="+escape(value)+expires+"; path=/;";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return unescape(c.substring(nameEQ.length,c.length));
  }
  return null;
}

function setStyle(div) {
var style = readCookie(div);
    if (style != null) {
    toggleStyle(div,style)
    }
}

function getLabel(nameID) {
	var whatTag;
	var ie4 = (document.all && !document.getElementById)? true : false;
	var ns6 = (document.getElementById)? true : false;
	if (ie4) {whatTag = "document.all[\"" + nameID + "\"]";}
	if (ns6) {whatTag = "document.getElementById(\"" + nameID + "\")";}
	return whatTag;
}

function processSearch(search) {
    var searchInput = document.getElementById("first_surname");
    searchInput.value = search
    document.searchForm.submit();
    return false
}

function navigateSearch(maxRows, startRow) {
    var maxRowsInput = document.getElementById("max_rows");
    maxRowsInput.value = maxRows
    var startRowInput = document.getElementById("start_row");
    startRowInput.value = startRow
    document.searchForm.submit();
    return false
}

function calcPatientId() {
    district = document.getElementById("district").value
    patientid = document.getElementById("patientid").value
    site = document.getElementById("site").value
    subsite = document.getElementById("subsite").value
    checksum = document.getElementById("checksum").value
    if (checksum == "") {
        if (patientid !="") {
            checksum = createChecksum(patientid);
            }
       }
    if ((trim(district).length == 0) || (trim(patientid).length == 0) || (trim(site).length == 0) || (trim(checksum).length == 0)) {
        newId = district + addDash(district) + site + subsite + addDash(site) + patientid + addDash(patientid) + checksum;
        inputnewId = "";
    } else {
       newId = district + addDash(district) + site + subsite + addDash(site) + patientid + addDash(patientid) + checksum;
       inputnewId = district + addDash(district) + site + subsite + addDash(site) + patientid + addDash(patientid) + checksum;
    }

    displayname = "spanpatient";
    inputname = "patient";
    sitename = "siteId";
    display = eval(getLabel(displayname));
    input = eval(getLabel(inputname));
    siteId = eval(getLabel(sitename));
    display.innerHTML = "New ID: <strong>" + newId + "</strong>";
    input.value = inputnewId;
    siteId.value = site;
}

function addDash(value) {
    if (trim(value).length > 0) {
        return "-"
    }  else {
    return "";
    }
}

function addPlus(value) {
    if (trim(value).length > 0) {
        return "+"
    }  else {
    return "";
    }
}

function concatNRC(field) {
    newId = document.getElementById("nrc1").value + "/" + document.getElementById("nrc2").value + "/" + document.getElementById("nrc3").value;
    displayname = "span"+field;
    inputname = "input"+field;
    display = eval(getLabel(displayname));
    input = eval(getLabel(inputname));
    display.innerHTML = newId;
    input.value = newId;
}

function calcDOB(field) {
    mysql = document.getElementById("year").value + "-" + document.getElementById("month").value + "-" + document.getElementById("day").value;
    nice = document.getElementById("day").value + "/" + document.getElementById("month").value + "/" + document.getElementById("year").value;

    displayname = "span"+field;
    inputname = "field"+field;
    display = eval(getLabel(displayname));
    input = eval(getLabel(inputname));
        if ((document.getElementById("year").value=='') || (document.getElementById("month").value=='') || (document.getElementById("day").value=='')) {
            display.innerHTML = "";
            input.value = "";
        } else {
            if (nice == "//") {
            display.innerHTML = "";
            input.value = "";
            }
            else
            {
                display.innerHTML = nice;
                input.value = mysql;
            }
        }
}



/**
* User enters id and system checks if it is available.
**/
function checkPatientID(field,message,focus_field,testType) {
    district = document.getElementById("district").value
    patientid = document.getElementById("patientid").value
    siteField = document.getElementById("site")
	site = siteField.value;
    subsite = document.getElementById("subsite").value
    siteId = site + subsite;
    checksum = document.getElementById("checksum").value
    if (checksum == "") {
        if (patientid !="") {
            checksum = createChecksum(patientid);
            }
    }
    reqField = eval(getLabel(field));
    value = reqField.value;
    if ((trim(district).length == 0) || (trim(patientid).length <5) || (trim(site).length == 0) || (trim(checksum).length == 0)) {
        alert(message);
    } else if (isNaN(patientid)) {
		alert("Enter a 5 digit number for the id.");
		document.getElementById('spanpatient').innerHTML = "";
        document.getElementById('patient').value = "";
        document.getElementById('patientid').value = "";
        document.getElementById('checksum').value = "";
	} else {
        PatientId.checkPatientId(reply1,document.getElementById(field).value, siteId, district, patientid);
    }
}

function setPatientID(field,message,focus_field) {
    district = document.getElementById("district").value
    site = document.getElementById("site").value
    subsite = document.getElementById("subsite").value
    siteId = site + subsite;
    checksum = document.getElementById("checksum").value
    reqField = eval(getLabel(field));
    value = reqField.value;
    if ((trim(district).length == 0) || (trim(site).length == 0)) {
        alert(message);
    } else {
    	PatientId.setPatientId(reply2,district, siteId);
    }
}

/**
 * Used in DWR widget that provides patient id assignment capability.
 * The site can changed by another widget; therefore, we're grabbing the current value on the page.
 */
function copySite() {
	siteField = document.getElementById("site");
	widgetSite = document.getElementById("widget1511");
    valueSite = document.getElementById("value1511");
	var site;
	if (valueSite.style.visibility == "hidden") {
		site = left(widgetSite.innerHTML,2);
		//alert("widgetSite site: |" + site);
	} else {
		site = left(valueSite.innerHTML,2);
		//alert("valueSite site: " + site);
	}
	siteField.value = site;
}

function checkPassedField() {
    d1 = document.getElementById("d1").innerHTML;
    patient = eval(getLabel("patient"));
    test = d1.substr(0, 7);
    if (test == "Success") {
    } else {
        patient.value = "";
    }
}

function checkNewbornSubmitted(message) {
    var sequence = document.getElementById("sequence").value;
    // alert("trim(sequence)length " + trim(sequence).length + " sequence: " + sequence);
    if (trim(sequence) == 0) {
        alert(message);
        var child = document.getElementById("tbl99999999");
        var parent = child.parentNode;
        var buttonEl = "plusminusNewborn";
        var button = document.getElementById(buttonEl);
        if (button) {
            button.src = images[1].src;
        }
        child.style.display = "";
        child.className = "defaultCell";
        return false;
    }
}

/**
is_dwr is set to 0 when being used by the main Delivery Summary submit form to test if that section has been submitted.
birthtime is not longer checked, since the birthtime may not be available, such as when the infant is delivered at home.
 **/
function checkNewborn(field,message,focus_field) {
    sequence = document.getElementById("sequence").value
    birthtime = document.getElementById("field99999").value
    newbornDateField = document.getElementById("newbornDateField").value
    patientId = document.getElementById("patientId").value
    weight = document.getElementById("weight").value
    var isValid = true;
    isValid = simpleValidateFloat(weight, 0,6);
    if (isValid == false) {
        alert("Please enter a value between 0 and 6 for weight.");
        return null;
    }
	if (birthtime != "") {
		isValid = simpleValidateTime(birthtime);
		if (isValid == false) {
        alert("Please select hours and minutes for Time of Birth. If you do not wish to record Time of Birth, set each dropdown to '--'.");
        return null;
    }
	}
    var sexRadio = document.getElementsByName("sex");
    if (sexRadio[0].checked == true) {
        sex = sexRadio[0].value;
    } else if (sexRadio[1].checked == true){
        sex = sexRadio[1].value;
    } else {
        sex = "";
    }
    user = document.getElementById("user").value
    siteId = document.getElementById("siteId").value
    pregnancyId = document.getElementById("pregnancyId").value
    if ((trim(newbornDateField).length == 0) || (trim(sex).length == 0)) {
        // alert(message + " trim(newbornDateField).length: " + trim(newbornDateField).length + " sex: " + sex + " weight: " +weight );
        alert(message);
        return false;
    } else {
        var saveButton = document.getElementById("saveButton");
        if (saveButton.value == "Enter") {
            saveButton.value = "Saving...";
            Newborn.createNewborn(fillForm, newbornDateField, birthtime, sequence, patientId, sex, user, siteId, pregnancyId, weight);
        } else {
            alert("Please wait for the server to process the infant. If this takes too long, please refresh the page.")
        }

        // return true;
    }
}

function deleteNewborn(infantId, motherId, pregnancyId) {
    var deleteYes = confirm("Are you sure you want to delete this newborn?");
    if (deleteYes) {
         Newborn.deleteNewborn(fillForm, infantId, motherId, pregnancyId);
    }
}

function deleteFetus(examSequence, encounterId, patientId, pregnancyId) {
    var deleteYes = confirm("Are you sure you want to delete this fetus evaluation?");
    if (deleteYes) {
         Fetus.deleteFetus(fillFetusForm, examSequence, encounterId, patientId, pregnancyId);
    }
}

/**
 * For Newborn create form
 * @param {Object} sequence
 */
function fillForm(sequence)
{
    var dvals = sequence.split("|");
    var seqNum = dvals[0];
    var table = dvals[1];
    var lastBirthTime = dvals[2];
    if (seqNum.substring(0,6) == "Error:") {
        document.getElementById('newbornResults').innerHTML = seqNum;
		alert(seqNum);
    } else {
        if (lastBirthTime != "") {
        seqNum++;
        DWRUtil.setValue("sequence", seqNum);
        document.getElementById('newbornResults').innerHTML = table;
        var lastBirthTimeField = document.getElementById('field438');
        if (lastBirthTimeField) {
            tVals = lastBirthTime.split(":");
            var hours = tVals[0];
            var minutes = tVals[1];
            var hoursField = document.getElementById('hour438');
            var minutesField = document.getElementById('minute438');
            lastBirthTimeField.value = lastBirthTime + ":00";
            hoursField.value = hours;
            minutesField.value = minutes;
        }
    }
    var saveButton = document.getElementById("saveButton");
    saveButton.value = "Enter";
    var weight = document.getElementById("weight")
    weight.value = "";
    var sexRadio = document.getElementsByName("sex");
    sexRadio[0].checked = false;
    sexRadio[1].checked = false;
    /*var birthtime = document.getElementById("field99999")
    birthtime.value = "";*/
    clearTimeField("99999");
    }

}

/**
 * For Ultrasound create Fetus form
 * @param {Object} sequence
 */
function fillFetusForm(sequence)
{
    var dvals = sequence.split("|");
    var seqNum = dvals[0];
    var table = dvals[1];
    var lastBirthTime = dvals[2];
    if (seqNum.substring(0,6) == "Error:") {
        document.getElementById('newbornResults').innerHTML = seqNum;
    } else {
        if (lastBirthTime != "") {
        seqNum++;
        DWRUtil.setValue("sequence", seqNum);
        document.getElementById('newbornResults').innerHTML = table;
    }
    var saveButton = document.getElementById("saveButton");
    saveButton.value = "Enter";
	// reset fields
    var condition = document.getElementById("condition")
	condition.selectedIndex = 0;
    var lie = document.getElementById("lie")
    lie.selectedIndex = 0;
    var selectfield314 = document.getElementById("selectfield314")
    selectfield314.selectedIndex = 0;

	var bpd = document.getElementById("bpd")
    bpd.value = "";
	var femur = document.getElementById("femur")
    femur.value = "";
	var circumference = document.getElementById("circumference")
    circumference.value = "";
	var weight = document.getElementById("weight")
    weight.value = "";
    }

}

function checkFetus(field,message,focus_field) {
    var examSequence = document.getElementById("examSequence").value
    var sequence = document.getElementById("sequence").value
    var patientId = document.getElementById("patientId").value
    var user = document.getElementById("user").value
    var siteId = document.getElementById("siteId").value
    var pregnancyId = document.getElementById("pregnancyId").value

    var condition = document.getElementById("condition");
    var conditionValue = condition[condition.selectedIndex].value
    var lie = document.getElementById("lie");
    var lieValue = lie[lie.selectedIndex].value
    var presentation = document.getElementById("selectfield314");
    var presentationValue = presentation[presentation.selectedIndex].value
    var presentationOther = document.getElementById("field1508").value;
    var bpd = document.getElementById("bpd").value;
    var femur = document.getElementById("femur").value;
    var circumference = document.getElementById("circumference").value;
    var weight = document.getElementById("weight").value;

    Fetus.createFetus(fillFetusForm, examSequence, conditionValue, lieValue, presentationValue, presentationOther, bpd, femur, circumference, weight, sequence, patientId, user, siteId, pregnancyId);
}



function toUnicode(elmnt,content)
{
if (content.length==elmnt.maxLength)
	{
	next=elmnt.tabIndex
	if (next < document.forms[0].elements.length)
		{
		document.forms[0].elements[next].focus()
		}
	}
}

function splitDate(date)
{
var dvals = date.split("-");
var year = dvals[0];
var month =dvals[1];
var day =dvals[2];
return day + "/" + month + "/" + year;
}

function left(str, n){
	if (n <= 0)
	    return "";
	else if (n > String(str).length)
	    return str;
	else
	    return String(str).substring(0,n);
}
function right(str, n){
    if (n <= 0)
       return "";
    else if (n > String(str).length)
       return str;
    else {
       var iLen = String(str).length;
       return String(str).substring(iLen, iLen - n);
    }
}

/**
 * Kudos:
 * http://www.andrewbarker.com/home/htmDocs/TruncateStringsWithEllipsis
 * @param {Object} x
 * @param {Object} maxlen
 */
function ellipsis(x, maxlen)
{
/* given a string and a maximum length for the string, this routine
returns the same string truncated to the maximum length. In addition,
if the string was truncated, "..." is added to the end, again not to
exceed the maximum length.

E.g. ellipsis("abcdef", 4) = "a..."
ellipsis("abcdef", 6) = "abcdef"
*/

if (x.length <= maxlen)
return x
else if (maxlen < 4)
return x.substring(0, maxlen) // no room for ellipsis
else return x.substring(0, maxlen-3) + "...";
}

function toggleDescent() {
for(var i=0;i < 13;i++) {
	var cervixRow = document.getElementById('cervixRow' + i);
	var descentRow = document.getElementById('descentRow' + i);
    cervixRow.style.display = (cervixRow.style.display == "none")?"":"none";
    descentRow.style.display = (descentRow.style.display == "none")?"":"none";
    }
}

function toggleBP(reveal, hide1, hide2) {
for(var i=0;i < 15;i++) {
	var revealRow = document.getElementById(reveal + i);
	var hide1Row = document.getElementById(hide1 + i);
	var hide2Row = document.getElementById(hide2 + i);
    revealRow.style.display = "";
    hide1Row.style.display = "none";
    hide2Row.style.display = "none";
    }
}

function togglePartoSection(class1, class1num, class2, class2num, class3, class3num, class4, class4num, class5, class5num, class6, class6num) {
    sectionToggleDiv = document.getElementById(class1 + "Toggle");

    if (sectionToggleDiv) {
        if (sectionToggleDiv.innerHTML == "&nbsp;-&nbsp;") {
            sectionToggleDiv.innerHTML = "&nbsp;+&nbsp;"
        } else {
            sectionToggleDiv.innerHTML = "&nbsp;-&nbsp;"
        }
    }
    // first sort out some of the fields that have their own toggles - get them to a default state
    if (class1 == "cervixRow") {
        for (var i = 0; i < class1num; i++) {
            var revealRow = document.getElementById(class1 + i);
            var revealRow2 = document.getElementById(class2 + i);
            // if descentRow was already on, we want both to be invible
            if ((revealRow.style.display == "none") & (revealRow2.style.display == "")) {
                revealRow.style.display = "none";
                revealRow2.style.display = "none";
            } else
            // if cervix row is visible and descentRow is invisible, make cervix row invisible
                if ((revealRow.style.display == "") & (revealRow2.style.display == "none")) {
                    revealRow.style.display = "none";
                } else
                // if cervix row is invisible and descentRow is invisible, make cervix row visible
                    if ((revealRow.style.display == "none") & (revealRow2.style.display == "none")) {
                        revealRow.style.display = "";
                    }
        }

    } else if (class1 == "systolicRow") {
        for (var i = 0; i < class1num; i++) {
            var revealRow = document.getElementById(class1 + i);
            var revealRow2 = document.getElementById(class2 + i);
            var revealRow3 = document.getElementById(class3 + i);
            if (revealRow.style.display == "") {
                revealRow.style.display = "none";
            } else if (revealRow2.style.display == "") {
                revealRow2.style.display = "none";
            } else if (revealRow3.style.display == "") {
                revealRow3.style.display = "none";
            } else if (revealRow.style.display == "none") {
                revealRow.style.display = "";
            }
        }

        // normal stuff
    } else {

        if (class1 != "") {
            for (var i = 0; i < class1num; i++) {
                // alert("class1: " + class1 + " i" + i);
                var revealRow = document.getElementById(class1 + i);
                revealRow.style.display = (revealRow.style.display == "none")?"":"none";
            }
        }

        if (class2 != "") {
            for (var i = 0; i < class2num; i++) {
                var revealRow2 = document.getElementById(class2 + i);
                if (revealRow.style.display == "") {
                    revealRow2.style.display = "";
                } else {
                    revealRow2.style.display = "none";
                }
            }
        }

        if (class3 != "") {
            for (var i = 0; i < class3num; i++) {
                var revealRow3 = document.getElementById(class3 + i);
                if (revealRow.style.display == "") {
                    revealRow3.style.display = "";
                } else {
                    revealRow3.style.display = "none";
                }
            }
        }

        if (class4 != "") {
            for (var i = 0; i < class4num; i++) {
                var revealRow4 = document.getElementById(class4 + i);
                if (revealRow.style.display == "") {
                    revealRow4.style.display = "";
                } else {
                    revealRow4.style.display = "none";
                }
            }
        }

        if (class5 != "") {
            for (var i = 0; i < class5num; i++) {
                var revealRow5 = document.getElementById(class5 + i);
                if (revealRow.style.display == "") {
                    revealRow5.style.display = "";
                } else {
                    revealRow5.style.display = "none";
                }
            }
        }
        if (class6 != "") {
            for (var i = 0; i < class6num; i++) {
                var revealRow6 = document.getElementById(class6 + i);
                if (revealRow.style.display == "") {
                    revealRow6.style.display = "";
                } else {
                    revealRow6.style.display = "none";
                }
            }
        }
    }
}

function Mod(a, b) {
    return a - Math.floor(a / b) * b;
}

function Div(a, b) {
    return Math.floor(a / b);
}

function calcMod(s,n)
{
sum = s % n;
if (sum < 0) {sum += n;};
return sum;
}

function multMod(a,b,n)
{
prod = (a * b) % n;
if (prod < 0) {prod += n;};
return prod;

}

function createChecksum(data) {
var sumData = new Number(data.substring(0,1)) + new Number(data.substring(1,2)) + new Number(data.substring(2,3)) + new Number(data.substring(3,4)) + new Number(data.substring(4,5));
ck = calcMod(sumData,10);
return ck
}

function insertAgeCalc(ageField, day, month, year) {
    var ageFieldElement = document.getElementById(ageField);
    if (ageFieldElement) {
        dayString = new String(day);
        if (dayString.charAt(0) == "0") {
            dayString = dayString.substring(0, 1);
        }
        monthString = new String(month);
        if (monthString.charAt(0) == "0") {
            monthString = monthString.substring(1, 2);
        }
        var age = calcAge(dayString, monthString, year);
        ageFieldElement.value = age;
    }
}

// credit for age calc:
// http://www.faqts.com/knowledge_base/view.phtml/aid/1553
function makeDaysOfMonth(){
  var i = 0;
  this[i++] = 0; // dummy
  this[i++] = 31;
  this[i++] = 29;
  this[i++] = 31;
  this[i++] = 30;
  this[i++] = 31;
  this[i++] = 30;
  this[i++] = 31;
  this[i++] = 31;
  this[i++] = 30;
  this[i++] = 31;
  this[i++] = 30;
  this[i  ] = 31;
  this.length = i;
}

function calcAge(dd, mm, yy){

  var t, mon, day, year, DD, MM, YY, age;
  var MTB = new makeDaysOfMonth();
  YY   = parseInt(yy);	// year of birth (4 digits)
  MM   = parseInt(mm);	// month of birth (1-12)
  DD   = parseInt(dd);	// date of birth (1-31)
  if (MTB[MM] < DD || DD < 1) return -1;
  t    = new Date();	// get current date
  year = t.getFullYear();	// get year of current
  mon  = t.getMonth() + 1;	// get month of current
  day  = t.getDate();	// get date of current
  if (MM == 2 && DD == 29){	// check leap year
    if (!(((YY % 4 == 0) && (YY % 100 != 0)) || (YY % 400 == 0))){
      alert("The year " +YY+ " ends at 28th of "+MM+" month\nPlease check the date.");
      return -1;
    }
  }
  age = year - YY;
  if ((MM > mon) || (MM == mon && day < DD)) age --;

  return age;
}

function calcTime(fieldId) {
    var hourField = document.getElementById("hour" + fieldId);
    var hourValue = hourField[hourField.selectedIndex].value
    var minuteField = document.getElementById("minute" + fieldId);
    var minuteValue = minuteField[minuteField.selectedIndex].value
    var timeField = document.getElementById("field" + fieldId);
    if ((hourValue == '' )) {
        alert("Please select a value for hours.")
		var timeValue = hourValue + ":" + minuteValue + ":00"
        timeField.value = timeValue;
    } else if ((hourValue != '' ) && (minuteValue != '' )) {
        alert("Please select a value for hours.")
		var timeValue = hourValue + ":" + minuteValue + ":00"
        timeField.value = timeValue;
    } else {
        var timeValue = hourValue + ":" + minuteValue + ":00"
        timeField.value = timeValue;
    }
}

function setTimeField(fieldId)
{
    var time = new Date();
    var pcTimeMillis = time.getTime();
    var hours = time.getHours();
    hours=((hours < 10) ? "0" : "") + hours;
    var minutes = time.getMinutes();
    minutes=((minutes < 10) ? "0" : "") + minutes;
    var seconds = time.getSeconds();
    seconds=((seconds < 10) ? "0" : "") + seconds;
    var clock = hours + ":" + minutes + ":" + seconds;
    var hourField = document.getElementById("hour"+fieldId);
    hourField.value = hours;
    var minuteField = document.getElementById("minute"+fieldId);
    minuteField.value = minutes;
    document.getElementById('field' + fieldId).value = clock;
}

function clearTimeField(fieldId)
{
    var hourField = document.getElementById("hour"+fieldId);
    hourField.value = "";
    var minuteField = document.getElementById("minute"+fieldId);
    minuteField.value = "";
    document.getElementById('field' + fieldId).value = "";
}


function copyTime(inputField, serverTime)
{
    var time = new Date();
    var pcTimeMillis = time.getTime();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    minutes=((minutes < 10) ? "0" : "") + minutes;
    var seconds = time.getSeconds();
    seconds=((seconds < 10) ? "0" : "") + seconds;
    var clock = hours + ":" + minutes + ":" + seconds;
    document.getElementById(inputField).value = clock;
}

function validateBP() {
    var systolic = document.getElementById("selectfield224");
    var diastolic = document.getElementById("selectfield225");
    var systolicItem = systolic[systolic.selectedIndex].text;
    var diastolicItem = diastolic[diastolic.selectedIndex].text;
    var systolicTest = systolicItem;
    var diastolicTest = diastolicItem;

    if (systolicItem == "No Information") {
        systolicTest = 0;
    }
    if (systolicItem == "<70") {
        systolicTest = 69;
    }
    if (systolicItem == ">=220") {
        systolicTest = 220;
    }
    if (diastolicItem == "No Information") {
        diastolicTest = 0;
    }
    if (diastolicItem == "<40") {
        diastolicTest = 39;
    }
    if (diastolicItem == ">=110") {
        diastolicTest = 110;
    }
    if (new Number(diastolicTest) > new Number(systolicTest)) {
        alert("Error: Diastolic > systolic");
    }
}

function selectLabResults() {
    var type = document.getElementById("selectfield1845");
    var typeItem = type[type.selectedIndex].text;
    hideDiv("field1858");
    justReveal("cell1847");
    if (typeItem == "Blood Type") {
        populate("738");   // switched from 193
        hideDiv("field2004");
    } else if (typeItem == "Rhesus Status") {
        populate("196");
    } else if (typeItem == "Hb - 1st screen") {
        hideDiv("cell1847");
        justReveal("field1858");
        var el = document.getElementById("field1858");
        el.className = "defaultCell";
    } else if (typeItem == "Hb - 2nd screen") {
        hideDiv("cell1847");
        justReveal("field1858");
        var el = document.getElementById("field1858");
        el.className = "defaultCell";
    }  else if (typeItem == "CD4 Count") {
        hideDiv("cell1847");
        justReveal("field2004");
        var el = document.getElementById("field2004");
        el.className = "defaultCell";
    } else if (typeItem == "Cervical Smear") {
        populate("207");
    } else if (typeItem == "Sickle Cell Screen") {
        populate("1460");
    } else if (typeItem == "Malaria Test") {
        populate("1462");
    }
}

function selectDrugEnum() {
    var type = document.getElementById("selectfield1854");
    var typeItem = type[type.selectedIndex].text;

    if (typeItem == "Supplemental Iron") {
        hideDiv("field1856");
    } else if (typeItem == "Supplemental Folate") {
        hideDiv("field1856");
    } else if (typeItem == "Malaria Prophylaxis") {
        populate("1582");
        justReveal("field1856");
        var el = document.getElementById("field1856");
        el.className = "defaultCell";
    } else if (typeItem == "Deworming Medication") {
        populate("1584");
        justReveal("field1856");
        var el = document.getElementById("field1856");
        el.className = "defaultCell";
    }
}

// For field 1998 - it has alot of variants of "Yes;" therefore we are selecting the "No."
function selectPatientEnrolledDropdown() {
    var dropdown = document.getElementById("selectfield1998");
    var item = dropdown[dropdown.selectedIndex].value;
    var sites = document.getElementById("site2123");
    if (item == "3064") {
        hideDiv("field2122");
        sites.selectedIndex = 0;
        hideDiv("field2123");
    } else if (item == "") {
        hideDiv("field2122");
        sites.selectedIndex = 0;
        hideDiv("field2123");
    } else  {
        justReveal("field2122");
    }
}

function clearRadio() {

    var i = "";
    for (i in document.form70.field69) {
        if (document.form70.field69[i].checked == true) {
            document.form70.field69[i].checked = false
        }
    }
}

function fixDate(date, separator)
{
    var dvals = date.split(separator);
    var year = dvals[0];
    var month = dvals[1];
    var day = dvals[2];
    if (day.length == 1) {
        day = "0" + day;
    }
    if (month.length == 1) {
        month = "0" + month;
    }
    return year + separator + month + separator + day;
}

function insertDate(fieldId, niceDate, dbDate) {
    var input = document.getElementsByName("field" + fieldId).item(0);
    var span = document.getElementById("spanfield" + fieldId);
    var spanContents = span.innerHTML;
	if (spanContents.replace( /\s/g, "" ) == "") {
		span.innerHTML = spanContents + "<strong>" + niceDate + "</strong>";
	}
    input.value = dbDate;
}

/* code from Struts validator*/
function simpleValidateFloat(value, fMin, fMax) {
    var isValid = true;
    if (value.length > 0) {
        // remove '.' before checking digits
        var tempArray = value.split('.');
        var joinedString = tempArray.join('');
        if (!isAllDigits(joinedString)) {
            isValid = false;
        } else {
            var iValue = parseFloat(value);
            if (isNaN(iValue)) {
                isValid = false;
            }
        }
    }
	if (fMin != null) {
		if (!(value >= fMin && value <= fMax)) {
       	isValid = false;
    	}
	}

    return isValid;
}

/* code sorta from Struts validator*/
function simpleValidateTime(value) {
    var bValid = true;
    var focusField = null;
    var i = 0;
    var j = 0;
    if (value.length > 0) {
        var lvals = value.split(":");
        if (lvals.length < 3) {
            focusField = field;
            fields[i++] = oTime[x][1];
            //alert("lvals.length: " + lvals.length + " oTime: " + value);
            bValid = false;
        } else {
            for (j = 0; j < lvals.length; j++)
            {
                var thisTimePart = lvals[j];
                //alert("value: " + value + " thisTimePart: " + thisTimePart + " lvals.length: " + lvals.length + " oTime: " +  value + " j: " + j);
                var timePart;
                if (thisTimePart.indexOf("0") == 0) {
                    timePart = thisTimePart.substring(1, 2);
                  //  alert("substring thisTimePart: " + thisTimePart + " timePart: " + timePart);
                } else {
                    timePart = thisTimePart;
                  //  alert("thisTimePart: " + thisTimePart + " timePart: " + timePart);
                }

                var iValue = parseInt(timePart);
                if (isNaN(iValue) || !(iValue >= 0 && iValue <= 60)) {
                    bValid = false;
                    badvalue = value;
                }
                if (!isAllDigits(timePart)) {
                    bValid = false;
                }
            }
        }
    }
    return bValid;
}

/* code from Struts validator*/
function simpleValidateInteger(value) {
    var isValid = true;
    if (value.length > 0) {
        if (!isAllDigits(value)) {
            isValid = false;
        } else {
			if (isNaN(value) || !(value >= -2147483648 && value <= 2147483647)) {
                isValid = false;
            }
        }
    }
    return isValid;
}

function validateIntegerMessage(elementId) {
	var el = document.getElementById(elementId);
	var elValue = el.value;
	var result = simpleValidateInteger(elValue);
   	if (result == false) {
   	 	alert("This field must be an Integer.")
		el.value = "";
		setTimeout("document.getElementById('"+elementId+"').focus();",1);
		setTimeout("document.getElementById('"+elementId+"').select();",1);
   	}
}

function validateFloatMessage(elementId) {
	var el = document.getElementById(elementId);
	var elValue = el.value;
	var result = simpleValidateFloat(elValue);
   	if (result == false) {
   	 	alert("This field must be a Numeral.")
		el.value = "";
		setTimeout("document.getElementById('"+elementId+"').focus();",1);
		setTimeout("document.getElementById('"+elementId+"').select();",1);
   	}
}

/**
 * Registration form needs this done manually - it cannot load DWRUtil.useLoadingMessage();
 * @param {Object} message
 */
function useLoadingMessage(the_message) {
  var loadingMessage = "Loading";
  DWREngine.setPreHook(function() {
    var disabledZone = $('disabledZone');
    if (!disabledZone) {
      disabledZone = document.createElement('div');
      disabledZone.setAttribute('id', 'disabledZone');
      disabledZone.style.position = "absolute";
      disabledZone.style.zIndex = "1000";
      disabledZone.style.left = "0px";
      disabledZone.style.top = "0px";
      disabledZone.style.width = "100%";
      disabledZone.style.height = "100%";
      document.body.appendChild(disabledZone);
      var messageZone = document.createElement('div');
      messageZone.setAttribute('id', 'messageZone');
      messageZone.style.position = "absolute";
      messageZone.style.top = "0px";
      messageZone.style.right = "0px";
      messageZone.style.background = "red";
      messageZone.style.color = "white";
      messageZone.style.fontFamily = "Arial,Helvetica,sans-serif";
      messageZone.style.padding = "4px";
      disabledZone.appendChild(messageZone);
      var text = document.createTextNode(loadingMessage);
      messageZone.appendChild(text);
    }
    else {
      $('messageZone').innerHTML = loadingMessage;
      disabledZone.style.visibility = 'visible';
    }
  });

  DWREngine.setPostHook(function() {
    $('disabledZone').style.visibility = 'hidden';
  });
}
