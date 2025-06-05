// src/translator.js
export function translateToJavaScript(tree) {
    let dispositivoCond = '';
    let estadoCond = '';
    let dispositivoAccion = '';
    let accion = '';

    function buscarDatos(node) {
        if (!node) return;
        if (node.constructor?.name === 'Nombre_dispositivoContext') {
            if (!dispositivoCond) {
                dispositivoCond = node.getText();
            } else if (!dispositivoAccion) {
                dispositivoAccion = node.getText();
            }
        }
        if (node.constructor?.name === 'Valor_condicionContext' && !estadoCond) {
            estadoCond = node.getText();
        }
        if (node.constructor?.name === 'DesactivarContext' && !accion) {
            accion = 'desactivar';
        }
        if (node.children) {
            node.children.forEach(buscarDatos);
        }
    }
    buscarDatos(tree);

    // Si no hay dispositivoAccion, usar el mismo que la condición
    if (!dispositivoAccion) dispositivoAccion = dispositivoCond;

    // Estado inicial según la condición
    let valorInicial = (estadoCond === 'encendido') ? 'true' : 'false';

    // Crear ambos dispositivos si son diferentes
    let js = `const ${dispositivoCond} = { encendido: ${valorInicial}, desactivar: function() { this.encendido = false; } };\n`;
    if (dispositivoAccion !== dispositivoCond) {
        js += `const ${dispositivoAccion} = { encendido: true, desactivar: function() { this.encendido = false; } };\n`;
    }
    js += `if (${dispositivoCond}.encendido) ${dispositivoAccion}.desactivar();\n`;
    js += `console.log('${dispositivoCond}:', ${dispositivoCond});\n`;
    if (dispositivoAccion !== dispositivoCond) {
        js += `console.log('${dispositivoAccion}:', ${dispositivoAccion});\n`;
    }

    return js;
}