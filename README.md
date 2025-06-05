## Instrucciones para ejecutar la aplicación

### Requisitos previos

- Node.js instalado en tu computadora.
- JRE (Java Runtime Environment) instalado en tu computadora (solo necesario si vas a regenerar la gramática con ANTLR).
- Dependencias instaladas (ejecuta `npm install` en la carpeta del proyecto para asegurarte de que todo está listo).

### Ejecución de la aplicación

1. Clona este repositorio desde GitHub:
   ```
   git clone https://github.com/Pilaar10/recu51337
   cd antlr4-js-parser
   ```

2. Asegúrate de que los archivos de entrada (`input.txt`) estén presentes en la raíz del proyecto. Puedes usar ejemplos válidos o inválidos según lo que quieras probar.

3. Abre una terminal en la carpeta del proyecto:
   ```
   cd ruta/del/proyecto/antlr4-js-parser
   ```

4. Ejecuta el analizador con:
   ```
   node src/index.js
   ```

5. Si la entrada es válida, deberías ver en pantalla:
   - **Análisis léxico y sintáctico** del código fuente, indicando si la entrada es correcta o contiene errores. En caso de errores, se mostrará la línea y la causa del problema.
   - **Tabla de lexemas-tokens** reconocidos durante el análisis léxico.
   - **Árbol de análisis sintáctico** en formato de texto.
   - **Código JavaScript generado** a partir del archivo de entrada.

6. Si la entrada es incorrecta, el analizador mostrará los errores detectados y el árbol sintáctico reflejará los problemas encontrados.

---

**Nota:**  
Puedes modificar el archivo `input.txt` para probar diferentes ejemplos de entrada, tanto correctos como incorrectos.
