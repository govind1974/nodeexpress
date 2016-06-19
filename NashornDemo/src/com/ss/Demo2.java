package com.ss;

import java.io.FileReader;
import java.io.IOException;

import javax.script.Invocable;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;

public class Demo2 {

	public static void main(String[] args) {
		try {

			ScriptEngine engine = new ScriptEngineManager().getEngineByName("JavaScript");
			engine.eval(new FileReader("myscript.js"));

			Invocable invocable = (Invocable) engine;

			Object result = invocable.invokeFunction("fun1", "Ramesh Kumar");
			System.out.println(result);

			} catch (IOException   | ScriptException | NoSuchMethodException e) {
			                e.printStackTrace();
			}

	}

}
