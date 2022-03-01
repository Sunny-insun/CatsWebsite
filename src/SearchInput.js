const TEMPLATE = '<input type="text">';

class SearchInput {
  constructor({ $target, onSearch }) {
    const $searchInput = document.createElement("input");
    $searchInput.setAttribute("autofocus", true); //자동으로 포커스
    $searchInput.addEventListener("click", (e) => {
      if(e.target.value) {
        e.target.value = "";
      }
    })
    this.$searchInput = $searchInput;
    this.$searchInput.placeholder = "고양이를 검색해보세요.|";
    
    $searchInput.className = "SearchInput";
    $target.appendChild($searchInput);
    
    let searched = false;

    
    $searchInput.addEventListener("keypress", e => {
      if (e.keyCode === 13 && !searched) {
        onSearch(e.target.value);  
      }
    });

    console.log("SearchInput created.", this);
  }
  render() {}
}
