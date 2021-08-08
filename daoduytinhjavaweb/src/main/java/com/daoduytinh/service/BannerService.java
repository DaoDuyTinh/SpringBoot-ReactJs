package com.daoduytinh.service;

import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.daoduytinh.entity.Banner;
import com.daoduytinh.exception.ResourceNotFoundException;
@Service
public interface BannerService {
	
	public List<Banner> getBannerTop();
	
	public List<Banner> getBannerBot();
	
	public Iterable<Banner> getAllBanner(Pageable pageable);
	
    public ResponseEntity<Banner> getBannerById(@PathVariable(value = "id") Long Id)
        throws ResourceNotFoundException;
    
    public Banner createBanner(@Valid @RequestBody Banner banner);

    public ResponseEntity<Banner> updateBanner(@PathVariable(value = "id") Long Id,
         @Valid @RequestBody Banner bannerDetail) throws ResourceNotFoundException;

    public Map<String, Boolean> deleteBanner(@PathVariable(value = "id") Long Id)
         throws ResourceNotFoundException;

}
