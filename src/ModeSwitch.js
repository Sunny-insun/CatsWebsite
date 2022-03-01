class ModeSwitch {
    constructor($target){
        const $modeSwitch = document.createElement("input")
        const $label = document.createElement("label")
        $label.innerText ="dark mode"

        $modeSwitch.setAttribute("type","checkbox");
        this.$modeSwitch = $modeSwitch;
        $modeSwitch.className = "ModeSwitch";
        $target.appendChild($modeSwitch)
        $target.appendChild($label);
        $modeSwitch.addEventListener("click", (event) => {
            if (event.target.checked) {
                document.documentElement.setAttribute('color-theme', 'dark');
              } else {
                document.documentElement.setAttribute('color-theme', 'light');
              }
        })
    }

    render() {}
}