class ProgressBar {
    constructor({$target, data}){
        const $progressBar = document.createElement("section");
        $progressBar.className = "progressBar";
        this.$progressBar = $progressBar;
        $target.appendChild($progressBar)
        this.data = data;
        this.render(); 
   }

   render(){
        this.$progressBar.innerHTML = `<div class="container"> 
            <div id="loading" class="loading">
            Loading&#8230;     
            </div>
        </div>`
        const loadingBar = document.getElementById("loading");
        this.$loadingBar = loadingBar;
        if(this.data.visible) {
            loadingBar.style.display = "block"
       }else{
            loadingBar.style.display = "none";
       }
   }

   setVisibility(visible){
        if(visible){
            this.$loadingBar.style.display = "block";
        }else{
            this.$loadingBar.style.display = "none";
        }
   }
}