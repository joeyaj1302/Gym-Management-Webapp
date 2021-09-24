package com.gym.models;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Stream;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.gym.dtos.PaymentDto;

public class Response {
	public static ResponseEntity<?> success(Object data, String url, String message) {
		Map<String, Object> map = new HashMap<>();
		map.put("message", message);
		map.put("url", url);
		if(data != null)
			map.put("data", data);
		return ResponseEntity.ok(map);
	}
	public static ResponseEntity<?> success(Object data, String role) {
		Map<String, Object> map = new HashMap<>();
		map.put("message", "success");
		map.put("role",role);
		if(data != null)
			map.put("data", data);
		return ResponseEntity.ok(map);
	}
	
	public static ResponseEntity<?> successList(List<?> list){
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("message", "success");
		if (list!=null) {
			map.put("List", list);
		}
		return ResponseEntity.ok(map);
		
	}
	
	public static ResponseEntity<?> error(Object err) {
		Map<String, Object> map = new HashMap<>();
		map.put("message", "Invalid Login credentials. Please Login again!");
		if(err != null)
			map.put("error", err);
		return ResponseEntity.ok(map);
	}
	public static ResponseEntity<?> errorAuth(String message) {
		Map<String, Object> map = new HashMap<>();
		if(message != null)
			map.put("error", message);
		return ResponseEntity.ok(map);
	}
	
	public static ResponseEntity<?> status(HttpStatus status) {
		return ResponseEntity.status(status).build();
	}

	public static ResponseEntity<?> successList2(Stream<PaymentDto> result) {
		Map<String, Object> map = new HashMap<>();
		map.put("List",result);
		if(result != null) {
			map.put("message", "success");
		}
		else {
			map.put("message", "Empty List");
		}
		return ResponseEntity.ok(map);
	}
}
