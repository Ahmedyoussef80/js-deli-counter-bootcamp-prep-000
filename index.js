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
  if (katzDeliLine.length===0) { return "The line is currently empty.";}
  else (katzDeliLine.length>0) {
    var newArray = [];
    for (var i = 0, i < katzDeliLine.lengt, i++) { 
      newArray.push('${i+1}.${katzDeliLine[i]}')
      return ""
  }
  
  function currentLine(line) {
+  if (!line.length) {
+    return `The line is currently empty.`
+  }
+  var NumberandName = []
+  for (let i = 0; i < line.length; i++) {
+    NumberandName.push(`${i + 1}. ${line[i]}`)
+  }
+  return `The line is currently: ${NumberandName.join(", ")}`
+}
}