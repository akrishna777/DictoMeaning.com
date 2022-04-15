let submit = document.getElementById('searchForm')
submit.addEventListener('submit', onFormSubmit)

function originNotFound(data) {
  let result = `
    <div class="container my-4" id="display">
        <h2><b>${data[0].word}</b></h2>
        
        <hr>
        <h3>Meaning</h3>
        <p><b>Part of Speech: </b><i>${data[0].meanings[0].partOfSpeech}</i> </p>
        <p><b>1.&nbsp </b>${data[0].meanings[0].definitions[0].definition} <br>
        <b>E.g. </b>${data[0].meanings[0].definitions[0].example} <br>
        <b>Synonyms:</b> <i>${data[0].meanings[0].definitions[0].synonyms[0]}, ${data[0].meanings[0].definitions[0].synonyms[1]}, ${data[0].meanings[0].definitions[0].synonyms[2]}</i></p>

        <h3>Origin</h3>
        <p><i>Not Found</i></p>

        <h3>Phonetics</h3>
        <p><i>${data[0].phonetic}</i>&nbsp<a href="${data[0].phonetics[0].audio}"  target="_blank"><span class="material-icons-outlined">
        volume_up
        </span></a></p>

    </div>
    `
  return result
}

function originNotFound2(data) {
  let result = `
    <div class="container my-4" id="display">
        <h2><b>${data[0].word}</b></h2>
        
        <hr>
        <h3>Meaning</h3>
        <p><b>Part of Speech: </b><i>${data[0].meanings[0].partOfSpeech}</i> </p>
        <p><b>1.&nbsp </b>${data[0].meanings[0].definitions[0].definition} <br>
        <b>E.g. </b>${data[0].meanings[0].definitions[0].example} <br>
        <b>Synonyms:</b> <i>${data[0].meanings[0].definitions[0].synonyms[0]}, ${data[0].meanings[0].definitions[0].synonyms[1]}, ${data[0].meanings[0].definitions[0].synonyms[2]}</i></p>
        <p><b>2.&nbsp </b>${data[0].meanings[0].definitions[1].definition} <br>
        <b>E.g. </b>${data[0].meanings[0].definitions[1].example}<br>
        <b>Synonyms:</b> <i>${data[0].meanings[0].definitions[1].synonyms[0]}, ${data[0].meanings[0].definitions[0].synonyms[1]}, ${data[0].meanings[0].definitions[0].synonyms[2]}</i></p>

        <h3>Origin</h3>
        <p><i>Not Found</i></p>

        <h3>Phonetics</h3>
        <p><i>${data[0].phonetic}</i>&nbsp<a href="${data[0].phonetics[0].audio}"  target="_blank"><span class="material-icons-outlined">
        volume_up
        </span></a></p>

    </div>
    `

  return result
}

function phoneticNotFound(data) {
  let result = `
    <div class="container my-4" id="display">
        <h2><b>${data[0].word}</b></h2>
        
        <hr>
        <h3>Meaning</h3>
        <p><b>Part of Speech: </b><i>${data[0].meanings[0].partOfSpeech}</i> </p>
        <p><b>1.&nbsp </b>${data[0].meanings[0].definitions[0].definition} <br>
        <b>E.g. </b>${data[0].meanings[0].definitions[0].example} <br>
        <b>Synonyms:</b> <i>${data[0].meanings[0].definitions[0].synonyms[0]}, ${data[0].meanings[0].definitions[0].synonyms[1]}, ${data[0].meanings[0].definitions[0].synonyms[2]}</i></p>

        <h3>Origin</h3>
        <p><i>${data[0].origin}</i></p>

        <h3>Phonetics</h3>
        <p><i>Not Found</i>&nbsp</p>

    </div>
    `
  return result
}

