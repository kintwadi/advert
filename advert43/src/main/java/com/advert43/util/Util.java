package com.advert43.util;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileReader;
import java.io.InputStream;
import java.util.Properties;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Logger;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.util.ResourceUtils;

public  class Util {
	
	private Util () {
		
	}
	public static void setLogger(Class<?> clazz,String parameter) {
	
		 JSONObject app = getJSONApp("en");
		Logger logger = Logger.getLogger(clazz);
		
		if(logger.isDebugEnabled()){
			logger.debug(app.get("app.log.init")+ parameter);
		}
		
		if(logger.isInfoEnabled()){
			
			logger.info(app.get("app.log.init") + parameter);
		}
		//Advert43.com:
		logger.warn(app.get("app.log.init")+ parameter);
		logger.error(app.get("app.log.init") + parameter);
		logger.fatal(app.get("app.log.init")+ parameter);
	}
	

	public static  JSONObject getJSONApp(String lang) {
	
		
		JSONObject app = null;
		File filePath = null;
	
		try {
			
			String appFile = "app_"+lang+".json";
			filePath =  ResourceUtils.getFile("classpath:static/"+appFile);
			String fileName = filePath.getAbsoluteFile().getAbsolutePath();

			JSONParser parser = new JSONParser();
			app = (JSONObject)parser.parse(new FileReader(fileName));

		} catch (Exception e) {

			setLogger(Util.class,"readDeviceJSONFile"+e.getMessage());

		}
		return app;

	}
    // Read stored setup properties 
    public static Properties readLayout() {
    
      File filePath = null;
      InputStream input;
      Properties prop = new Properties();
      try {

    	  filePath =  ResourceUtils.getFile("classpath:static/layout.properties");
		  String fileName = filePath.getAbsoluteFile().getAbsolutePath();
          input = new FileInputStream(fileName);
          prop.load(input);

      } catch (Exception e) {
          
    	  setLogger(Util.class,"readLayout  ...: "+e.getMessage());
         
      }

      return prop;

  }
    public static boolean  isValid(String  email) {
    	String regex = "^(.+)@(.+)$";
    	//initialize the Pattern object
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(email);
        return (matcher.matches() ? true : false);
    }

}
