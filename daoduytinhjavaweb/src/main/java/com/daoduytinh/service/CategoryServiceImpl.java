package com.daoduytinh.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.daoduytinh.entity.Category;
import com.daoduytinh.entity.Product;
import com.daoduytinh.exception.ResourceNotFoundException;
import com.daoduytinh.repository.CategoryRepository;
@Service
public class CategoryServiceImpl implements CategoryService	{
	@Autowired
	private CategoryRepository repository;
	
	public List<Category> getAllCategory(){
		return repository.findAll();
	}
	
	public ResponseEntity<Category> getCategoryById(@PathVariable(value = "id") Long Id)
	        throws ResourceNotFoundException {
			Category category = repository.findById(Id)
	          .orElseThrow(() -> new ResourceNotFoundException("Category not found for this id : " + Id));
	        return ResponseEntity.ok().body(category);
	    }
	
	public Category createCategory(@Valid @RequestBody Category category) {
		List<Product> products = new ArrayList<Product>();
		category.setProducts(products);
        return repository.save(category);
    }
	
	public ResponseEntity<Category> updateCategory(@PathVariable(value = "id") Long Id,
	         @Valid @RequestBody Category categoryDetail) throws ResourceNotFoundException {
			Category category = repository.findById(Id)
	        .orElseThrow(() -> new ResourceNotFoundException("Category not found for this id : " + Id));
	    	
			category.setName(categoryDetail.getName());
			category.setImage(categoryDetail.getImage());
	        final Category updatecategory = repository.save(category);
	        return ResponseEntity.ok(updatecategory);
	    }
	
	public Map<String, Boolean> deleteCategory(@PathVariable(value = "id") Long Id)
	         throws ResourceNotFoundException {
			Category category = repository.findById(Id) 
	       .orElseThrow(() -> new ResourceNotFoundException("Category not found for this id :: " + Id));
	        repository.delete(category);
	        Map<String, Boolean> response = new HashMap<>();
	        response.put("deleted", Boolean.TRUE); 
	        return response;
	    }
}
