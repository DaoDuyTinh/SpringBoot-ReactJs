package com.daoduytinh.service;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.daoduytinh.payload.request.LoginRequest;
import com.daoduytinh.payload.request.SignupRequest;

@Service
public interface AuthService {

	public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest);
	
	public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest);
	
	public ResponseEntity<?> createUser(@Valid @RequestBody SignupRequest signUpRequest);
}
