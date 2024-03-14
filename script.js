
const api3 = "https://bible-api.com/romans%2012:1-2,5-7,9,13:1-9&10"
fetch(api3)
  .then((res) => res.json())
  .then((data) => {
   content3(data.verses)
  })
  .catch((error) => {
    console.error("Error:", error);
  });
/////////////////////////


// functions////////////////
const maindiv = document.createElement("div");
////////bible///////////////
function content3(versesData){
  
  maindiv.innerHTML = "";

    const div= document.createElement('div')
    div.id='verses';
    /////////////////////header///////////////
    let hed = header("bible", "bible-words!")//
   
///////////////header/////////////////////////////

  const h2 = document.createElement("h1")
  h2.classList.add("title")
    h2.innerHTML="Bible"
    div.appendChild(h2)
   
    const h1 = document.createElement("h1")
    h1.innerHTML="Bible words"
    h1.classList.add("facts")
    div.appendChild(h1)
////forEach///
    versesData.forEach((verse) => {
    
    const chapterVerseElement = document.createElement('p');
    chapterVerseElement.textContent = `${verse.book_name} ${verse.chapter}:${verse.verse}`;
    div.appendChild(chapterVerseElement);
    
    const verseTextElement = document.createElement('p');
    verseTextElement.classList.add("word");
    verseTextElement.textContent = verse.text;
    div.appendChild(verseTextElement);
    });
/////forEach///

    maindiv.appendChild(div);
    document.body.append(maindiv);
  
}
/////////////////////////bible//////////////////////////////

// Header/////////////////////////////////////////
function header (name, nametag){
      const header = document.createElement('header');
      header.classList.add('page-header');
      
      const projectName = document.createElement('h1');
      projectName.classList.add('project-name');
      projectName.textContent = `${name}`;
      
      const projectTagline = document.createElement('h2');
      projectTagline.classList.add('project-tagline');
      projectTagline.textContent = `daily ${nametag}`;
      
      header.appendChild(projectName);
      header.appendChild(projectTagline);
      maindiv.appendChild(header);

}
////////header////////////////////////////////////////////////


 