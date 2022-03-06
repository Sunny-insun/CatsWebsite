class SearchResult {
  $searchResult = null;
  data = null;
  onClick = null;

  constructor({ $target, initialData, onClick }) {
    this.$searchResult = document.createElement("div");
    this.$searchResult.className = "SearchResult";
    $target.appendChild(this.$searchResult);

    this.data = initialData;
    this.onClick = onClick;

    this.render();
  }

  setState(nextData) {
    this.data = nextData;
    this.render();
  }

  render() {
    this.$searchResult.innerHTML = this.data
      .map(
        cat => `
          <card class="item">
            <img src="" data-src=${cat.url} alt=${cat.name} title="${cat.name}" style="cursor:pointer;"/>
          </card>
        `
      )
      .join("");

    this.$searchResult.querySelectorAll(".item").forEach(($item, index) => {
    this.setLazyLoading($item.querySelector("img"));
      $item.addEventListener("click", () => {
        this.onClick(this.data[index]);
      });
    });
  }

  setLazyLoading(target){
    
    const options = {
      threshold: 0
    }

    const observer = new IntersectionObserver((elements) => {
      elements.forEach((element) => {
        if(element.isIntersecting){
          let lazyImage = element.target;
          
          lazyImage.src = lazyImage.dataset.srcset;
          lazyImage.srcset = lazyImage.dataset.src;
          // lazyImage.classList.remove("lazy");
          observer.unobserve(lazyImage);
        }
      });
    }, options);

    observer.observe(target);
  }
}
