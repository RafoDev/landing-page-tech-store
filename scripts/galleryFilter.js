const $options = document.querySelector(
    ".productos__button-container"
).children;
const $item = document.querySelector(".productos__gallery").children;

for (let i = 0; i < $options.length; i++) {
    $options[i].addEventListener("click", function () {
        for (let j = 0; j < $options.length; j++) {
            $options[j].classList.remove("current");
        }
        this.classList.add("current");

        let targetData = this.getAttribute("data-target");

        for (let k = 0; k < $item.length; k++) {
            $item[k].style.animation = "active .75s ease";
            
            $item[k].classList.remove("active");
            $item[k].classList.add("delete");
            
            if($item[k].getAttribute("data-item") == targetData || targetData == "all"){
                $item[k].classList.add("active");
                $item[k].classList.remove("delete");
            }
            setTimeout(function() {
                $item[k].style.animation = "none";
            }, 750);
        }
    });   
}