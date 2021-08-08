package com.daoduytinh.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.daoduytinh.entity.News;
import com.daoduytinh.entity.Product;

@Repository
public interface ProductRepository extends PagingAndSortingRepository<Product, Long>{
	@Query(value="select * from Product", nativeQuery=true)
	public Page<Product> listAllProduct(Pageable pageable);
	@Query(value="select * from Product P where P.type= true and P.status = true and P.sale = false", nativeQuery=true)
	public Page<Product> listProducttop(Pageable pageable);
	
	@Query(value="select * from Product P where P.type= false and P.status = true and P.sale = false and P.access=false", nativeQuery=true)
	public Page<Product> listProductbot(Pageable pageable);
	
	@Query(value="select * from Product P where P.status = true and P.soon = true and P.access=false", nativeQuery=true)
	public Page<Product> listProductSoon(Pageable pageable);
	
	@Query(value="select * from Product P where P.sale= true and P.status = true and P.access=false", nativeQuery=true)
	public Page	<Product> listProductsale(Pageable pageable);
	
	@Query(value="SELECT * FROM product Right JOIN productrelated ON (product.id = productrelated.product_id) where product_re=?1 ", nativeQuery = true)
	public List<Product> listProductRelated(long id);
	
	@Query(value="select * from Product P where P.status = true and P.access = false and P.category_id=?1", nativeQuery=true)
	public Page<Product> listProductCategory(long id,Pageable pageable);

	@Query(value="select * from Product P where P.status = true and P.access = true", nativeQuery=true)
	public Page<Product> listAllAccessrios(Pageable pageable);
	
	@Query(value="select * from Product P where P.status = true and P.sale = false and P.access = true", nativeQuery=true)
	public Page<Product> listProductAccessrios(Pageable pageable);
	
	@Query(value="select * from Product P where P.status = true and P.sale = true and P.access = true", nativeQuery=true)
	public Page<Product> listSaleAccessrios(Pageable pageable);
	
	public List<Product> findByNameContainsIgnoreCase(String name);
//	@Query("Select pro FROM product pro WHERE pro.category_id=:cat_id")
//	List<Product> getByCategoryId(@Param("cat_id")String cat_id);
	//"SELECT * " + 
	//"  FROM productimages INNER JOIN products ON "
	//+ "(products.id = productimages.product_id) " +
	//"where product_id = :id", nativeQuery = true)

}
