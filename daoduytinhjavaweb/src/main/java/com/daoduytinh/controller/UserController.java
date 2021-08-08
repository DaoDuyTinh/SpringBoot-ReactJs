package com.daoduytinh.controller;

import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.daoduytinh.entity.ERole;
import com.daoduytinh.entity.Role;
import com.daoduytinh.entity.User;
import com.daoduytinh.exception.ResourceNotFoundException;
import com.daoduytinh.payload.response.MessageResponse;
import com.daoduytinh.repository.RoleRepository;
import com.daoduytinh.repository.UserRepository;
import com.daoduytinh.service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
	@Autowired
	private UserService service;
	
	@GetMapping("/users/{id}")
	 public ResponseEntity<User> getUserById(@PathVariable(value = "id") Long Id)
		        throws ResourceNotFoundException {
		        return service.getUserById(Id);
	}
	@GetMapping("/users")
	public Page<User> getAllUser(Pageable pageable){
		return service.getAllUser(pageable);
	}

	@PutMapping("/users/{id}")
    public ResponseEntity<User> updateUser(@PathVariable(value = "id") Long Id,
         @Valid @RequestBody User userDetail) throws ResourceNotFoundException {
        return service.updateUser(Id,userDetail);
    }
	@PutMapping("/updatepass/{id}/{np}")
    public ResponseEntity<?> updatepasswordUser(@PathVariable(value = "id") Long Id,
        @PathVariable(value = "np") String password) throws ResourceNotFoundException {
        return service.updatepasswordUser(Id,password);
    }
	
	@DeleteMapping("/users/{id}")
    public Map<String, Boolean> deleteUser(@PathVariable(value = "id") Long Id)
         throws ResourceNotFoundException {
        return service.deleteUser(Id);
    }
}
