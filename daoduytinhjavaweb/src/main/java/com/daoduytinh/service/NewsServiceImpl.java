package com.daoduytinh.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
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
import com.daoduytinh.repository.NewsRepository;

@Service
public class NewsServiceImpl implements NewsService{

	@Autowired
	private NewsRepository repository;
	
	public Iterable<News> getAllNews(){
		return repository.findAll();
	}
	
	public Page<News> getNewsPage(Pageable pageable){
		return repository.listNewsPage(pageable);
	}
	public Page<News> getNewsAdmin(Pageable pageable){
		return repository.listNewsAdmin(pageable);
	}
	public Iterable<News> getNewsSort(){
		Sort sort = Sort.by(Direction.DESC,"reviews");
		Pageable pageable = PageRequest.of(0,10,sort );
		return repository.findAll(pageable);
	}
	
	public List<News> getProductNews(@PathVariable(value = "id") Long id){
		return repository.listnewRelated(id);
	}
	
	public Page<News> gethotNews(Pageable pageable){
		return repository.listHotNewsPage(pageable);
	}
	
	public ResponseEntity<News> getNewsById(@PathVariable(value = "id") Long Id)
	        throws ResourceNotFoundException {
			News news = repository.findById(Id)
	          .orElseThrow(() -> new ResourceNotFoundException("News not found for this id :: " + Id));
	        return ResponseEntity.ok().body(news);
	    }
	
	public News createNews(@Valid @RequestBody News news) {
		List<Product> products = new ArrayList<Product>();
		news.setProduct(new HashSet<Product>() {
			/**
			 * 
			 */
			private static final long serialVersionUID = -5619441967802709713L;

			{
				for (Product news2 : products) {
					
					add(news2);
				}
				
			}});
		news.setReviews(0);
        return repository.save(news);
    }
	
	public ResponseEntity<News> updateNews(@PathVariable(value = "id") Long Id,
	         @Valid @RequestBody News newsDetail) throws ResourceNotFoundException {
	    	News news = repository.findById(Id)
	        .orElseThrow(() -> new ResourceNotFoundException("News not found for this id :: " + Id));
	    	
	    	news.setId(Id);
	    	news.setTitle(newsDetail.getTitle());
	    	news.setImage(newsDetail.getImage());
	    	news.setShortDescription(newsDetail.getShortDescription());
	    	news.setDescription(newsDetail.getDescription());
	    	news.setStatus(newsDetail.isStatus());
	    	news.setHot(newsDetail.isHot());
	        final News updatenews = repository.save(news);
	        return ResponseEntity.ok(updatenews);
	    }
	
	public ResponseEntity<News> updateView(@PathVariable(value = "id") Long Id) throws ResourceNotFoundException {
    	News news = repository.findById(Id)
        .orElseThrow(() -> new ResourceNotFoundException("News not found for this id :: " + Id));
    	int n = 1 + news.getReviews();
    	news.setId(Id);
    	news.setReviews(n);
        final News updatenews = repository.save(news);
        return ResponseEntity.ok(updatenews);
    }
	
	public Map<String, Boolean> deleteNews(@PathVariable(value = "id") Long Id)
	         throws ResourceNotFoundException {
	    	News news = repository.findById(Id)
	       .orElseThrow(() -> new ResourceNotFoundException("News not found for this id : " + Id));
	    		repository.delete(news); 
	            Map<String, Boolean> response = new HashMap<>();
	            response.put("deleted", Boolean.TRUE);
	            return response;                 
	    }
}
