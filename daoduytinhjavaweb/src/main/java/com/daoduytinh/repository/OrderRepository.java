package com.daoduytinh.repository;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.daoduytinh.entity.Order;

public interface OrderRepository extends PagingAndSortingRepository<Order, Long>{

	@Query(value="SELECT * FROM orders where user_id=?1 ", nativeQuery = true)
	public List<Order> listOrderByUserid(long id);
	@Query(value="SELECT * FROM orders Left JOIN users ON (orders.user_id = users.id)", nativeQuery = true)
	public List<Order> getallOrderUser(Pageable pageable);
	
	
	@Modifying(clearAutomatically = true)
	@Query(value="DELETE FROM orders where orders.id=:id", nativeQuery = true)
	public void deletebyId(@Param("id")long id);
}
