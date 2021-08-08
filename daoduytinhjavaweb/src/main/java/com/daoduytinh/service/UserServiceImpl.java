package com.daoduytinh.service;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.daoduytinh.entity.User;
import com.daoduytinh.exception.ResourceNotFoundException;
import com.daoduytinh.payload.response.MessageResponse;
import com.daoduytinh.repository.RoleRepository;
import com.daoduytinh.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService{

	@Autowired
	private UserRepository repository;
	
	@Autowired
	private RoleRepository rolerepository;
	
	@Autowired
	PasswordEncoder encoder;
	@Override
	 public ResponseEntity<User> getUserById(@PathVariable(value = "id") Long Id)
		        throws ResourceNotFoundException {
				User user = repository.findById(Id)
		          .orElseThrow(() -> new ResourceNotFoundException("User not found for this id :: " + Id));
		        return ResponseEntity.ok().body(user);
	}

	public Page<User> getAllUser(Pageable pageable){
		return repository.findAll(pageable);
	}
	@Override
    public ResponseEntity<User> updateUser(@PathVariable(value = "id") Long Id,
         @Valid @RequestBody User userDetail) throws ResourceNotFoundException {
		User user = repository.findById(Id)
        .orElseThrow(() -> new ResourceNotFoundException("User not found for this id :: " + Id));
		user.setAddress(userDetail.getAddress());
		user.setFirstname(userDetail.getFirstname());
		user.setLastname(userDetail.getLastname());
		user.setUsername(userDetail.getUsername());
		user.setEmail(userDetail.getEmail());
		user.setPhone(userDetail.getPhone());
        final User updateuser = repository.save(user);
        return ResponseEntity.ok(updateuser);
    }
    @Override
    public ResponseEntity<?> updatepasswordUser(@PathVariable(value = "id") Long Id,
         @PathVariable(value = "np") String password) throws ResourceNotFoundException {
    	User user = repository.findById(Id)
				.orElseThrow(() -> new ResourceNotFoundException("User not exits with id:" + Id));
    	user.setPassword(encoder.encode(password));
		final User updateUser = repository.save(user);
		return ResponseEntity.ok(new MessageResponse("Đổi mật khẩu thành công"));
		}
    
    @Override
    public Map<String, Boolean> deleteUser(@PathVariable(value = "id") Long Id)
         throws ResourceNotFoundException {
		User user = repository.findById(Id) 
       .orElseThrow(() -> new ResourceNotFoundException("User not found for this id :: " + Id));
		user.getRoles().clear();
        repository.delete(user);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE); 
        return response;
    }
}
