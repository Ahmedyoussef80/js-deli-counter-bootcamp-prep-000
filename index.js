function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  
  
  
  if (katzDeliLine.length > 0)  {
    katzDeliLine.shift();
    
    return "Currently serving ${katzDeliLine.shift()}.";} 
  else  { return "There is nobody waiting to be served!";
} }

function currentLine(katzDeliLine){
  if (katzDeliLine.length===0) { return "The line is currently empty.";}
  else if (katzDeliLine.length>0) {
    var newArray = [];
    for (i = 0; i < katzDeliLine.lengt; i++) { 
      newArray.push('${i+1}.${katzDeliLine[i]}');
      return "The line is currently: ${newArray.join(", ")}";}}}
  
  
