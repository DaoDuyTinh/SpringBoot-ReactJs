package com.daoduytinh.service;

import java.util.Map;

import javax.validation.Valid;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.daoduytinh.entity.User;
import com.daoduytinh.exception.ResourceNotFoundException;

@Service
public interface UserService {

	public ResponseEntity<User> getUserById(@PathVariable(value = "id") Long Id)
	        throws ResourceNotFoundException;
	
	public Page<User> getAllUser(Pageable pageable);
	
    public ResponseEntity<User> updateUser(@PathVariable(value = "id") Long Id,
            @Valid @RequestBody User userDetail) throws ResourceNotFoundException;
    
    public ResponseEntity<?> updatepasswordUser(@PathVariable(value = "id") Long Id,
           @PathVariable(value = "np") String password) throws ResourceNotFoundException ;
    
    public Map<String, Boolean> deleteUser(@PathVariable(value = "id") Long Id)
            throws ResourceNotFoundException;
}
