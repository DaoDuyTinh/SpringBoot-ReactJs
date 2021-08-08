package com.daoduytinh.service;

import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.daoduytinh.entity.Category;
import com.daoduytinh.exception.ResourceNotFoundException;

@Service
public interface CategoryService {
	
	public List<Category> getAllCategory();
	
	public ResponseEntity<Category> getCategoryById(@PathVariable(value = "id") Long Id)
	        throws ResourceNotFoundException;
	
	public Category createCategory(@Valid @RequestBody Category category);
	
	public ResponseEntity<Category> updateCategory(@PathVariable(value = "id") Long Id,
	         @Valid @RequestBody Category categoryDetail) throws ResourceNotFoundException;
	
	public Map<String, Boolean> deleteCategory(@PathVariable(value = "id") Long Id)
	         throws ResourceNotFoundException;
}
