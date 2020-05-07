package com.usjt.PI2020.controller;

import java.util.List;
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

	@GetMapping("/usuario/{id}")//check
	public Usuario getUsuario(@PathVariable(value = "id") Long usuarioId) {
		return usuarioService.getUsuario(usuarioId);
	}

	@PostMapping("/cadastrar")//check
	public int cadastrarUsuario(@Valid @RequestBody Map<String, String> parameters) {
		return usuarioService.insereUsuario(parameters);
	}

	@DeleteMapping("/deletarAmigo/{id}/numeroAmigo={numero}")
	public String deleteUser(@PathVariable(value = "id") Long userId, @PathVariable(value = "numero") String numero) {
		return usuarioService.deleteAmigo(userId, numero);
	}

	@PutMapping("/atualizaUsuario/{id}")//check
	public int updateUser(@PathVariable(value = "id") Long userId, @Valid @RequestBody Map<String, String> params) {
		
		return usuarioService.atualizaUsuario(userId, params);
		
	}
	
	@PutMapping("/atualizaUsuario/{id}/Localizacao")//check
	public void updateLocation(@PathVariable(value = "id") Long userId, @Valid @RequestBody Map<String, String> params) {
		
		usuarioService.atualizaLocalizacao(userId, params);
		
	}
	
	@PutMapping("/atualizaUsuario/{id}/Coordenadas")//check
	public void updateLocationCoords(@PathVariable(value = "id") Long userId, @Valid @RequestBody Map<String, String> params) {
		
		usuarioService.atualizaCoordenadas(userId, params);
		
	}
	
	@GetMapping("/login/username={login}&password={senha}")//check
	public Usuario login(@PathVariable(value = "login") String login, @PathVariable(value = "senha") String senha) {
		return usuarioService.login(login, senha);
	}
	
	@GetMapping("/amigos/{id}")//check
	public List<Usuario> listaAmigos(@PathVariable(value = "id") Long userId) {
		return usuarioService.amigos(userId);
	}
	
	@GetMapping("/amigosNaArea/{id}")//check
	public List<Usuario> listaAmigosNaArea(@PathVariable(value = "id") Long userId) {
		return usuarioService.amigosNaArea(userId);
	}
}
