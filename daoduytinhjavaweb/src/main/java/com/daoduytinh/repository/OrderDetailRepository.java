package com.daoduytinh.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.daoduytinh.entity.OrderDetails;

public interface OrderDetailRepository extends JpaRepository<OrderDetails, Long>{

	@Query(value="SELECT * FROM order_details where order_id=?1 ", nativeQuery = true)
	public List<OrderDetails> listOrderDetailsByOrderid(long id);
	@Query(value="DELETE FROM order_details where order_id=?1 ", nativeQuery = true)
	public void deleteOrderDetailbyOrderId(long id);
}
