   /**
    * This file is a merge between the validation.js generated in struts 1.2.9 and ZEPRS-specific validation.js.
    */
   /* modified for ZEPRS */
    /**
    * A field is considered valid if greater than the specified minimum.
    * Fields are not checked if they are disabled.
    * <p>
    * <strong>Caution:</strong> Using <code>validateMinLength</code> on a password field in a
    *  login page gives unnecessary information away to hackers. While it only slightly
    *  weakens security, we suggest using it only when modifying a password.</p>
    * @param form The form validation is taking place on.
    */

	function validateMinLength(form) {
    var isValid = true;
    var focusField = null;
    var i = 0;
    var fields = new Array();

    oMinLength = eval('new ' + retrieveFormName(form) + '_minlength()');
    for (x in oMinLength) {
        var field = form[oMinLength[x][0]];
        if (! field) {     // check if it's a dwr widget
            var fieldString = oMinLength[x][0];
            var fieldId = fieldString.substring(5, fieldString.length);
            // field = document.getElementById('inputWidget' + fieldId);
            var fieldArray = document.getElementsByName(fieldString);
            field = fieldArray[0];
        }
        if (field) {
            if (field.type == 'text' ||
                field.type == 'textarea') {

                var iMin = parseInt(oMinLength[x][2]("minlength"));
                if ((trim(field.value).length > 0) && (field.value.length < iMin)) {
                    if (i == 0) {
                        focusField = field;
                    }
                    fields[i++] = oMinLength[x][1];
                    isValid = false;
                }
            }
        }
    }
    if (fields.length > 0) {
        focusField.focus();
        alert(fields.join('\n'));
    }
    return isValid;
}

    /*$RCSfile: validateUtilities.js,v $ $Revision: 1.2 $ $Date: 2004/03/28 16:53:21 $ */

  /**
  * This is a place holder for common utilities used across the javascript validation
  *
  **/


   /* modified for ZEPRS */
    /**
    * Check to see if fields are in a valid float range.
    * Fields are not checked if they are disabled.
    * <p>

    * @param form The form validation is taking place on.
    */
function validateFloatRange(form) {
    var isValid = true;
    var focusField = null;
    var i = 0;
    var fields = new Array();
    // oRange = new floatRange();
   // var formName = form.getAttributeNode("name");
    oRange = eval('new ' + retrieveFormName(form) + '_floatRange()');
    for (x in oRange) {
        var field = form[oRange[x][0]];
        if (! field) {     // check if it's a dwr widget
            var fieldString = oRange[x][0];
            var fieldId = fieldString.substring(5, fieldString.length);
            // field = document.getElementById('inputWidget' + fieldId);
            var fieldArray = document.getElementsByName(fieldString);
            field = fieldArray[0];
        }
        if (field) {
            if ((field.type == 'text' ||
                 field.type == 'textarea') &&
                (field.value.length > 0)) {

                var fMin = parseFloat(oRange[x][2]("min"));
                var fMax = parseFloat(oRange[x][2]("max"));
                var fValue = parseFloat(field.value);
                // alert("fMin:" + fMin + " fMax: " + fMax + " fValue: " + fValue);
                if (!(fValue >= fMin && fValue <= fMax)) {
                    if (i == 0) {
                        focusField = field;
                    }
                    fields[i++] = oRange[x][1];
                    isValid = false;
                }
            }
        }
    }
    if (fields.length > 0) {
        focusField.focus();
        alert(fields.join('\n'));
    }
    return isValid;
}

    /*$RCSfile: validateIntRange.js,v $ $Revision: 1.10 $ $Date: 2004/03/28 16:53:21 $ */
    /**
    * Check to see if fields is in a valid integer range.
    * Fields are not checked if they are disabled.
    * <p>
    * @param form The form validation is taking place on.
    */
