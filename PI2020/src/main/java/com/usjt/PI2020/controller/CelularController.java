package com.usjt.PI2020.controller;

import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.usjt.PI2020.model.Usuario;
import com.usjt.PI2020.service.CelularService;

@CrossOrigin
@RestController
public class CelularController {

	@Autowired
	public CelularService celularService;

	@PutMapping("/atualizarCelular/{id}")
	public int updateUser(@PathVariable(value = "id") Long userId, @Valid @RequestBody Map<String, String> params) {
		return celularService.atualizaCelular(userId, params);
	}
	
	@PostMapping("/insereAmigo/{id}")
	public int insereAmigo(@PathVariable(value = "id") Long id, @Valid @RequestBody Map<String, String> params) {
		 return celularService.insereAmigo(id, params);
	}
}
