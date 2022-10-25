function creatrInput(tagname,attrname,attrval,type,typevalue,value,conetent,events,funcname){
    var element=document.createElement(tagname);
    element.setAttribute(attrname,attrval)
    element.setAttribute(type,typevalue)
    element.setAttribute(value,conetent)
    element.addEventListener(events,funcname)
    return element
}



function createDiv(tagname,attrname,attrval){
    var element=document.createElement(tagname)
    element.setAttribute(attrname,attrval)
    return element
}

function createBreak(taganme){
    var element=document.createElement(taganme)
    return element
}

function createRow(taganme,attrname,attrval){
    var element=document.createElement(taganme)
    element.setAttribute(attrname,attrval)
    return element
}


var head=document.createElement("p")
head.innerHTML="Calculator"
var container=createDiv("div","class","container")

var int=document.createElement("input")
int.setAttribute("type","text")
int.setAttribute("id","numi")
var brr=createBreak("br")

var row1=document.createElement("div")



var button1=creatrInput("input","class","numbers","type","button","value","9","click",num9)
var button2=creatrInput("input","class","numbers","type","button","value","8","click",num8)
var button3=creatrInput("input","class","numbers","type","button","value","7","click",num7)
var button4=creatrInput("input","class","numbers","type","button","value","+","click",add)
var bk=createBreak("br")


var button5=creatrInput("input","class","numbers","type","button","value","6","click",num6)
var button6=creatrInput("input","class","numbers","type","button","value","5","click",num5)
var button7=creatrInput("input","class","numbers","type","button","value","4","click",num4)
var button8=creatrInput("input","class","numbers","type","button","value","-","click",sub)
var br2=createRow("br","class","br1")

var button9=creatrInput("input","class","numbers","type","button","value","3","click",num3)
var button10=creatrInput("input","class","numbers","type","button","value","2","click",num2)
var button11=creatrInput("input","class","numbers","type","button","value","1","click",num1)
var button12=creatrInput("input","class","numbers","type","button","value","*","click",mul)
var br3=createBreak("br")

var button13=creatrInput("input","class","numbers","type","button","value","AC","click",clr)
var button14=creatrInput("input","class","numbers","type","button","value","0","click",num0)
var button15=creatrInput("input","class","numbers","type","button","value","/","click",div)
var button16=creatrInput("input","class","equal","type","button","value","=","click",calculate)
var br4=createBreak("br")

row1.append(head,int,brr,button1,button2,button3,button4,bk,button5,button6,button7,button8,br2,button9,button10,button11,button12,br3,button13,button14,button15,button16)
document.body.append(row1)


function clr(){
    document.getElementById("numi").value=""
}

function calculate(){
        var x=document.getElementById("numi").value
    var res=eval(x)
    document.getElementById("numi").value=res
}

function num9(){
    document.getElementById("numi").value+="9"
}
function num8(){
    document.getElementById("numi").value+="8"
}
function num7(){
    document.getElementById("numi").value+="7"
}
function add(){
    document.getElementById("numi").value+="+"
}
function num6(){
    document.getElementById("numi").value+="6"
}
function num5(){
    document.getElementById("numi").value+="5"
}
function num4(){
    document.getElementById("numi").value+="4"
}
function sub(){
    document.getElementById("numi").value+="-"
}
function num3(){
    document.getElementById("numi").value+="3"
}
function num2(){
    document.getElementById("numi").value+="2"
}
function num1(){
    document.getElementById("numi").value+="1"
}
function mul(){
    document.getElementById("numi").value+="*"
}
function num0(){
    document.getElementById("numi").value+="0"
}
function div(){
    document.getElementById("numi").value+="/"
}