function validateIntRange(form) {
    var isValid = true;
    var focusField = null;
    var i = 0;
    var fields = new Array();
    //oRange = new intRange();
   // var formName = form.getAttributeNode("name");

    oRange = eval('new ' + retrieveFormName(form) + '_intRange()');
    for (x in oRange) {
        var field = form[oRange[x][0]];
        if (! field) {     // check if it's a dwr widget
            var fieldString = oRange[x][0];
            var fieldId = fieldString.substring(5, fieldString.length);
            // field = document.getElementById('inputWidget' + fieldId);
            var fieldArray = document.getElementsByName(fieldString);
            field = fieldArray[0];
        }
        if (field) {
            if ((field.type == 'text' ||
                 field.type == 'textarea') &&
                (field.value.length > 0)) {

                var iMin = parseInt(oRange[x][2]("min"));
                var iMax = parseInt(oRange[x][2]("max"));
                var iValue = parseInt(field.value);
                if (!(iValue >= iMin && iValue <= iMax)) {
                    if (i == 0) {
                        focusField = field;
                    }
                    fields[i++] = oRange[x][1];
                    isValid = false;
                }
            } else if (field.type == "select-one") {
                var si = field.selectedIndex;
                if (si >= 0) {
                    value = field.options[si].value;
                }
                if (value != "") {
                    var iMin = parseInt(oRange[x][2]("min"));
                    var iMax = parseInt(oRange[x][2]("max"));
                    var iValue = parseInt(value);
                    if (!(iValue >= iMin && iValue <= iMax)) {
                        if (i == 0) {
                            focusField = field;
                        }
                        fields[i++] = oRange[x][1];
                        isValid = false;
                    }
                }
            }
        }
    }
    if (fields.length > 0) {
        focusField.focus();
        var msg = fields.join('\n');
        alert(msg);
    }
    return isValid;
}

    /*$RCSfile: validateInteger.js,v $ $Revision: 1.9 $ $Date: 2004/03/28 16:53:21 $ */
    /**
    * Check to see if fields are a valid integer.
    * Fields are not checked if they are disabled.
    * <p>
    * @param form The form validation is taking place on.
    */

function validateInteger(form) {
    var bValid = true;
    var focusField = null;
    var i = 0;
    var fields = new Array();
    //oInteger = new IntegerValidations();
   // var formName = form.getAttributeNode("name");

    oInteger = eval('new ' + retrieveFormName(form) + '_IntegerValidations()');
    for (x in oInteger) {
        var field = form[oInteger[x][0]];
        if (! field) {     // check if it's a dwr widget
            var fieldString = oInteger[x][0];
            var fieldId = fieldString.substring(5, fieldString.length);
            // field = document.getElementById('inputWidget' + fieldId);
            var fieldArray = document.getElementsByName(fieldString);
            field = fieldArray[0];
        }
        if (field) {           // cek 10/26/2005 - for dwr widgets
            // alert(fieldString);
            if (field.type == 'text' ||
                field.type == 'textarea' ||
                field.type == 'select-one' ||
                field.type == 'radio') {

                var value = '';
                // get field's value
                if (field.type == "select-one") {
                    var si = field.selectedIndex;
                    if (si >= 0) {
                        value = field.options[si].value;
                    }
                } else {
                    value = field.value;
                }

                if (value.length > 0) {

                    if (!isAllDigits(value)) {
                        bValid = false;
                        if (i == 0) {
                            focusField = field;
                        }
                        fields[i++] = oInteger[x][1];

                    } else {
                        var iValue = parseInt(value);
                        if (isNaN(iValue) || !(iValue >= -2147483648 && iValue <= 2147483647)) {
                            if (i == 0) {
                                focusField = field;
                            }
                            fields[i++] = oInteger[x][1];
                            bValid = false;
                        }
                    }
                }
            }
        }

    }
    if (fields.length > 0) {
        focusField.focus();
        alert(fields.join('\n'));
    }
    return bValid;
}

function isAllDigits(argvalue) {
    argvalue = argvalue.toString();
    var validChars = "0123456789";
    var startFrom = 0;
    if (argvalue.substring(0, 2) == "0x") {
        validChars = "0123456789abcdefABCDEF";
        startFrom = 2;
    } else if (argvalue.charAt(0) == "0") {
        validChars = "01234567";
        startFrom = 1;
    } else if (argvalue.charAt(0) == "-") {
        startFrom = 1;
    }

    for (var n = startFrom; n < argvalue.length; n++) {
        if (validChars.indexOf(argvalue.substring(n, n + 1)) == -1) return false;
    }
    return true;
}

    /*$RCSfile: validateMask.js,v $ $Revision: 1.10 $ $Date: 2004/03/28 16:53:21 $ */
    /**
    * Check to see if fields are a valid using a regular expression.
    * Fields are not checked if they are disabled.
    * <p>

    * @param form The form validation is taking place on.
    */

