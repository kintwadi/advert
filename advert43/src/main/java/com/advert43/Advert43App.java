package com.advert43;

import java.io.File;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

import com.advert43.util.Constants;
import com.advert43.util.Util;

@SpringBootApplication
//@ComponentScan({"",""})
public class Advert43App {

	
	public static void main(String[] args) {
		new File(Constants.SLIDE_UPLOAD_DIRETORY).mkdir();
		Util.setLogger(Advert43App.class, "init");
		SpringApplication.run(Advert43App.class, args);
	}

}
