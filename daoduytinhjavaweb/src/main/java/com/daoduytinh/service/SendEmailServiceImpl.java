package com.daoduytinh.service;

import java.io.File;
import java.util.HashMap;
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
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.daoduytinh.entity.SendEmail;
import com.daoduytinh.exception.ResourceNotFoundException;
import com.daoduytinh.payload.response.ApiResponse;
import com.daoduytinh.repository.SendEmailRepository;

@Service
public class SendEmailServiceImpl implements SendEmailService{

	@Autowired
	private SendEmailRepository repository;
	@Autowired
    private JavaMailSender mailSender;

	public Page<SendEmail> getProductSale(Pageable pageable){
		return repository.findAll(pageable);
	}

    public ResponseEntity<SendEmail> getNewsById(@PathVariable(value = "id") Long Id)
        throws ResourceNotFoundException {
		SendEmail sendEmail = repository.findById(Id)
          .orElseThrow(() -> new ResourceNotFoundException("News not found for this id :: " + Id));
        return ResponseEntity.ok().body(sendEmail);
    }

    public ResponseEntity<?> createReport(@Valid @RequestBody SendEmail sendEmail, String text) throws MessagingException {
		 MimeMessage mimeMessage = mailSender.createMimeMessage();

	        MimeMessageHelper mimeMessageHelper
	                = new MimeMessageHelper(mimeMessage, true);

	        mimeMessageHelper.setFrom("dtshop1706@gmail.com");
	        mimeMessageHelper.setTo(sendEmail.getEmail());
	        mimeMessageHelper.setText(text);
	        mimeMessageHelper.setSubject(sendEmail.getTitle());

	        FileSystemResource fileSystem
	                = new FileSystemResource(new File("D:\\Reactjs\\react-frontend\\public\\home\\images\\thank.gif"));

	        mimeMessageHelper.addAttachment(fileSystem.getFilename(),
	                fileSystem);
	    mailSender.send(mimeMessage);
		repository.save(sendEmail);
        return  ResponseEntity.ok(new ApiResponse("Phản hồi thành công", ""));
    }
    public ResponseEntity<?> createThank(String sendEmail) throws MessagingException {
		 MimeMessage mimeMessage = mailSender.createMimeMessage();

	        MimeMessageHelper mimeMessageHelper
	                = new MimeMessageHelper(mimeMessage, true);

	        mimeMessageHelper.setFrom("dtshop1706@gmail.com");
	        mimeMessageHelper.setTo(sendEmail);
	        mimeMessageHelper.setText("Cảm ơn bạn đã đặt hàng");
	        mimeMessageHelper.setSubject("DTSHOP cảm ơn");

	        FileSystemResource fileSystem
	                = new FileSystemResource(new File("D:\\Reactjs\\react-frontend\\public\\home\\images\\thank.gif"));

	        mimeMessageHelper.addAttachment(fileSystem.getFilename(),
	                fileSystem);
	    mailSender.send(mimeMessage);
       return  ResponseEntity.ok(new ApiResponse("Phản hồi thành công", ""));
   }
    public ResponseEntity<?> createRe(@Valid @RequestBody SendEmail sendEmail) throws MessagingException {
		SimpleMailMessage message = new SimpleMailMessage();

	    message.setFrom("dtshop1706@gmail.com");
	    message.setTo(sendEmail.getEmail());
	    message.setText(sendEmail.getDescription());
	    message.setSubject(sendEmail.getTitle());

	    mailSender.send(message);
        return  ResponseEntity.ok(new ApiResponse("Trả lời thành công", ""));
    }

	    public Map<String, Boolean> deleteReport(@PathVariable(value = "id") Long Id)
	         throws ResourceNotFoundException {
	    	SendEmail sendEmail = repository.findById(Id)
	       .orElseThrow(() -> new ResourceNotFoundException("News not found for this id : " + Id));
	    		repository.delete(sendEmail); 
	            Map<String, Boolean> response = new HashMap<>();
	            response.put("deleted", Boolean.TRUE);
	            return response;                 
	    }
}