function validateMask(form) {
    var isValid = true;
    var focusField = null;
    var i = 0;
    var fields = new Array();
    // oMasked = new mask();
   // var formName = form.getAttributeNode("name");

    oMasked = eval('new ' + retrieveFormName(form) + '_mask()');
    for (x in oMasked) {
        var field = form[oMasked[x][0]];
        if (! field) {     // check if it's a dwr widget
            var fieldString = oMasked[x][0];
            var fieldId = fieldString.substring(5, fieldString.length);
            // field = document.getElementById('inputWidget' + fieldId);
            var fieldArray = document.getElementsByName(fieldString);
            field = fieldArray[0];
        }
        if (field) {
            if ((field.type == 'text' ||
                 field.type == 'textarea') &&
                (field.value.length > 0)) {

                if (!matchPattern(field.value, oMasked[x][2]("mask"))) {
                    if (i == 0) {
                        focusField = field;
                    }
                    fields[i++] = oMasked[x][1];
                    isValid = false;
                }
            }
        }
    }

    if (fields.length > 0) {
        focusField.focus();
        alert(fields.join('\n'));
    }
    return isValid;
}

function matchPattern(value, mask) {
    return mask.exec(value);
}

   /*$RCSfile: validateDate.js,v $ $Revision: 1.10 $ $Date: 2004/03/28 16:53:21 $ */
    /**
    * Check to see if fields are a valid date.
    * Fields are not checked if they are disabled.
    * <p>
    * @param form The form validation is taking place on.
    */
function validateDate(form) {
    var bValid = true;
    var focusField = null;

    var i = 0;
    var fields = new Array();
    // oDate = new DateValidations();
    // for (x in oDate) {
    //var value = form[oDate[x][0]].value;
    // fix the date format
    // var fixed_date = value.split('-');
    // cekelley changes to hide date manip.
    //value = fixed_date[2]  + "-" + fixed_date[1] + "-" + fixed_date[0];
    //fixed_value = fixed_date[2]  + "-" + fixed_date[1] + "-" + fixed_date[0];
    //form[oDate[x][0]].value = fixed_value;
    //  }
    return bValid;
}

//function isValidDate(day, month, year) {
function isValidDate(year, month, day) {
    if (month < 1 || month > 12) {
        return false;
    }
    if (day < 1 || day > 31) {
        return false;
    }
    if ((month == 4 || month == 6 || month == 9 || month == 11) &&
        (day == 31)) {
        return false;
    }
    if (month == 2) {
        var leap = (year % 4 == 0 &&
                    (year % 100 != 0 || year % 400 == 0));
        if (day > 29 || (day == 29 && !leap)) {
            return false;
        }
    }
    return true;
}

    /*$RCSfile: validateFloat.js,v $ $Revision: 1.11 $ $Date: 2004/03/28 16:53:21 $ */
    /**
    * Check to see if fields are a valid float.
    * Fields are not checked if they are disabled.
    * <p>

    * @param form The form validation is taking place on.
    */
