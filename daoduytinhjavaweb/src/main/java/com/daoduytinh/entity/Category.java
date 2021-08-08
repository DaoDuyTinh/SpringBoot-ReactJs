package com.daoduytinh.entity;


import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="category")
public class Category {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name="name")
	private String name;
	
	@Column(name="image")
	private String image;
	
	@OneToMany(mappedBy = "category",cascade = CascadeType.ALL)
	private List<Product> products = new ArrayList<>();

	public Category() {
	}

	public Category(String name, String image) {
		super();
		this.name = name;
		this.image = image;
	}
	public Category(Long id) {
		super();
		this.id=id;
	}
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

//	public List<Product> getProducts() {
//		return products;
//	}

	public void setProducts(List<Product> products) {
		this.products = products;
	}
 
	
}
