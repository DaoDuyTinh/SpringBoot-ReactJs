package com.daoduytinh.controller;

import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.daoduytinh.entity.Banner;
import com.daoduytinh.exception.ResourceNotFoundException;
import com.daoduytinh.service.BannerService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class BannerController {
	
	@Autowired
	private BannerService service;
	
	@GetMapping("/bannertop")
	public List<Banner> getBannerTop(){
		return service.getBannerTop();
	}
	@GetMapping("/bannerbot")
	public List<Banner> getBannerBot(){
		return service.getBannerBot();
	}
	@GetMapping("/banner")
	public Iterable<Banner> getAllBanner(Pageable pageable){
		return service.getAllBanner(pageable);
	}
	
	@GetMapping("/banner/{id}")
    public ResponseEntity<Banner> getBannerById(@PathVariable(value = "id") Long Id)
        throws ResourceNotFoundException {
        return service.getBannerById(Id);
    }
	@PostMapping("/banner")
    public Banner createBanner(@Valid @RequestBody Banner banner) {
        return service.createBanner(banner);
    }

    @PutMapping("/banner/{id}")
    public ResponseEntity<Banner> updateBanner(@PathVariable(value = "id") Long Id,
         @Valid @RequestBody Banner bannerDetail) throws ResourceNotFoundException {
        return service.updateBanner(Id,bannerDetail);
    }

    @DeleteMapping("/banner/{id}")
    public Map<String, Boolean> deleteBanner(@PathVariable(value = "id") Long Id)
         throws ResourceNotFoundException {
        return service.deleteBanner(Id);
    }
}
