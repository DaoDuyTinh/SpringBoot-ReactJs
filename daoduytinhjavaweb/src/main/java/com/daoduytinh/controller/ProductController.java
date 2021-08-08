package com.daoduytinh.controller;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.daoduytinh.entity.Category;
import com.daoduytinh.entity.News;
import com.daoduytinh.entity.Product;
import com.daoduytinh.entity.ProductImages;
import com.daoduytinh.entity.ProductRelated;
import com.daoduytinh.entity.Salient;
import com.daoduytinh.exception.ResourceNotFoundException;
import com.daoduytinh.repository.CategoryRepository;
import com.daoduytinh.repository.ProductImagesRepository;
import com.daoduytinh.repository.ProductRepository;
import com.daoduytinh.service.ProductService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {
	@Autowired
	private ProductService service;
	@Autowired
	private ProductImagesRepository imgRepository;;
	@Autowired
	private ProductRepository repository;;
	
	private static String imageDirectory = System.getProperty("user.dir") + "/images/";
	
	@GetMapping("/productsale")
	public Page<Product> getProductSale(Pageable pageable) {
		return service.getProductSale(pageable);
	}
	@GetMapping("/accessall")
	public Page<Product> getAllAccess(Pageable pageable) {
		return service.getAllAccess(pageable);
	}
	
	@GetMapping("/access")
	public Page<Product> getAccess(Pageable pageable) {
		return service.getAccess(pageable);
	}

	@GetMapping("/accesssale")
	public Page<Product> getAccessSale(Pageable pageable) {
		return service.getAccessSale(pageable);
	}

	@GetMapping("/productbycategory/{id}")
	public Page<Product> getProductbycategory(@PathVariable(value = "id") Long id, Pageable pageable) {
		return service.getProductbycategory(id, pageable);
	}

	@GetMapping("/producttop")
	public Page<Product> getProductTop(Pageable pageable) {
		return service.getProductTop(pageable);
	}

	@GetMapping("/productsoon")
	public Page<Product> getProductSoon(Pageable pageable) {
		return service.getProductSoon(pageable);
	}

	@GetMapping("/productbot")
	public Page<Product> getProductBot(Pageable pageable) {
		return service.getProductBot(pageable);
	}

	@GetMapping("/product")
	public Page<Product> getAllProductSort(Pageable pageable) {
		return service.getAllProductSort(pageable);
	}

	@GetMapping("/productall")
	public Iterable<Product> getAllProduct() {
		return service.getAllProduct();
	}

	@GetMapping("/productcate/{id}")
	public List<Product> getAllProductCategory(@PathVariable(value = "id") Long id) {
		return service.getAllProductCategory(id);
	}

	@GetMapping("/product/{id}")
	public ResponseEntity<Product> getProductById(@PathVariable(value = "id") Long Id)
			throws ResourceNotFoundException {
		return service.getProductById(Id);
	}

	@PostMapping("/product/{id}")
	public Product createProduct(@PathVariable(value = "id") Long Id, @RequestBody Product product) {
		return service.createProduct(Id, product);
	}

	@PutMapping("/productimage/{id}")
	public ResponseEntity<?> setProductImage(@PathVariable(value = "id") Long Id,
			@RequestBody List<ProductImages> images) {
		return service.setProductImage(Id, images);
	}

	@PutMapping("/productnews/{id}")
	public ResponseEntity<?> setProductNews(@PathVariable(value = "id") Long Id, @RequestBody List<News> news) {
		return service.setProductNews(Id, news);
	}

	@PutMapping("/productrelated/{id}")
	public ResponseEntity<?> setProductrelated(@PathVariable(value = "id") Long Id,
			@RequestBody List<ProductRelated> productRelateds) {
		return service.setProductrelated(Id, productRelateds);
	}

	@PutMapping("/product/{id}/{idcate}")
	public ResponseEntity<Product> updateProduct(@PathVariable(value = "id") Long Id,
			@PathVariable(value = "idcate") Long Idcate, @Valid @RequestBody Product productDetails)
			throws ResourceNotFoundException {
		return service.updateProduct(Id, Idcate, productDetails);
	}

	@PostMapping(value = "/addimage", produces = { MediaType.IMAGE_PNG_VALUE, "application/json" })
	public ResponseEntity<?> uploadImage(@RequestParam("imageFile") MultipartFile file) {
		return service.uploadImage(file);

	}
	@DeleteMapping("/product/{id}")
	public Map<String, Boolean> deleteProduct(@PathVariable(value = "id") Long Id) throws ResourceNotFoundException {
		return service.deleteProduct(Id);
	}

	// search
	@GetMapping("/product/search")
	public ResponseEntity<List<Product>> getAllSearch(@RequestParam(required = false) String name) {
		return service.getAllSearch(name);
	}
}
