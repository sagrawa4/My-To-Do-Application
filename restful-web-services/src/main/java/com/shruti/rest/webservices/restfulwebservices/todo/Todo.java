package com.shruti.rest.webservices.restfulwebservices.todo;
import java.util.Date;

public class Todo {
	private long id;
	private String username;
	private String desciprion;
	private Date targetDate;
	private boolean isDone;
	
	
	
	public Todo(long id, String username, String desciprion, Date targetDate, boolean isDone) {
		super();
		this.id = id;
		this.username = username;
		this.desciprion = desciprion;
		this.targetDate = targetDate;
		this.isDone = isDone;
	}
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getDesciprion() {
		return desciprion;
	}
	public void setDesciprion(String desciprion) {
		this.desciprion = desciprion;
	}
	public Date getTargetDate() {
		return targetDate;
	}
	public void setTargetDate(Date targetDate) {
		this.targetDate = targetDate;
	}
	public boolean isDone() {
		return isDone;
	}
	public void setDone(boolean isDone) {
		this.isDone = isDone;
	}
	
}
