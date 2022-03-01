class SearchHistory {
    constructor({$target}){
        this.$target = $target;
        const $searchHistory = document.createElement("div")
        $searchHistory.className ="searchHistory"
        this.$searchHistory = $searchHistory;
        $target.appendChild(this.$searchHistory);
    }

    addKeyword(keyword){
        
        const keywordTag = document.createElement("h3");
        keywordTag.innerHTML = keyword;
        this.$searchHistory.appendChild(keywordTag);
    }
}