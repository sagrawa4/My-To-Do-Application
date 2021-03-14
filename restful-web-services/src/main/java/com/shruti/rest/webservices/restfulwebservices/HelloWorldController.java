package com.shruti.rest.webservices.restfulwebservices;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

//Controller(That handles HTTP request)
@RestController
//Allow requests from localhost
@CrossOrigin(origins="http://localhost:4202")
public class HelloWorldController {
	
	//Method: get
	//uri: /hello-world
	//if someone makes a get request for /helloworld,this method should return helloworld
	//method="Return helloworld"
	
	@GetMapping(path="/hello-world")
	public String helloWorld() {
		return "Hello World";
	}
	
	//hello-world-bean
	@GetMapping(path="/hello-world-bean")
	public HelloWorldBean helloWorldBean() {
		return new HelloWorldBean("Hello World bean");
	}
	
	//"/hello-world/path-variable/shruti}
	@GetMapping(path="/hello-world/path-variable/{name}")
	public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
		//throw new RuntimeException("Something went wrong!");
		return new HelloWorldBean(String.format("Hello World, %s",name));
	}
}
