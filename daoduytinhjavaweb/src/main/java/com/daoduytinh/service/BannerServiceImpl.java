package com.daoduytinh.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.daoduytinh.entity.Banner;
import com.daoduytinh.exception.ResourceNotFoundException;
import com.daoduytinh.repository.BannerRepository;
@Service
public class BannerServiceImpl implements BannerService{
	@Autowired
	private BannerRepository repository;
	
	public List<Banner> getBannerTop(){
		return repository.listBannertop();
	}

	public List<Banner> getBannerBot(){
		return repository.listBannerbot();
	}

	public Iterable<Banner> getAllBanner(Pageable pageable){
		return repository.findAll(pageable);
	}
	
    public ResponseEntity<Banner> getBannerById(@PathVariable(value = "id") Long Id)
        throws ResourceNotFoundException {
		Banner banner = repository.findById(Id)
          .orElseThrow(() -> new ResourceNotFoundException("News not found for this id :: " + Id));
        return ResponseEntity.ok().body(banner);
    }
    
    public Banner createBanner(@Valid @RequestBody Banner banner) {
        return repository.save(banner);
    }

    public ResponseEntity<Banner> updateBanner(@PathVariable(value = "id") Long Id,
         @Valid @RequestBody Banner bannerDetail) throws ResourceNotFoundException {
    	Banner banner = repository.findById(Id)
        .orElseThrow(() -> new ResourceNotFoundException("News not found for this id :: " + Id));
    	banner.setTitle(bannerDetail.getTitle());
    	banner.setImage(bannerDetail.getImage());
    	banner.setIdNews(bannerDetail.getIdNews());
    	banner.setStatus(bannerDetail.isStatus());
    	banner.setType(bannerDetail.isType());
        final Banner updatebanner = repository.save(banner);
        return ResponseEntity.ok(updatebanner);
    }

    public Map<String, Boolean> deleteBanner(@PathVariable(value = "id") Long Id)
         throws ResourceNotFoundException {
    	Banner banner = repository.findById(Id)
       .orElseThrow(() -> new ResourceNotFoundException("News not found for this id :: " + Id));
        repository.delete(banner);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE); 
        return response;
    }

}
