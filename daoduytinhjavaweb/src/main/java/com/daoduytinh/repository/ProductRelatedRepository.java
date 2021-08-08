package com.daoduytinh.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.daoduytinh.entity.ProductRelated;


public interface ProductRelatedRepository extends JpaRepository<ProductRelated, Long>{

	@Query(value="select * from Productrelated P where P.product_re= ?1", nativeQuery=true)
	public List<ProductRelated> findByProductRe(long id);
	@Query(value="select * from Productrelated P where P.product_id= ?1", nativeQuery=true)
	public List<ProductRelated> findByProductId(long id);
	@Query(value="delete from Productrelated P where P.product_re= ?1", nativeQuery=true)
	void deleteByProductRe(long id);
	@Query(value="delete from Productrelated P where P.product_id= ?1", nativeQuery=true)
	void deleteByProductId(long id);
}
