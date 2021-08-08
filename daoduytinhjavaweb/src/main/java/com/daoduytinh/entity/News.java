package com.daoduytinh.entity;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name="news")
public class News {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name="title")
	private String Title;
	
	@Column(name="image")
	private String Image;
	
	@Column(name="description")
	private String Description;
	
	@Column(name="shortDescription")
	private String shortDescription;
	
	@Column(name="status")
	private boolean Status;
	
	@Column(name="hot")
	private boolean hot;
	
	@Column(name="reviews")
	private int reviews;
	
	@ManyToMany(mappedBy = "news",cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    private Set<Product> Product = new HashSet<Product>() ;
	
	public News() {
	}

	

	public News(String title, String image, String description, String shortDescription, boolean status, boolean hot,
			Set<com.daoduytinh.entity.Product> product) {
		super();
		Title = title;
		Image = image;
		Description = description;
		this.shortDescription = shortDescription;
		Status = status;
		this.hot = hot;
		Product = product;
	}



	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTitle() {
		return Title;
	}

	public void setTitle(String title) {
		Title = title;
	}

	public String getImage() {
		return Image;
	}

	public void setImage(String image) {
		Image = image;
	}

	public String getDescription() {
		return Description;
	}

	public void setDescription(String description) {
		Description = description;
	}

	public String getShortDescription() {
		return shortDescription;
	}

	public void setShortDescription(String shortDescription) {
		this.shortDescription = shortDescription;
	}

	public boolean isStatus() {
		return Status;
	}

	public void setStatus(boolean status) {
		Status = status;
	}

//	public Set<Product> getProduct() {
//		return Product;
//	}

	public void setProduct(Set<Product> product) {
		Product = product;
	}

	public boolean isHot() {
		return hot;
	}

	public void setHot(boolean hot) {
		this.hot = hot;
	}



	public int getReviews() {
		return reviews;
	}



	public void setReviews(int reviews) {
		this.reviews = reviews;
	}
	
	
}
