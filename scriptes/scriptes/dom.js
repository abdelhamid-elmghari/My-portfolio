//Mpusemove of an element 
export function mouseMove(btn) {
    btn.addEventListener("mousemove", function(e) {
        let x = e.pageX - btn.offsetLeft;
        let y = e.pageY - btn.offsetTop;
        btn.style.setProperty("--x", x + "px");
        btn.style.setProperty("--y", y + "px");
    })
}
export function modes(mode, body) {
    mode.addEventListener("click", function() {
        if (body.classList.contains("color-prefer")) {
            body.classList.remove("color-prefer");
            mode.classList.remove("fa-moon");
            mode.classList.add("fa-sun");
        } else {
            body.classList.add("color-prefer");
            mode.classList.add("fa-moon");
            mode.classList.remove("fa-sun");
        }
    });
}
export function displyMinu(open, close, nav) {
    open.addEventListener("click", function() {
        if (!nav.classList.contains("nav_display")) {
            nav.classList.add("nav_display");
        }
    })
    close.addEventListener("click", function() {
        if (nav.classList.contains("nav_display")) {
            nav.classList.remove("nav_display");
        }
    })
}

export function scrolling(links, button_up) {
    window.onscroll = () => {
        if (window.scrollY >= 50) {
            links.classList.add("bg-nav-scrolling");
            button_up.classList.add("display");
        } else {
            links.classList.remove("bg-nav-scrolling");
            button_up.classList.remove("display");
        }
    }
    button_up.addEventListener("click", function() {
        window.scrollTo(0, 0);
    })
}