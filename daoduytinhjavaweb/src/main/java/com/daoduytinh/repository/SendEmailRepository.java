package com.daoduytinh.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.daoduytinh.entity.SendEmail;
@Repository
public interface SendEmailRepository extends PagingAndSortingRepository<SendEmail, Long>{

}
