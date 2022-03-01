class RandomButton{
    constructor({$target, data}){
        this.$target = $target;
        this.data = data;
        this.onClick = data.onClick; //click
        const $randomButton = document.createElement("button");
        $randomButton.innerText = "랜덤고양이"
        $randomButton.className = "randomButton"
        this.$randomButton = $randomButton;
        $target.appendChild(this.$randomButton);
        this.render();
    }

    render(){
        this.$randomButton.addEventListener("click", () => {
            this.onClick()
        })
    }
}