function phoneticNotFound2(data) {
  let result = `
    <div class="container my-4" id="display">
        <h2><b>${data[0].word}</b></h2>
        
        <hr>
        <h3>Meaning</h3>
        <p><b>Part of Speech: </b><i>${data[0].meanings[0].partOfSpeech}</i> </p>
        <p><b>1.&nbsp </b>${data[0].meanings[0].definitions[0].definition} <br>
        <b>E.g. </b>${data[0].meanings[0].definitions[0].example} <br>
        <b>Synonyms:</b> <i>${data[0].meanings[0].definitions[0].synonyms[0]}, ${data[0].meanings[0].definitions[0].synonyms[1]}, ${data[0].meanings[0].definitions[0].synonyms[2]}</i></p>
        <p><b>2.&nbsp </b>${data[0].meanings[0].definitions[1].definition} <br>
        <b>E.g. </b>${data[0].meanings[0].definitions[1].example}<br>
        <b>Synonyms:</b> <i>${data[0].meanings[0].definitions[1].synonyms[0]}, ${data[0].meanings[0].definitions[0].synonyms[1]}, ${data[0].meanings[0].definitions[0].synonyms[2]}</i></p>

        <h3>Origin</h3>
        <p><i>${data[0].origin}</i></p>

        <h3>Phonetics</h3>
        <p><i>Not Found</i>&nbsp</p>
    </div>
    `
  return result
}

function phoneticAndOriginNotFound(data) {
  let result = `
    <div class="container my-4" id="display">
        <h2><b>${data[0].word}</b></h2>
        
        <hr>
        <h3>Meaning</h3>
        <p><b>Part of Speech: </b><i>${data[0].meanings[0].partOfSpeech}</i> </p>
        <p><b>1.&nbsp </b>${data[0].meanings[0].definitions[0].definition} <br>
        <b>E.g. </b>${data[0].meanings[0].definitions[0].example} <br>
        <b>Synonyms:</b> <i>${data[0].meanings[0].definitions[0].synonyms[0]}, ${data[0].meanings[0].definitions[0].synonyms[1]}, ${data[0].meanings[0].definitions[0].synonyms[2]}</i></p>

        <h3>Origin</h3>
        <p><i>Not Found</i></p>

        <h3>Phonetics</h3>
        <p><i>Not Found</i>&nbsp</p>

    </div>
    `
  return result
}

function phoneticAndOriginNotFound2(data) {
  let result = `
      <div class="container my-4" id="display">
        <h2><b>${data[0].word}</b></h2>
        
        <hr>
        <h3>Meaning</h3>
        <p><b>Part of Speech: </b><i>${data[0].meanings[0].partOfSpeech}</i> </p>
        <p><b>1.&nbsp </b>${data[0].meanings[0].definitions[0].definition} <br>
        <b>E.g. </b>${data[0].meanings[0].definitions[0].example} <br>
        <b>Synonyms:</b> <i>${data[0].meanings[0].definitions[0].synonyms[0]}, ${data[0].meanings[0].definitions[0].synonyms[1]}, ${data[0].meanings[0].definitions[0].synonyms[2]}</i></p>
        <p><b>2.&nbsp </b>${data[0].meanings[0].definitions[1].definition} <br>
        <b>E.g. </b>${data[0].meanings[0].definitions[1].example}<br>
        <b>Synonyms:</b> <i>${data[0].meanings[0].definitions[1].synonyms[0]}, ${data[0].meanings[0].definitions[0].synonyms[1]}, ${data[0].meanings[0].definitions[0].synonyms[2]}</i></p>

        <h3>Origin</h3>
        <p><i>Not Found</i></p>

        <h3>Phonetics</h3>
        <p><i>Not Found</i>&nbsp</p>
      </div>
      `
  return result
}

function printData(data) {
  let result = document.getElementById('results')
  console.log(data[0].meanings[0].definitions.length)
  if (data[0].meanings[0].definitions.length === 1) {
    if (data[0].origin === undefined && data[0].phonetic === undefined) {
      result.innerHTML = phoneticAndOriginNotFound(data)
    } else if (data[0].phonetic === undefined && data[0].origin) {
      result.innerHTML = phoneticNotFound(data)
    } else if (data[0].phonetic && data[0].origin === undefined) {
      result.innerHTML = originNotFound(data)
    }
  } else {
    if (data[0].origin === undefined && data[0].phonetic === undefined) {
      result.innerHTML = phoneticAndOriginNotFound2(data)
    } else if (data[0].phonetic === undefined && data[0].origin) {
      result.innerHTML = phoneticNotFound2(data)
    } else if (data[0].phonetic && data[0].origin === undefined) {
      result.innerHTML = originNotFound2(data)
    }
  }
}

function onFormSubmit(e) {
  e.preventDefault()
  let word = document.getElementById('searchWord').value
  getData(word)
}

function getData(word) {
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then((response) => response.json())
    // .then(data => console.log(data))
    .then((data) => printData(data))
    .catch((error) => console.log('error', error))
}

function clear1() {
  let result = document.getElementById('results')
  result.innerHTML = ''
}
