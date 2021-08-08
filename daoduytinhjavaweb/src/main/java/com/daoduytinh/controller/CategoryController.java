package com.daoduytinh.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.daoduytinh.entity.Category;
import com.daoduytinh.entity.News;
import com.daoduytinh.entity.Product;
import com.daoduytinh.exception.ResourceNotFoundException;
import com.daoduytinh.repository.CategoryRepository;
import com.daoduytinh.service.CategoryService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CategoryController {
	
	@Autowired
	private CategoryService service;
	
	@GetMapping("/category")
	public List<Category> getAllCategory(){
		return service.getAllCategory();
	}
	
	@GetMapping("/category/{id}")
    public ResponseEntity<Category> getCategoryById(@PathVariable(value = "id") Long Id)
        throws ResourceNotFoundException {
        return service.getCategoryById(Id);
    }
	
	@PostMapping("/category")
    public Category createCategory(@Valid @RequestBody Category category) {
        return service.createCategory(category);
    }
	
	@PutMapping("/category/{id}")
    public ResponseEntity<Category> updateCategory(@PathVariable(value = "id") Long Id,
         @Valid @RequestBody Category categoryDetail) throws ResourceNotFoundException {
        return service.updateCategory(Id,categoryDetail);
    }
	@DeleteMapping("/category/{id}")
    public Map<String, Boolean> deleteCategory(@PathVariable(value = "id") Long Id)
         throws ResourceNotFoundException {
        return service.deleteCategory(Id);
    }
}
