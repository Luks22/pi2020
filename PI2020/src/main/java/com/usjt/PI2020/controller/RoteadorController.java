package com.usjt.PI2020.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.usjt.PI2020.model.Roteador;
import com.usjt.PI2020.service.RoteadorService;

@CrossOrigin
@RestController
public class RoteadorController {

	@Autowired
	public RoteadorService roteadorService;

	
	@GetMapping("/roteadores")
	public List<Roteador> getAllRoutes() throws IOException {
		return roteadorService.getRoteadores();
	}

	@GetMapping("/roteador/{id}")
	public Roteador getRouteById(@PathVariable(value = "id") Long routerId){
		return roteadorService.getRoteadorById(routerId);
	}



}
