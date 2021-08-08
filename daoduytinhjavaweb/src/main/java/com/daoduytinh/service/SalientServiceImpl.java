package com.daoduytinh.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.daoduytinh.entity.Product;
import com.daoduytinh.entity.Salient;
import com.daoduytinh.exception.ResourceNotFoundException;
import com.daoduytinh.repository.ProductRepository;
import com.daoduytinh.repository.SalientRepository;

@Service
public class SalientServiceImpl implements SalientService{

	@Autowired
	private SalientRepository repository;
	@Autowired
	private ProductRepository prorepository;
	
	public Iterable<Salient> getAllSalient(){
		return repository.findAll();
	}
	
    public ResponseEntity<Salient> getSalientById(@PathVariable(value = "id") Long Id)
        throws ResourceNotFoundException {
		Salient salient = repository.findById(Id)
		          .orElseThrow(() -> new ResourceNotFoundException("Salient not found for this id : " + Id));
		        return ResponseEntity.ok().body(salient);
    }
    
    public List<Salient> getSalientByProductId(@PathVariable(value = "id") Long Id)
            throws ResourceNotFoundException {
    		        return repository.findProductId(Id);
        }
    public Salient createSalient(@Valid @RequestBody Salient salient,@PathVariable(value = "id") Long Id) {
    	Product product = prorepository.findById(Id)
    			.orElseThrow(() -> new ResourceNotFoundException("Salient not found for this id : " + Id));
    	salient.setProduct(product);
        return repository.save(salient);
    }
	
    public ResponseEntity<Salient> updateSalient(@PathVariable(value = "id") Long Id,@PathVariable(value = "idpro") Long Idpro,
         @Valid @RequestBody Salient salientDetail) throws ResourceNotFoundException {
    	Salient salient = repository.findById(Id)
    	        .orElseThrow(() -> new ResourceNotFoundException("Salient not found for this id : " + Id));
    	Product product = prorepository.findById(Idpro)
    			.orElseThrow(() -> new ResourceNotFoundException("Salient not found for this id : " + Idpro));
    			salient.setTitle(salientDetail.getTitle());
    			salient.setImages(salientDetail.getImages());
    			salient.setDescription(salientDetail.getDescription());
    			salient.setProduct(product);
    	        final Salient updatesalient = repository.save(salient);
    	        return ResponseEntity.ok(updatesalient);
    }

    public Map<String, Boolean> deleteSalient(@PathVariable(value = "id") Long Id)
         throws ResourceNotFoundException {
		Salient salient = repository.findById(Id)
    	        .orElseThrow(() -> new ResourceNotFoundException("Salient not found for this id : " + Id));
			        repository.delete(salient);
			        Map<String, Boolean> response = new HashMap<>();
			        response.put("deleted", Boolean.TRUE); 
			        return response;
    }
}
