package com.gym.models;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class Response {
	public static ResponseEntity<?> success(Object data) {
		Map<String, Object> map = new HashMap<>();
		map.put("message", "success");
		if(data != null)
			map.put("data", data);
		return ResponseEntity.ok(map);
	}
	
	public static ResponseEntity<?> error(Object err) {
		Map<String, Object> map = new HashMap<>();
		map.put("message", "error");
		if(err != null)
			map.put("error", err);
		return ResponseEntity.ok(map);
	}
	
	public static ResponseEntity<?> status(HttpStatus status) {
		return ResponseEntity.status(status).build();
	}
}