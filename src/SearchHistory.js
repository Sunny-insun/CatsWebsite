class SearchHistory {
    constructor({$target, onClick}){
        this.$target = $target;
        this.onClick = onClick;
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
        
        //눌렀을 때, 검색되게 이벤트 추가.
        keywordTag.addEventListener("click",(event) => {
            console.dir(event);
            this.onClick(event.target.innerHTML);
        })

        this.$searchHistory.appendChild(keywordTag);
          
    }
}