package com.advert43;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.advert43.util.Util;

@SpringBootApplication
public class Advert43App {

	
	public static void main(String[] args) {
		
		Util.setLogger(Advert43App.class, "init");
		SpringApplication.run(Advert43App.class, args);
	}

}
