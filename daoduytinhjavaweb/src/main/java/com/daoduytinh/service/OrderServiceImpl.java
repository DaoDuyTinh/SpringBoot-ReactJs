package com.daoduytinh.service;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.mail.MessagingException;
import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.server.Session;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.daoduytinh.entity.Order;
import com.daoduytinh.entity.OrderDetails;
import com.daoduytinh.entity.User;
import com.daoduytinh.exception.ResourceNotFoundException;
import com.daoduytinh.payload.response.ApiResponse;
import com.daoduytinh.repository.OrderDetailRepository;
import com.daoduytinh.repository.OrderRepository;
import com.daoduytinh.repository.UserRepository;

@Service
public class OrderServiceImpl implements OrderService{
	@Autowired
	OrderRepository repository;
	@Autowired
	OrderDetailRepository derepository;
	@Autowired
	UserRepository userepository;
	@Autowired
	SendEmailService sendService;
	@Transactional
	public void deteteOrderById(Long id) {
		Order order = repository.findById(id)
			       .orElseThrow(() -> new ResourceNotFoundException("OrderDetails not found for this id :: " + id));
		repository.delete(order);
	}

	@Override
	@Transactional
	public Iterable<Order> findAll(Pageable pageable) {
		return repository.findAll(pageable);
	}

	@Override
	@Transactional
	public ResponseEntity<OrderDetails> getNewsById(@PathVariable(value = "id") Long Id)
	        throws ResourceNotFoundException {
			OrderDetails order = derepository.findById(Id)
	          .orElseThrow(() -> new ResourceNotFoundException("OrderDetail not found for this id :: " + Id));
	        return ResponseEntity.ok().body(order);
	    }

	@Override
	@Transactional
	public List<OrderDetails> getOrderDetailsByOrderId(Long Id) {
			return derepository.listOrderDetailsByOrderid(Id);
		}
	@Transactional
	public List<Order> getOrderByUserId(@PathVariable(value = "id") Long Id){
		return repository.listOrderByUserid(Id);
	}
	@Transactional
	public ResponseEntity<?> checkoutorder(@PathVariable(value = "id") Long Id,@RequestBody List<OrderDetails> orderdetail) {
		derepository.saveAll(orderdetail);
		User user = userepository.findById(Id)
		          .orElseThrow(() -> new ResourceNotFoundException("User not found for this id :: " + Id));
		String text = "Cảm ơn bạn đã gửi phản hồi. Chúng tôi sẽ trả lời sớm nhất cảm ơn!";
		try {
			sendService.createThank(user.getEmail());
		} catch (MessagingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		Order orde = new Order();
		orde.setUser(user);
		orde.setOrderdetails(orderdetail);
		orde.setOrderDate(new Date());
		repository.save(orde);
		return ResponseEntity.ok(new ApiResponse("Order placed successfully", ""));
	}
	@Transactional
    public Map<String, Boolean> deleteOrderDetail(@PathVariable(value = "id") Long Id)
         throws ResourceNotFoundException {
		OrderDetails orderdetail = derepository.findById(Id)
       .orElseThrow(() -> new ResourceNotFoundException("OrderDetails not found for this id :: " + Id));
		derepository.delete(orderdetail);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE); 
        return response;
    }
	@Transactional
    public Map<String, Boolean> deleteOrder(@PathVariable(value = "id") Long Id)
            throws ResourceNotFoundException {
   		Order order = repository.findById(Id)
   			       .orElseThrow(() -> new ResourceNotFoundException("Order not found for this id :: " + Id));
   		repository.delete(order);
           Map<String, Boolean> response = new HashMap<>();
           response.put("deleted", Boolean.TRUE); 
           return response;
       };
}
