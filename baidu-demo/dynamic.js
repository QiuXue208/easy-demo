function setClassName(){
    var keyword = document.getElementById('keyword')
    if(keyword.value){
        suggestion.classList.add('active')
      }else{
        suggestion.classList.remove('active')
      }
  }