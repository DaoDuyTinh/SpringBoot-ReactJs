package com.daoduytinh.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.daoduytinh.entity.News;
import com.daoduytinh.entity.Order;
import com.daoduytinh.entity.OrderDetails;
import com.daoduytinh.entity.User;
import com.daoduytinh.exception.ResourceNotFoundException;
import com.daoduytinh.payload.response.ApiResponse;

@Service
public interface OrderService {
	public void deteteOrderById(Long id);
	
	public Iterable<Order> findAll(Pageable pageable);

	public ResponseEntity<OrderDetails> getNewsById(@PathVariable(value = "id") Long Id)
	        throws ResourceNotFoundException;
	
	public List<OrderDetails> getOrderDetailsByOrderId(@PathVariable(value = "id") Long Id);
	
	public List<Order> getOrderByUserId(@PathVariable(value = "id") Long Id);
	
	public ResponseEntity<?> checkoutorder(@PathVariable(value = "id") Long Id,@RequestBody List<OrderDetails> orderdetail) ;
	
    public Map<String, Boolean> deleteOrderDetail(@PathVariable(value = "id") Long Id)
         throws ResourceNotFoundException;
	
    public Map<String, Boolean> deleteOrder(@PathVariable(value = "id") Long Id)
            throws ResourceNotFoundException;
}
