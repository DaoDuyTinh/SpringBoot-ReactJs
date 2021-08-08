package com.daoduytinh.controller;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.daoduytinh.entity.ERole;
import com.daoduytinh.entity.Role;
import com.daoduytinh.entity.User;
import com.daoduytinh.payload.request.LoginRequest;
import com.daoduytinh.payload.request.SignupRequest;
import com.daoduytinh.payload.response.JwtResponse;
import com.daoduytinh.payload.response.MessageResponse;
import com.daoduytinh.repository.RoleRepository;
import com.daoduytinh.repository.UserRepository;
import com.daoduytinh.security.jwt.JwtUtils;
import com.daoduytinh.security.services.UserDetailsImpl;
import com.daoduytinh.service.AuthService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/auth")
public class AuthController {
	@Autowired
	private AuthService service;

	@PostMapping("/signin")
	public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
		return service.authenticateUser(loginRequest);
	}

	@PostMapping("/signup")
	public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
		return service.registerUser(signUpRequest);
	}
	@PostMapping("/user")
	public ResponseEntity<?> createUser(@Valid @RequestBody SignupRequest signUpRequest) {
		return service.createUser(signUpRequest);
	}
	
}
