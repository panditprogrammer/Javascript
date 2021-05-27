let rgb_input = document.getElementById("rgb");
let rgba_input = document.getElementById("rgba");
let hex_input = document.getElementById("hex");
let hsla_input = document.getElementById("hsla");
let hsva_input = document.getElementById("hsva");
let cmyk_input = document.getElementById("cmyk");



let picker = Pickr.create({
    el: '.color-picker',
    theme: 'classic', // or 'monolith', or 'nano'

    swatches: [
        // red 
        'rgba(171,2,2,1)',
        'rgba(240,2,2,1)',
        'rgba(201,2,2,1)',
        'rgba(220,2,2,1)',
        'rgba(159,49,49,1)',
        'rgba(235,89,89,1)',
        'rgba(255, 0, 0, 1)',
        'rgba(243,52,52,1)',
        'rgba(239,133,133,1)',
        'rgba(255,0,0,0.59)',
        'rgba(242,51,51,0.55)',
        'rgba(238,132,132,0.5)',
        'rgba(234,88,88,0.5)',
        'rgba(170,1,1,0.53)',
        'rgba(159,49,49,0.59)',

        // green 
        'rgba(2,171,2,1)',
        'rgba(2,240,2,1)',
        'rgba(2,201,2,1)',
        'rgba(2,220,2,1)',
        'rgba(49,159,49,1)',
        'rgba(89,235,89,1)',
        'rgba(0,255,0, 1)',
        'rgba(52,243,52,1)',
        'rgba(133,239,133,1)',
        'rgba(0,255,0,0.59)',
        'rgba(51,242,51,0.55)',
        'rgba(132,238,132,0.5)',
        'rgba(88,234,88,0.5)',
        'rgba(1,170,1,0.53)',
        'rgba(49,159,49,0.59)',



    ],

    components: {

        // Main components
        preview: false,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: false,
            rgba: false,
            hsla: false,
            hsva: false,
            cmyk: false,
            input: false,
            clear: false,
            save: false
        }
    }

});


picker.on('change', (...args) => {

    // rgba color code 
    let color = args[0].toRGBA();

    let R = Math.floor(color[0]);
    let G = Math.floor(color[1]);
    let B = Math.floor(color[2]);
    let A = color[3];

    let rgba_color = `rgba(${R},${G},${B},${A})`;
    // rgb color code 
    let rgb_color = `rgb(${R},${G},${B})`;

    // hexa color code 
    color = args[0].toHEXA();

    let Hex_r = color[0];
    let Hex_g = color[1];
    let Hex_b = color[2];
    let Hex_a = color[3];

    if (Hex_r === undefined) {

        Hex_r = "ff";
    }
    else if (Hex_g === undefined) {
        Hex_g = "ff";
    }
    else if (Hex_b === undefined) {
        Hex_b = "ff";
    }
    else if (Hex_a === undefined) {
        Hex_a = "ff";
    }

    console.log(Hex_a);

    let hexa_color = `#${Hex_r}${Hex_g}${Hex_b}${Hex_a}`;

    // hsla color code 
    color = args[0].toHSLA();

    let hsla_H = Math.round(color[0]);
    let hsla_S = Math.round(color[1]);
    let hsla_L = Math.round(color[2]);
    let hsla_A = color[3];

    let hsla_color = `hsla(${hsla_H},${hsla_S}%,${hsla_L},${hsla_A})`;

    // hsva color code 
    color = args[0].toHSVA();

    let hsva_H = Math.round(color[0]);
    let hsva_S = Math.round(color[1]);
    let hsva_V = Math.round(color[2]);
    let hsva_A = color[3];

    let hsva_color = `hsva(${hsva_H},${hsva_S}%,${hsva_V},${hsva_A})`;

    // cmyk color code 
    color = args[0].toCMYK();

    let cmyk_C = Math.round(color[0]);
    let cmyk_M = Math.round(color[1]);
    let cmyk_Y = Math.round(color[2]);
    let cmyk_K = Math.round(color[3]);

    let cmyk_color = `cmyk(${cmyk_C}%,${cmyk_M}%,${cmyk_Y}%,${cmyk_K})`;

    // putting the value in Selection box 
    rgb_input.value = rgb_color;
    rgba_input.value = rgba_color;
    hex_input.value = hexa_color;
    hsla_input.value = hsla_color;
    hsva_input.value = hsva_color;
    cmyk_input.value = cmyk_color;

    // change color of preview text 
    let html_element = document.querySelectorAll('.change_color');
    let html_element_bg = document.querySelectorAll('.change_bg');
    let html_element_border = document.querySelector('.border');
    // console.log(html_element);
    for (let index = 0; index < html_element.length; index++) {
        html_element[index].style.color = rgba_color;

    }

    // change backgroundColor of preview 
    for (let index = 0; index < html_element_bg.length; index++) {
        html_element_bg[index].style.backgroundColor = rgba_color;

    }
    html_element_border.style.borderColor = rgba_color;



});


