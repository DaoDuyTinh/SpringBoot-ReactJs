package com.daoduytinh.controller;

import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.daoduytinh.entity.News;
import com.daoduytinh.exception.ResourceNotFoundException;
import com.daoduytinh.service.NewsService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class NewsController {

	@Autowired
	private NewsService service;
	
	@GetMapping("/news")
	public Iterable<News> getAllNews(){
		return service.getAllNews();
	}
	@GetMapping("/homenews")
	public Page<News> getNewsPage(Pageable pageable){
		return service.getNewsPage(pageable);
	}
	@GetMapping("/adminnews")
	public Page<News> getNewsAdmin(Pageable pageable){
		return service.getNewsAdmin(pageable);
	}
	@GetMapping("/sortnews")
	public Iterable<News> getNewsSort(){
		return service.getNewsSort();
	}
	@GetMapping("/productnews/{id}")
	public List<News> getProductNews(@PathVariable(value = "id") Long id){
		return service.getProductNews(id);
	}
	@GetMapping("/hotnews")
	public Page<News> gethotNews(Pageable pageable){
		return service.gethotNews(pageable);
	}
	@GetMapping("/news/{id}")
    public ResponseEntity<News> getNewsById(@PathVariable(value = "id") Long Id)
        throws ResourceNotFoundException {
        return service.getNewsById(Id);
    }
	@PostMapping("/news")
    public News createNews(@Valid @RequestBody News news) {
        return service.createNews(news);
    }
	
    @PutMapping("/news/{id}")
    public ResponseEntity<News> updateNews(@PathVariable(value = "id") Long Id,
         @Valid @RequestBody News newsDetail) throws ResourceNotFoundException {
        return service.updateNews(Id,newsDetail);
    }
    @PutMapping("/review/{id}")
    public ResponseEntity<News> updateView(@PathVariable(value = "id") Long Id) throws ResourceNotFoundException {
        return service.updateView(Id);
    }

    @DeleteMapping("/news/{id}")
    public Map<String, Boolean> deleteNews(@PathVariable(value = "id") Long Id)
         throws ResourceNotFoundException {
            return service.deleteNews(Id);                 
    }
}
