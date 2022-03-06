class SearchHistory {
    constructor({$target}){
        this.$target = $target;
        this.KEYWORD_PREFIX = "keyword"
        this.keywordList = [];
        const $searchHistory = document.createElement("ul")
        $searchHistory.className ="searchHistory"
        this.$searchHistory = $searchHistory;
        $target.appendChild(this.$searchHistory);
    }


    addKeyword(keyword){
        // this.keywordList.push(keyword) //keyword 리스트에 넣기
        const elementListLength = document.querySelectorAll(".keyword").length;

        if(elementListLength === 5) {
            //5개보다많을 때는 element 만들 필요 x
            // this.keywordList.pop();
            // this.keywordList.unshift(keyword); //앞에다 추가하기.
            const element = document.querySelector('.keyword')
            this.$searchHistory.removeChild(element);
        }

        const keywordTag = document.createElement("li");
        keywordTag.className= this.KEYWORD_PREFIX;
        keywordTag.innerHTML = keyword;
        this.$searchHistory.appendChild(keywordTag);
          
    }
}