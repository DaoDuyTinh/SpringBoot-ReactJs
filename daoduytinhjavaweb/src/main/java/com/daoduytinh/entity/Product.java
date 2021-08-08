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
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import javax.persistence.Table;


@Entity
@Table(name="Product")
public class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name="name")
	private String name;
	
	@Column(name="productNumber")
	private int ProductNumber;
	
	@Column(name="color")
	private String Color;
	
	@Column(name="sale")
	private boolean sale;
	
	@Column(name="price")
	private int Price;
	
	@Column(name="price_net")
	private int PriceNet;
	
	@Column(name="type")
	private boolean type;
	
	@Column(name="zize")
	private String Size;//size
	
	@Column(name="horsePower")
	private float HorsePower;//mã lực
	
	@Column(name="weight")
	private float Weight; //Nặng
	
	@Column(name="massFraction")
	private float MassFraction;//phân khối
	
	@Column(name="image")
	private String image;
	
	@Column(name="percent")
	private int Percent;
	
	@Column(name="petrol")
	private int Petrol;
	
	@Column(name="front_brake")
	private String frontBrake;
	
	@Column(name="rear_brake")
	private String rearBrake;
	
	@Column(name="status")
	private boolean status;
	
	@Column(name="soon")
	private boolean soon;
	
	@Column(name="access")
	private boolean access;
	
	@Column(name="install")
	private int install;
	
	@Column(name="description")
	private String description;
	
	@ManyToOne
	@JoinColumn(name = "category_id")
    private Category category;
	
	@OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL, orphanRemoval = true)
	@JoinColumn(name = "product_id")
	private Set<ProductImages> productimage = new HashSet<>();
	
	@OneToMany(fetch=FetchType.EAGER,cascade = CascadeType.ALL, orphanRemoval = true)
	@JoinColumn(name = "product_re")
	private Set<ProductRelated> productrelate = new HashSet<>();
	
	@OneToMany(fetch=FetchType.EAGER,cascade = CascadeType.ALL)
	@JoinColumn(name = "product_id")
	private Set<Salient> salient = new HashSet<>();
	
	@ManyToMany(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
	@JoinTable(	name = "productnews", 
				joinColumns = @JoinColumn(name = "product_id"), 
				inverseJoinColumns = @JoinColumn(name = "news_id"))
	private Set<News> news = new HashSet<>();
	
	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public Product() {
	}
	public Product(Long id) {
		super();
		this.id=id;
	}

	public Product(String name, int productNumber, String color, boolean sale, int price, int priceNet, boolean type,
			String size, float horsePower, float weight, float massFraction, String image, int percent, int petrol, String frontBrake, String rearBrake, boolean status,
			Category category) {
		super();
		this.name = name;
		ProductNumber = productNumber;
		Color = color;
		this.sale = sale;
		Price = price;
		PriceNet = priceNet;
		this.type = type;
		Size = size;
		HorsePower = horsePower;
		Weight = weight;
		MassFraction = massFraction;
		this.image = image;
		Percent = percent;
		Petrol = petrol;
		this.frontBrake = frontBrake;
		this.rearBrake = rearBrake;
		this.status = status;
		this.category = category;
	}

	public Product(String name, int productNumber, String color, boolean sale, int price, int priceNet, boolean type,
			String size, float horsePower, float weight, float massFraction, String image,int percent, int petrol, String frontBrake, String rearBrake, boolean status,
			Category category, Set<ProductImages> productimage, Set<ProductRelated> productrelate,
			Set<News> news) {
		super();
		this.name = name;
		ProductNumber = productNumber;
		Color = color;
		this.sale = sale;
		Price = price;
		PriceNet = priceNet;
		this.type = type;
		Size = size;
		HorsePower = horsePower;
		Weight = weight;
		MassFraction = massFraction;
		this.image = image;
		Percent = percent;
		Petrol = petrol;
		this.frontBrake = frontBrake;
		this.rearBrake = rearBrake;
		this.status = status;
		this.category = category;
		this.productimage = productimage;
		this.productrelate = productrelate;
		this.news = news;
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

	public int getPrice() {
		return Price;
	}

	public void setPrice(int price) {
		Price = price;
	}

	public String getSize() {
		return Size;
	}

	public void setSize(String size) {
		Size = size;
	}

	public float getHorsePower() {
		return HorsePower;
	}

	public void setHorsePower(float horsePower) {
		HorsePower = horsePower;
	}

	public float getWeight() {
		return Weight;
	}

	public void setWeight(float weight) {
		Weight = weight;
	}

	public float getMassFraction() {
		return MassFraction;
	}

	public void setMassFraction(float massFraction) {
		MassFraction = massFraction;
	}


	public String getColor() {
		return Color;
	}

	public void setColor(String color) {
		Color = color;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public int getProductNumber() {
		return ProductNumber;
	}

	public void setProductNumber(int productNumber) {
		ProductNumber = productNumber;
	}

	public boolean isSale() {
		return sale;
	}

	public void setSale(boolean sale) {
		this.sale = sale;
	}

	public int getPriceNet() {
		return PriceNet;
	}

	public void setPriceNet(int priceNet) {
		PriceNet = priceNet;
	}

	public boolean isType() {
		return type;
	}

	public void setType(boolean type) {
		this.type = type;
	}

	public int getPercent() {
		return Percent;
	}

	public void setPercent(int percent) {
		Percent = percent;
	}

	public Set<ProductImages> getProductimage() {
		return productimage;
	}

	public void setProductimage(Set<ProductImages> productimage) {
		this.productimage = productimage;
	}

	public Set<ProductRelated> getProductrelate() {
		return productrelate;
	}

	public void setProductrelate(Set<ProductRelated> productrelate) {
		this.productrelate = productrelate;
	}

	public Set<News> getNews() {
		return news;
	}

	public void setNews(Set<News> news) {
		this.news = news;
	}

	public int getPetrol() {
		return Petrol;
	}

	public void setPetrol(int petrol) {
		Petrol = petrol;
	}

	public String getFrontBrake() {
		return frontBrake;
	}

	public void setFrontBrake(String frontBrake) {
		this.frontBrake = frontBrake;
	}

	public String getRearBrake() {
		return rearBrake;
	}

	public void setRearBrake(String rearBrake) {
		this.rearBrake = rearBrake;
	}

	public boolean isSoon() {
		return soon;
	}

	public void setSoon(boolean soon) {
		this.soon = soon;
	}

	public int getInstall() {
		return install;
	}

	public void setInstall(int install) {
		this.install = install;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public boolean isAccess() {
		return access;
	}

	public void setAccess(boolean access) {
		this.access = access;
	}

	public Set<Salient> getSalient() {
		return salient;
	}

	public void setSalient(Set<Salient> salient) {
		this.salient = salient;
	}

	
}