function validateFloat(form) {
    var bValid = true;
    var focusField = null;
    var i = 0;
    var fields = new Array();
    //oFloat = new FloatValidations();
   // var formName = form.getAttributeNode("name");

    // oFloat = eval('new ' + formName.value + '_FloatValidations()');
    var oFloat = eval('new ' + retrieveFormName(form) +  '_FloatValidations()');
    for (x in oFloat) {
        var field = form[oFloat[x][0]];
        if (! field) {     // check if it's a dwr widget
            var fieldString = oFloat[x][0];
            var fieldId = fieldString.substring(5, fieldString.length);
            // field = document.getElementById('inputWidget' + fieldId);
            var fieldArray = document.getElementsByName(fieldString);
            field = fieldArray[0];
        }
        if (field) {
            if (field.type == 'text' ||
                field.type == 'textarea' ||
                field.type == 'select-one' ||
                field.type == 'radio') {

                var value = '';
                // get field's value
                if (field.type == "select-one") {
                    var si = field.selectedIndex;
                    if (si >= 0) {
                        value = field.options[si].value;
                    }
                } else {
                    value = field.value;
                }

                if (value.length > 0) {
                    // remove '.' before checking digits
                    var tempArray = value.split('.');
                    var joinedString = tempArray.join('');

                    if (!isAllDigits(joinedString)) {
                        bValid = false;
                        if (i == 0) {
                            focusField = field;
                        }
                        fields[i++] = oFloat[x][1];

                    } else {
                        var iValue = parseFloat(value);
                        if (isNaN(iValue)) {
                            if (i == 0) {
                                focusField = field;
                            }
                            fields[i++] = oFloat[x][1];
                            bValid = false;
                        }
                    }
                }
            }
        }
    }
    if (fields.length > 0) {
        focusField.focus();
        alert(fields.join('\n'));
    }
    return bValid;
}


    /*$RCSfile: validateCreditCard.js,v $ $Revision: 1.8 $ $Date: 2004/03/28 16:53:21 $ */
    /**
    * Check to see if fields are a valid creditcard number based on Luhn checksum.
    * Fields are not checked if they are disabled.
    * <p>
    * @param form The form validation is taking place on.
    */
    function validateCreditCard(form) {
        var bValid = true;
        var focusField = null;
        var i = 0;
        var fields = new Array();
        var formName = form.getAttributeNode("name");

        oCreditCard = eval('new ' + formName.value + '_creditCard()');

        for (x in oCreditCard) {
            if ((form[oCreditCard[x][0]].type == 'text' ||
                 form[oCreditCard[x][0]].type == 'textarea') &&
                (form[oCreditCard[x][0]].value.length > 0)  &&
                 form[oCreditCard[x][0]].disabled == false) {
                if (!luhnCheck(form[oCreditCard[x][0]].value)) {
                    if (i == 0) {
                        focusField = form[oCreditCard[x][0]];
                    }
                    fields[i++] = oCreditCard[x][1];
                    bValid = false;
                }
            }
        }
        if (fields.length > 0) {
            focusField.focus();
            alert(fields.join('\n'));
        }
        return bValid;
    }

    /**
     * Checks whether a given credit card number has a valid Luhn checksum.
     * This allows you to spot most randomly made-up or garbled credit card numbers immediately.
     * Reference: http://www.speech.cs.cmu.edu/~sburke/pub/luhn_lib.html
     */
    function luhnCheck(cardNumber) {
        if (isLuhnNum(cardNumber)) {
            var no_digit = cardNumber.length;
            var oddoeven = no_digit & 1;
            var sum = 0;
            for (var count = 0; count < no_digit; count++) {
                var digit = parseInt(cardNumber.charAt(count));
                if (!((count & 1) ^ oddoeven)) {
                    digit *= 2;
                    if (digit > 9) digit -= 9;
                };
                sum += digit;
            };
            if (sum == 0) return false;
            if (sum % 10 == 0) return true;
        };
        return false;
    }

    function isLuhnNum(argvalue) {
        argvalue = argvalue.toString();
        if (argvalue.length == 0) {
            return false;
        }
        for (var n = 0; n < argvalue.length; n++) {
            if ((argvalue.substring(n, n+1) < "0") ||
                (argvalue.substring(n,n+1) > "9")) {
                return false;
            }
        }
        return true;
    }

    /*$RCSfile: validateShort.js,v $ $Revision: 1.9 $ $Date: 2004/03/28 16:53:21 $ */
    /**
    *  Check to see if fields are a valid short.
    * Fields are not checked if they are disabled.
    * <p>

    * @param form The form validation is taking place on.
    */
 function validateShort(form) {
    var bValid = true;
    var focusField = null;
    var i = 0;
    var fields = new Array();
    // oShort = new ShortValidations();
   // var formName = form.getAttributeNode("name");

    oShort = eval('new ' + retrieveFormName(form) + '_ShortValidations()');
    for (x in oShort) {
        var field = form[oShort[x][0]];
        if (! field) {     // check if it's a dwr widget
            var fieldString = oShort[x][0];
            var fieldId = fieldString.substring(5, fieldString.length);
            // field = document.getElementById('inputWidget' + fieldId);
            var fieldArray = document.getElementsByName(fieldString);
            field = fieldArray[0];
        }
        if (field) {
            if (field.type == 'text' ||
                field.type == 'textarea' ||
                field.type == 'select-one' ||
                field.type == 'radio') {

                var value = '';
                // get field's value
                if (field.type == "select-one") {
                    var si = field.selectedIndex;
                    if (si >= 0) {
                        value = field.options[si].value;
                    }
                } else {
                    value = field.value;
                }

                if (value.length > 0) {
                    if (!isAllDigits(value)) {
                        bValid = false;
                        if (i == 0) {
                            focusField = field;
                        }
                        fields[i++] = oShort[x][1];

                    } else {

                        var iValue = parseInt(value);
                        if (isNaN(iValue) || !(iValue >= -32768 && iValue <= 32767)) {
                            if (i == 0) {
                                focusField = field;
                            }
                            fields[i++] = oShort[x][1];
                            bValid = false;
                        }
                    }
                }
            }
        }
    }
    if (fields.length > 0) {
        focusField.focus();
        alert(fields.join('\n'));
    }
    return bValid;
}

