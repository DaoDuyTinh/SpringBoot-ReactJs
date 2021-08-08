package com.daoduytinh.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.daoduytinh.entity.News;

@Repository
public interface NewsRepository extends PagingAndSortingRepository<News, Long>{

	@Query(value="SELECT * FROM news N JOIN  productnews PN ON (N.id = PN.news_id) where product_id=?1 and N.status=true", nativeQuery = true)
	public List<News> listnewRelated(long id);
	@Query(value="SELECT * FROM news N where N.status=true and N.hot=false", nativeQuery = true)
	public Page<News> listNewsPage(Pageable pageable);
	@Query(value="SELECT * FROM news N", nativeQuery = true)
	public Page<News> listNewsAdmin(Pageable pageable);
	@Query(value="DELETE FROM productnews N where N.product_id = ?1", nativeQuery = true)
	void deleteNewsByProduct(long id);
	@Query(value="SELECT product_id FROM news N JOIN  productnews PN ON (N.id = PN.news_id) where N.id=?1", nativeQuery = true)
	public long idproductbynewid(long id);
	@Query(value="SELECT * FROM news N where N.status=true and N.hot=true", nativeQuery = true)
	public Page<News> listHotNewsPage(Pageable pageable);
}
