package com.gym.exceptions;

public class UserNotFoundException extends Exception {
	private static final long serialVersionUID = 8372247989098190893L;
	public UserNotFoundException(String message) {
		super(message);
	}
}