/**
 * ZEPRS addition
 * @param {Object} form
 */
function validateTime(form) {
    var bValid = true;
    var focusField = null;
    var i = 0;
    var j = 0;
    var fields = new Array();
    // oTime = new TimeValidations();
   // var formName = form.getAttributeNode("name");

    oTime = eval('new ' + retrieveFormName(form) + '_TimeValidations()');
    var badvalue = "";
    for (x in oTime) {
        var field = form[oTime[x][0]];
       // alert(field.type);
        if (field) {
          //  if (field.type == 'hidden') {
                var value = '';
                // get field's value
                value = field.value;
                if (value.length > 0) {
                    var lvals = value.split(":");
                    if (lvals.length < 3) {
                        focusField = field;
                        fields[i++] = oTime[x][1];
                       // alert("lvals.length: " + lvals.length + " oTime: " +  oTime[x][1]);
                        bValid = false;
                    } else {
                        for (j = 0; j < lvals.length; j++)
                        {
                            var thisTimePart = lvals[j];
                           //  alert("value: " + value + " thisTimePart: " + thisTimePart + " lvals.length: " + lvals.length + " oTime: " +  oTime[x][1] + " x: " + x + " j: " + j);
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
                                if (i == 0) {
                                    focusField = field;
                                }
                                fields[i++] = oTime[x][1];
                                bValid = false;
                                badvalue = value;
                            }

                            if (!isAllDigits(timePart)) {
                                bValid = false;
                                if (i == 0) {
                                    focusField = field;
                                }
                                fields[i++] = oTime[x][1];
                            }
                        }
                    }
                }
         //   }
        }
    }
    if (fields.length > 0) {
        if (!focusField) {
            focusField = field;
        }
        focusField.focus();
        alert("Wrong value: " + badvalue + fields.join('\n'));
    }
    return bValid;
}

    /*$RCSfile: validateMaxLength.js,v $ $Revision: 1.10 $ $Date: 2004/03/28 16:53:21 $ */
    /**
    * A field is considered valid if less than the specified maximum.
    * Fields are not checked if they are disabled.
    * <p>
    * <strong>Caution:</strong> Using <code>validateMaxLength</code> on a password field in a
    *  login page gives unnecessary information away to hackers. While it only slightly
    *  weakens security, we suggest using it only when modifying a password.</p>

    * @param form The form validation is taking place on.
    */
