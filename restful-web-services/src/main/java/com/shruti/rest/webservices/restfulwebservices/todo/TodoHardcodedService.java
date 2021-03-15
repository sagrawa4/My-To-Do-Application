package com.shruti.rest.webservices.restfulwebservices.todo;

import java.util.List;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;

@Service
public class TodoHardcodedService {
	
	private static List<Todo> todos = new ArrayList<>();
	private static int idCounter=0;
	
	static {
		todos.add(new Todo(++idCounter, "shruti","toDance",false, new Date() ));
		todos.add(new Todo(++idCounter, "shruti","toSing",false, new Date()));
		todos.add(new Todo(++idCounter, "shruti","toSpeak",false,new Date()));
	}
	
	public List<Todo> findAll(){
		return todos;
	}

}
