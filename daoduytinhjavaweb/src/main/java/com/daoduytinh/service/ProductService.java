package com.daoduytinh.service;

import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.daoduytinh.entity.News;
import com.daoduytinh.entity.Product;
import com.daoduytinh.entity.ProductImages;
import com.daoduytinh.entity.ProductRelated;
import com.daoduytinh.entity.Salient;
import com.daoduytinh.exception.ResourceNotFoundException;


public interface ProductService {
	public Page<Product> getAllAccess(Pageable pageable);

	public Page<Product> getProductSale(Pageable pageable);
	
	public Page<Product> getAccessSale(Pageable pageable);
	
	public Page<Product> getProductbycategory(@PathVariable(value = "id") Long id,Pageable pageable);
	
	public Page<Product> getProductTop(Pageable pageable);
	
	public Page<Product> getProductSoon(Pageable pageable);
	
	public Page<Product> getProductBot(Pageable pageable);
	
	public Page<Product> getAllProductSort(Pageable pageable);
	
	public Iterable<Product> getAllProduct();
	
	public List<Product> getAllProductCategory(@PathVariable(value = "id") Long id);
	
	public ResponseEntity<Product> getProductById(@PathVariable(value = "id") Long Id) throws ResourceNotFoundException;
	
	public Page<Product> getAccess(Pageable pageable);
	
	 public Product createProduct(@PathVariable(value = "id") Long Id,@RequestBody Product product);
	 
	 public ResponseEntity<?> setProductImage(@PathVariable(value = "id") Long Id,@RequestBody List<ProductImages> images);
	 
	 public ResponseEntity<?> setProductNews(@PathVariable(value = "id") Long Id,@RequestBody List<News> news);
	 
	 public ResponseEntity<?> setProductrelated(@PathVariable(value = "id") Long Id,@RequestBody List<ProductRelated> productRelateds);
	 
	 public ResponseEntity<Product> updateProduct(@PathVariable(value = "id") Long Id,@PathVariable(value = "idcate") Long Idcate,
	         @Valid @RequestBody Product productDetails) throws ResourceNotFoundException;
	 
	 public Map<String, Boolean> deleteProduct(@PathVariable(value = "id") Long Id)
	         throws ResourceNotFoundException;
	 
	 public ResponseEntity<List<Product>> getAllSearch(@RequestParam(required = false) String name);
	 
	 public ResponseEntity<?> uploadImage(@RequestParam("imageFile") MultipartFile file);


}
