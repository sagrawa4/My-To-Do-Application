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
		todos.add(new Todo(++idCounter, "shruti","toRead",new Date(), false) );
		todos.add(new Todo(++idCounter, "shruti","toSing",new Date(), false) );
		todos.add(new Todo(++idCounter, "shruti","toSpeak",new Date(), false) );
	}
	
	//Gets you all the todos
	public List<Todo> findAll(){
		return todos;
	}
	
	public Todo save(Todo todo) {
		if(todo.getId()==-1 || todo.getId()==0 ) {
			todo.setId(++idCounter);
			todos.add(todo);
		}else {
			deleteById(todo.getId());
			todos.add(todo);
		}
		return todo;
	}
	
	//removes a todo by finding the id
	public Todo deleteById(long id) {
		Todo todo = findById(id);
		if(todo==null) return null;
		todos.remove(todo);
		return todo;
	}

	//finds you a todo with specific id
	public Todo findById(long id) {
		for(Todo todo:todos) {
			if(todo.getId()== id) {
				return todo;
			}
		}
		return null;
	}
}
