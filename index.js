function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  
  var name = katzDeliLine[0];
  katzDeliLine.shift();
  if (katzDeliLine.length > 0)  {return "Currently serving ${name}";} 
  else  { return "There is nobody waiting to be served!";
} }

function currentLine(katzDeliLine){
  if (katzDeliLine.length===0) { return ""
}