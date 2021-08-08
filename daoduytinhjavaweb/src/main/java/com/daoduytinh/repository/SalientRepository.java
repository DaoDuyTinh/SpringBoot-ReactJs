package com.daoduytinh.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.daoduytinh.entity.Salient;

public interface SalientRepository extends PagingAndSortingRepository<Salient, Long>{

	@Query(value="select * from salient S where S.product_id = ?1", nativeQuery=true)
	public List<Salient> findProductId(Long id);
}
