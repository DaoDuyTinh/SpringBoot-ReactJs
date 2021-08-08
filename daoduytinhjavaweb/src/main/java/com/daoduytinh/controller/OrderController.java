package com.daoduytinh.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Random;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.daoduytinh.entity.Category;
import com.daoduytinh.entity.News;
import com.daoduytinh.entity.Order;
import com.daoduytinh.entity.OrderDetails;
import com.daoduytinh.entity.Product;
import com.daoduytinh.entity.User;
import com.daoduytinh.exception.ResourceNotFoundException;
import com.daoduytinh.payload.response.ApiResponse;
import com.daoduytinh.repository.OrderDetailRepository;
import com.daoduytinh.repository.OrderRepository;
import com.daoduytinh.repository.ProductRepository;
import com.daoduytinh.repository.UserRepository;
import com.daoduytinh.security.ShoppingConfiguration;
import com.daoduytinh.service.OrderService;
import com.daoduytinh.service.ProductService;


@RestController
@RequestMapping("api/order")
@CrossOrigin(origins = "http://localhost:3000")
public class OrderController {
	
	@Autowired
	private OrderService orservice;
	
	@GetMapping("order")
	public Iterable<Order> getAllOrderUser(Pageable pageable){
		return orservice.findAll(pageable);
	}
	@GetMapping("/order/{id}")
    public ResponseEntity<OrderDetails> getNewsById(@PathVariable(value = "id") Long Id)
        throws ResourceNotFoundException {
        return orservice.getNewsById(Id);
    }
	@GetMapping("orderdetailbyorder/{id}")
	public List<OrderDetails> getOrderDetailsByOrderId(@PathVariable(value = "id") Long Id){
		return orservice.getOrderDetailsByOrderId(Id);
	}
	@GetMapping("orderbyuser/{id}")
	public List<Order> getOrderByUserId(@PathVariable(value = "id") Long Id){
		return orservice.getOrderByUserId(Id);
	}
	@PostMapping("checkout_order/{id}")
  	public ResponseEntity<?> checkoutorder(@PathVariable(value = "id") Long Id,@RequestBody List<OrderDetails> orderdetail) {
		return orservice.checkoutorder(Id,orderdetail);
	}
	@DeleteMapping("/orderdetail/{id}")
    public Map<String, Boolean> deleteOrderDetail(@PathVariable(value = "id") Long Id)
         throws ResourceNotFoundException {
        return orservice.deleteOrderDetail(Id);
    }
	@DeleteMapping("/order/{id}")
    public Map<String, Boolean> deleteOrder(@PathVariable(value = "id") Long Id)
         throws ResourceNotFoundException {
        return orservice.deleteOrder(Id);
    };
}
