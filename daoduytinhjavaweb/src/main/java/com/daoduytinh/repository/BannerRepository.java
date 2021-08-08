package com.daoduytinh.repository;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.daoduytinh.entity.Banner;

@Repository
public interface BannerRepository extends PagingAndSortingRepository<Banner, Long>{
	@Query(value="select * from Banner B where B.type= true and B.status=true", nativeQuery=true)
	public List<Banner> listBannertop();
	
	@Query(value="select * from Banner B where B.type= false and B.status=true", nativeQuery=true)
	public List<Banner> listBannerbot();
}
