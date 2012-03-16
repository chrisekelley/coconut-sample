



















function DWRUtil() { }





DWRUtil.onReturn = function(event, action) {
if (!event) {
event = window.event;
}
if (event && event.keyCode && event.keyCode == 13) {
action();
}
};





DWRUtil.selectRange = function(ele, start, end) {
var orig = ele;
ele = $(ele);
if (ele == null) {
DWRUtil.debug("selectRange() can't find an element with id: " + orig + ".");
return;
}
if (ele.setSelectionRange) {
ele.setSelectionRange(start, end);
}
else if (ele.createTextRange) {
var range = ele.createTextRange();
range.moveStart("character", start);
range.moveEnd("character", end - ele.value.length);
range.select();
}
ele.focus();
};




DWRUtil._getSelection = function(ele) {
var orig = ele;
ele = $(ele);
if (ele == null) {
DWRUtil.debug("selectRange() can't find an element with id: " + orig + ".");
return;
}
return ele.value.substring(ele.selectionStart, ele.selectionEnd);





}





var $;
if (!$ && document.getElementById) {
$ = function() {
var elements = new Array();
for (var i = 0; i < arguments.length; i++) {
var element = arguments[i];
if (typeof element == 'string') {
element = document.getElementById(element);
}
if (arguments.length == 1) {
return element;
}
elements.push(element);
}
return elements;
}
}
else if (!$ && document.all) {
$ = function() {
var elements = new Array();
for (var i = 0; i < arguments.length; i++) {
var element = arguments[i];
if (typeof element == 'string') {
element = document.all[element];
}
if (arguments.length == 1) {
return element;
}
elements.push(element);
}
return elements;
}
}





DWRUtil.toDescriptiveString = function(data, level, depth) {
var reply = "";
var i = 0;
var value;
var obj;
if (level == null) level = 0;
if (depth == null) depth = 0;
if (data == null) return "null";
if (DWRUtil._isArray(data)) {
if (data.length == 0) reply += "[]";
else {
if (level != 0) reply += "[\n";
else reply = "[";
for (i = 0; i < data.length; i++) {
try {
obj = data[i];
if (obj == null || typeof obj == "function") {
continue;
}
else if (typeof obj == "object") {
if (level > 0) value = DWRUtil.toDescriptiveString(obj, level - 1, depth + 1);
else value = DWRUtil._detailedTypeOf(obj);
}
else {
value = "" + obj;
value = value.replace(/\/n/g, "\\n");
value = value.replace(/\/t/g, "\\t");
}
}
catch (ex) {
value = "" + ex;
}
if (level != 0)  {
reply += DWRUtil._indent(level, depth + 2) + value + ", \n";
}
else {
if (value.length > 13) value = value.substring(0, 10) + "...";
reply += value + ", ";
if (i > 5) {
reply += "...";
break;
}
}
}
if (level != 0) reply += DWRUtil._indent(level, depth) + "]";
else reply += "]";
}
return reply;
}
if (typeof data == "string" || typeof data == "number" || DWRUtil._isDate(data)) {
return data.toString();
}
if (typeof data == "object") {
var typename = DWRUtil._detailedTypeOf(data);
if (typename != "Object")  reply = typename + " ";
if (level != 0) reply += "{\n";
else reply = "{";
var isHtml = DWRUtil._isHTMLElement(data);
for (var prop in data) {
if (isHtml) {

if (prop.toUpperCase() == prop || prop == "title" ||
prop == "lang" || prop == "dir" || prop == "className" ||
prop == "form" || prop == "name" || prop == "prefix" ||
prop == "namespaceURI" || prop == "nodeType" ||
prop == "firstChild" || prop == "lastChild" ||
prop.match(/^offset/)) {
continue;
}
}
value = "";
try {
obj = data[prop];
if (obj == null || typeof obj == "function") {
continue;
}
else if (typeof obj == "object") {
if (level > 0) {
value = "\n";
value += DWRUtil._indent(level, depth + 2);
value = DWRUtil.toDescriptiveString(obj, level - 1, depth + 1);
}
else {
value = DWRUtil._detailedTypeOf(obj);
}
}
else {
value = "" + obj;
value = value.replace(/\/n/g, "\\n");
value = value.replace(/\/t/g, "\\t");
}
}
catch (ex) {
value = "" + ex;
}
if (level == 0 && value.length > 13) value = value.substring(0, 10) + "...";
var propStr = prop;
if (propStr.length > 30) propStr = propStr.substring(0, 27) + "...";
if (level != 0) reply += DWRUtil._indent(level, depth + 1);
reply += prop + ":" + value + ", ";
if (level != 0) reply += "\n";
i++;
if (level == 0 && i > 5) {
reply += "...";
break;
}
}
reply += DWRUtil._indent(level, depth);
reply += "}";
return reply;
}
return data.toString();
};




