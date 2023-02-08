document.querySelector(".taste") /
    addEventListener("click", () => {
        document.querySelectorAll(".animation").forEach((element) => {
            element.className = element.className.replace("animation", "");
            const newClassName = `${element.className.trim()}-animation-on`;
            element.classList.add(newClassName);
        });
        setTimeout(() => {
            document.querySelector(".header-befor").classList.add("none");
            document.querySelector(".description").classList.add("none");
            document.querySelector(".tastes").classList.add("none");
            
        }, 4000);
    });
