package com.usjt.PI2020.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.usjt.PI2020.service.CelularService;
import com.usjt.PI2020.service.RoteadorService;
import com.usjt.PI2020.service.UsuarioService;

@Configuration
public class AppConfig{

	@Bean
	public RoteadorService getRoteador() {
		return new RoteadorService();
	}
	
	@Bean
	public UsuarioService getUsuario() {
		return new UsuarioService();
	}
	
	@Bean
	public CelularService getCelular() {
		return new CelularService();
	}
	

}
