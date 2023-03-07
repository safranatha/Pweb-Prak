selector = document.getElementsByTagName("p");
selector[2].style.backgroundColor = "lightblue";

for (let i=0; i<selector.length;i++){
    selector[i].style.backgroundColor = "red";
}


/* const paragraphs = document.getElementsByTagName("p");
Array.from(paragraphs).forEach(paragraph => {
  paragraph.style.backgroundColor = "red";
}); */