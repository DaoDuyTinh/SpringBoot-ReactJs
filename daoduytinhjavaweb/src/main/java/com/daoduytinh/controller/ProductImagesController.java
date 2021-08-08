package com.daoduytinh.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

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
import com.daoduytinh.entity.Product;
import com.daoduytinh.entity.ProductImages;
import com.daoduytinh.exception.ResourceNotFoundException;
import com.daoduytinh.repository.ProductImagesRepository;

import javassist.NotFoundException;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ProductImagesController {

	@Autowired
	private ProductImagesRepository repository;
	
	@GetMapping("/productimages/{id}")
	public Optional<ProductImages> getProductImageById(@PathVariable(value = "id") Long id){
		return repository.getImageProduct(id);
	}
	
}