function validateMaxLength(form) {
    var isValid = true;
    var focusField = null;
    var i = 0;
    var fields = new Array();
    //oMaxLength = new maxlength();
   // var formName = form.getAttributeNode("name");

    oMaxLength = eval('new ' + retrieveFormName(form) + '_maxlength()');
    for (x in oMaxLength) {
        var field = form[oMaxLength[x][0]];
        if (! field) {     // check if it's a dwr widget
            var fieldString = oMaxLength[x][0];
            var fieldId = fieldString.substring(5, fieldString.length);
            // field = document.getElementById('inputWidget' + fieldId);
            var fieldArray = document.getElementsByName(fieldString);
            field = fieldArray[0];
        }
        if (field) {
            if (field.type == 'text' ||
                field.type == 'textarea') {

                var iMax = parseInt(oMaxLength[x][2]("maxlength"));
                if (field.value.length > iMax) {
                    if (i == 0) {
                        focusField = field;
                    }
                    fields[i++] = oMaxLength[x][1];
                    isValid = false;
                }
            }
        }
    }
    if (fields.length > 0) {
        focusField.focus();
        alert(fields.join('\n'));
    }
    return isValid;
}

   /*$RCSfile: validateEmail.js,v $ $Revision: 1.9 $ $Date: 2004/03/28 16:53:21 $ */
    /**
    * Check to see if fields are a valid email address.
    * Fields are not checked if they are disabled.
    * <p>
    * @param form The form validation is taking place on.
    */
    function validateEmail(form) {
        var bValid = true;
        var focusField = null;
        var i = 0;
        var fields = new Array();
        var formName = form.getAttributeNode("name");


        oEmail = eval('new ' + formName.value + '_email()');

        for (x in oEmail) {
            var field = form[oEmail[x][0]];
            if ((field.type == 'hidden' ||
                 field.type == 'text' ||
                 field.type == 'textarea') &&
                (field.value.length > 0) &&
                field.disabled == false) {
                if (!checkEmail(field.value)) {
                    if (i == 0) {
                        focusField = field;
                    }
                    fields[i++] = oEmail[x][1];
                    bValid = false;
                }
            }
        }
        if (fields.length > 0) {
            focusField.focus();
            alert(fields.join('\n'));
        }
        return bValid;
    }

    /**
     * Reference: Sandeep V. Tamhankar (stamhankar@hotmail.com),
     * http://javascript.internet.com
     */
    function checkEmail(emailStr) {
       if (emailStr.length == 0) {
           return true;
       }
       var emailPat=/^(.+)@(.+)$/;
       var specialChars="\\(\\)<>@,;:\\\\\\\"\\.\\[\\]";
       var validChars="\[^\\s" + specialChars + "\]";
       var quotedUser="(\"[^\"]*\")";
       var ipDomainPat=/^(\d{1,3})[.](\d{1,3})[.](\d{1,3})[.](\d{1,3})$/;
       var atom=validChars + '+';
       var word="(" + atom + "|" + quotedUser + ")";
       var userPat=new RegExp("^" + word + "(\\." + word + ")*$");
       var domainPat=new RegExp("^" + atom + "(\\." + atom + ")*$");
       var matchArray=emailStr.match(emailPat);
       if (matchArray == null) {
           return false;
       }
       var user=matchArray[1];
       var domain=matchArray[2];
       if (user.match(userPat) == null) {
           return false;
       }
       var IPArray = domain.match(ipDomainPat);
       if (IPArray != null) {
           for (var i = 1; i <= 4; i++) {
              if (IPArray[i] > 255) {
                 return false;
              }
           }
           return true;
       }
       var domainArray=domain.match(domainPat);
       if (domainArray == null) {
           return false;
       }
       var atomPat=new RegExp(atom,"g");
       var domArr=domain.match(atomPat);
       var len=domArr.length;
       if ((domArr[domArr.length-1].length < 2) ||
           (domArr[domArr.length-1].length > 3)) {
           return false;
       }
       if (len < 2) {
           return false;
       }
       return true;
    }

    /*$RCSfile: validateByte.js,v $ $Revision: 1.9 $ $Date: 2004/03/28 16:53:21 $ */
    /**
    * Check to see if fields are a valid byte.
    * Fields are not checked if they are disabled.
    * <p>
    * @param form The form validation is taking place on.
    */
function validateByte(form) {
    var bValid = true;
    var focusField = null;
    var i = 0;
    var fields = new Array();
    // oByte = new ByteValidations();
   // var formName = form.getAttributeNode("name");
    oByte = eval('new ' + retrieveFormName(form) + '_ByteValidations()');
    for (x in oByte) {
        var field = form[oByte[x][0]];
        if (! field) {     // check if it's a dwr widget
            var fieldString = oByte[x][0];
            var fieldId = fieldString.substring(5, fieldString.length);
            // field = document.getElementById('inputWidget' + fieldId);
            var fieldArray = document.getElementsByName(fieldString);
            field = fieldArray[0];
        }
        if (field) {
            if (field.type == 'text' ||
                field.type == 'textarea' ||
                field.type == 'select-one' ||
                field.type == 'radio') {

                var value = '';
                // get field's value
                if (field.type == "select-one") {
                    var si = field.selectedIndex;
                    if (si >= 0) {
                        value = field.options[si].value;
                    }
                } else {
                    value = field.value;
                }

                if (value.length > 0) {
                    if (!isAllDigits(value)) {
                        bValid = false;
                        if (i == 0) {
                            focusField = field;
                        }
                        fields[i++] = oByte[x][1];

                    } else {

                        var iValue = parseInt(value);
                        if (isNaN(iValue) || !(iValue >= -128 && iValue <= 127)) {
                            if (i == 0) {
                                focusField = field;
                            }
                            fields[i++] = oByte[x][1];
                            bValid = false;
                        }
                    }
                }

            }
        }
    }
    if (fields.length > 0) {
        focusField.focus();
        alert(fields.join('\n'));
    }
    return bValid;
}

    /*$RCSfile: validateRequired.js,v $ $Revision: 1.13 $ $Date: 2004/03/28 16:53:21 $ */
    /**
    *  Check to see if fields must contain a value.
    * Fields are not checked if they are disabled.
    * <p>

    * @param form The form validation is taking place on.
    */
