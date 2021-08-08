package com.daoduytinh.controller;

import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
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


import com.daoduytinh.entity.Salient;
import com.daoduytinh.exception.ResourceNotFoundException;
import com.daoduytinh.service.SalientService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class SalientController {

	@Autowired
	private SalientService service;
	
	@GetMapping("/salient")
	public Iterable<Salient> getAllSalient(){
		return service.getAllSalient();
	}
	
	@GetMapping("/salient/{id}")
    public ResponseEntity<Salient> getSalientById(@PathVariable(value = "id") Long Id)
        throws ResourceNotFoundException {
        return service.getSalientById(Id);
    }
	
	@GetMapping("/salientbypro/{id}")
    public List<Salient> getSalientByProductId(@PathVariable(value = "id") Long Id)
        throws ResourceNotFoundException {
        return service.getSalientByProductId(Id);
    }
	
	@PostMapping("/salient/{id}")
    public Salient createSalient(@Valid @RequestBody Salient salient,@PathVariable(value = "id") Long Id) {
        return service.createSalient(salient,Id);
    }
	
	@PutMapping("/salient/{id}/{idpro}")
    public ResponseEntity<Salient> updateSalient(@PathVariable(value = "id") Long Id,@PathVariable(value = "idpro") Long Idpro,
         @Valid @RequestBody Salient salientDetail) throws ResourceNotFoundException {
        return service.updateSalient(Id,Idpro,salientDetail);
    }
	@DeleteMapping("/salient/{id}")
    public Map<String, Boolean> deleteSalient(@PathVariable(value = "id") Long Id)
         throws ResourceNotFoundException {
        return service.deleteSalient(Id);
    }
}
