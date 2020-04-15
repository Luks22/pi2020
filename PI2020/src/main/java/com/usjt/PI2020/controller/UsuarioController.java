package com.usjt.PI2020.controller;

import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.usjt.PI2020.model.Usuario;
import com.usjt.PI2020.service.UsuarioService;

@CrossOrigin
@RestController
public class UsuarioController {

	@Autowired
	public UsuarioService usuarioService;

	@GetMapping("/usuario/{id}")
	public Usuario getUsuario(@PathVariable(value = "id") Long usuarioId) {
		return usuarioService.getUsuario(usuarioId);
	}

	@PostMapping("/cadastrar")
	public void cadastrarUsuario(@Valid @RequestBody Map<String, String> parameters) {
		usuarioService.insereUsuario(parameters);
	}

	@DeleteMapping("/deletarUsuario/{id}")
	public void deleteUser(@PathVariable(value = "id") Long userId) {
		usuarioService.deleteUsuario(userId);
	}

	@PutMapping("/atualizaUsuario/{id}")
	public void updateUser(@PathVariable(value = "id") Long userId, @Valid @RequestBody Map<String, String> params) {
		
		usuarioService.atualizaUsuario(userId, params);
		
	}
	
	@PutMapping("/atualizaUsuario/{id}/Localizacao")
	public void updateLocation(@PathVariable(value = "id") Long userId, @Valid @RequestBody Map<String, String> params) {
		
		usuarioService.atualizaLocalizacao(userId, params);
		
	}
}