function validateRequired(form) {
    var isValid = true;
    var focusField = null;
    var i = 0;
    var fields = new Array();
    // oRequired = new required();
    //var formName = form.getAttributeNode("name");
    //oRequired = eval('new ' + formName.value + '_required()');
    var oRequired = eval('new ' + retrieveFormName(form) +  '_required()');
    for (x in oRequired) {
        var field = form[oRequired[x][0]];
        if (! field) {     // check if it's a dwr widget
            var fieldString = oRequired[x][0];
            var fieldId = fieldString.substring(5, fieldString.length);
            // field = document.getElementById('inputWidget' + fieldId);
            var fieldArray = document.getElementsByName(fieldString);
            field = fieldArray[0];
        }
        if (field) {           // cek 10/26/2005 - for dwr widgets
            // alert("field.type: " + field.type + " x: " + x + " field: " + field);
            // alert("field.type: " + field.type + " length: " + field.length + " nodeType  : " + field.nodeType  );
            if (field.type == 'text' ||
                field.type == 'textarea' ||
                field.type == 'file' ||
                field.type == 'select-one' ||
                field.type == 'radio' ||
                field.type == 'password' ||
                field.type == 'hidden') {
                var value = '';
                // get field's value
                if (field.type == "select-one") {
                    var si = field.selectedIndex;
                    if (si >= 0) {
                        value = field.options[si].value;
                    }
                }  else {
                    value = field.value;
                }
            } else {
                // alert("field.type: " + field.type + " x: " + x + " field: " + field);
                var ischecked = false;
                var isRadio = false;
                for (var j = 0; j < field.length; j++) {
                    if (field[j].type == 'radio') {
                        isRadio = true;
                        if (field[j].checked == true) {
                            ischecked = true;
                            break;
                        }
                    }
                }
                if (ischecked == false && isRadio == true) {
                    // alert("ischecked == false");
                    value = '';
                }
            }

            if (trim(value).length == 0) {
                if (i == 0) {
                    focusField = field;
                }
                fields[i++] = oRequired[x][1];
                isValid = false;
            }
        }
    }
    if (fields.length > 0) {
        //if (focusField.length == null) {
           // focusField.focus();
            alert(fields.join('\n'));
      //  }
    }
    return isValid;
}

// Trim whitespace from left and right sides of s.
function trim(testString) {
    // return testString.replace( /^\s*/, "" ).replace( /\s*$/, "" );
    testString = new String(testString);
    testString = testString.replace(/^(\s+)?(.*\S)(\s+)?$/, '$2');
    // alert(testString);
    return testString;
}

   // Trim whitespace from left and right sides of s.
    function trimOLD(s) {
        return s.replace( /^\s*/, "" ).replace( /\s*$/, "" );
    }


/**
 * ZEPRS validation
 * @param {Object} form
 */
function validateRange(form) {
    return validateIntRange(form);
}

/**
 * ZEPRS validation - used with time val.
 * @param {Object} form
 */
function retrieveFormName(form) {

      var formName;
      if (form.getAttributeNode) {
          if (form.getAttributeNode("id") && form.getAttributeNode("id").value) {
              formName = form.getAttributeNode("id").value;
          } else {
              formName = form.getAttributeNode("name").value;
          }
      } else if (form.getAttribute) {
          if (form.getAttribute("id")) {
              formName = form.getAttribute("id");
          } else {
              formName = form.attributes["name"];
          }
      } else {
          if (form.id) {
              formName = form.id;
          } else {
              formName = form.name;
          }
      }

      return formName;
  }