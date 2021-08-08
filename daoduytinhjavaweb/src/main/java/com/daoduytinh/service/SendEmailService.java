package com.daoduytinh.service;

import java.util.Map;

import javax.mail.MessagingException;
import javax.validation.Valid;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.daoduytinh.entity.SendEmail;
import com.daoduytinh.exception.ResourceNotFoundException;

@Service
public interface SendEmailService {

	public Page<SendEmail> getProductSale(Pageable pageable);
	
	public ResponseEntity<SendEmail> getNewsById(@PathVariable(value = "id") Long Id)
		        throws ResourceNotFoundException;
	
	public ResponseEntity<?> createReport(@Valid @RequestBody SendEmail sendEmail, String text) throws MessagingException;
	
	public ResponseEntity<?> createRe(@Valid @RequestBody SendEmail sendEmail) throws MessagingException;
	
	public Map<String, Boolean> deleteReport(@PathVariable(value = "id") Long Id)
	         throws ResourceNotFoundException;
	 public ResponseEntity<?> createThank(String sendEmail) throws MessagingException;
}
