        let fechaActual = new Date().getTime();
        let diaActual = new Date().getDay();
        let mesActual = new Date().getMonth();
        let anoActual = new Date().getFullYear();

        let cumpleanos = prompt("dd-mm-aaaa").split("-");
        let diaCumpl = cumpleanos[0];
        let mesCumpl = cumpleanos[1] - 1;
        let anoCumpl = cumpleanos[2];
        let fechaCumpleanos = new Date(anoActual, mesCumpl, diaCumpl).getTime();

        if (fechaActual < fechaCumpleanos) {
            console.log(fechaCumpleanos - fechaActual);
              console.log((fechaCumpleanos-fechaActual)/(1000*60*60*24));
        } else {
            fechaCumpleanos = new Date(anoActual + 1, mesCumpl, diaCumpl).getTime()
            console.log(fechaCumpleanos - fechaActual);
             console.log((fechaCumpleanos-fechaActual)/(1000*60*60*24));

        }

