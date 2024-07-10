const Telegraf = require('telegraf');

const bot = new Telegraf('7447346857:AAHVgV9zXk26pKOuIIcJ_H3a0fBHF7qULdQ');

bot.inicio((ctx) => {
    ctx.reply('Bienvenido, digite su nombre para iniciar');
});

/// Variable para almacenar el nombre del usuario
let userName = '';
let currentMenu = '';

// Muestra el menú principal
function showMainMenu(ctx) {
    ctx.reply(`Buen día ${userName}, ¿En qué te puedo ayudar hoy?\n\n` +
        '1. Proceso de licenciamiento ambiental\n' +
        '2. Permisos y trámites ambientales\n' +
        '3. Certificaciones\n' +
        '4. Nombre por definir\n' +
        '5. ADMINISTRATIVA Y FINANCIERA\n' +
        '6. Vital\n' +
        '7. General\n' +
        '8. Nombre por definir 2\n' +
        '9. Jurídica\n' +
        '10. Otros');
}

// Muestra el submenú para Proceso de licenciamiento ambiental
function showLicenciamientoMenu(ctx) {
    ctx.reply('Proceso de licenciamiento ambiental:\n\n' +
        '1. Solicitud\n' +
        '2. Modificación\n' +
        '3. Cambio menor\n' +
        '4. Términos de referencia\n' +
        '5. Atrás');
}

// Maneja la elección del usuario en el menú principal
function handleMainMenuChoice(choice, ctx) {
    switch (choice) {
        case '1':
            currentMenu = 'licenciamiento';
            showLicenciamientoMenu(ctx);
            break;
        // Añade más casos para las otras opciones si es necesario
        default:
            ctx.reply('Opción no válida, por favor elige una opción válida de la lista.');
    }
}

// Maneja la elección del usuario en el submenú de licenciamiento
function handleLicenciamientoChoice(choice, ctx) {
    switch (choice) {
        case '1':
            currentMenu = 'solicitud';
            ctx.reply('Solicitud:\n\n' +
                '1. ¿Cuál es el proceso de solicitud de licencia ambiental?\n' +
                '2. ¿Cuál es el tiempo que se demora la solicitud de licencia ambiental?');
            break;
        case '2':
            currentMenu = 'modificacion';
            ctx.reply('Modificación:\n\n' +
                '1. ¿Cómo realizo el proceso de modificación de licencia?');
            break;
        case '3':
            currentMenu = 'cambioMenor';
            ctx.reply('Cambio menor:\n\n' +
                '1. ¿Cuánto tiempo se demora la solicitud de cambio menor de una licencia ambiental?\n' +
                '2. ¿Cómo solicito un cambio menor de una licencia ambiental?');
            break;
        case '4':
            currentMenu = 'terminos';
            ctx.reply('Términos de referencia:\n\n' +
                '1. ¿Dónde encuentro los términos de referencia de licenciamiento ambiental?');
            break;
        case '5':
            currentMenu = '';
            showMainMenu(ctx);
            break;
        default:
            ctx.reply('Opción no válida, por favor elige una opción válida de la lista.');
    }
}

// Maneja la elección del usuario en el submenú de solicitud
function handleSolicitudChoice(choice, ctx) {
    switch (choice) {
        case '1':
            ctx.reply('Consulte aquí la respuesta a su pregunta en https://www.anla.gov.co/tramites-y-servicios/servicios/abc-del-licenciamiento-ambiental');
            break;
        case '2':
            ctx.reply('El tiempo del trámite de licencia ambiental lo puede verificar en el Decreto 1076 de 2015: en la sección 6 trámite para la obtención de la licencia ambiental, desde el artículo 2.2.2.3.6.1. En promedio el trámite puede durar 90 días hábiles, sin embargo esta sujeto a solicitudes de información adicional, tiempos de radicación y otros factores.');
            break;
        default:
            ctx.reply('Opción no válida, por favor elige una opción válida de la lista.');
    }
}

