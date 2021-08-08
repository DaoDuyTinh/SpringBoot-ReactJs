package com.daoduytinh.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.daoduytinh.entity.News;
import com.daoduytinh.entity.Product;
import com.daoduytinh.exception.ResourceNotFoundException;

@Service
public interface NewsService {
	public Iterable<News> getAllNews();
	
	public Page<News> getNewsAdmin(Pageable pageable);
	
	public Page<News> getNewsPage(Pageable pageable);
	
	public Iterable<News> getNewsSort();
	
	public List<News> getProductNews(@PathVariable(value = "id") Long id);

	public Page<News> gethotNews(Pageable pageable);
	
	public ResponseEntity<News> getNewsById(@PathVariable(value = "id") Long Id)
	        throws ResourceNotFoundException ;
	
	public News createNews (@Valid @RequestBody News news);
	
	public ResponseEntity<News> updateNews(@PathVariable(value = "id") Long Id,
	         @Valid @RequestBody News newsDetail) throws ResourceNotFoundException ;
	
	public ResponseEntity<News> updateView(@PathVariable(value = "id") Long Id) throws ResourceNotFoundException;
	
	public Map<String, Boolean> deleteNews(@PathVariable(value = "id") Long Id)
	         throws ResourceNotFoundException;

}
