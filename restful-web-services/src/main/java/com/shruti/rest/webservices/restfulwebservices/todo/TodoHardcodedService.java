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
		todos.add(new Todo(++idCounter, "shruti","toDance",new Date(),false));
		todos.add(new Todo(++idCounter, "shruti","toSing",new Date(),false));
		todos.add(new Todo(++idCounter, "shruti","toSpeak",new Date(),false));
	}
	
	public List<Todo> findAll(){
		return todos;
	}

}