// Maneja la elección del usuario en el submenú de modificación
function handleModificacionChoice(choice, ctx) {
    switch (choice) {
        case '1':
            ctx.reply('Para solicitar Modificación de licencia ambiental debe consultar el Decreto 1076 2015: sección 7 artículo 2.2.2.3.7.1, si va a realizar la radicación tenga en cuenta que el trámite tiene costo pero no esta establecido, para esto es necesario solicitar autoliquidación por servicio de evaluación, esta se realiza en la siguiente ruta: se ingresa a VITAL con usuario y contraseña / en la opción iniciar trámite ANLA/ Autoliquidación/ nueva solicitud de liquidación/luego encontrará el formulario de autoliquidación:\n\n' +
                'Liquidación: licencia ambiental\n' +
                'solicitud de liquidación: modificación\n' +
                'Trámite: Licencia ambiental / Plan de Manejo Ambiental');
            break;
        default:
            ctx.reply('Opción no válida, por favor elige una opción válida de la lista.');
    }
}

// Maneja la elección del usuario en el submenú de cambio menor
function handleCambioMenorChoice(choice, ctx) {
    switch (choice) {
        case '1':
            ctx.reply('El tiempo es de 20 días hábiles sin embargo esta sujeto a solicitudes de información adicional, tiempos de radicación y otros factores. Lo puede verificar en el Decreto 1076 de 2015, en la sección 7 modificación, cesión, integración, pérdida de vigencia de la licencia ambiental y cesación del trámite licenciamiento ambiental, en  el artículo 2.2.2.3.7.1 parágrafo 1.');
            break;
        case '2':
            ctx.reply('Debe verificar la siguiente normatividad por cada sector con el fin de confirmar si aplica el cambio menor\n\n' +
                '1) INFRAESTRUCTURA: Decreto  770 De 2014 Consúltelo aquí\n' +
                '2) AGROQUÍMICOS: Resolución 1442 De 2008. Consúltelo aquí\n' +
                '3) ENERGÍA PRESAS REPRESAS EMBALSES: Resolución 0376 de 2016 Consúltelo aquí\n' +
                '4) HIDROCARBUROS: Resolución 1892 de 2015.Consúltelo aquí\n' +
                '5) MINERÍA: Resolución 189 de 2014, Resolución 1259 de 2018. Consúltelo aquí\n\n' +
                'Si va a radicar su solicitud de cambio menor debe ingresar con su usuario y contraseña de VITAL en la ruta Iniciar trámite ANLA/Licencias ambientales/Cambios menores / radicar la solicitud.');
            break;
        default:
            ctx.reply('Opción no válida, por favor elige una opción válida de la lista.');
    }
}

// Maneja la elección del usuario en el submenú de términos de referencia
function handleTerminosChoice(choice, ctx) {
    switch (choice) {
        case '1':
            ctx.reply('Los términos de referencia por cada sector los puede verificar (aquí): https://www.anla.gov.co/normatividad/documentos-estrategicos/terminos-de-referencia');
            break;
        default:
            ctx.reply('Opción no válida, por favor elige una opción válida de la lista.');
    }
}

// Captura el nombre del usuario
bot.on('text', (ctx) => {
    if (!userName) {
        userName = ctx.message.text;
        showMainMenu(ctx);
    } else {
        if (currentMenu === '') {
            handleMainMenuChoice(ctx.message.text, ctx);
        } else if (currentMenu === 'licenciamiento') {
            handleLicenciamientoChoice(ctx.message.text, ctx);
        } else if (currentMenu === 'solicitud') {
            handleSolicitudChoice(ctx.message.text, ctx);
        } else if (currentMenu === 'modificacion') {
            handleModificacionChoice(ctx.message.text, ctx);
        } else if (currentMenu === 'cambioMenor') {
            handleCambioMenorChoice(ctx.message.text, ctx);
        } else if (currentMenu === 'terminos') {
            handleTerminosChoice(ctx.message.text, ctx);
        }
    }
});

bot.launch();