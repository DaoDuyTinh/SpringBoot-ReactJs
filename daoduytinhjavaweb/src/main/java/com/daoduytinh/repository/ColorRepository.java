package com.daoduytinh.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.daoduytinh.entity.Color;

@Repository
public interface ColorRepository extends JpaRepository<Color, Integer>{

}
