console.log("app is running!");

class App {
  $target = null;
  data = [];

  constructor($target) {
    this.$target = $target;
    

    //progress
    this.progressBar = new ProgressBar({
      $target,
      data: {
        visible: false //처음엔 숨기기.
      }
    });

    this.modeSwitch = new ModeSwitch($target);
    this.searchInput = new SearchInput({
      $target,
      onSearch: keyword => this.search(keyword)
    });

    this.searchHistory = new SearchHistory({
      $target,
      onClick: (keyword) => this.search(keyword)
    })

    this.searchResult = new SearchResult({
      $target,
      initialData: this.data,
      onClick: image => {
        this.progressBar.setVisibility(true);
        api.fetchCatDetail(image.id).then((res) => {
          const response = res;
          this.imageInfo.setState({
            visible: true,
            image: response.data,
          })
          this.progressBar.setVisibility(false);
        });
       
      }
    });

    this.imageInfo = new ImageInfo({
      $target,
      data: {
        visible: false,
        image: null
      }
    });

   this.randomButton = new RandomButton({
    $target,     
     data: {
       onClick: ()=>{
         this.progressBar.setVisibility(true);
         api.fetchRandomCats().then(({data}) => {
          this.setState(data)
          this.progressBar.setVisibility(false);
         })
       }
     }
   })
 
  }

  setState(nextData) {
    console.log(this);
    this.data = nextData;
    this.searchResult.setState(nextData);
  }

  //검색
  search(keyword){
    this.searchHistory.addKeyword(keyword);
    if(!keyword){
      alert("검색어를 입력해주세요.")
      return;
    }

    this.progressBar.setVisibility(true);
    api.fetchCats(keyword).then(({ data }) => {
      this.progressBar.setVisibility(false);
     
      
      if(data.length > 0) {
        this.setState(data)
      }else{
          alert("검색 결과가 없습니다!")
        }
      }
    )
  }
}
