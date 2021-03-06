
//Helper function to get value by id
function getValue(name){
  return document.getElementById(name).value
}

function validateSubmission(){
  //save all the input values
  const title = getValue('title')
  const url = getValue('img')
  const author = getValue('date')
  const tags = getValue('tags')
  const description = getValue('description')
  
  //generate a filename
  const filename = title.replace(/\s/g, '-') + ".md"
  
  //Format tags 
  const formattedTags = '["' + tags.replace(/,/g, '","') + '"]'
  
  
  //Generate a string mimicing the file structure
  //Indentation is important here
  let fileText = `---
layout: post
title: "${title}"
img: "${img}"
date: "${date}"
tags: ${formattedTags}
---
${description}`
  
  //Encode string to URI format
  const encodedFileText = encodeURIComponent(fileText)

  //Generate a github link with query parameter
  const githubQueryLink = "https://github.com/madewgn/madewgn.github.io/new/master/_posts/new?value=" + encodedFileText +"&filename=" + filename
  
  //Open in a new tab
window.open(githubQueryLink) 
  
}
