package com.daoduytinh.service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.nio.file.Path;
import java.nio.file.Paths;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.daoduytinh.entity.Category;
import com.daoduytinh.entity.News;
import com.daoduytinh.entity.Product;
import com.daoduytinh.entity.ProductImages;
import com.daoduytinh.entity.ProductRelated;
import com.daoduytinh.entity.Salient;
import com.daoduytinh.exception.ResourceNotFoundException;
import com.daoduytinh.payload.response.ApiResponse;
import com.daoduytinh.repository.CategoryRepository;
import com.daoduytinh.repository.NewsRepository;
import com.daoduytinh.repository.ProductImagesRepository;
import com.daoduytinh.repository.ProductRelatedRepository;
import com.daoduytinh.repository.ProductRepository;
import com.daoduytinh.repository.SalientRepository;

import ch.qos.logback.core.filter.Filter;

@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	private ProductRepository repository;
	@Autowired
	private CategoryRepository categoryrepository;
	@Autowired
	private ProductRelatedRepository relatedrepository;
	@Autowired
	private ProductImagesRepository imgrepository;

	private static String imageDirectory = System.getProperty("user.dir") + "/images/";
	@Override
	public Page<Product> getAllAccess(Pageable pageable) {
		return repository.listAllAccessrios(pageable);
	}
	@Override
	public Page<Product> getProductSale(Pageable pageable) {
		return repository.listProductsale(pageable);
	}
	@Override
	public Page<Product> getAccess(Pageable pageable) {
		return repository.listProductAccessrios(pageable);
	}
	@Override
	public Page<Product> getAccessSale(Pageable pageable) {
		return repository.listSaleAccessrios(pageable);
	}
	@Override
	public Page<Product> getProductbycategory(@PathVariable(value = "id") Long id, Pageable pageable) {
		return repository.listProductCategory(id, pageable);
	}
	@Override
	public Page<Product> getProductTop(Pageable pageable) {
		return repository.listProducttop(pageable);
	}
	@Override
	public Page<Product> getProductSoon(Pageable pageable) {
		return repository.listProductSoon(pageable);
	}
	@Override
	public Page<Product> getProductBot(Pageable pageable) {
		return repository.listProductbot(pageable);
	}
	@Override
	public Page<Product> getAllProductSort(Pageable pageable) {
		return repository.listAllProduct(pageable);
	}
	@Override
	public Iterable<Product> getAllProduct() {
		return repository.findAll();
	}
	@Override
	public List<Product> getAllProductCategory(@PathVariable(value = "id") Long id) {
		return repository.listProductRelated(id);
	}
	@Override
	public ResponseEntity<Product> getProductById(@PathVariable(value = "id") Long Id)
			throws ResourceNotFoundException {
		Product product = repository.findById(Id)
				.orElseThrow(() -> new ResourceNotFoundException("Product not found for this id :: " + Id));
		return ResponseEntity.ok().body(product);
	}
	@Override
	public Product createProduct(@PathVariable(value = "id") Long Id, @RequestBody Product product) {
		Category cate = categoryrepository.findById(Id)
				.orElseThrow(() -> new ResourceNotFoundException("Product not found for this id :: " + Id));
		product.setCategory(cate);
		List<ProductRelated> productrelated = new ArrayList<ProductRelated>();
		List<ProductImages> productimage = new ArrayList<ProductImages>();
		List<Salient> salien = new ArrayList<Salient>();
		product.setProductrelate(new HashSet<ProductRelated>() {
			/**
			 * 
			 */
			private static final long serialVersionUID = -5619441967802709713L;
			{
				for (ProductRelated news2 : productrelated) {

					add(news2);
				}

			}
		});
		List<News> news = new ArrayList<News>();
		product.setProductimage(new HashSet<ProductImages>() {
			/**
			 * 
			 */
			private static final long serialVersionUID = -5619441967802709713L;

			{
				for (ProductImages news2 : productimage) {

					add(news2);
				}

			}
		});
		product.setNews(new HashSet<News>() {
			/**
			 * 
			 */
			private static final long serialVersionUID = -5619441967802709713L;

			{
				for (News news2 : news) {

					add(news2);
				}

			}
		});
		product.setSalient(new HashSet<Salient>() {
			/**
			 * 
			 */
			private static final long serialVersionUID = -5619441967802709713L;

			{
				for (Salient news2 : salien) {

					add(news2);
				}

			}
		});
		return repository.save(product);
	}

	
	@Override
	public ResponseEntity<?> setProductNews(@PathVariable(value = "id") Long Id, @RequestBody List<News> news) {
		Product product = repository.findById(Id)
				.orElseThrow(() -> new ResourceNotFoundException("Product not found for this id : " + Id));
		product.getNews().clear();
		product.setNews(new HashSet<News>() {
			/**
			 * 
			 */
			private static final long serialVersionUID = -5619441967802709713L;
			{
				for (News news2 : news) {

					add(news2);
				}
			}
		});
		repository.save(product);
		return ResponseEntity.ok(new ApiResponse("Save Productnews successfully", ""));
	}
	@Override
	public ResponseEntity<?> setProductImage(@PathVariable(value = "id") Long Id,
			@RequestBody List<ProductImages> images) {
		Product product = repository.findById(Id)
				.orElseThrow(() -> new ResourceNotFoundException("Product not found for this id :: " + Id));
		product.getProductimage().clear();
		for (ProductImages news2 : images) {

			product.getProductimage().add(news2);
		}
		imgrepository.saveAll(images);
		return ResponseEntity.ok(new ApiResponse("Save productImage successfully", ""));
	}
	@Override
	public ResponseEntity<?> setProductrelated(@PathVariable(value = "id") Long Id,
			@RequestBody List<ProductRelated> productRelateds) {
		Product product = repository.findById(Id)
				.orElseThrow(() -> new ResourceNotFoundException("Product not found for this id :: " + Id));
		product.getProductrelate().clear();
		for (ProductRelated news2 : productRelateds) {

			product.getProductrelate().add(news2);
		}
		relatedrepository.saveAll(productRelateds);
		return ResponseEntity.ok(new ApiResponse("Save ProductRelated successfully", ""));
	}
	@Override
	public ResponseEntity<Product> updateProduct(@PathVariable(value = "id") Long Id,
			@PathVariable(value = "idcate") Long Idcate, @Valid @RequestBody Product productDetails)
			throws ResourceNotFoundException {
		Product product = repository.findById(Id)
				.orElseThrow(() -> new ResourceNotFoundException("Product not found for this id :: " + Id));
		Category cate = categoryrepository.findById(Idcate)
				.orElseThrow(() -> new ResourceNotFoundException("Category not found for this id :: " + Id));
		product.setCategory(cate);
		product.setName(productDetails.getName());
		product.setColor(productDetails.getColor());
		product.setHorsePower(productDetails.getHorsePower());
		product.setMassFraction(productDetails.getMassFraction());
		product.setPrice(productDetails.getPrice());
		product.setProductNumber(productDetails.getProductNumber());
		product.setSize(productDetails.getSize());
		product.setWeight(productDetails.getWeight());
		product.setImage(productDetails.getImage());
		product.setFrontBrake(productDetails.getFrontBrake());
		product.setRearBrake(productDetails.getRearBrake());
		product.setSoon(productDetails.isSoon());
		product.setInstall(productDetails.getInstall());
		product.setDescription(productDetails.getDescription());
		product.setAccess(productDetails.isAccess());
		product.setPercent(productDetails.getPercent());
		product.setType(productDetails.isType());
		product.setStatus(productDetails.isStatus());
		product.setPriceNet(productDetails.getPriceNet());
		product.setPetrol(productDetails.getPetrol());
		product.setSale(productDetails.isSale());
		final Product updatedproduct = repository.save(product);
		return ResponseEntity.ok(updatedproduct);
	}
	@Override
	public Map<String, Boolean> deleteProduct(@PathVariable(value = "id") Long Id) throws ResourceNotFoundException {
		Product product = repository.findById(Id)
				.orElseThrow(() -> new ResourceNotFoundException("Product not found for this id :: " + Id));
		product.getNews().clear();
		repository.delete(product);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
	// search
	@Override
	public ResponseEntity<List<Product>> getAllSearch(@RequestParam(required = false) String name) {
		try {
			List<Product> product = new ArrayList<Product>();

			if (name == null)
				repository.findAll().forEach(product::add);
			else
				repository.findByNameContainsIgnoreCase(name).forEach(product::add);

			if (product.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(product, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	@Override
	public ResponseEntity<?> uploadImage(@RequestParam("imageFile") MultipartFile file) {
		makeDirectoryIfNotExist(imageDirectory);
		String fileName = file.getOriginalFilename();
		System.out.println("fileName: " + fileName);
		Path fileNamePath = Paths.get(imageDirectory, fileName);
		try {
			Files.write(fileNamePath, file.getBytes());
			
			return new ResponseEntity<>(HttpStatus.CREATED);
		} catch (IOException ex) {
			return new ResponseEntity<>("Image is not uploaded", HttpStatus.BAD_REQUEST);
		}
	}
	private void makeDirectoryIfNotExist(String imageDirectory) {
		File directory = new File(imageDirectory);
		if (!directory.exists()) {
			directory.mkdir();
		}
	}

}
