package com.daoduytinh.controller;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.daoduytinh.entity.News;
import com.daoduytinh.entity.Product;
import com.daoduytinh.entity.SendEmail;
import com.daoduytinh.exception.ResourceNotFoundException;
import com.daoduytinh.payload.response.ApiResponse;
import com.daoduytinh.repository.SendEmailRepository;
import com.daoduytinh.service.SendEmailService;
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class SendEmailController {
	
	@Autowired
	private SendEmailService service;
	
	@GetMapping("/send")
	public Page<SendEmail> getProductSale(Pageable pageable){
		return service.getProductSale(pageable);
	}
	@GetMapping("/send/{id}")
    public ResponseEntity<SendEmail> getNewsById(@PathVariable(value = "id") Long Id)
        throws ResourceNotFoundException {;
        return service.getNewsById(Id);
    }
	
	@PostMapping("/send")
    public ResponseEntity<?> createReport(@Valid @RequestBody SendEmail sendEmail) throws MessagingException {
		String text = "Cảm ơn bạn đã gửi phản hồi. Chúng tôi sẽ trả lời sớm nhất cảm ơn!";
        return  service.createReport(sendEmail,text);
    }
	
	@PutMapping("/send")
    public ResponseEntity<?> createRe(@Valid @RequestBody SendEmail sendEmail) throws MessagingException {
        return  service.createRe(sendEmail);
    }
	
	@DeleteMapping("/send/{id}")
	public Map<String, Boolean> deleteReport(@PathVariable(value = "id") Long Id)
	         throws ResourceNotFoundException {
	            return service.deleteReport(Id);                 
	    }
}
