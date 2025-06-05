// Generated from grammar/MyLanguage.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import MyLanguageListener from './MyLanguageListener.js';
const serializedATN = [4,1,15,71,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,5,0,26,8,
0,10,0,12,0,29,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,3,1,
3,1,4,1,4,1,5,1,5,3,5,49,8,5,1,6,1,6,1,7,1,7,1,8,1,8,1,8,3,8,58,8,8,1,9,
1,9,1,9,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,11,0,0,12,0,2,4,6,8,10,
12,14,16,18,20,22,0,2,1,0,4,6,1,0,7,8,62,0,27,1,0,0,0,2,32,1,0,0,0,4,38,
1,0,0,0,6,42,1,0,0,0,8,44,1,0,0,0,10,48,1,0,0,0,12,50,1,0,0,0,14,52,1,0,
0,0,16,57,1,0,0,0,18,59,1,0,0,0,20,62,1,0,0,0,22,65,1,0,0,0,24,26,3,2,1,
0,25,24,1,0,0,0,26,29,1,0,0,0,27,25,1,0,0,0,27,28,1,0,0,0,28,30,1,0,0,0,
29,27,1,0,0,0,30,31,5,0,0,1,31,1,1,0,0,0,32,33,5,1,0,0,33,34,3,4,2,0,34,
35,5,2,0,0,35,36,3,14,7,0,36,37,5,3,0,0,37,3,1,0,0,0,38,39,3,6,3,0,39,40,
3,8,4,0,40,41,3,10,5,0,41,5,1,0,0,0,42,43,5,14,0,0,43,7,1,0,0,0,44,45,7,
0,0,0,45,9,1,0,0,0,46,49,3,12,6,0,47,49,5,13,0,0,48,46,1,0,0,0,48,47,1,0,
0,0,49,11,1,0,0,0,50,51,7,1,0,0,51,13,1,0,0,0,52,53,3,16,8,0,53,15,1,0,0,
0,54,58,3,18,9,0,55,58,3,20,10,0,56,58,3,22,11,0,57,54,1,0,0,0,57,55,1,0,
0,0,57,56,1,0,0,0,58,17,1,0,0,0,59,60,5,9,0,0,60,61,3,6,3,0,61,19,1,0,0,
0,62,63,5,10,0,0,63,64,3,6,3,0,64,21,1,0,0,0,65,66,5,11,0,0,66,67,3,6,3,
0,67,68,5,12,0,0,68,69,5,13,0,0,69,23,1,0,0,0,3,27,48,57];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MyLanguageParser extends antlr4.Parser {

    static grammarFileName = "MyLanguage.g4";
    static literalNames = [ null, "'cuando'", "'entonces'", "';'", "'es'", 
                            "'mayor que'", "'menor que'", "'encendido'", 
                            "'apagado'", "'activar'", "'desactivar'", "'ajustar'", 
                            "'a'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, "NUMERO", "IDENTIFICADOR", 
                             "WS" ];
    static ruleNames = [ "programa", "regla", "condicion", "nombre_dispositivo", 
                         "estado_condicion", "valor_condicion", "estado", 
                         "accion", "accion_simple", "activar", "desactivar", 
                         "ajustar" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MyLanguageParser.ruleNames;
        this.literalNames = MyLanguageParser.literalNames;
        this.symbolicNames = MyLanguageParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MyLanguageParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 27;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1) {
	            this.state = 24;
	            this.regla();
	            this.state = 29;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 30;
	        this.match(MyLanguageParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	regla() {
	    let localctx = new ReglaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, MyLanguageParser.RULE_regla);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        this.match(MyLanguageParser.T__0);
	        this.state = 33;
	        this.condicion();
	        this.state = 34;
	        this.match(MyLanguageParser.T__1);
	        this.state = 35;
	        this.accion();
	        this.state = 36;
	        this.match(MyLanguageParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MyLanguageParser.RULE_condicion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38;
	        this.nombre_dispositivo();
	        this.state = 39;
	        this.estado_condicion();
	        this.state = 40;
	        this.valor_condicion();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nombre_dispositivo() {
	    let localctx = new Nombre_dispositivoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MyLanguageParser.RULE_nombre_dispositivo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this.match(MyLanguageParser.IDENTIFICADOR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	estado_condicion() {
	    let localctx = new Estado_condicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, MyLanguageParser.RULE_estado_condicion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 112) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor_condicion() {
	    let localctx = new Valor_condicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, MyLanguageParser.RULE_valor_condicion);
	    try {
	        this.state = 48;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 7:
	        case 8:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 46;
	            this.estado();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 47;
	            this.match(MyLanguageParser.NUMERO);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	estado() {
	    let localctx = new EstadoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, MyLanguageParser.RULE_estado);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        _la = this._input.LA(1);
	        if(!(_la===7 || _la===8)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	accion() {
	    let localctx = new AccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, MyLanguageParser.RULE_accion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        this.accion_simple();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	accion_simple() {
	    let localctx = new Accion_simpleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, MyLanguageParser.RULE_accion_simple);
	    try {
	        this.state = 57;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 9:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 54;
	            this.activar();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 55;
	            this.desactivar();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 56;
	            this.ajustar();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	activar() {
	    let localctx = new ActivarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, MyLanguageParser.RULE_activar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this.match(MyLanguageParser.T__8);
	        this.state = 60;
	        this.nombre_dispositivo();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	desactivar() {
	    let localctx = new DesactivarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, MyLanguageParser.RULE_desactivar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this.match(MyLanguageParser.T__9);
	        this.state = 63;
	        this.nombre_dispositivo();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ajustar() {
	    let localctx = new AjustarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, MyLanguageParser.RULE_ajustar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this.match(MyLanguageParser.T__10);
	        this.state = 66;
	        this.nombre_dispositivo();
	        this.state = 67;
	        this.match(MyLanguageParser.T__11);
	        this.state = 68;
	        this.match(MyLanguageParser.NUMERO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

MyLanguageParser.EOF = antlr4.Token.EOF;
MyLanguageParser.T__0 = 1;
MyLanguageParser.T__1 = 2;
MyLanguageParser.T__2 = 3;
MyLanguageParser.T__3 = 4;
MyLanguageParser.T__4 = 5;
MyLanguageParser.T__5 = 6;
MyLanguageParser.T__6 = 7;
MyLanguageParser.T__7 = 8;
MyLanguageParser.T__8 = 9;
MyLanguageParser.T__9 = 10;
MyLanguageParser.T__10 = 11;
MyLanguageParser.T__11 = 12;
MyLanguageParser.NUMERO = 13;
MyLanguageParser.IDENTIFICADOR = 14;
MyLanguageParser.WS = 15;

MyLanguageParser.RULE_programa = 0;
MyLanguageParser.RULE_regla = 1;
MyLanguageParser.RULE_condicion = 2;
MyLanguageParser.RULE_nombre_dispositivo = 3;
MyLanguageParser.RULE_estado_condicion = 4;
MyLanguageParser.RULE_valor_condicion = 5;
MyLanguageParser.RULE_estado = 6;
MyLanguageParser.RULE_accion = 7;
MyLanguageParser.RULE_accion_simple = 8;
MyLanguageParser.RULE_activar = 9;
MyLanguageParser.RULE_desactivar = 10;
MyLanguageParser.RULE_ajustar = 11;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyLanguageParser.RULE_programa;
    }

	EOF() {
	    return this.getToken(MyLanguageParser.EOF, 0);
	};

	regla = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ReglaContext);
	    } else {
	        return this.getTypedRuleContext(ReglaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.exitPrograma(this);
		}
	}


}



class ReglaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyLanguageParser.RULE_regla;
    }

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	accion() {
	    return this.getTypedRuleContext(AccionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.enterRegla(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.exitRegla(this);
		}
	}


}



class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyLanguageParser.RULE_condicion;
    }

	nombre_dispositivo() {
	    return this.getTypedRuleContext(Nombre_dispositivoContext,0);
	};

	estado_condicion() {
	    return this.getTypedRuleContext(Estado_condicionContext,0);
	};

	valor_condicion() {
	    return this.getTypedRuleContext(Valor_condicionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.enterCondicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.exitCondicion(this);
		}
	}


}



class Nombre_dispositivoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyLanguageParser.RULE_nombre_dispositivo;
    }

	IDENTIFICADOR() {
	    return this.getToken(MyLanguageParser.IDENTIFICADOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.enterNombre_dispositivo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.exitNombre_dispositivo(this);
		}
	}


}



class Estado_condicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyLanguageParser.RULE_estado_condicion;
    }


	enterRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.enterEstado_condicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.exitEstado_condicion(this);
		}
	}


}



class Valor_condicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyLanguageParser.RULE_valor_condicion;
    }

	estado() {
	    return this.getTypedRuleContext(EstadoContext,0);
	};

	NUMERO() {
	    return this.getToken(MyLanguageParser.NUMERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.enterValor_condicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.exitValor_condicion(this);
		}
	}


}



class EstadoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyLanguageParser.RULE_estado;
    }


	enterRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.enterEstado(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.exitEstado(this);
		}
	}


}



class AccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyLanguageParser.RULE_accion;
    }

	accion_simple() {
	    return this.getTypedRuleContext(Accion_simpleContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.enterAccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.exitAccion(this);
		}
	}


}



class Accion_simpleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyLanguageParser.RULE_accion_simple;
    }

	activar() {
	    return this.getTypedRuleContext(ActivarContext,0);
	};

	desactivar() {
	    return this.getTypedRuleContext(DesactivarContext,0);
	};

	ajustar() {
	    return this.getTypedRuleContext(AjustarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.enterAccion_simple(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.exitAccion_simple(this);
		}
	}


}



class ActivarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyLanguageParser.RULE_activar;
    }

	nombre_dispositivo() {
	    return this.getTypedRuleContext(Nombre_dispositivoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.enterActivar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.exitActivar(this);
		}
	}


}



class DesactivarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyLanguageParser.RULE_desactivar;
    }

	nombre_dispositivo() {
	    return this.getTypedRuleContext(Nombre_dispositivoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.enterDesactivar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.exitDesactivar(this);
		}
	}


}



class AjustarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyLanguageParser.RULE_ajustar;
    }

	nombre_dispositivo() {
	    return this.getTypedRuleContext(Nombre_dispositivoContext,0);
	};

	NUMERO() {
	    return this.getToken(MyLanguageParser.NUMERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.enterAjustar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.exitAjustar(this);
		}
	}


}




MyLanguageParser.ProgramaContext = ProgramaContext; 
MyLanguageParser.ReglaContext = ReglaContext; 
MyLanguageParser.CondicionContext = CondicionContext; 
MyLanguageParser.Nombre_dispositivoContext = Nombre_dispositivoContext; 
MyLanguageParser.Estado_condicionContext = Estado_condicionContext; 
MyLanguageParser.Valor_condicionContext = Valor_condicionContext; 
MyLanguageParser.EstadoContext = EstadoContext; 
MyLanguageParser.AccionContext = AccionContext; 
MyLanguageParser.Accion_simpleContext = Accion_simpleContext; 
MyLanguageParser.ActivarContext = ActivarContext; 
MyLanguageParser.DesactivarContext = DesactivarContext; 
MyLanguageParser.AjustarContext = AjustarContext; 
