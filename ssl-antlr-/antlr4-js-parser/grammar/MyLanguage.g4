// This file contains the ANTLR grammar definition for the specific language described in EBNF.
// It defines the rules for parsing the language, including program structure, conditions, actions, and identifiers.

grammar MyLanguage;

programa: regla* EOF;

regla: 'cuando' condicion 'entonces' accion ';';

condicion: nombre_dispositivo estado_condicion valor_condicion;

nombre_dispositivo: IDENTIFICADOR;

estado_condicion: 'es' | 'mayor que' | 'menor que';

valor_condicion: estado | NUMERO;

estado: 'encendido' | 'apagado';

accion: accion_simple;

accion_simple: activar | desactivar | ajustar;

activar: 'activar' nombre_dispositivo;
desactivar: 'desactivar' nombre_dispositivo;
ajustar: 'ajustar' nombre_dispositivo 'a' NUMERO;

NUMERO: [0-9]+;
IDENTIFICADOR: [a-zA-Z][a-zA-Z0-9]*;

WS: [ \t\r\n]+ -> skip;