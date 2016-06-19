package com.ss;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;

public class Demo1 {

	public static void main(String[] args) {
		ScriptEngineManager mgr = new ScriptEngineManager();
		ScriptEngine jsEngine = mgr.getEngineByName("JavaScript");
		 
		try {
			jsEngine.eval("print('Hello, world!')");
		} catch (ScriptException ex) {
		ex.printStackTrace();
		}


	}

}
