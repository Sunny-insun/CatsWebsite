class ImageInfo {
  $imageInfo = null;
  data = null;

  constructor({ $target, data }) {
   
    const $imageInfo = document.createElement("section");
    $imageInfo.className = "ImageInfo";
    this.$imageInfo = $imageInfo;
    $target.appendChild($imageInfo);

    this.data = data;

    this.render();
  }

  setState(nextData) {
    this.data = nextData;
    console.log("data == " + JSON.stringify(nextData));
    this.render();
  }

  render() {
    if (this.data.visible) {
      const { name, url, temperament, origin } = this.data.image;
      console.log("name == " + name + " , url == " + url + ", temperament == " + temperament + " , origin == " + origin)
      
      this.$imageInfo.innerHTML = `
        <card class="content-wrapper" id="content-wrapper">
          <div class="title">
            <h1 class="title">${name}</h1>
            <button class="close" id="close-button">x</button>
          </div>
          <img src="${url}" alt="${name}"/>        
          <div class="description">
            <div class="content">성격: ${temperament}</div>
            <div class="content">태생: ${origin}</div>
          </div>
        </card>`;
      this.$imageInfo.classList.remove("disappear");
      this.$imageInfo.classList.add("appear");
      
      const closeButton = document.getElementById("close-button");
      closeButton.addEventListener("click", (e) =>{ 
        if (this.$imageInfo.classList.contains('appear')) {
          this.$imageInfo.classList.add('disappear');
          setTimeout(()=>{this.$imageInfo.classList.remove('appear')},1000);
        }
      })

      closeButton.style.color = "black";
      closeButton.style.width = "20px";
      closeButton.style.height = "20px";

      //외부 클릭시 닫기
    
      document.addEventListener("click", (event) => {

        var target = event.target;
    
        if(target == event.currentTarget.querySelector(".content-wrapper") )
            return ;
        var elements = event.currentTarget.querySelector(".content-wrapper").querySelectorAll("div, img");
        for(var i=0; i<elements.length; i++) {
            if( elements[i] == target ) return ;
        }
    
        this.$imageInfo.classList.add("disappear");
        setTimeout(()=>{this.$imageInfo.classList.remove("appear")},1000);

      })
      
      //close from esc
      window.onkeyup = (e) => {
        if(e.key === "Escape"){
          this.$imageInfo.classList.add("disappear");
          setTimeout(()=>{this.$imageInfo.classList.remove("appear")},1000);
        }
      }
    } else {
      this.$imageInfo.classList.add("hidden");
    }
  }
}
