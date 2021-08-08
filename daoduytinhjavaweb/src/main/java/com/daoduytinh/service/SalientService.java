package com.daoduytinh.service;

import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import com.daoduytinh.entity.Salient;
import com.daoduytinh.exception.ResourceNotFoundException;
@Service
public interface SalientService {

	public Iterable<Salient> getAllSalient();
	
    public ResponseEntity<Salient> getSalientById(@PathVariable(value = "id") Long Id)
        throws ResourceNotFoundException;
	
    List<Salient> getSalientByProductId(@PathVariable(value = "id") Long Id)
            throws ResourceNotFoundException ;
            
    public Salient createSalient(@Valid @RequestBody Salient salient,@PathVariable(value = "id") Long Id);
	
    public ResponseEntity<Salient> updateSalient(@PathVariable(value = "id") Long Id,@PathVariable(value = "idpro") Long Idpro,
         @Valid @RequestBody Salient salientDetail) throws ResourceNotFoundException ;

    public Map<String, Boolean> deleteSalient(@PathVariable(value = "id") Long Id)
         throws ResourceNotFoundException;
}
