package com.daoduytinh.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.daoduytinh.entity.ProductImages;

@Repository
public interface ProductImagesRepository extends JpaRepository<ProductImages, Long>{
	@Query( value = "SELECT * " + " FROM productimages p" +"where p.product_id = :id", nativeQuery = true)
    Optional<ProductImages> getImageProduct(@Param("id") Long id);
	
	@Query( value = "DELETE FROM productimages p where p.product_id = :id", nativeQuery = true)
    void deleteByProductId(@Param("id") Long id);
}
//"SELECT * " + 
//"  FROM productimages INNER JOIN products ON "
//+ "(products.id = productimages.product_id) " +
//"where product_id = :id", nativeQuery = true)