DWRUtil._indent = function(level, depth) {
var reply = "";
if (level != 0) {
for (var j = 0; j < depth; j++) {
reply += "\u00A0\u00A0";
}
reply += " ";
}
return reply;
};





DWRUtil.useLoadingMessage = function(message) {
var loadingMessage;
if (message) loadingMessage = message;
else loadingMessage = "Loading";
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





DWRUtil.setValue = function(ele, val, options) {
if (val == null) val = "";
if (options != null) {
if (options.escapeHtml) {
val = val.replace(/&/, "&amp;");
val = val.replace(/'/, "&apos;");
val = val.replace(/</, "&lt;");
val = val.replace(/>/, "&gt;");
}
}

var orig = ele;
var nodes, node, i;

ele = $(ele);

if (ele == null) {
nodes = document.getElementsByName(orig);
if (nodes.length >= 1) {
ele = nodes.item(0);
}
}
if (ele == null) {
DWRUtil.debug("setValue() can't find an element with id/name: " + orig + ".");
return;
}

if (DWRUtil._isHTMLElement(ele, "select")) {
if (ele.type == "select-multiple" && DWRUtil._isArray(val)) {
DWRUtil._selectListItems(ele, val);
}
else {
DWRUtil._selectListItem(ele, val);
}
return;
}

if (DWRUtil._isHTMLElement(ele, "input")) {
if (ele.type == "radio") {

if (nodes == null) nodes = document.getElementsByName(orig);
if (nodes != null && nodes.length > 1) {
for (i = 0; i < nodes.length; i++) {
node = nodes.item(i);
if (node.type == "radio") {
node.checked = (node.value == val);
}
}
}
else {
ele.checked = (val == true);
}
}
else if (ele.type == "checkbox") {
ele.checked = val;
}
else {
ele.value = val;
}
return;
}

if (DWRUtil._isHTMLElement(ele, "textarea")) {
ele.value = val;
return;
}



if (val.nodeType) {
if (val.nodeType == 9  ) {
val = val.documentElement;
}

val = DWRUtil._importNode(ele.ownerDocument, val, true);
ele.appendChild(val);
return;
}


ele.innerHTML = val;
};






DWRUtil._selectListItems = function(ele, val) {


var found  = false;
var i;
var j;
for (i = 0; i < ele.options.length; i++) {
ele.options[i].selected = false;
for (j = 0; j < val.length; j++) {
if (ele.options[i].value == val[j]) {
ele.options[i].selected = true;
}
}
}

if (found) return;

for (i = 0; i < ele.options.length; i++) {
for (j = 0; j < val.length; j++) {
if (ele.options[i].text == val[j]) {
ele.options[i].selected = true;
}
}
}
};






DWRUtil._selectListItem = function(ele, val) {


var found  = false;
var i;
for (i = 0; i < ele.options.length; i++) {
if (ele.options[i].value == val) {
ele.options[i].selected = true;
found = true;
}
else {
ele.options[i].selected = false;
}
}


if (found) return;

for (i = 0; i < ele.options.length; i++) {
if (ele.options[i].text == val) {
ele.options[i].selected = true;
}
else {
ele.options[i].selected = false;
}
}
}





DWRUtil.getValue = function(ele, options) {
if (options == null) {
options = {};
}
var orig = ele;
ele = $(ele);


var nodes = document.getElementsByName(orig);
if (ele == null && nodes.length >= 1) {
ele = nodes.item(0);
}
if (ele == null) {
DWRUtil.debug("getValue() can't find an element with id/name: " + orig + ".");
return "";
}

if (DWRUtil._isHTMLElement(ele, "select")) {


var sel = ele.selectedIndex;
if (sel != -1) {
var reply = ele.options[sel].value;
if (reply == null || reply == "") {
reply = ele.options[sel].text;
}

return reply;
}
else {
return "";
}
}

if (DWRUtil._isHTMLElement(ele, "input")) {
if (ele.type == "radio") {
var node;
for (i = 0; i < nodes.length; i++) {
node = nodes.item(i);
if (node.type == "radio") {
if (node.checked) {
if (nodes.length > 1) return node.value;
else return true;
}
}
}
}
switch (ele.type) {
case "checkbox":
case "check-box":
case "radio":
return ele.checked;
default:
return ele.value;
}
}

if (DWRUtil._isHTMLElement(ele, "textarea")) {
return ele.value;
}

if (options.textContent) {
if (ele.textContent) return ele.textContent;
else if (ele.innerText) return ele.innerText;
}
return ele.innerHTML;
};





DWRUtil.getText = function(ele) {
var orig = ele;
ele = $(ele);
if (ele == null) {
DWRUtil.debug("getText() can't find an element with id: " + orig + ".");
return "";
}

if (!DWRUtil._isHTMLElement(ele, "select")) {
DWRUtil.debug("getText() can only be used with select elements. Attempt to use: " + DWRUtil._detailedTypeOf(ele) + " from  id: " + orig + ".");
return "";
}



var sel = ele.selectedIndex;
if (sel != -1) {
return ele.options[sel].text;
}
else {
return "";
}
};





DWRUtil.setValues = function(map) {
for (var property in map) {

if ($(property) != null || document.getElementsByName(property).length >= 1) {
DWRUtil.setValue(property, map[property]);
}
}
};






DWRUtil.getValues = function(data) {
var ele;
if (typeof data == "string") ele = $(data);
if (DWRUtil._isHTMLElement(data)) ele = data;
if (ele != null) {
if (ele.elements == null) {
alert("getValues() requires an object or reference to a form element.");
return null;
}
var reply = {};
var value;
for (var i = 0; i < ele.elements.length; i++) {
if (ele[i].id != null) value = ele[i].id;
else if (ele[i].value != null) value = ele[i].value;
else value = "element" + i;
reply[value] = DWRUtil.getValue(ele[i]);
}
return reply;
}
else {
for (var property in data) {

if ($(property) != null || document.getElementsByName(property).length >= 1) {
data[property] = DWRUtil.getValue(property);
}
}
return data;
}
};





DWRUtil.addOptions = function(ele, data) {
var orig = ele;
ele = $(ele);
if (ele == null) {
DWRUtil.debug("addOptions() can't find an element with id: " + orig + ".");
return;
}
var useOptions = DWRUtil._isHTMLElement(ele, "select");
var useLi = DWRUtil._isHTMLElement(ele, ["ul", "ol"]);
if (!useOptions && !useLi) {
DWRUtil.debug("addOptions() can only be used with select/ul/ol elements. Attempt to use: " + DWRUtil._detailedTypeOf(ele));
return;
}
if (data == null) return;

var text;
var value;
var opt;
var li;
if (DWRUtil._isArray(data)) {

for (var i = 0; i < data.length; i++) {
if (useOptions) {
if (arguments[2] != null) {
if (arguments[3] != null) {
text = DWRUtil._getValueFrom(data[i], arguments[3]);
value = DWRUtil._getValueFrom(data[i], arguments[2]);
}
else {
value = DWRUtil._getValueFrom(data[i], arguments[2]);
text = value;
}
}
else
{
text = DWRUtil._getValueFrom(data[i], arguments[3]);
value = text;
}
if (text || value) {
opt = new Option(text, value);
ele.options[ele.options.length] = opt;
}
}
else {
li = document.createElement("li");
value = DWRUtil._getValueFrom(data[i], arguments[2]);
if (value != null) {
li.innerHTML = value;
ele.appendChild(li);
}
}
}
}
else if (arguments[3] != null) {
for (var prop in data) {
if (!useOptions) {
alert("DWRUtil.addOptions can only create select lists from objects.");
return;
}
value = DWRUtil._getValueFrom(data[prop], arguments[2]);
text = DWRUtil._getValueFrom(data[prop], arguments[3]);
if (text || value) {
opt = new Option(text, value);
ele.options[ele.options.length] = opt;
}
}
}
else {
for (var prop in data) {
if (!useOptions) {
DWRUtil.debug("DWRUtil.addOptions can only create select lists from objects.");
return;
}
if (typeof data[prop] == "function") {

text = null;
value = null;
}
else if (arguments[2]) {
text = prop;
value = data[prop];
}
else {
text = data[prop];
value = prop;
}
if (text || value) {
opt = new Option(text, value);
ele.options[ele.options.length] = opt;
}
}
}
};




DWRUtil._getValueFrom = function(data, method) {
if (method == null) return data;
else if (typeof method == 'function') return method(data);
else return data[method];
}





DWRUtil.removeAllOptions = function(ele) {
var orig = ele;
ele = $(ele);
if (ele == null) {
DWRUtil.debug("removeAllOptions() can't find an element with id: " + orig + ".");
return;
}
var useOptions = DWRUtil._isHTMLElement(ele, "select");
var useLi = DWRUtil._isHTMLElement(ele, ["ul", "ol"]);
if (!useOptions && !useLi) {
DWRUtil.debug("removeAllOptions() can only be used with select, ol and ul elements. Attempt to use: " + DWRUtil._detailedTypeOf(ele));
return;
}
if (useOptions) {
ele.options.length = 0;
}
else {
while (ele.childNodes.length > 0) {
ele.removeChild(ele.firstChild);
}
}
};





DWRUtil.addRows = function(ele, data, cellFuncs, options) {
var orig = ele;
ele = $(ele);
if (ele == null) {
DWRUtil.debug("addRows() can't find an element with id: " + orig + ".");
return;
}
if (!DWRUtil._isHTMLElement(ele, ["table", "tbody", "thead", "tfoot"])) {
DWRUtil.debug("addRows() can only be used with table, tbody, thead and tfoot elements. Attempt to use: " + DWRUtil._detailedTypeOf(ele));
return;
}
if (!options) options = {};
if (!options.rowCreator) options.rowCreator = DWRUtil._defaultRowCreator;
if (!options.cellCreator) options.cellCreator = DWRUtil._defaultCellCreator;
var tr, rowNum;
if (DWRUtil._isArray(data)) {
for (rowNum = 0; rowNum < data.length; rowNum++) {
options.rowData = data[rowNum];
options.rowIndex = rowNum;
options.rowNum = rowNum;
options.data = null;
options.cellNum = -1;
tr = DWRUtil._addRowInner(cellFuncs, options);
if (tr != null) ele.appendChild(tr);
}
}
else if (typeof data == "object") {
rowNum = 0;
for (var rowIndex in data) {
options.rowData = data[rowIndex];
options.rowIndex = rowIndex;
options.rowNum = rowNum;
options.data = null;
options.cellNum = -1;
tr = DWRUtil._addRowInner(cellFuncs, options);
if (tr != null) ele.appendChild(tr);
rowNum++;
}
}
};




DWRUtil._addRowInner = function(cellFuncs, options) {
var tr = options.rowCreator(options);
if (tr == null) return null;
for (var cellNum = 0; cellNum < cellFuncs.length; cellNum++) {
var func = cellFuncs[cellNum];
var reply = func(options.rowData, options);
options.data = reply;
options.cellNum = cellNum;
var td = options.cellCreator(options);
if (td != null) {
if (reply != null) {
if (DWRUtil._isHTMLElement(reply)) td.appendChild(reply);
else td.innerHTML = reply;
}
tr.appendChild(td);
}
}
return tr;
};




DWRUtil._defaultRowCreator = function(options) {
return document.createElement("tr");
};




DWRUtil._defaultCellCreator = function(options) {
return document.createElement("td");
};





DWRUtil.removeAllRows = function(ele) {
var orig = ele;
ele = $(ele);
if (ele == null) {
DWRUtil.debug("removeAllRows() can't find an element with id: " + orig + ".");
return;
}
if (!DWRUtil._isHTMLElement(ele, ["table", "tbody", "thead", "tfoot"])) {
DWRUtil.debug("removeAllRows() can only be used with table, tbody, thead and tfoot elements. Attempt to use: " + DWRUtil._detailedTypeOf(ele));
return;
}
while (ele.childNodes.length > 0) {
ele.removeChild(ele.firstChild);
}
};







DWRUtil._isHTMLElement = function(ele, nodeName) {
if (ele == null || typeof ele != "object" || ele.nodeName == null) {
return false;
}

if (nodeName != null) {
var test = ele.nodeName.toLowerCase();

if (typeof nodeName == "string") {
return test == nodeName.toLowerCase();
}

if (DWRUtil._isArray(nodeName)) {
var match = false;
for (var i = 0; i < nodeName.length && !match; i++) {
if (test == nodeName[i].toLowerCase()) {
match =  true;
}
}
return match;
}

DWRUtil.debug("DWRUtil._isHTMLElement was passed test node name that is neither a string or array of strings");
return false;
}

return true;
};




DWRUtil._detailedTypeOf = function(x) {
var reply = typeof x;
if (reply == "object") {
reply = Object.prototype.toString.apply(x);
reply = reply.substring(8, reply.length-1);
}
return reply;
};




DWRUtil._isArray = function(data) {
return (data && data.join) ? true : false;
};




DWRUtil._isDate = function(data) {
return (data && data.toUTCString) ? true : false;
};




DWRUtil._importNode = function(doc, importedNode, deep) {
var newNode;

if (importedNode.nodeType == 1  ) {
newNode = doc.createElement(importedNode.nodeName);

for (var i = 0; i < importedNode.attributes.length; i++) {
var attr = importedNode.attributes[i];
if (attr.nodeValue != null && attr.nodeValue != '') {
newNode.setAttribute(attr.name, attr.nodeValue);
}
}

if (typeof importedNode.style != "undefined") {
newNode.style.cssText = importedNode.style.cssText;
}
}
else if (importedNode.nodeType == 3  ) {
newNode = doc.createTextNode(importedNode.nodeValue);
}

if (deep && importedNode.hasChildNodes()) {
for (i = 0; i < importedNode.childNodes.length; i++) {
newNode.appendChild(DWRUtil._importNode(doc, importedNode.childNodes[i], true));
}
}

return newNode;
}




DWRUtil.debug = function(message) {
alert(message);
}

